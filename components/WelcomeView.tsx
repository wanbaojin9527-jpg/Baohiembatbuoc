
import React from 'react';
import { ContractData } from '../types';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

interface Props {
  onStart: () => void;
  data: ContractData;
}

export const WelcomeView: React.FC<Props> = ({ onStart, data }) => {
  const upperTitle = data.welcomeTitle.toUpperCase();
  const words = upperTitle.split(' ');
  const whitePart = words.slice(0, 3).join(' ');
  const pinkPart = words.slice(3).join(' ');

  return (
    <div className="flex flex-col md:flex-row min-h-[550px] font-main">
      <div className="md:w-1/2 bg-[#0f172a] p-12 text-white flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-50px] left-[-50px] w-80 h-80 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 border-2 border-white rounded-full"></div>
        </div>
        
        <h1 className="text-[34px] md:text-[42px] mb-8 leading-[1.3] font-bold tracking-tight uppercase">
          <span className="text-white block mb-2">{whitePart}</span>
          <span className="text-[#e11d48] block drop-shadow-sm">{pinkPart}</span>
        </h1>

        <p className="text-slate-400 mb-10 leading-relaxed font-normal text-lg max-w-sm">
          Chào mừng <span className="text-white font-bold">{data.recipientName}</span>. 
          {data.welcomeSubtitle}
        </p>

        <div className="space-y-5">
          {data.welcomeCheckpoints.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className="w-6 h-6 rounded-full bg-[#e11d48]/20 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-[#e11d48]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 p-12 flex flex-col justify-center items-center bg-white">
        <div className="w-20 h-20 bg-rose-50 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-rose-100/50">
          <Shield className="text-[#e11d48]" size={40} />
        </div>
        
        <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-wider uppercase text-center px-4">
          {data.welcomeSectionHeader}
        </h2>
        
        <p className="text-slate-500 text-center mb-10 max-w-xs leading-relaxed text-sm">
          Vui lòng kiểm tra kỹ thông tin trước khi tiến hành xác thực chữ ký số bảo mật.
        </p>

        <button
          onClick={onStart}
          className="w-full max-w-xs py-5 bg-[#e11d48] hover:bg-[#9f1239] text-white font-bold rounded-2xl shadow-2xl shadow-rose-200 transition-all active:scale-95 flex items-center justify-center space-x-4 group"
        >
          <span className="tracking-widest uppercase text-xs">{data.welcomeButton}</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-8 flex items-center gap-2 opacity-40">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{data.welcomeSslLabel}</span>
        </div>
      </div>
    </div>
  );
};
