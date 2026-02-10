
export enum AppStep {
  WELCOME = 'WELCOME',
  NOTICE = 'NOTICE',
  REVIEW = 'REVIEW',
  VERIFY = 'VERIFY',
  SUCCESS = 'SUCCESS'
}

export interface ContractClause {
  id: string;
  title: string;
  content: string;
}

export interface ContractData {
  // 1. Thông tin định danh & Pháp lý
  recipientName: string;
  amount: string;
  companyName: string;
  companyAddress: string;
  taxCode: string;
  contractCode: string;
  senderName: string;
  senderTitle: string;
  senderStampUrl?: string;
  
  // 2. Header & Global UI
  headerBrandName: string;
  headerBrandSuffix: string;
  headerSubtitle: string;
  headerStatusLabel: string;
  progressLabel: string;
  
  // 3. Trang Chào (Welcome View)
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeButton: string;
  welcomeSectionHeader: string;
  welcomeCheckpoints: string[];
  welcomeSslLabel: string;
  
  // 4. Trang Thông báo (Notice View)
  noticeTag: string;
  noticeHeading: string;
  noticeMainText: string;
  noticeAlertBox: string;
  noticeCards: { title: string; desc: string }[];
  noticeButton: string;
  
  // 5. Trang Xem hợp đồng (Review View)
  reviewNavTitle: string;
  reviewStatusLabel: string;
  reviewButton: string;
  reviewWatermark: string;
  reviewLegalHeader: string;
  reviewLegalSubheader: string;
  reviewContractTitle: string;
  reviewPartyALabel: string;
  reviewPartyBLabel: string;
  reviewSignatureAreaA: string;
  reviewSignatureAreaB: string;
  reviewFooterNote: string;

  // 6. Trang Xác minh (Verification View)
  verifyTag: string;
  verifyTitle: string;
  verifySubtitle: string;
  verifyLabelFront: string;
  verifyLabelBack: string;
  verifyLabelPortrait: string;
  verifyUploadPrompt: string;
  verifySecurityNote: string;
  verifyCancelBtn: string;
  verifyConfirmBtn: string;
  
  // 7. Trang Thành công (Success View)
  successTitle: string;
  successFeeText: string; 
  successAmountNote: string; 
  successTransactionPrefix: string; 
  successStatusLabel: string; 
  successPrintBtn: string;
  successDownloadBtn: string;
  successFooterNote: string;

  // 8. Footer & Admin
  footerSecurityLabels: string[];
  footerCopyright: string;
  adminLoginTitle: string;

  // 9. Nội dung điều khoản
  clauses: ContractClause[];
}
