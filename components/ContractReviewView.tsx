
import React from 'react';
import { ContractData } from '../types';
import { ScrollText, ChevronRight, Award, UserCheck } from 'lucide-react';

interface Props {
  onContinue?: () => void;
  data: ContractData;
  isVerified?: boolean;
  hideHeader?: boolean;
}

export const ContractReviewView: React.FC<Props> = ({ onContinue, data, isVerified = false, hideHeader = false }) => {
  return (
    <div className={`bg-slate-100 min-h-[700px] flex flex-col font-main ${hideHeader ? 'bg-white' : ''}`}>
      {!hideHeader && onContinue && (
        <div className="bg-white p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 z-20 shadow-sm px-8 no-print">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-slate-900 rounded-lg text-white">
              <ScrollText size={18} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{data.reviewNavTitle}</h3>
              <p className={`text-[10px] font-bold uppercase tracking-tight ${isVerified ? 'text-green-600' : 'text-orange-500'}`}>
                {isVerified ? 'Trạng thái: Đã xác minh danh tính' : data.reviewStatusLabel}
              </p>
            </div>
          </div>
          <button
            onClick={onContinue}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-all shadow-lg shadow-pink-100 active:scale-95"
          >
            <span>{data.reviewButton}</span>
            <ChevronRight size={14} />
          </button>
        </div>
      )}

      <div className={`${hideHeader ? 'p-0' : 'p-4 md:p-12'} flex-1 overflow-y-auto`}>
        <div className={`max-w-[850px] mx-auto bg-white ${hideHeader ? 'shadow-none' : 'shadow-2xl'} p-10 md:p-24 relative text-[#2d3748] legal-document ${hideHeader ? 'border-none' : 'border-[16px] border-slate-50'}`}>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] rotate-[-45deg] overflow-hidden">
            <h1 className="text-[120px] font-bold uppercase whitespace-nowrap">{data.reviewWatermark}</h1>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase mb-2">{data.reviewLegalHeader}</h2>
            <h3 className="text-sm font-bold mb-2">{data.reviewLegalSubheader}</h3>
            <div className="w-40 h-[1.5px] bg-slate-900 mx-auto mb-12"></div>
            
            <h1 className="text-3xl font-bold uppercase tracking-widest text-slate-900 mb-2">{data.reviewContractTitle}</h1>
            <p className="text-xs text-slate-500 font-bold tracking-widest">Mã số giao dịch: {data.contractCode}</p>
          </div>

          <div className="space-y-12">
            <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
              <h4 className="font-bold text-xs uppercase mb-6 text-slate-900 flex items-center gap-2">
                <Award size={16} className="text-pink-600" />
                Các bên tham gia ký kết
              </h4>
              <div className="space-y-5">
                <p className="m-0 text-sm leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">{data.reviewPartyALabel}:</span>
                  <span className="uppercase font-bold text-pink-700">{data.companyName}</span><br />
                  <span className="text-slate-500">Đại diện pháp luật:</span> <span className="font-bold">{data.senderName}</span><br />
                  <span className="text-slate-500">Chức vụ:</span> <span className="font-bold uppercase text-[11px]">{data.senderTitle}</span><br />
                  <span className="text-slate-500">Địa chỉ:</span> <span className="text-sm italic">{data.companyAddress}</span><br />
                  <span className="text-slate-500">Mã số thuế:</span> <span className="font-mono">{data.taxCode}</span>
                </p>
                <div className="h-px bg-slate-200"></div>
                <p className="m-0 text-sm leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">{data.reviewPartyBLabel}:</span>
                  <span className="uppercase font-bold text-slate-900 text-lg">{data.recipientName}</span><br />
                  <span className="text-slate-500">Xác thực:</span> <span className={`italic font-bold ${isVerified ? 'text-green-600' : 'text-slate-400'}`}>
                    {isVerified ? 'Đã hoàn tất xác thực sinh trắc học và CCCD.' : 'Đang chờ xác thực danh tính từ Bên B.'}
                  </span>
                </p>
              </div>
            </section>

            {data.clauses.map((clause) => (
              <section key={clause.id} className="relative group">
                <h4 className="font-bold text-sm uppercase mb-3 text-slate-900 flex items-center gap-3">
                  <span className="w-6 h-6 bg-slate-900 text-white rounded-md flex items-center justify-center text-[10px]">{clause.id.replace('c', '')}</span>
                  {clause.title}
                </h4>
                <div className="pl-9">
                  <p className="text-sm text-justify leading-relaxed whitespace-pre-wrap text-slate-700 font-normal">
                    {clause.content}
                  </p>
                  {clause.id === 'c2' && (
                    <div className="mt-4 p-6 bg-pink-50 rounded-2xl border-l-4 border-pink-600 shadow-sm">
                      <p className="text-[10px] font-bold text-pink-800 uppercase tracking-widest mb-1">Tổng giá trị thanh toán:</p>
                      <p className="m-0 font-bold text-3xl text-pink-700 tracking-tight">{data.amount}</p>
                    </div>
                  )}
                </div>
              </section>
            ))}

            <div className="grid grid-cols-2 gap-12 pt-20 mt-20 border-t-2 border-slate-100">
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase text-slate-400 mb-8 tracking-[0.3em]">{data.reviewSignatureAreaA}</p>
                <div className="h-44 flex flex-col items-center justify-center relative">
                   {data.senderStampUrl ? (
                     <img src={data.senderStampUrl} alt="Stamp" className="max-h-44 object-contain mix-blend-multiply" />
                   ) : (
                     <div className="w-32 h-32 border-4 border-double border-slate-100 rounded-full flex items-center justify-center text-[8px] uppercase tracking-widest font-bold text-slate-200">Không dấu</div>
                   )}
                </div>
                <div className="mt-6">
                  <p className="font-bold text-lg text-slate-900 uppercase tracking-tight m-0">{data.senderName}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{data.senderTitle}</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase text-slate-400 mb-8 tracking-[0.3em]">{data.reviewSignatureAreaB}</p>
                <div className="h-44 flex items-center justify-center relative">
                   {isVerified ? (
                     <div className="flex flex-col items-center text-green-600">
                        <UserCheck size={60} className="mb-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">ĐÃ XÁC THỰC DANH TÍNH</span>
                     </div>
                   ) : (
                     <div className="w-full h-full border-b-2 border-dashed border-slate-100 flex items-center justify-center text-slate-300 text-[10px] font-medium uppercase tracking-[0.2em]">Khu vực xác minh Bên B</div>
                   )}
                </div>
                <div className="mt-6">
                  <p className="font-bold text-lg text-slate-900 uppercase tracking-tight m-0">{data.recipientName}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Người thụ hưởng</p>
                </div>
              </div>
            </div>
            
            <div className="pt-20 text-center flex flex-col items-center gap-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
              <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.6em] max-w-sm">{data.reviewFooterNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
