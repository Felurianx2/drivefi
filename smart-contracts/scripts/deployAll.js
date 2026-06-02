import pkg from "hardhat";
const { ethers, run } = pkg;

async function main() {
  console.log("🚀 Deploying contracts to Arbitrum Sepolia...");

  const [deployer, buyer] = await ethers.getSigners();

  // O deployer também é o seller
  const seller = deployer;

  console.log("Deployer/Seller:", seller.address);
  console.log("Buyer:", buyer.address);

  // === 1️⃣ Deploy CarNFT ===
  const CarNFT = await ethers.getContractFactory("CarNFT");
  const carNft = await CarNFT.deploy("CarNFT", "CARNFT");
  console.log("⏳ Waiting for CarNFT deployment...");
  await carNft.waitForDeployment();
  const carNftAddress = await carNft.getAddress();
  console.log("✅ CarNFT deployed at:", carNftAddress);

  // === 2️⃣ Deploy MockUSDC ===
  const MockUSDC = await ethers.getContractFactory("MockUSDC");
  const users = [seller.address, buyer.address];
  const mockUsdc = await MockUSDC.deploy(deployer.address, users);
  console.log("⏳ Waiting for MockUSDC deployment...");
  await mockUsdc.waitForDeployment();
  const usdcAddress = await mockUsdc.getAddress();
  console.log("✅ MockUSDC deployed at:", usdcAddress);

  // === 3️⃣ Mint a test NFT for the seller ===
  console.log("⏳ Minting test NFT for the seller...");
  const txMint = await carNft
    .connect(seller)
    .mintCar(
      seller.address,
      "",
      "1HGCM82633A004352",
      "Honda",
      "Civic",
      2021,
      20000,
      "RENAVAM123456"
    );
  const receipt = await txMint.wait(1);
  console.log("✅ Mint transaction mined:", receipt.hash);

  // Captura o tokenId do evento CarMinted corretamente
  const iface = carNft.interface;
  const log = receipt.logs.find((l) =>
    l.topics.includes(iface.getEvent("CarMinted").topicHash)
  );
  const parsed = iface.parseLog(log);
  const tokenId = parsed.args.tokenId;
  console.log("✅ Minted Car NFT with tokenId:", tokenId.toString());

  // === 4️⃣ Deploy VehicleSale ===
  const VehicleSale = await ethers.getContractFactory("VehicleSale");
  const totalInstallments = 12;
  const installmentAmount = ethers.parseUnits("10", 6); // 10 USDC
  const sale = await VehicleSale.deploy(
    seller.address,
    buyer.address,
    carNftAddress,
    tokenId,
    usdcAddress,
    totalInstallments,
    installmentAmount
  );
  console.log("⏳ Waiting for VehicleSale deployment...");
  await sale.waitForDeployment();
  const saleAddress = await sale.getAddress();
  console.log("✅ VehicleSale deployed at:", saleAddress);

  // === 5️⃣ Verify all contracts ===
  console.log("\n🔍 Verifying on Arbiscan...");

  const verify = async (name, address, args) => {
    try {
      console.log(`⏳ Verifying ${name}...`);
      await run("verify:verify", {
        address,
        constructorArguments: args,
      });
      console.log(`✅ Verified ${name}`);
    } catch (e) {
      console.log(`⚠️  ${name} verification skipped or failed:`, e.message);
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  await verify("CarNFT", carNftAddress, ["CarNFT", "CARNFT"]);
  await delay(5000);

  await verify("MockUSDC", usdcAddress, [deployer.address, users]);
  await delay(5000);

  await verify("VehicleSale", saleAddress, [
    seller.address,
    buyer.address,
    carNftAddress,
    tokenId,
    usdcAddress,
    totalInstallments,
    installmentAmount,
  ]);

  console.log("\n🎉 Deployment complete!");
  console.log("================================================");
  console.log("📋 DEPLOYED CONTRACTS:");
  console.log("================================================");
  console.log("CarNFT:       ", carNftAddress);
  console.log("MockUSDC:     ", usdcAddress);
  console.log("VehicleSale:  ", saleAddress);
  console.log("================================================");
  console.log("\n💡 Save these addresses for your frontend integration!");
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
