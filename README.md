<img width="2481" height="1454" alt="ảnh" src="https://github.com/user-attachments/assets/a3d3f9ff-a19e-406b-80b2-6532fb848b36" />

# SoftwareTesting

Dự án này thực hiện các hàm phân tích điểm số của học sinh và sử dụng thư viện JUnit 5 kết hợp với Maven để kiểm thử đơn vị (Unit Test).

Các chức năng chính:

    countExcellentStudents(List<Double> scores): Đếm số lượng học sinh có điểm giỏi (>= 8.0). Bỏ qua các điểm không hợp lệ (< 0 hoặc > 10).

    calculateValidAverage(List<Double> scores): Tính trung bình cộng của các đầu điểm hợp lệ trong danh sách.

Cấu trúc dự án:
Dự án được tổ chức theo chuẩn Maven:

    src/main/java/baitap1/: Chứa mã nguồn chương trình (StudentAnalyzer.java).

    src/test/java/baitap1/: Chứa mã nguồn kiểm thử đơn vị (StudentAnalyzerTest.java).

    pom.xml: Tệp cấu hình Maven, quản lý thư viện JUnit 5 và JDK 21.

Yêu cầu hệ thống:

    Java SDK: Phiên bản 21.

    Apache Maven: Phiên bản 3.6.0 trở lên.

    Công cụ: Visual Studio Code (đã cài Extension Pack for Java).

Hướng dẫn chạy chương trình và kiểm thử:
Chạy bằng dòng lệnh (Terminal): Mở terminal tại thư mục gốc của dự án và chạy lệnh sau: mvn clean test.

# JMeter

Mục tiêu kiểm thử : đánh giá khả năng phản hồi của hệ thống Google thông qua 3 kịch bản tải khác nhau để hiểu về thời gian phản hồi và throughput của hệ thống

Kịch bản kiểm thử : 
- Thread Group 1 (Cơ bản): 10 người dùng, lặp lại 5 lần
- Thread Group 2 (Tải nặng): 50 người dùng cùng lúc truy cập trang chủ và trang Hình ảnh (Ramp-up 30s)
- Thread Group 3 (Tìm kiếm): 20 người dùng thực hiện tìm kiếm từ khoá "Kiem thu" liên  tục trong thời gian quy định

Thông số ký thuật:
Giao thức: HTTPS
Server: www.google.com
Tham số tìm kiếm: q=Kiem+thu (Đã bật URL Encode)

Kết quả kiểm thử:
-Kịch bản 1 (Thread Group 1): 50 yêu cầu, thời gian phản hồi TB 332 ms, thời gian phản hồi thấp nhất là 220 ms, thời gian phản hồi cao nhất là 743 ms, tỉ lệ lỗi là 0%, throughput là 1.7/sec.
-Kịch bản 2 (Thread Group 2): 3182 yêu cầu, thời gian phản hồi TB 580 ms, thời gian phản hồi thấp nhất là 79 ms, thời gian phản hồi cao nhất là 2626 ms, tỉ lệ lỗi là 2.92%, throughput là 24.4/sec.
-Kịch bản 3 (Thread Group 3): 50 yêu cầu, thời gian phản hồi TB 142 ms, thời gian phản hồi thấp nhất là 87 ms, thời gian phản hồi cao nhất là 398 ms, tỉ lệ lỗi là 0%, throughput là 1.7/sec.
-Tổng cộng: 3282 yêu cầu, thời gian phản hồi TB 569 ms, thời gian phản hồi thấp nhất là 79 ms, thời gian phản hồi cao nhất là 2626 ms, tỉ lệ lỗi là 2.83%, throughput là 25.1/sec.

Kết luận: 
-Hiệu năng: Với thời gian phản hồi trung bình ~569ms cho hơn 3000 yêu cầu, hệ thống Google vẫn duy trì được tốc độ xử lý nhanh, đáp ứng tốt trải nghiệm người dùng giả lập.
-Độ ổn định: Hệ thống hoạt động cực kỳ ổn định ở các kịch bản cơ bản và tùy chỉnh với 0% lỗi. Ở kịch bản tải nặng nhất (hơn 3100 samples), dù có phát sinh lỗi nhỏ (2.92%), nhưng đây là con số nằm trong mức cho phép khi thực hiện kiểm thử tự động cường độ cao lên một server công cộng.
-Khả năng chịu tải: Thông lượng đạt 25.1/sec là một minh chứng cho thấy hạ tầng của đối tượng kiểm thử có khả năng tiếp nhận và xử lý lượng lớn dữ liệu đồng thời mà không bị treo hệ thống.
==> Tổng kết: Bài thực hành đã hoàn thành xuất sắc mục tiêu đề ra. Các dữ liệu thu thập được phản ánh trung thực hiệu năng của website và giúp học viên hiểu rõ cách phân tích các chỉ số kỹ thuật trong kiểm thử hiệu năng.

#ManualTesting
1. Giới thiệu

Bài thực hành này tập trung vào hoạt động kiểm thử phần mềm thủ công (Manual Testing) đối với một hệ thống Website thương mại điện tử (E-commerce) mô phỏng. Dự án được triển khai theo quy trình đảm bảo chất lượng phần mềm (Quality Assurance – QA) đầy đủ, bao quát toàn bộ vòng đời kiểm thử nhằm đánh giá mức độ ổn định, tính chính xác và khả năng đáp ứng yêu cầu của hệ thống.

2. Cấu trúc tài liệu bàn giao (Deliverables)

Toàn bộ hồ sơ kiểm thử đã được chuẩn hóa và tổ chức trong thư mục E-Commerce_Manual_Testing, bao gồm các tài liệu chính sau:

Test Plan (Kế hoạch kiểm thử): Xác định phạm vi kiểm thử (In-scope/Out-of-scope), phân tích rủi ro và mô tả môi trường kiểm thử.

Test Cases (Ca kiểm thử): Xây dựng 45 ca kiểm thử bao gồm các kịch bản Positive, Negative, Boundary và Security, bao phủ ba phân hệ chính: Authentication, Product & Cart, và Checkout.

Requirement Traceability Matrix (RTM): Thiết lập ma trận truy vết yêu cầu nhằm đảm bảo 100% độ bao phủ đối với 16 yêu cầu chức năng của hệ thống.

Bug Reports (Báo cáo lỗi): Ghi nhận và theo dõi 10 lỗi giả định với đầy đủ thông tin như mức độ nghiêm trọng (Severity), độ ưu tiên (Priority), các bước tái hiện lỗi (Steps to Reproduce) và môi trường hệ thống.

Test Report (Báo cáo kiểm thử tổng hợp): Phân tích dữ liệu kiểm thử và đưa ra quyết định không phát hành (No-Release) dựa trên cơ sở định lượng và đánh giá rủi ro.

Test Metrics (Chỉ số kiểm thử): Đánh giá hiệu quả kiểm thử thông qua bốn chỉ số trọng yếu gồm: Execution Rate, Pass Rate, Defect Density và Severity Distribution.

3. Tóm tắt kết quả

Tổng số lượng Test Cases: 45

Tỷ lệ Pass: 77,8%

Tỷ lệ Fail: 22,2%

Tổng số lỗi được phát hiện: 10 lỗi, trong đó có 2 lỗi ở mức độ Critical liên quan đến quy trình thanh toán và sai lệch tính toán giá trị tiền tệ (giá trị âm).

Căn cứ vào tỷ lệ Pass chưa đạt ngưỡng kỳ vọng 95% và sự tồn tại của các lỗi nghiêm trọng chưa được khắc phục, dự án được đề xuất quyết định Không phát hành (No-Release) cho đến khi các vấn đề quan trọng được xử lý triệt để.