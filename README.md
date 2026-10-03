# 📚 TỦ SÁCH HAY - Repository Đọc Sách Trực Tuyến

Nền tảng đọc sách điện tử trực tuyến tuyển chọn các tác phẩm tinh hoa về **Triết học Á Đông**, **Tư duy tài chính**, **Kỹ năng sống & học tập**, và **Công nghệ thông tin**.

Dự án được thiết kế chuyên biệt để triển khai lên **Vercel** hoặc đọc offline trên máy tính và điện thoại.

---

## 🏛️ Cấu trúc Repository

```text
sach-hay/
├── index.html                  # Trang chủ: Kệ sách, phân loại, tìm kiếm, tiếp tục đọc
├── reader.html                 # Trình đọc sách đa năng (ban đêm, tăng giảm chữ, bookmark)
├── vercel.json                 # Cấu hình tối ưu triển khai Vercel (Cache, Security Headers)
├── package.json                # Thông tin repository
├── .gitignore
├── css/
│   ├── style.css               # Giao diện Trang chủ & Kệ sách
│   └── reader.css              # Giao diện Đọc sách chuyên sâu
├── js/
│   ├── books-catalog.js        # Danh mục toàn bộ sách trong tủ sách
│   ├── app.js                  # Bộ điều khiển Trang chủ (Filter, Search, Theme)
│   └── reader.js               # Bộ điều khiển Trình đọc (Mục lục, Cỡ chữ, Màu sắc, Bookmark)
└── data/
    └── books/
        └── tri-tue-khong-tu.js # Dữ liệu cuốn "Trí Tuệ Khổng Tử" (91 chương đầy đủ)
```

---

## 📖 Danh mục sách hiện tại

| STT | Tên sách | Tác giả | Thể loại | Trạng thái |
| :---: | :--- | :--- | :--- | :---: |
| 1 | **5 Phút Thuộc Bài** | Nguyễn Phùng Phong & Brahmi Nguyễn | Phương pháp học tập | ✅ **Đã hoàn thành 100% (24 chương & 189 ảnh gốc)** |
| 2 | **Trí Tuệ Khổng Tử** | Khổng Tử (NXB Văn Hóa - TT) | Triết học Á Đông | ✅ **Đã hoàn thành 100% (91 chương)** |
| 2 | **Đọc Sách Siêu Tốc** | Christian Grüning | Kỹ năng học tập | ⏳ Sắp cập nhật bản web |
| 3 | **Dạy Con Làm Giàu (Tập 1)** | Robert Kiyosaki | Tài chính & Làm giàu | ⏳ Sắp cập nhật bản web |
| 4 | **Đừng Bao Giờ Đi Ăn Một Mình** | Keith Ferrazzi | Phát triển bản thân | ⏳ Sắp cập nhật bản web |
| 5 | **Bảo Mật Nhập Môn Cho Developer** | Phạm Huy Hoàng | Công nghệ thông tin | ⏳ Sắp cập nhật bản web |
| 6 | **Bí Mật Tư Duy Triệu Phú** | T. Harv Eker | Tài chính cá nhân | ⏳ Sắp cập nhật bản web |
| 7 | **Phương Pháp Ghi Nhớ Đỉnh Cao** | Eran Katz | Kỹ năng ghi nhớ | ⏳ Sắp cập nhật bản web |
| 8 | **Học Kinh Dịch & Triết Lý Biến Dịch** | Dịch học tinh hoa | Triết học Á Đông | ⏳ Sắp cập nhật bản web |

---

## ✨ Tính năng của Trình đọc sách (Reader)

- **4 chế độ màu bảo vệ mắt:**
  - 🌙 **Đêm sâu (OLED Dark):** Nền đen dịu mắt, chống chói khi đọc ban đêm.
  - 🍵 **Trầm mặc (Sepia / Giấy cổ):** Phong cách trang sách hoài niệm, ấm áp.
  - 🌿 **Trúc ngọc (Sage Green):** Xanh êm dịu, giảm căng thẳng thị giác.
  - ☀️ **Sáng thanh (Soft Light):** Tông ngà tự nhiên cho ban ngày.
- **Tùy biến chữ:** Tăng giảm cỡ chữ từ `15px` đến `25px`, đổi phông Chân phương (*Serif*) / Hiện đại (*Sans*), giãn dòng linh hoạt.
- **Điều hướng thông minh:** Mục lục trượt dạng Drawer, tìm kiếm câu chuyện tức thì theo từ khóa.
- **Tự động lưu trang (Bookmark):** Tự động ghi nhớ chương đang đọc dở cho từng cuốn sách.
- **Responsive 100%:** Trải nghiệm đọc mượt mà trên cả Điện thoại di động (iOS / Android) lẫn Máy tính (PC / Mac).

---

## ➕ Cách thêm sách mới vào Tủ Sách

Để đưa thêm một cuốn sách mới vào hệ thống:

1. **Chuẩn bị dữ liệu sách:** Tạo file `data/books/[ma-sach].js` với cấu trúc:
   ```javascript
   window.BOOKS_DATABASE = window.BOOKS_DATABASE || {};
   window.BOOKS_DATABASE["ma-sach"] = {
     id: "ma-sach",
     title: "Tên Cuốn Sách",
     author: "Tác Giả",
     category: "Thể Loại",
     chapters: [
       {
         id: "chap-1",
         index: 1,
         part: "Phần 1",
         title: "Tên Chương 1",
         subtitle: "Phụ đề (nếu có)",
         read_time: "3 phút đọc",
         word_count: 500,
         paragraphs: [
           { type: "text", content: "Nội dung đoạn văn..." },
           { type: "quote", content: "Trích dẫn triết lý..." },
           { type: "commentary", content: "Lời bình hoặc đúc kết..." }
         ]
       }
       // ... các chương tiếp theo
     ]
   };
   ```

2. **Khai báo sách vào danh mục:** Mở file `js/books-catalog.js` và thêm thông tin cuốn sách vào mảng `window.BOOKS_CATALOG`.

3. **Liên kết file sách:** Thêm thẻ `<script src="data/books/[ma-sach].js"></script>` vào `reader.html`.

---

## 🚀 Triển khai lên Vercel

### Cách 1: Sử dụng Vercel CLI (1 phút)
Mở Terminal tại thư mục `sach-hay` và chạy:
```bash
npx vercel
```
Làm theo chỉ dẫn trên màn hình để xuất bản trang web.

### Cách 2: Triển khai qua GitHub
1. Tạo một repository mới trên GitHub (đặt tên là `sach-hay`).
2. Đẩy toàn bộ mã nguồn thư mục này lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Khởi tạo Tủ Sách Hay với tác phẩm Trí Tuệ Khổng Tử"
   git branch -M main
   git remote add origin https://github.com/[tai-khoan-cua-ban]/sach-hay.git
   git push -u origin main
   ```
3. Truy cập [vercel.com](https://vercel.com) -> Bấm **Add New Project** -> Chọn repo `sach-hay` -> Bấm **Deploy**.
4. Vercel sẽ tự động cấp một tên miền miễn phí (ví dụ: `https://sach-hay.vercel.app`) để bạn đọc mọi lúc mọi nơi trên điện thoại và máy tính.
