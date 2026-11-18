# Lưu Hiển Dũng Space (`luuhiendung-space`)

Không gian chia sẻ cá nhân, ý tưởng công nghệ và các dự án phát triển cộng đồng vì một tương lai xanh và bền vững của **Lưu Hiển Dũng**.

---

## 🌟 Điểm nổi bật trong kiến trúc

- **Kiến trúc lắp ghép (Modular Component Architecture):**
  - Trang web không bị nhồi nhét vào một file duy nhất mà được chia nhỏ thành các thành phần độc lập trong thư mục `components/`:
    - `header.html`: Thanh điều hướng đầu trang.
    - `hero.html`: Phần mở đầu ấn tượng.
    - `about.html`: Giới thiệu bản thân và triết lý hành động.
    - `projects.html`: Danh sách các dự án tiêu biểu (Happy Trees Da Lat 2026, ...).
    - `footer.html`: Chân trang và thông tin liên hệ.
  - File `index.html` chỉ đóng vai trò khung mẹ tự động kết nối và nạp các khối giao diện.
- **Phong cách thiết kế chuẩn mực (Design System):**
  - Tham khảo chi tiết tại [`DESIGN_GUIDE.md`](./DESIGN_GUIDE.md).
  - Tông màu trang nhã: Trắng ngà tự nhiên (`#FAF9F6`), Xanh ngọc rừng trầm (`#1F3A34`), Vàng ánh kim (`#C5A880`).
  - Chữ lớn rõ nét (Base font: 18px), khoảng cách dòng thoáng (line-height: 1.75).
  - Tương thích tốt trên cả máy tính và điện thoại thông minh (Responsive).

---

## 🚀 Cách mở xem thử trên máy tính (Local Preview)

Dự án có sẵn máy chủ nội bộ nhẹ nhàng bằng Node.js, không cần cài thêm thư viện phức tạp:

### Cách 1: Bấm trực tiếp (Đơn giản nhất cho Windows)
- Vào thư mục dự án và nhấp đúp chuột vào file **`preview.bat`**.
- Trình duyệt sẽ tự động mở trang web tại địa chỉ: `http://localhost:3000`.

### Cách 2: Bằng dòng lệnh terminal
```bash
npm start
# Hoặc: node server.js
```
Mở trình duyệt truy cập: `http://localhost:3000`.

---

## 🌿 Nhánh phát triển (Branches)

- **`main`**: Nhánh chính của dự án.
- **`feature-header`**: Nhánh thiết kế và hoàn thiện phần Thanh menu đầu trang (Header).

---
© 2026 Lưu Hiển Dũng. All rights reserved.
