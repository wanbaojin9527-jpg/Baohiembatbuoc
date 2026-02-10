
import React from 'react';
import { ContractData } from '../types';
import { Info, Briefcase, FileSignature, ArrowRight } from 'lucide-react';

interface Props {
  onContinue: () => void;
  data: ContractData;
}

export const NoticeView: React.FC<Props> = ({ onContinue, data }) => {
  const icons = [<Info size={24} />, <Briefcase size={24} />, <FileSignature size={24} />];
  const iconColors = ["text-pink-600", "text-blue-600", "text-green-600"];

  return (
    <div className="p-10 md:p-16 font-main">
      <div className="text-center mb-14">
        <h2 className="text-[10px] tracking-[0.5em] text-pink-600 font-bold mb-4 uppercase">{data.noticeTag}</h2>
        <h3 className="text-3xl text-slate-900 mb-6 font-bold">{data.noticeHeading}</h3>
        <div className="w-16 h-1 bg-slate-200 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-10 text-slate-700">
        <p className="text-xl text-slate-900 font-bold">Kính gửi {data.recipientName},</p>
        
        <p className="text-lg leading-relaxed text-justify font-normal opacity-90">
          {data.noticeMainText.split(data.amount).map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-pink-600 font-bold underline decoration-2 underline-offset-4">{data.amount}</span>
              )}
            </React.Fragment>
          ))}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {data.noticeCards.map((card, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <div className={`w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center ${iconColors[idx]} mb-6`}>
                {icons[idx]}
              </div>
              <h4 className="text-[10px] tracking-widest font-bold mb-4 uppercase text-slate-900">{card.title}</h4>
              <p className="text-xs leading-relaxed text-slate-500">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 p-10 rounded-[2.5rem] text-slate-300 text-sm font-medium border-l-[12px] border-pink-600 shadow-2xl">
          <p className="leading-relaxed m-0 text-base">
            <span className="text-white font-bold block mb-3 uppercase tracking-[0.2em] text-[10px]">Lưu ý quan trọng:</span>
            {data.noticeAlertBox}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-12 border-t border-slate-100 gap-10">
          <div className="text-center sm:text-left">
            <p className="text-[10px] tracking-[0.3em] text-slate-400 uppercase font-bold mb-2">Người sáng lập công ty</p>
            <p className="text-2xl font-bold text-slate-900 uppercase tracking-tight">{data.senderName}</p>
          </div>
          <button
            onClick={onContinue}
            className="w-full sm:w-auto px-16 py-5 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-4 group"
          >
            <span className="uppercase tracking-[0.2em] text-xs">{data.noticeButton}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
