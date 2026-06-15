"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "~~/contexts/LanguageContext";
import { Header } from "~~/components/drivefi/Header";
import { BottomNav } from "~~/components/drivefi/BottomNav";

export default function AdminPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    vin: "", productionYear: "", make: "", model: "", mileage: "",
    serviceHistory: "Full Dealer History", escrowDuration: "30",
    commissionFee: "2.5", enableMultiSig: false, renavam: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleMint = () => {
    // TODO: integrate minting contract
  };
  const handleSaveDraft = () => {
    localStorage.setItem("drivefi-mint-draft", JSON.stringify(formData));
  };

  const inputClass = "w-full bg-surface-container-lowest border border-on-surface/10 rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">badge</span>
            </div>
            <div>
              <p className="text-xs font-label uppercase tracking-widest text-secondary">Authorized Dealer Portal</p>
              <h1 className="text-3xl font-headline font-extrabold tracking-tight">{t("admin.title")}</h1>
            </div>
          </div>
          <p className="text-on-surface-variant font-body text-lg max-w-2xl">{t("admin.subtitle")}</p>
          <p className="text-xs text-primary mt-2 font-mono">Contract: 0xF22C4958D2276E8B3...SF25CdC9552278e5765</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Step 01 */}
            <section className="bg-surface-container-low p-6 rounded-xl border border-on-surface/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">01</div>
                <h2 className="text-xl font-headline font-bold">{t("admin.assetIdentity")}</h2>
                <span className="material-symbols-outlined text-tertiary ml-auto">token</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="vin" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.vehicleId")}</label>
                  <input id="vin" type="text" id="vin" name="vin" value={formData.vin} onChange={handleInputChange} placeholder="17-digit Alpha-Numeric" className={inputClass + " font-mono"} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="productionYear" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.productionYear")}</label>
                    <input id="productionYear" type="text" id="productionYear" name="productionYear" value={formData.productionYear} onChange={handleInputChange} placeholder="YYYY" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="renavam" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.renavam")}</label>
                    <input id="renavam" type="text" id="renavam" name="renavam" value={formData.renavam} onChange={handleInputChange} placeholder="Enter Registration Number" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="make" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.make")}</label>
                  <input id="make" type="text" id="make" name="make" value={formData.make} onChange={handleInputChange} placeholder="e.g. Porsche" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="model" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.model")}</label>
                  <input id="model" type="text" id="model" name="model" value={formData.model} onChange={handleInputChange} placeholder="e.g. 911 GT3 RS" className={inputClass} />
                </div>
              </div>
            </section>

            {/* Step 02 */}
            <section className="bg-surface-container-low p-6 rounded-xl border border-on-surface/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">02</div>
                <h2 className="text-xl font-headline font-bold">{t("admin.verifiedTelemetry")}</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="mileage" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.mileageKm")}</label>
                  <div className="relative">
                    <input id="mileage" type="text" id="mileage" name="mileage" value={formData.mileage} onChange={handleInputChange} placeholder="0.00" className={inputClass + " pr-28"} />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary text-sm">ODO SYNCED</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="serviceHistory" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.serviceHistory")}</label>
                  <select id="serviceHistory" name="serviceHistory" value={formData.serviceHistory} onChange={handleInputChange} className={inputClass}>
                    <option>Full Dealer History</option>
                    <option>Partial History</option>
                    <option>No History Available</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Step 03 */}
            <section className="bg-surface-container-low p-6 rounded-xl border border-on-surface/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">03</div>
                <h2 className="text-xl font-headline font-bold">{t("admin.setUpEscrow")}</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="escrowDuration" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.escrowDuration")}</label>
                    <input id="escrowDuration" type="text" id="escrowDuration" name="escrowDuration" value={formData.escrowDuration} onChange={handleInputChange} placeholder="30" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="commissionFee" className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">{t("admin.commissionFee")}</label>
                    <input id="commissionFee" type="text" id="commissionFee" name="commissionFee" value={formData.commissionFee} onChange={handleInputChange} placeholder="2.5" className={inputClass} />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-on-surface/10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">shield</span>
                    <div>
                      <p className="font-headline font-bold text-sm">{t("admin.enableMultiSig")}</p>
                      <p className="text-xs text-secondary">Requires 2/3 signatures for disbursement</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" name="enableMultiSig" checked={formData.enableMultiSig} onChange={handleInputChange} className="sr-only peer" />
                    <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </section>

            {/* Step 04 */}
            <section className="bg-surface-container-low p-6 rounded-xl border border-on-surface/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">04</div>
                <h2 className="text-xl font-headline font-bold">{t("admin.provenance")}</h2>
              </div>
              <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center bg-primary/5">
                <span className="material-symbols-outlined text-5xl text-primary mb-4 block">cloud_upload</span>
                <h3 className="font-headline font-bold text-lg mb-2">{t("admin.uploadDocs")}</h3>
                <p className="text-sm text-secondary mb-4">PDF, JPG or PNG up to 50MB</p>
                <button className="px-6 py-2 bg-primary/20 text-primary rounded-lg font-headline font-bold text-sm hover:bg-primary/30 transition-all">Browse Files</button>
              </div>
            </section>
          </div>

          {/* Preview Column */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-xl border border-on-surface/5 sticky top-24">
              <div className="mb-4">
                <p className="text-xs font-label uppercase tracking-widest text-secondary mb-2">Current Preview</p>
                <div className="relative aspect-square bg-surface-container-lowest rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  {previewImage ? (
                    <Image src={previewImage} alt="Vehicle preview" fill className="object-cover rounded-lg" unoptimized />
                  ) : (
                    <span className="material-symbols-outlined text-6xl text-outline">directions_car</span>
                  )}
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <h3 className="font-headline text-xl font-bold">
                  {formData.make && formData.model ? `${formData.make} ${formData.model}` : "Vehicle NFT"}
                </h3>
                {formData.vin && <p className="text-xs text-secondary font-mono">VIN: {formData.vin}</p>}
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">{t("admin.networkFee")}</span>
                  <span className="font-bold">≈ 0.0042 USDC</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Contract</span>
                  <span className="font-bold font-mono text-xs">0xAF0...f8F0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">{t("admin.assetClass")}</span>
                  <span className="font-bold text-tertiary">Verified Collectible</span>
                </div>
              </div>
              <div className="space-y-3">
                <button onClick={handleMint} className="w-full py-3 rounded-xl premium-gradient text-on-primary font-headline font-bold hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">toll</span>
                  {t("admin.mintNFT")}
                </button>
                <button onClick={handleSaveDraft} className="w-full py-3 rounded-xl bg-surface-container-highest text-on-surface font-headline font-bold hover:brightness-125 transition-all border border-on-surface/10">
                  {t("admin.saveDraft")}
                </button>
              </div>
              <p className="text-[10px] text-secondary text-center mt-4">
                <span className="material-symbols-outlined text-xs align-middle">verified</span> Administrator-only verified portal.
              </p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
