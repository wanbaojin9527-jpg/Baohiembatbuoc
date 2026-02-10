
import React, { useState } from 'react';
import { ContractData } from '../types';
import { Camera, Image as ImageIcon, Check, X, ShieldCheck, UserCheck } from 'lucide-react';

interface Props {
  onComplete: (images: { front: string; back: string; portrait: string }) => void;
  data: ContractData;
}

export const VerificationView: React.FC<Props> = ({ onComplete, data }) => {
  const [images, setImages] = useState({
    front: '',
    back: '',
    portrait: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof typeof images) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => ({ ...prev, [type]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const isComplete = images.front && images.back && images.portrait;

  const UploadSlot = ({ type, label, icon: Icon }: { type: keyof typeof images, label: string, icon: any }) => (
    <div className="flex flex-col items-center">
      <p className="text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-widest">{label}</p>
      <label className={`w-full aspect-[4/3] rounded-[2rem] border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden relative group
        ${images[type] ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300'}`}>
        {images[type] ? (
          <>
            <img src={images[type]} alt={label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <ImageIcon className="text-white" size={24} />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center text-slate-300">
            <Icon size={40} className="mb-2" />
            <span className="text-[10px] font-bold uppercase tracking-tight">{data.verifyUploadPrompt}</span>
          </div>
        )}
        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, type)} />
      </label>
    </div>
  );

  return (
    <div className="p-12 md:p-16 bg-white font-main">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-blue-50 rounded-[1.5rem] text-blue-600 mb-6 shadow-sm"><UserCheck size={32} /></div>
        <h2 className="text-xs tracking-[0.5em] text-slate-400 font-bold mb-4 uppercase">{data.verifyTag}</h2>
        <h3 className="text-4xl text-slate-900 mb-3 font-semibold">{data.verifyTitle}</h3>
        <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">{data.verifySubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <UploadSlot type="front" label={data.verifyLabelFront} icon={ImageIcon} />
        <UploadSlot type="back" label={data.verifyLabelBack} icon={ImageIcon} />
        <UploadSlot type="portrait" label={data.verifyLabelPortrait} icon={Camera} />
      </div>

      <div className="mt-12 flex flex-col items-center space-y-10">
        <div className="bg-slate-900 px-8 py-4 rounded-3xl flex items-center space-x-4 text-slate-300 text-xs font-light shadow-2xl max-w-2xl text-center">
          <ShieldCheck size={20} className="text-green-500 shrink-0" />
          <span className="tracking-wide">{data.verifySecurityNote}</span>
        </div>
        <div className="flex space-x-6 w-full max-w-xl">
          <button onClick={() => window.location.reload()} className="flex-1 px-10 py-5 bg-white hover:bg-slate-50 text-slate-500 font-bold rounded-2xl border border-slate-200 transition-all flex items-center justify-center space-x-3 uppercase tracking-widest text-[10px]">
            <X size={18} /><span>{data.verifyCancelBtn}</span>
          </button>
          <button 
            onClick={() => onComplete(images)} 
            disabled={!isComplete} 
            className={`flex-1 px-12 py-5 font-bold rounded-2xl shadow-2xl transition-all flex items-center justify-center space-x-3 uppercase tracking-[0.2em] text-[10px] ${isComplete ? 'bg-[#e11d48] hover:scale-[1.03] text-white cursor-pointer active:scale-95 shadow-rose-200' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>
            <Check size={18} /><span>{data.verifyConfirmBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
