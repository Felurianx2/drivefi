import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Este script configura os contratos já deployados na Arbitrum Sepolia
 * Para desenvolvimento local, você pode fazer deploy de novos contratos
 */
const deployDriveFi: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("\n🚗 DriveFi - Deploying contracts...");
  console.log("Deployer:", deployer);

  // Deploy CarNFT
  const carNFT = await deploy("CarNFT", {
    from: deployer,
    args: ["DriveFi Cars", "DRIVEFI"],
    log: true,
    autoMine: true,
  });

  console.log("✅ CarNFT deployed at:", carNFT.address);

  // Deploy MockUSDC
  const mockUSDC = await deploy("MockUSDC", {
    from: deployer,
    args: [deployer, [deployer]], // owner and initial users
    log: true,
    autoMine: true,
  });

  console.log("✅ MockUSDC deployed at:", mockUSDC.address);

  console.log("\n🎉 DriveFi contracts deployed successfully!");
  console.log("================================================");
  console.log("CarNFT:", carNFT.address);
  console.log("MockUSDC:", mockUSDC.address);
  console.log("================================================\n");

  // Note: VehicleSale is deployed per transaction, not here
  // It will be deployed from the frontend when creating a new sale
};

export default deployDriveFi;

// Tags are useful if you have multiple deploy files and only want to run one of them.
deployDriveFi.tags = ["DriveFi"];
