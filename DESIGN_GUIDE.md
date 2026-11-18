# QUY TẮC THIẾT KẾ CHUNG (DESIGN SYSTEM GUIDE)
**Dự án:** Luu Hien Dung Space (`luuhiendung-space`)  
**Định hướng phong cách:** Tinh tế, Hiện đại, Chữ lớn dễ đọc, Tông màu trang nhã (Refined Elegance).

---

## 1. Triết lý Thiết kế (Core Philosophy)
1. **Tinh tế & Tối giản (Sophisticated Simplicity):** Loại bỏ chi tiết thừa, tập trung vào nội dung chính với khoảng trắng (whitespace) rộng rãi để trang web luôn thoáng đãng.
2. **Dễ đọc & Thân thiện thị giác (Readability First):** Cỡ chữ lớn hơn tiêu chuẩn thông thường, khoảng cách dòng thoáng (line-height 1.65+), tương phản dịu mắt.
3. **Màu sắc trang nhã, điềm đạm (Subtle & Calming Palette):** Sử dụng các tông màu ấm từ tự nhiên kết hợp xám than cao cấp và xanh ngọc trầm, tạo cảm giác tin cậy và thư thái.
4. **Kiến trúc lắp ghép (Modular Components):** Từng phần của giao diện được tách biệt thành các khối độc lập (`header`, `hero`, `about`, `projects`, `footer`) giúp dễ bảo trì, chỉnh sửa và mở rộng.

---

## 2. Bảng Màu Chuẩn (Color Palette)

Hệ màu được định nghĩa dưới dạng CSS Variables để đảm bảo đồng bộ trên toàn bộ website:

```css
:root {
  /* Nền và Bề mặt */
  --bg-primary: #FAF9F6;         /* Trắng ngà tự nhiên (Warm Alabaster) - Nền chính */
  --bg-surface: #FFFFFF;         /* Trắng tinh khiết - Thẻ card, dropdown */
  --bg-surface-elevated: #F4F3EF;/* Trắng xám ấm - Khối bổ trợ */
  --bg-glass: rgba(250, 249, 246, 0.85); /* Hiệu ứng kính mờ (Backdrop Blur) */

  /* Màu chữ (Typography) */
  --text-main: #1C2024;          /* Xám than thẫm (Deep Slate/Charcoal) - Chữ chính */
  --text-muted: #59636E;         /* Xám trung tính ấm - Đoạn mô tả, thông tin phụ */
  --text-faint: #8B949E;         /* Xám nhạt - Ghi chú, ngày tháng */
  --text-inverse: #FFFFFF;       /* Trắng - Trên nền màu tối */

  /* Màu thương hiệu & Điểm nhấn (Brand & Accents) */
  --brand-primary: #1F3A34;      /* Xanh ngọc rừng trầm (Deep Forest Pine) */
  --brand-primary-hover: #162B26;/* Sẫm hơn khi rê chuột */
  --brand-accent: #C5A880;       /* Vàng ánh kim trang nhã (Champagne Bronze) */
  --brand-accent-soft: #F5EFEB;  /* Nền vàng nhạt dịu */

  /* Đường viền & Phân cách (Borders & Dividers) */
  --border-subtle: #E8E6E1;      /* Viền mảnh nhẹ */
  --border-focus: #C5A880;       /* Viền khi tương tác */

  /* Bóng đổ (Elevation & Shadows) */
  --shadow-sm: 0 2px 8px rgba(28, 32, 36, 0.04);
  --shadow-md: 0 8px 24px rgba(28, 32, 36, 0.06);
  --shadow-lg: 0 16px 40px rgba(28, 32, 36, 0.08);

  /* Bo góc (Border Radius) */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
}
```

---

## 3. Quy chuẩn Kiểu chữ (Typography)

- **Font chữ khuyến nghị:** Font hệ thống hiện đại hoặc Google Fonts tiếng Việt chuẩn (`Plus Jakarta Sans`, `Inter`, hoặc `Be Vietnam Pro`).
- **Cỡ chữ cơ sở (Base Size):** `18px` (lớn hơn chuẩn 16px để người đọc không bị mỏi mắt).
- **Hệ thống phân cấp:**
  - **H1 (Tiêu đề chính):** `2.75rem - 3.25rem` (44px - 52px), `font-weight: 700`, line-height `1.2`.
  - **H2 (Tiêu đề mục lớn):** `2.0rem - 2.25rem` (32px - 36px), `font-weight: 600`, line-height `1.3`.
  - **H3 (Tiêu đề phần nhỏ):** `1.35rem - 1.5rem` (22px - 24px), `font-weight: 600`, line-height `1.4`.
  - **Body (Nội dung thông thường):** `1.125rem` (18px), `font-weight: 400`, line-height `1.75`.
  - **Small / Meta:** `0.95rem` (15px), `font-weight: 500`.

---

## 4. Không gian & Bố cục (Layout & Spacing)

- **Chiều rộng nội dung tối đa:** `1200px` (căn giữa với lề tự động).
- **Khoảng cách đệm giữa các phần (Section Padding):** Tối thiểu `80px` đến `120px` theo chiều dọc, tạo độ thở thư thái giữa các nội dung.
- **Tương tác mượt mà:** Mọi hiệu ứng chuyển trạng thái (hover, click, scroll) đều sử dụng `transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`.

---

## 5. Quy ước Thành phần Lắp ghép (Component Convention)

Mỗi file HTML trong thư mục `components/` chỉ chứa khối mã nguồn HTML của riêng phần đó (không chứa thẻ `<html>`, `<head>`, `<body>`):

| File | Chức năng | Đặc điểm thiết kế |
| :--- | :--- | :--- |
| `components/header.html` | Thanh điều hướng đầu trang | Cố định (Sticky), nền mờ kính lụa, logo tinh tế, menu thoáng, nút bấm CTA nổi bật |
| `components/hero.html` | Khối mở đầu thu hút | Tiêu đề ấn tượng, lời chào trang nhã, nút chuyển hành động |
| `components/about.html` | Giới thiệu không gian / bản thân | Cấu trúc kể chuyện, trích dẫn giá trị cốt lõi |
| `components/projects.html` | Các dự án nổi bật | Thẻ dự án tối giản (Cards) với hình ảnh và liên kết chi tiết |
| `components/footer.html` | Chân trang | Bản quyền, liên kết nhanh, thông tin kết nối |

File `index.html` đóng vai trò khung mẹ nạp các thành phần trên thông qua cơ chế tự động nạp linh hoạt.
