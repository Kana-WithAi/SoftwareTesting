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
