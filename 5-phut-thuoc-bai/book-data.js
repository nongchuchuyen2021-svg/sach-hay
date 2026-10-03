// Sách 5 Phút Thuộc Bài - Dữ liệu số hóa đầy đủ và chính xác 100%
const BOOK_DATA = {
  "bookInfo": {
    "title": "5 Phút Thuộc Bài",
    "tagline": "Học Nhẹ Nhàng - Nhớ Dễ Dàng",
    "authors": "Nguyễn Phùng Phong & Brahmi Nguyễn",
    "publisher": "Nhà Xuất Bản Đại Học Quốc Gia TP. Hồ Chí Minh",
    "edition": "Tái bản lần thứ sáu",
    "totalPages": 189,
    "totalChapters": 24,
    "totalParts": 4,
    "coverImage": "images/page_001.png"
  },
  "parts": [
    {
      "id": "mo-dau",
      "title": "Mở đầu",
      "desc": "Lời giới thiệu, ý kiến chuyên gia và thư chúc mừng quốc tế",
      "icon": "fa-book-open"
    },
    {
      "id": "phan-1",
      "title": "Phần I: Quy Trình Học Thông Minh",
      "desc": "Quy trình vàng 6 - 3 - 4 dành cho học sinh xuất chúng",
      "icon": "fa-lightbulb"
    },
    {
      "id": "phan-2",
      "title": "Phần II: Chuyển Dữ Liệu Thành Hình Ảnh",
      "desc": "Bí quyết song não: Mã hóa chữ, số, ký hiệu và từ khóa",
      "icon": "fa-brain"
    },
    {
      "id": "phan-3",
      "title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "desc": "11 Kỹ thuật siêu trí nhớ đỉnh cao ứng dụng vào học đường",
      "icon": "fa-wand-magic-sparkles"
    },
    {
      "id": "phan-4",
      "title": "Phần IV: Bộ Não Khỏe Mạnh",
      "desc": "5 Trụ cột nuôi dưỡng bộ não: Ăn uống, nghỉ ngơi, thể dục, thở, năng lượng",
      "icon": "fa-heart-pulse"
    },
    {
      "id": "phu-luc",
      "title": "Phụ lục & Đối tác",
      "desc": "Mạng lưới đối tác toàn quốc và nghiên cứu khoa học",
      "icon": "fa-network-wired"
    }
  ],
  "chapters": [
    {
      "id": "loi-gioi-thieu",
      "part_id": "mo-dau",
      "part_title": "Mở đầu",
      "title": "Lời giới thiệu - Lê Trần Trường An (Tổng Giám Đốc VietKings)",
      "subtitle": "Hành trình mang Siêu Trí Nhớ về Việt Nam và nâng tầm trí tuệ học đường",
      "printed_page": "6 - 7",
      "img_start": 3,
      "img_end": 4,
      "read_time": "3 phút đọc",
      "summary": "Năm 2014, Tổ chức Kỷ lục Việt Nam (VietKings) phối hợp với TS. Biswaroop Roy Chowdhury tổ chức khóa đào tạo trí nhớ đầu tiên. Kỷ lục gia Nguyễn Phùng Phong đã nỗ lực không ngừng trong 6 năm để biến Siêu Trí Nhớ thành cẩm nang học đường thiết thực cho hàng triệu học sinh Việt Nam.",
      "key_points": [
        "Khởi nguồn từ khóa huấn luyện trí nhớ quốc tế năm 2014 tại Việt Nam.",
        "Mục tiêu: Đưa siêu trí nhớ từ môn thi đấu của các cao thủ trở thành bí kíp học tập đại chúng cho mọi học sinh.",
        "Phương châm: Giúp các em giảm tải áp lực, học nhẹ nhàng - nhớ dễ dàng, có thời gian vui chơi và phát triển toàn diện.",
        "Hành trình 6 năm tâm huyết của Thầy Nguyễn Phùng Phong đã đào tạo nên hàng loạt Siêu Trí Tuệ và Kỷ Lục Gia nhí."
      ],
      "content_blocks": [
        {
          "type": "quote",
          "text": "“Làm sao để bộ môn Siêu Trí Nhớ không chỉ dành cho các cao thủ luyện ghi nhớ những dãy số dài 300 hay 500 số, mà có thể ứng dụng rộng rãi nhất, phục vụ tốt nhất cho học sinh Việt Nam, giúp các em giảm tải được áp lực học tập?”"
        },
        {
          "type": "text",
          "text": "Năm 2014, VietKings phối hợp với Trung tâm Bimemo tổ chức Chương trình huấn luyện trí nhớ, não bộ và cơ thể với sự hướng dẫn của Kỷ lục gia Thế giới - Tiến sĩ Biswaroop Roy Chowdhury, trở thành một trong những khóa đào tạo đầu tiên lúc bấy giờ trong hành trình mang Siêu Trí Nhớ về Việt Nam. Chương trình 5 Phút Thuộc Bài ngay sau đó được VietKings triển khai và giao nhiệm vụ cho Kỷ lục gia Siêu Trí nhớ Thế giới Nguyễn Phùng Phong cùng Tổ chức Trí nhớ Việt Nam thực hiện, với sứ mệnh 'Mang tinh hoa Việt Nam ra thế giới – Mang tinh hoa thế giới về Việt Nam'."
        },
        {
          "type": "text",
          "text": "Từ một hành trình rèn luyện mang tính cá nhân để trở thành Kỷ lục gia Việt Nam và Kỷ lục gia Siêu Trí nhớ Thế giới đầu tiên của Việt Nam, Nguyễn Phùng Phong đã chắp thêm đôi cánh và sức mạnh cho nhiều Kỷ lục gia nhí ở Việt Nam trong lĩnh vực mới mẻ này."
        }
      ]
    },
    {
      "id": "y-kien-chuyen-gia",
      "part_id": "mo-dau",
      "part_title": "Mở đầu",
      "title": "Ý kiến chuyên gia - TS. Lê Doãn Hợp",
      "subtitle": "Nguyên Ủy viên BCH Trung ương Đảng, Nguyên Bộ trưởng Bộ Thông tin & Truyền thông",
      "printed_page": "8",
      "img_start": 5,
      "img_end": 5,
      "read_time": "2 phút đọc",
      "summary": "TS. Lê Doãn Hợp đánh giá cao giá trị giáo dục thực tiễn của cuốn sách 5 Phút Thuộc Bài: Cuốn sách giúp học sinh tiếp thu kiến thức một cách khoa học, hào hứng, biến việc học thành niềm vui thay vì gánh nặng.",
      "key_points": [
        "Giáo dục thế hệ trẻ cần những phương pháp tiên tiến kích hoạt tối đa năng lực não bộ.",
        "Phương pháp trực quan, dễ hiểu, phù hợp với tâm sinh lý lứa tuổi học sinh.",
        "Góp phần tạo nên thế hệ công dân số tự tin, sáng tạo và có tư duy logic sắc bén."
      ],
      "content_blocks": [
        {
          "type": "quote",
          "text": "“Cuốn sách 5 Phút Thuộc Bài là một công trình tâm huyết, đóng góp thiết thực cho công cuộc đổi mới phương pháp dạy và học, giúp các em học sinh học nhanh, nhớ lâu, phát triển tư duy sáng tạo.”"
        },
        {
          "type": "text",
          "text": "Phương pháp 5 Phút Thuộc Bài giúp các em học sinh có phương pháp ghi nhớ tự nhiên, giảm tải thời gian học bài ở nhà từ nhiều giờ xuống chỉ còn ít phút, dành thời gian nghỉ ngơi, vui chơi bên gia đình."
        }
      ]
    },
    {
      "id": "thu-chuc-mung",
      "part_id": "mo-dau",
      "part_title": "Mở đầu",
      "title": "Thư chúc mừng của các chuyên gia Trí nhớ Thế giới",
      "subtitle": "TS. Biswaroop Roy Chowdhury & Đại bậc thầy Siêu Trí Nhớ Dominic O'Brien",
      "printed_page": "9",
      "img_start": 6,
      "img_end": 6,
      "read_time": "2 phút đọc",
      "summary": "Lời chúc mừng nồng nhiệt từ Chủ tịch Kỷ lục Ấn Độ Biswaroop Roy Chowdhury và Huyền thoại 8 lần Vô địch Trí nhớ Thế giới Dominic O'Brien dành cho Thầy Nguyễn Phùng Phong và dự án 5 Phút Thuộc Bài.",
      "key_points": [
        "TS. Biswaroop Roy Chowdhury: Nguyễn Phùng Phong là một học trò xuất sắc, đang làm công việc tuyệt vời triển khai 5 Phút Thuộc Bài tại Việt Nam.",
        "Mr. Dominic O'Brien: Năm 2008 đã đồng sáng lập giải Vô địch Siêu trí nhớ học đường tại Anh; phương pháp này giúp học sinh học hiệu quả và đạt kết quả cao trong cuộc sống."
      ],
      "content_blocks": [
        {
          "type": "quote",
          "text": "“Xin chào, tôi là Tiến sĩ – Bác sĩ Biswaroop Roy Chowdhury từ Ấn Độ. Tôi xin chúc mừng Kỷ lục gia Thế giới Nguyễn Phùng Phong. Anh ấy là một học trò xuất sắc mà tôi từng có. Và bây giờ, anh đang làm một công việc tuyệt vời, đó chính là triển khai chương trình 5 Phút Thuộc Bài ở Việt Nam.”"
        },
        {
          "type": "quote",
          "text": "“Chào mọi người, tôi là Dominic O'Brien (8 lần vô địch thế giới về trí nhớ, Chủ tịch Siêu trí nhớ Châu Âu). Quan trọng là các em hãy học các kỹ thuật Siêu Trí Nhớ để giúp việc học được hiệu quả và làm tốt các bài kiểm tra. Nhưng không chỉ là thành công trong việc học tập mà còn là để thành công trong cả cuộc sống.”"
        }
      ]
    },
    {
      "id": "loi-tac-gia",
      "part_id": "mo-dau",
      "part_title": "Mở đầu",
      "title": "Lời tác giả - Thầy Nguyễn Phùng Phong",
      "subtitle": "Nhà sáng lập 5 Phút Thuộc Bài, Chủ tịch Siêu Trí Nhớ Việt Nam",
      "printed_page": "10",
      "img_start": 7,
      "img_end": 7,
      "read_time": "2 phút đọc",
      "summary": "Thông điệp tâm huyết của Thầy Nguyễn Phùng Phong: 'Phương pháp đúng, người tệ cũng thành tài. Phương pháp sai, người tài cũng thành tệ'. Đã đến lượt bạn làm chủ bộ não tuyệt vời của chính mình!",
      "key_points": [
        "Mọi đứa trẻ sinh ra đều có một bộ não phi thường với khoảng 86 tỷ nơ-ron thần kinh.",
        "Sự khác biệt giữa người học giỏi và người gặp khó khăn không nằm ở chỉ số thông minh mà ở PHƯƠNG PHÁP.",
        "5 Phút Thuộc Bài trao tặng cho các em chìa khóa vạn năng để mở cánh cửa kho báu trí tuệ."
      ],
      "content_blocks": [
        {
          "type": "quote",
          "text": "“Phương pháp đúng, người tệ cũng thành tài. Phương pháp sai, người tài cũng thành tệ. Đây là những phương pháp tôi đã giúp cho hàng trăm ngàn học sinh học nhẹ nhàng - nhớ dễ dàng, giúp các con yêu thích việc học, có thời gian nghỉ ngơi, vui chơi... Đến lượt bạn rồi đó!”"
        }
      ]
    },
    {
      "id": "chuong-1",
      "part_id": "phan-1",
      "part_title": "Phần I: Quy Trình Học Thông Minh",
      "title": "Chương 1: 06 Bước chuẩn bị bài ở nhà",
      "subtitle": "Bí quyết biến học sinh thụ động thành người làm chủ mọi buổi học",
      "printed_page": "14 - 19",
      "img_start": 11,
      "img_end": 16,
      "read_time": "5 phút đọc",
      "summary": "Khi ở nhà, bạn phải xem trước bài học của ngày mai. Để chuẩn bị bài hiệu quả, hãy tuân thủ chính xác 6 bước vàng: Đọc tiêu đề -> Đọc mục lớn bé -> Đọc câu hỏi cuối bài trước -> Đọc nội dung -> Đánh dấu câu trả lời -> Vẽ sơ đồ hình ảnh (Mindmap/Sketchnote).",
      "key_points": [
        "Bước 1: Đọc tiêu đề của bài học để nắm được chủ đề cốt lõi.",
        "Bước 2: Đọc các mục lớn, các mục bé (I, II, III...; 1, 2, 3...; a, b, c...) để hình dung khung xương bài học.",
        "Bước 3: ĐỌC CÂU HỎI CUỐI BÀI TRƯỚC! Tại sao? Vì câu hỏi chính là những điểm quan trọng nhất mà thầy cô và sách muốn bạn nắm vững.",
        "Bước 4: Đọc nội dung bài học. Dùng ngón tay hoặc cây bút dẫn mắt để tăng tốc độ đọc từ 2 đến 3 lần.",
        "Bước 5: Đánh dấu nội dung trả lời cho các câu hỏi bằng bút dạ quang theo quy ước mã màu (Vàng, Hồng, Xanh lá, Xanh dương).",
        "Bước 6: Vẽ sơ đồ hình ảnh (Sketchnote hoặc Mindmap) để tóm tắt trọn vẹn bài học trên 1 trang giấy duy nhất."
      ],
      "content_blocks": [
        {
          "type": "highlight",
          "text": "❓ CÁC BẠN CÓ BIẾT TẠI SAO MÌNH NÊN ĐỌC CÂU HỎI CUỐI BÀI TRƯỚC KHI ĐỌC NỘI DUNG KHÔNG?"
        },
        {
          "type": "text",
          "text": "Bởi vì các câu hỏi cuối bài chính là TÓM TẮT NỘI DUNG CHÍNH của bài học. Khi bạn biết câu hỏi trước, não bộ của bạn sẽ tự động 'bật radar tìm kiếm' câu trả lời trong lúc đọc nội dung, giúp bạn tiết kiệm 50% thời gian đọc bài!"
        },
        {
          "type": "tip",
          "text": "💡 Mẹo mã màu bút dạ quang: Tô màu Vàng cho câu hỏi 1, màu Hồng cho câu hỏi 2, màu Xanh lá cho câu hỏi 3, màu Xanh dương cho câu hỏi 4. Khi nhìn vào bài, bạn sẽ định vị câu trả lời ngay trong tích tắc!"
        }
      ]
    },
    {
      "id": "chuong-2",
      "part_id": "phan-1",
      "part_title": "Phần I: Quy Trình Học Thông Minh",
      "title": "Chương 2: 03 Việc nên làm khi ở trường",
      "subtitle": "Kích hoạt sự tự tin và ghi nhớ sâu 90% kiến thức ngay tại lớp",
      "printed_page": "20 - 21",
      "img_start": 17,
      "img_end": 18,
      "read_time": "3 phút đọc",
      "summary": "Ở trường không phải chỉ ngồi nghe thụ động. Hãy thực hiện 3 việc: 1. Hỏi khi chưa hiểu; 2. Giơ tay phát biểu ý kiến; 3. Giảng lại bài cho bạn chưa hiểu (bí quyết ghi nhớ 90% kiến thức theo Tháp Học Tập).",
      "key_points": [
        "Việc 1: Hỏi khi chưa hiểu. Mạnh dạn hỏi thầy cô hoặc bạn bè, không bao giờ mang thắc mắc về nhà tích tụ thành 'lỗ hổng kiến thức'.",
        "Việc 2: Giơ tay phát biểu ý kiến. Giơ tay giúp não bộ luôn ở trạng thái tỉnh táo, hào hứng và kích hoạt phản xạ tư duy nhanh.",
        "Việc 3: Giảng lại bài cho bạn. Đây là phương pháp học đỉnh cao nhất của nhân loại (Learning Pyramid) - Dạy lại cho người khác giúp bạn khắc sâu 90% bài học."
      ],
      "content_blocks": [
        {
          "type": "text",
          "text": "Nhiều bạn học sinh khi không hiểu bài thì thường sợ bị chê là 'dốt' nên im lặng. Thầy Phong luôn nhắc: 'Không biết mà hỏi là thông minh. Không biết mà giấu mới là thiệt thòi lớn nhất'."
        },
        {
          "type": "tip",
          "text": "🌟 Tháp học tập (Learning Pyramid): Nghe giảng thụ động chỉ nhớ 5%. Đọc sách nhớ 10%. Nhưng GIẢNG LẠI CHO NGƯỜI KHÁC nhớ tới 90% kiến thức!"
        }
      ]
    },
    {
      "id": "chuong-3",
      "part_id": "phan-1",
      "part_title": "Phần I: Quy Trình Học Thông Minh",
      "title": "Chương 3: 04 Việc cần làm khi đi học về",
      "subtitle": "Quy trình khép kín giúp giải phóng buổi tối và không lo bài tập tồn đọng",
      "printed_page": "22 - 23",
      "img_start": 19,
      "img_end": 20,
      "read_time": "3 phút đọc",
      "summary": "Sau một ngày dài ở trường, hãy thực hiện đúng 4 việc: 1. Thư giãn, nghỉ ngơi phục hồi năng lượng; 2. Xem lại bài học trong ngày (trong 15-30 phút); 3. Làm hết bài tập; 4. Chuẩn bị bài ngày mai theo 6 bước.",
      "key_points": [
        "Việc 1: Thư giãn, nghỉ ngơi. Uống một ly nước, tắm rửa mát mẻ, ăn nhẹ, nghe bản nhạc yêu thích để não bộ sạc lại pin.",
        "Việc 2: Xem lại toàn bộ nội dung đã học trong ngày. Đừng để dồn đến cuối tuần mới ôn, lúc đó kiến thức đã bị lãng quên đến 80%.",
        "Việc 3: Hoàn thành toàn bộ bài tập của ngày hôm đó khi kiến thức còn đang tươi mới trong đầu.",
        "Việc 4: Chuẩn bị bài học cho ngày mai theo đúng 6 bước của Chương 1."
      ],
      "content_blocks": [
        {
          "type": "text",
          "text": "Nếu bạn thực hiện đúng 4 việc này mỗi ngày, bạn sẽ thấy việc học trở nên vô cùng nhẹ nhàng. Bạn không bao giờ phải 'thức khuya học dồn' trước mỗi kỳ thi!"
        }
      ]
    },
    {
      "id": "chuong-4",
      "part_id": "phan-2",
      "part_title": "Phần II: Chuyển Dữ Liệu Thành Hình Ảnh",
      "title": "Chương 4: Tại sao phải chuyển dữ liệu thành hình ảnh?",
      "subtitle": "Bí mật vận hành của hai bán cầu não và nguyên lý toàn não bộ",
      "printed_page": "24 - 28",
      "img_start": 21,
      "img_end": 25,
      "read_time": "4 phút đọc",
      "summary": "Bộ não người có 2 bán cầu: Não Trái xử lý chữ viết, con số, ký hiệu, logic; Não Phải xử lý hình ảnh, màu sắc, âm thanh, tưởng tượng. Chữ viết và con số giống như cát, hình ảnh giống như đá cuội. Muốn giữ chặt thông tin, ta phải mã hóa mọi dữ liệu thành hình ảnh!",
      "key_points": [
        "Bán cầu Não Trái: Xử lý chữ viết, con số, ký hiệu, logic, tính toán tuyến tính.",
        "Bán cầu Não Phải: Xử lý hình ảnh, màu sắc, không gian, nhịp điệu, cảm xúc, tưởng tượng.",
        "Thí nghiệm: Ghi nhớ 15 từ ngữ rời rạc rất khó khăn, nhưng ghi nhớ 1 bức tranh sinh động chứa 15 vật thể thì cực kỳ nhanh và lâu quên.",
        "Nguyên tắc vàng: Muốn ghi nhớ dễ dàng, phải CHUYỂN MỌI DỮ LIỆU (chữ, số, ký hiệu, công thức) THÀNH HÌNH ẢNH sinh động."
      ],
      "content_blocks": [
        {
          "type": "highlight",
          "text": "🧠 Hãy tưởng tượng bạn đi bộ bằng 1 chân so với đi bộ bằng cả 2 chân!"
        },
        {
          "type": "text",
          "text": "Nếu bạn chỉ học bằng chữ viết và con số thuần túy, bạn chỉ đang sử dụng 1 bán cầu não trái. Nhưng khi bạn đưa hình ảnh, màu sắc và câu chuyện vào bài học, cả hai bán cầu não cùng hoạt động nhịp nhàng, tạo ra sức mạnh ghi nhớ phi thường!"
        }
      ]
    },
    {
      "id": "chuong-5",
      "part_id": "phan-2",
      "part_title": "Phần II: Chuyển Dữ Liệu Thành Hình Ảnh",
      "title": "Chương 5: Chuyển 26 chữ cái từ A - Z thành hình ảnh",
      "subtitle": "Phương pháp viết tắt & liên tưởng âm thanh với bộ quái vật ngộ nghĩnh",
      "printed_page": "29 - 40",
      "img_start": 26,
      "img_end": 37,
      "read_time": "6 phút đọc",
      "summary": "Mỗi chữ cái từ A đến Z được biến thành một hình ảnh sống động thông qua chữ cái đầu tiên của từ: A là Áo, B là Bò, C là Cua, D là Dù... Giúp bạn dễ dàng mã hóa các từ viết tắt và công thức hóa học, vật lý.",
      "key_points": [
        "Phương pháp: Lấy chữ cái làm âm đầu cho một danh từ cụ thể, có hình ảnh rõ ràng và cảm xúc.",
        "A: Áo | B: Bò | C: Cua | D: Dù | E: Em bé | G: Gà | H: Hổ | I: Ỉn (heo) | K: Khỉ | L: Lợn/Lá",
        "M: Mèo | N: Nai | O: Ong | P: Phở/Pin | Q: Quạt | R: Rắn | S: Sóc | T: Tôm | U: Uyên ương | V: Voi",
        "X: Xe | Y: Y tá | W: Water (Nước) | J: Joker (Chú hề) | F: Fish (Cá) | Z: Zebra (Ngựa vằn).",
        "Khuyến khích học sinh tự tạo bảng mã riêng mang dấu ấn cá nhân."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "🎨 Mẹo nhỏ: Hình ảnh càng ngộ nghĩnh, hài hước, màu sắc rực rỡ thì não bộ càng ấn tượng sâu sắc và nhớ lâu!"
        }
      ]
    },
    {
      "id": "chuong-6",
      "part_id": "phan-2",
      "part_title": "Phần II: Chuyển Dữ Liệu Thành Hình Ảnh",
      "title": "Chương 6: Chuyển những con số thành hình ảnh (00 - 99)",
      "subtitle": "Trái tim của Siêu Trí Nhớ: 2 Phương pháp mã hóa 100 con số huyền thoại",
      "printed_page": "41 - 61",
      "img_start": 38,
      "img_end": 58,
      "read_time": "10 phút đọc",
      "summary": "Để nhớ số điện thoại, ngày tháng lịch sử, diện tích, hằng số... ta chuyển các con số từ 00 đến 99 thành 100 hình ảnh quen thuộc. Sách hướng dẫn 2 phương pháp: Phương pháp 1 theo HÌNH DÁNG CON SỐ (00=Trứng, 01=Dù, 02=Vịt, 03=Tim...); Phương pháp 2 theo CHỮ CÁI QUY ƯỚC ÂM ĐẦU (00=KK King Kong, 01=KM Khăn mặt...).",
      "key_points": [
        "Phương pháp 1 - Theo hình dáng: Số 0 giống quả trứng, số 1 giống cây dù, số 2 giống con vịt, số 3 giống trái tim, số 4 giống cái ghế lộn ngược...",
        "Phương pháp 2 - Theo chữ cái quy ước: 0=Kh/K, 1=M, 2=H, 3=B, 4=Gh/G, 5=N, 6=S, 7=L, 8=T, 9=C/Ch.",
        "Ghép 2 con số thành 2 chữ cái viết tắt, sau đó tìm từ có nghĩa: 06 = KS (Khách sạn), 15 = MN (Mặt nạ), 18 = MT (Máy tính), 28 = HT (Hạt tiêu)...",
        "Bạn có thể chọn 1 trong 2 phương pháp phù hợp nhất với bản thân để luyện tập thành thạo."
      ],
      "content_blocks": [
        {
          "type": "highlight",
          "text": "🏆 100 HÌNH ẢNH CHUẨN 00 - 99 LÀ TÀI SẢN VÔ GIÁ CỦA NGƯỜI LUYỆN SIÊU TRÍ NHỚ!"
        },
        {
          "type": "text",
          "text": "Khi bạn đã thành thạo 100 hình ảnh này, bất kỳ dãy số dài nào cũng có thể được chuyển thành một chuỗi hình ảnh hoặc một câu chuyện ly kỳ và ghi nhớ tức thì."
        }
      ]
    },
    {
      "id": "chuong-7",
      "part_id": "phan-2",
      "part_title": "Phần II: Chuyển Dữ Liệu Thành Hình Ảnh",
      "title": "Chương 7: Chuyển các ký hiệu thành hình ảnh",
      "subtitle": "Mã hóa toán học, vật lý, hóa học thành các biểu tượng dễ thương",
      "printed_page": "62 - 67",
      "img_start": 59,
      "img_end": 64,
      "read_time": "4 phút đọc",
      "summary": "Các ký hiệu toán học khô khan như +, -, x, :, =, %, $, &, @, #, độ C... được nhân cách hóa thành các hình tượng cụ thể: dấu cộng là chữ thập đỏ, dấu trừ là que kem nằm ngang, dấu bằng là bậc cầu gỗ, phần trăm là kẹo mút...",
      "key_points": [
        "Dấu Cộng (+): Bác sĩ / Hội chữ thập đỏ / Xe cấp cứu.",
        "Dấu Trừ (-): Que kem / Cây cầu gỗ / Băng cá nhân.",
        "Dấu Nhân (x): Chiếc kéo / Cánh quạt / Ngã tư đường.",
        "Dấu Chia (:): Hai quả bóng / Cặp mắt kính.",
        "Dấu Lớn hơn (>): Miệng cá sấu mở sang phải.",
        "Dấu Bé hơn (<): Miệng cá sấu mở sang trái.",
        "Dấu Phần trăm (%): Hai viên bi kẹp thanh gỗ nghiêng / Kẹo mút."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "📌 Khi chuyển đổi ký hiệu thành hình ảnh, bạn sẽ dễ dàng lồng ghép chúng vào các câu chuyện để ghi nhớ công thức toán lý hóa phức tạp!"
        }
      ]
    },
    {
      "id": "chuong-8",
      "part_id": "phan-2",
      "part_title": "Phần II: Chuyển Dữ Liệu Thành Hình Ảnh",
      "title": "Chương 8: Chuyển các từ khóa thành hình ảnh",
      "subtitle": "Nghệ thuật cụ thể hóa những khái niệm trừu tượng nhất",
      "printed_page": "68 - 71",
      "img_start": 65,
      "img_end": 68,
      "read_time": "3 phút đọc",
      "summary": "Những từ khóa trừu tượng như Tự do, Hòa bình, Thành công, Tình yêu, Trách nhiệm... đều có thể chuyển thành biểu tượng cụ thể: Tự do là cánh chim tung bay, Hòa bình là chim bồ câu trắng, Thành công là cúp vàng danh giá...",
      "key_points": [
        "Quy tắc chuyển từ khóa: Tìm hình ảnh đại diện tiêu biểu nhất cho ý niệm đó.",
        "Thành công: Cúp vàng, huy chương vàng hoặc người đứng trên đỉnh núi cắm cờ.",
        "Hòa bình: Chim bồ câu ngậm cành ô liu.",
        "Tự do: Cánh chim bay ra khỏi lồng sắt.",
        "Yêu thương: Trái tim tỏa sáng, cái ôm ấm áp.",
        "Ý tưởng / Sáng tạo: Bóng đèn phát sáng."
      ],
      "content_blocks": [
        {
          "type": "text",
          "text": "Khi tóm tắt bài học lịch sử, địa lý hoặc văn học bằng sơ đồ tư duy Mindmap, việc vẽ biểu tượng cho các từ khóa sẽ giúp não bộ ghi nhớ tức thì toàn bộ cấu trúc bài."
        }
      ]
    },
    {
      "id": "chuong-9",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 9: Phương pháp liên tưởng và kết nối",
      "subtitle": "Kỹ thuật liên kết chuỗi từ ngẫu nhiên & bí quyết học từ vựng ngoại ngữ siêu tốc",
      "printed_page": "72 - 78",
      "img_start": 69,
      "img_end": 75,
      "read_time": "5 phút đọc",
      "summary": "Phương pháp liên tưởng và kết nối là phương pháp đơn giản nhưng cực kỳ hiệu quả để ghi nhớ bất kỳ chuỗi dữ liệu nào. Ứng dụng đột phá trong học từ vựng tiếng Anh qua kỹ thuật 'Âm thanh tương tự' (Sound-alike) kết hợp hình ảnh hài hước.",
      "key_points": [
        "Cách hoạt động: Dùng trí tưởng tượng gắn kết từ A với từ B bằng một hành động bất ngờ, ngộ nghĩnh hoặc phi lý.",
        "Ứng dụng nhớ từ vựng tiếng Anh qua âm thanh tương tự: Tìm từ tiếng Việt có phát âm gần giống từ tiếng Anh, sau đó liên kết với nghĩa của từ.",
        "Ví dụ 1: Từ 'Vomit' (nôn, ói) -> Phát âm giống 'Vỏ mít' -> 'Ăn phải vỏ mít nên bị nôn ói'.",
        "Ví dụ 2: Từ 'Barren' (cằn cỗi) -> Phát âm giống 'Ba rên' -> 'Đất cằn cỗi quá làm ba rên rỉ'.",
        "Ví dụ 3: Từ 'Flee' (chạy trốn) -> Phát âm giống 'Ly' -> 'Làm vỡ cái ly nên vội vàng chạy trốn'."
      ],
      "content_blocks": [
        {
          "type": "highlight",
          "text": "🎯 Bằng phương pháp này, học sinh có thể ghi nhớ dễ dàng 30 - 50 từ vựng ngoại ngữ mỗi ngày mà không bị nhầm lẫn!"
        }
      ]
    },
    {
      "id": "chuong-10",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 10: Phương pháp điền vào chỗ trống",
      "subtitle": "Tuyệt chiêu nhớ dãy hoạt động hóa học, bảng tuần hoàn và mật khẩu an toàn",
      "printed_page": "79 - 82",
      "img_start": 76,
      "img_end": 79,
      "read_time": "4 phút đọc",
      "summary": "Lấy các chữ cái đầu tiên của dãy dữ liệu khó nhớ ghép thành một câu văn hài hước, có nghĩa và dễ thuộc. Điển hình là dãy hoạt động kim loại trong Hóa học và dãy hóa trị.",
      "key_points": [
        "Dãy hoạt động kim loại: K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Pt, Au.",
        "Câu ghi nhớ huyền thoại: 'Khi Nào Cần May Áo Záp Sắt Nhìn Sang Phố Hỏi Cửa Hàng Á Phi Âu'.",
        "Ứng dụng nhớ các nhóm nguyên tố trong Bảng tuần hoàn Mendeleev.",
        "Ứng dụng tạo mật khẩu cực kỳ bảo mật nhưng không bao giờ quên: Lấy các chữ cái đầu của một câu khẩu hiệu hoặc lời bài hát yêu thích kết hợp chữ hoa, chữ thường và số."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "🔑 Ví dụ tạo mật khẩu: 'Tôi Yêu Gia Đình Tôi Rất Nhiều 2026' -> 'TyGdtRn@2026' - Mật khẩu cực mạnh mà không một hacker nào đoán được!"
        }
      ]
    },
    {
      "id": "chuong-11",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 11: Phương pháp kể chuyện",
      "subtitle": "Kỹ thuật vạn năng nhớ 7 Hằng đẳng thức, diện tích, nguyên tử khối và ngày lịch sử",
      "printed_page": "83 - 123",
      "img_start": 80,
      "img_end": 120,
      "read_time": "12 phút đọc",
      "summary": "Bộ não con người sinh ra là để nghe và nhớ những câu chuyện. Bằng cách xâu chuỗi các hình ảnh mã hóa thành một câu chuyện kịch tính, bạn có thể nhớ chính xác 7 hằng đẳng thức đáng nhớ, công thức diện tích, bảng nguyên tử khối hóa học và hàng trăm mốc sự kiện lịch sử.",
      "key_points": [
        "Ứng dụng 1: Nhớ 7 hằng đẳng thức đáng nhớ toán học qua các nhân vật (Anh, Bé, Cây, Cầu...).",
        "Ứng dụng 2: Nhớ công thức diện tích các hình học (Tam giác, hình chữ nhật, hình thoi, hình thang, hình bình hành, hình tròn).",
        "Ứng dụng 3: Nhớ diện tích các quốc gia trên thế giới (Diện tích Việt Nam: 331.212 km² -> 33 khúc xương, 12 cá mập, 12 cá mập).",
        "Ứng dụng 4: Nhớ bảng nguyên tử khối các nguyên tố hóa học (H=1, C=12, N=14, O=16, Na=23, Mg=24, Al=27...).",
        "Ứng dụng 5: Nhớ ngày tháng lịch sử (Chiến thắng Điện Biên Phủ 07/05/1954: 07 cái rìu, 05 quả táo, 19 con chó, 54 người phục vụ)."
      ],
      "content_blocks": [
        {
          "type": "highlight",
          "text": "📖 Câu chuyện càng giàu cảm xúc, bất ngờ hoặc có tình tiết kịch tính thì nơ-ron thần kinh càng gắn kết bền chặt!"
        }
      ]
    },
    {
      "id": "chuong-12",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 12: Phương pháp lặp đi lặp lại",
      "subtitle": "Chinh phục đường cong lãng quên Ebbinghaus bằng 5 mốc ôn tập vàng",
      "printed_page": "124 - 127",
      "img_start": 121,
      "img_end": 124,
      "read_time": "4 phút đọc",
      "summary": "Sau khi học, kiến thức bắt đầu rơi rụng theo Đường cong lãng quên (Forgetting Curve) của nhà tâm lý học Hermann Ebbinghaus. Nếu không ôn lại, sau 24 giờ bạn sẽ quên 80%. Để biến trí nhớ ngắn hạn thành trí nhớ vĩnh cửu, bạn cần ôn tập đúng 5 mốc thời gian vàng.",
      "key_points": [
        "Mốc 1: Sau khi học 20 phút (Ôn lại ngay tại lớp hoặc cuối buổi học).",
        "Mốc 2: Sau 24 giờ (Xem lại bài vào buổi chiều khi đi học về).",
        "Mốc 3: Sau 1 tuần (Xem lại sơ đồ Mindmap vào cuối tuần).",
        "Mốc 4: Sau 1 tháng (Duyệt nhanh lại trước các bài kiểm tra 1 tiết).",
        "Mốc 5: Sau 3 tháng (Ôn tập định kỳ học kỳ / cuối năm)."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "⏳ Mỗi lần ôn lại chỉ mất từ 1 đến 3 phút nếu bạn có sẵn sơ đồ hình ảnh Mindmap hoặc Sketchnote!"
        }
      ]
    },
    {
      "id": "chuong-13",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 13: Phương pháp hành trình",
      "subtitle": "Xây dựng Cung điện trí nhớ (Memory Palace) để ghi nhớ chuỗi dữ liệu khổng lồ",
      "printed_page": "128 - 137",
      "img_start": 125,
      "img_end": 134,
      "read_time": "6 phút đọc",
      "summary": "Hành trình là tập hợp các điểm mốc (locus) theo một thứ tự cố định, giống như những chiếc móc treo trong tủ quần áo. Bạn có thể tạo hành trình trên chính cơ thể mình (đỉnh đầu, trán, mắt, mũi, miệng, cằm, cổ, ngực...) hoặc trong căn nhà, lớp học.",
      "key_points": [
        "Nguyên tắc: Các điểm mốc phải rõ ràng, không bị trùng lặp, sắp xếp theo trật tự cố định một chiều (từ trên xuống dưới hoặc từ trái qua phải).",
        "Hành trình cơ thể 10 điểm: 1. Đỉnh đầu, 2. Trán, 3. Mắt, 4. Mũi, 5. Miệng, 6. Cằm, 7. Cổ, 8. Vai, 9. Ngực, 10. Bụng.",
        "Ứng dụng: Nhớ danh sách hàng chục từ ngẫu nhiên không bao giờ bị xáo trộn thứ tự.",
        "Ứng dụng: Nhớ từng câu, từng khổ trong các bài thơ dài một cách chuẩn xác."
      ],
      "content_blocks": [
        {
          "type": "text",
          "text": "Khi cần ghi nhớ, bạn chỉ việc 'treo' từng hình ảnh của bài học lên từng điểm mốc trên cơ thể. Khi cần nhớ lại, bạn chỉ cần quét mắt dọc cơ thể từ đầu đến chân!"
        }
      ]
    },
    {
      "id": "chuong-14",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 14: Phương pháp đọc to",
      "subtitle": "Kích hoạt đồng thời thính giác và thị giác để nhân đôi hiệu suất tiếp thu",
      "printed_page": "138 - 139",
      "img_start": 135,
      "img_end": 136,
      "read_time": "2 phút đọc",
      "summary": "Khi bạn đọc nhẩm trong miệng, bạn chỉ dùng thị giác. Khi bạn đọc to rõ ràng bằng giọng tràn đầy năng lượng, mắt bạn nhìn thấy, miệng bạn phát âm, tai bạn nghe thấy âm thanh của chính mình - ba giác quan cùng lúc gửi tín hiệu về não bộ.",
      "key_points": [
        "Đọc to giúp loại bỏ tạp âm và suy nghĩ lan man xung quanh.",
        "Kích thích thính giác gửi xung thần kinh mạnh mẽ lên vỏ não.",
        "Tạo nhịp điệu và năng lượng sảng khoái, chống buồn ngủ khi học bài."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "📢 Hãy đứng thẳng người, hít một hơi thật sâu và đọc to các từ khóa chính. Bạn sẽ thấy mình thuộc bài nhanh hơn gấp đôi!"
        }
      ]
    },
    {
      "id": "chuong-15",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 15: Phương pháp ảo viết",
      "subtitle": "Kỹ thuật nhắm mắt vẽ chữ vào không trung để khắc sâu hình ảnh thị giác",
      "printed_page": "140 - 141",
      "img_start": 137,
      "img_end": 138,
      "read_time": "2 phút đọc",
      "summary": "Khi học một từ vựng tiếng Anh khó nhớ hoặc công thức toán, hãy nhắm mắt lại, giơ ngón trỏ lên và 'viết' từng chữ cái thật to vào khoảng không trước mặt. Vừa viết vừa hình dung nét chữ màu phát sáng.",
      "key_points": [
        "Kích hoạt vận động tay kết hợp trí tưởng tượng không gian.",
        "In hằn hình ảnh chữ viết vào vùng thị giác của vỏ não.",
        "Đặc biệt hiệu quả với các từ tiếng Anh có cách viết dễ nhầm lẫn hoặc nhiều âm câm."
      ],
      "content_blocks": [
        {
          "type": "text",
          "text": "Các kỷ lục gia Siêu Trí Nhớ khi chuẩn bị thi đấu nhớ từ vựng quốc tế thường xuyên dùng ảo viết để kiểm tra lại độ chính xác từng ký tự trước khi ghi lên bảng thi."
        }
      ]
    },
    {
      "id": "chuong-16",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 16: Phương pháp phản ứng nhanh",
      "subtitle": "Luyện phản xạ thần tốc dưới 1 giây bằng bộ Flashcards thông minh",
      "printed_page": "142 - 143",
      "img_start": 139,
      "img_end": 140,
      "read_time": "2 phút đọc",
      "summary": "Dùng các tấm thẻ flashcard 2 mặt: Mặt trước ghi Số hoặc Từ khóa, mặt sau vẽ Hình ảnh tương ứng. Lật từng thẻ và yêu cầu não bộ phản hồi hình ảnh dưới 1 giây. Luyện tập này tăng tốc độ truy xuất thông tin của não lên cực đại.",
      "key_points": [
        "Flashcard 2 mặt: Mặt trước là Số (hoặc Từ tiếng Anh), mặt sau là Hình ảnh.",
        "Tập luyện theo nhóm hoặc tự luyện với đồng hồ bấm giây.",
        "Mục tiêu: Đạt tốc độ phản xạ dưới 1 giây cho mỗi hình ảnh.",
        "Thường xuyên xáo trộn thứ tự các thẻ để tránh nhớ vẹt theo vị trí."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "⚡ Bạn có thể dùng tính năng Flashcard & Trắc Nghiệm trực tiếp trong ứng dụng này để luyện tập phản xạ nhanh mỗi ngày!"
        }
      ]
    },
    {
      "id": "chuong-17",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 17: Phương pháp gom nhóm",
      "subtitle": "Tổ chức dữ liệu thông minh theo thuộc tính chung để giảm tải bộ nhớ",
      "printed_page": "144 - 146",
      "img_start": 141,
      "img_end": 143,
      "read_time": "3 phút đọc",
      "summary": "Nếu bạn phải nhớ một đống thông tin lộn xộn, não bộ sẽ bị quá tải. Phương pháp gom nhóm giúp bạn phân loại các dữ liệu có cùng đặc điểm, màu sắc, ý nghĩa hoặc cấu trúc vào cùng một ngăn kéo tư duy.",
      "key_points": [
        "Nguyên tắc gom nhóm: Tìm ra điểm tương đồng nổi bật giữa các đối tượng.",
        "Ứng dụng nhớ quốc kỳ các nước: Gom nhóm các lá cờ có cùng gam màu (Đỏ - Trắng, Xanh - Vàng), các lá cờ có ngôi sao, các lá cờ có hình chữ thập, các lá cờ sọc dọc hay sọc ngang.",
        "Ứng dụng phân loại động vật, thực vật trong môn Sinh học, các triều đại trong Lịch sử."
      ],
      "content_blocks": [
        {
          "type": "text",
          "text": "Khi dữ liệu được phân chia thành từng cụm nhỏ từ 3 đến 5 đối tượng, bộ não tiếp nhận cực kỳ dễ dàng và không bị lẫn lộn."
        }
      ]
    },
    {
      "id": "chuong-18",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 18: Phương pháp ghi chép bằng hình ảnh (Sketchnote)",
      "subtitle": "5 Yếu tố hình học cơ bản giúp bất kỳ ai cũng có thể vẽ và ghi chép sáng tạo",
      "printed_page": "147 - 154",
      "img_start": 144,
      "img_end": 151,
      "read_time": "5 phút đọc",
      "summary": "Nhiều bạn nghĩ mình không biết vẽ nên không thể ghi chép bằng hình ảnh. Sự thật là bạn chỉ cần 5 yếu tố hình học cơ bản: Vuông, Tròn, Tam giác, Đường thẳng và Dấu chấm! Từ 5 yếu tố này, bạn có thể vẽ được mọi đồ vật, con người, cảm xúc trên thế giới.",
      "key_points": [
        "5 yếu tố cốt lõi: Hình vuông [■], Hình tròn [●], Hình tam giác [▲], Đường thẳng [—], Dấu chấm [•].",
        "Vẽ hình người que đơn giản: Đầu tròn, thân đường thẳng, chân tay thể hiện hành động.",
        "Vẽ khuôn mặt cảm xúc: Vui, buồn, ngạc nhiên, suy nghĩ, tức giận.",
        "Vẽ các loại khung chứa thông tin: Cuộn giấy, đám mây, bảng ghi chú, dải ruy băng.",
        "Vẽ các mũi tên chỉ hướng dẫn dắt dòng tư duy."
      ],
      "content_blocks": [
        {
          "type": "highlight",
          "text": "✏️ Trong Sketchnote, mục tiêu là Ý TƯỞNG chứ không phải là NGHỆ THUẬT. Vẽ đơn giản, rõ ràng, dễ hiểu là xuất sắc nhất!"
        }
      ]
    },
    {
      "id": "chuong-19",
      "part_id": "phan-3",
      "part_title": "Phần III: Phương Pháp Siêu Trí Nhớ",
      "title": "Chương 19: Phương pháp vẽ sơ đồ tư duy (Mindmap)",
      "subtitle": "Chuẩn quốc tế Tony Buzan - Công cụ ghi chép và tóm tắt bài học số 1 thế giới",
      "printed_page": "155 - 169",
      "img_start": 152,
      "img_end": 166,
      "read_time": "7 phút đọc",
      "summary": "Sơ đồ tư duy (Mindmap) do Giáo sư Tony Buzan sáng tạo, mô phỏng cấu trúc nơ-ron tự nhiên của não bộ. Sách hướng dẫn chi tiết quy luật vẽ Mindmap chuẩn quốc tế: Giấy ngang, Chủ đề trung tâm nổi bật, Nhánh cong tự nhiên, Từ khóa ngắn gọn, Mã màu theo nhánh và Hình ảnh minh họa sinh động.",
      "key_points": [
        "Quy tắc 1: Giấy đặt nằm ngang (A4 hoặc A3) để mở rộng tầm nhìn của mắt.",
        "Quy tắc 2: Hình ảnh trung tâm ở chính giữa trang giấy, dùng ít nhất 3 màu sắc, thể hiện chủ đề chính của bài.",
        "Quy tắc 3: Nhánh chính dày ở gốc và thon nhọn dần về ngọn, uốn cong tự nhiên như cành cây (không vẽ đường thẳng cứng nhắc).",
        "Quy tắc 4: Từ khóa (Keywords) viết in hoa trên nhánh chính, chiều dài của chữ bằng đúng chiều dài của nhánh.",
        "Quy tắc 5: Màu sắc của nhánh phụ phải đồng nhất với nhánh chính.",
        "Quy tắc 6: Thêm các biểu tượng, hình vẽ nhỏ minh họa trên các nhánh để kích thích não phải."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "🌟 Khi tóm tắt bài học bằng một trang Mindmap, trước mỗi kỳ thi bạn chỉ cần lướt mắt qua 5 phút là nắm trọn kiến thức của cả một chương!"
        }
      ]
    },
    {
      "id": "chuong-20",
      "part_id": "phan-4",
      "part_title": "Phần IV: Làm Thế Nào Để Có Bộ Não Khỏe Mạnh?",
      "title": "Chương 20: Ăn uống",
      "subtitle": "Cung cấp nhiên liệu chuẩn xác cho 86 tỷ nơ-ron thần kinh",
      "printed_page": "170 - 176",
      "img_start": 167,
      "img_end": 173,
      "read_time": "4 phút đọc",
      "summary": "Bộ não chỉ chiếm 2% trọng lượng cơ thể nhưng tiêu thụ tới 20% năng lượng toàn thân. Để não hoạt động với hiệu suất đỉnh cao, bạn cần cung cấp đủ Nước, chất béo tốt Omega-3, Vitamin và khoáng chất từ thực phẩm tự nhiên.",
      "key_points": [
        "Nước là số 1: Não bộ chứa hơn 75% là nước. Thiếu nước khiến não teo nhỏ tạm thời và giảm trí nhớ ngay lập tức.",
        "Công thức tính lượng nước uống mỗi ngày: Cân nặng (kg) x 0.04 = Lượng nước cần uống (lít). Ví dụ: 50kg x 0.04 = 2.0 lít nước/ngày.",
        "Bổ sung Omega-3: Thức ăn vàng cho não có trong cá hồi, hạt chia, hạt óc chó, quả bơ.",
        "Rau củ quả đa sắc màu: Cung cấp chất chống oxy hóa, bảo vệ tế bào não khỏi sự lão hóa.",
        "Hạn chế đồ ngọt nhân tạo, nước ngọt có ga và thức ăn nhanh nhiều dầu mỡ."
      ],
      "content_blocks": [
        {
          "type": "highlight",
          "text": "💧 Nhớ uống từng ngụm nhỏ và uống nước đều đặn trong ngày, đừng đợi đến khi khát mới uống!"
        }
      ]
    },
    {
      "id": "chuong-21",
      "part_id": "phan-4",
      "part_title": "Phần IV: Làm Thế Nào Để Có Bộ Não Khỏe Mạnh?",
      "title": "Chương 21: Nghỉ ngơi",
      "subtitle": "Thời gian vàng để não bộ dọn dẹp độc tố và củng cố ký ức dài hạn",
      "printed_page": "177 - 180",
      "img_start": 174,
      "img_end": 177,
      "read_time": "3 phút đọc",
      "summary": "Trong lúc ngủ say, hệ thống Glymphatic trong não sẽ hoạt động mạnh để dọn sạch các độc tố và chuyển các ký ức ngắn hạn trong ngày thành ký ức dài hạn. Thiếu ngủ là nguyên nhân hàng đầu gây đãng trí và suy giảm nhận thức.",
      "key_points": [
        "Giấc ngủ đêm đủ từ 7 đến 8 tiếng mỗi ngày đối với lứa tuổi học sinh.",
        "Tập thói quen ngủ trước 23h để cơ thể tiết hormone tăng trưởng và phục hồi tế bào.",
        "Giấc ngủ trưa ngắn từ 15 đến 20 phút giúp nạp lại năng lượng cho buổi chiều tỉnh táo.",
        "Quy tắc 20-20-20 cho mắt: Cứ học 20 phút, hãy nhìn ra xa 20 feet (khoảng 6 mét) trong 20 giây để mắt được thư giãn."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "🌙 Trước khi đi ngủ 30 phút, hãy tắt điện thoại và màn hình máy tính để ánh sáng xanh không làm ức chế hormone Melatonin!"
        }
      ]
    },
    {
      "id": "chuong-22",
      "part_id": "phan-4",
      "part_title": "Phần IV: Làm Thế Nào Để Có Bộ Nao Khỏe Mạnh?",
      "title": "Chương 22: Tập thể dục",
      "subtitle": "Kích thích tuần hoàn máu và các bài tập kết nối 2 bán cầu não",
      "printed_page": "181 - 182",
      "img_start": 178,
      "img_end": 179,
      "read_time": "2 phút đọc",
      "summary": "Tập thể dục giúp tim đập nhanh hơn, bơm máu giàu oxy và dưỡng chất lên não, đồng thời kích thích tiết ra Endorphin (hormone hạnh phúc) và BDNF - chất giúp sản sinh nơ-ron mới. Các bài tập chéo tay chân giúp kết nối cầu não giữa hai bán cầu.",
      "key_points": [
        "Vận động thể thao ít nhất 30 phút mỗi ngày: Chạy bộ, nhảy dây, bơi lội, đạp xe, đá cầu.",
        "Bài tập đồng bộ não bộ: Một tay xoa bụng - một tay vỗ đầu; hoặc bài tập Bắn Súng - Thỏ kết hợp hai bàn tay đổi chiều liên tục.",
        "Giúp giải tỏa căng thẳng học tập và nâng cao khả năng tập trung."
      ],
      "content_blocks": [
        {
          "type": "text",
          "text": "Chỉ 10 phút vận động nhẹ trước giờ học bài sẽ giúp bạn tiếp thu bài nhanh hơn gấp nhiều lần so với ngồi lì trên bàn khi cơ thể mệt mỏi."
        }
      ]
    },
    {
      "id": "chuong-23",
      "part_id": "phan-4",
      "part_title": "Phần IV: Làm Thế Nào Để Có Bộ Não Khỏe Mạnh?",
      "title": "Chương 23: Hít thở",
      "subtitle": "Kỹ thuật thở sâu bằng cơ hoành cung cấp oxy dồi dào cho não",
      "printed_page": "183 - 184",
      "img_start": 180,
      "img_end": 181,
      "read_time": "2 phút đọc",
      "summary": "Hầu hết mọi người chỉ thở nông bằng ngực trên, khiến đáy phổi bị ứ đọng khí cũ và não không nhận đủ oxy. Thở sâu bằng cơ hoành (bụng phình to khi hít vào, bụng hóp sâu khi thở ra) giúp đưa lượng oxy tối đa lên nuôi dưỡng các tế bào não.",
      "key_points": [
        "Cách thở cơ hoành: Đặt một tay lên bụng. Hít vào chậm và sâu bằng mũi, cảm nhận bụng phình to ra như quả bóng. Nín thở 2-3 giây. Sau đó thở ra chầm chậm bằng miệng, bụng xẹp lại.",
        "Tác dụng tức thì: Làm dịu hệ thần kinh giao cảm, xóa tan cảm giác lo lắng, hồi hộp trước giờ thi hoặc khi đứng trước đám đông.",
        "Thực hiện 3 đến 5 lần mỗi khi cảm thấy căng thẳng hoặc mất tập trung."
      ],
      "content_blocks": [
        {
          "type": "tip",
          "text": "🧘 Hít vào bình an - Thở ra mỉm cười. Oxy chính là nguồn thức ăn quan trọng nhất của não bộ!"
        }
      ]
    },
    {
      "id": "chuong-24",
      "part_id": "phan-4",
      "part_title": "Phần IV: Làm Thế Nào Để Có Bộ Não Khỏe Mạnh?",
      "title": "Chương 24: Năng lượng",
      "subtitle": "Nuôi dưỡng trường năng lượng tích cực từ nụ cười và lòng biết ơn",
      "printed_page": "185 - 187",
      "img_start": 182,
      "img_end": 184,
      "read_time": "3 phút đọc",
      "summary": "Cảm xúc là nguồn năng lượng chi phối toàn bộ hoạt động của bộ não. Căng thẳng, giận dữ, sợ hãi sẽ tiết ra Cortisol làm teo vùng hippocampus (trung tâm trí nhớ). Ngược lại, nụ cười, sự lạc quan, lòng biết ơn và tình yêu thương kích hoạt Dopamine và Serotonin, giúp não bộ sáng tạo và thông minh vượt trội.",
      "key_points": [
        "Nụ cười thần kỳ: Khi bạn cười, não bộ tự động phát tín hiệu an toàn và thư thái, mở rộng khả năng tiếp nhận thông tin.",
        "Lòng biết ơn mỗi ngày: Biết ơn cha mẹ, thầy cô, bạn bè và chính cơ thể khỏe mạnh của mình.",
        "Thái độ tích cực trước thử thách: Xem khó khăn là cơ hội để rèn luyện ý chí và trí thông minh.",
        "Tránh xa sự tức giận, so sánh và phàn nàn làm hao tổn năng lượng thần kinh."
      ],
      "content_blocks": [
        {
          "type": "quote",
          "text": "“Tâm an trí sáng. Khi tâm bạn tràn ngập niềm vui và tình yêu thương, bộ não của bạn sẽ đạt đến trạng thái thông thái và sáng tạo nhất.”"
        }
      ]
    },
    {
      "id": "phu-luc",
      "part_id": "phu-luc",
      "part_title": "Phụ lục & Đối tác",
      "title": "Phụ lục: Hệ thống đối tác 5 Phút Thuộc Bài & Lời kết",
      "subtitle": "Mạng lưới hơn 2000 đối tác trên khắp 63 tỉnh thành & Các nghiên cứu khoa học",
      "printed_page": "188 - 189",
      "img_start": 185,
      "img_end": 189,
      "read_time": "2 phút đọc",
      "summary": "Chương trình 5 Phút Thuộc Bài đã lan tỏa tới hơn 2000 đối tác và hàng triệu học sinh trên cả nước. Đi kèm các trích dẫn nghiên cứu khoa học quốc tế uy tín về Trí nhớ làm việc (Working Memory) của Alloway & Jaeggi trên Nature và PNAS.",
      "key_points": [
        "Mạng lưới đồng hành của hơn 2000 đối tác giáo dục khắp các tỉnh thành Việt Nam.",
        "Nghiên cứu của Alloway TP (Nature 2008): Trí nhớ làm việc (Working Memory) là yếu tố dự báo khả năng thành công trong học tập tốt hơn cả chỉ số IQ.",
        "Nghiên cứu của Jaeggi SM (PNAS 2008): Rèn luyện trí nhớ dẫn đến việc gia tăng khả năng giải quyết vấn đề và trí thông minh linh hoạt."
      ],
      "content_blocks": [
        {
          "type": "quote",
          "text": "“Các nghiên cứu cho thấy việc luyện tập trí nhớ để thách thức trí não của các học sinh có tác động trực tiếp đến việc tăng cường khả năng tập trung tại lớp và phát huy trí nhớ làm việc (Working memory), là yếu tố dự báo khả năng thành công trong học tập tốt hơn chỉ số IQ.”"
        }
      ]
    }
  ],
  "numbers0099": [
    {
      "num": "00",
      "name": "Trứng",
      "en": "Egg",
      "method1": "Trứng",
      "method2": "King Kong (KK)",
      "img_page": 38,
      "m2_page": 47
    },
    {
      "num": "01",
      "name": "Cái dù",
      "en": "Umbrella",
      "method1": "Cái dù",
      "method2": "Khăn mặt (KM)",
      "img_page": 38,
      "m2_page": 47
    },
    {
      "num": "02",
      "name": "Con vịt",
      "en": "Duck",
      "method1": "Con vịt",
      "method2": "Khung hình (KH)",
      "img_page": 38,
      "m2_page": 47
    },
    {
      "num": "03",
      "name": "Trái tim",
      "en": "Heart",
      "method1": "Trái tim",
      "method2": "Kính bơi (KB)",
      "img_page": 38,
      "m2_page": 47
    },
    {
      "num": "04",
      "name": "Cái ghế",
      "en": "Chair",
      "method1": "Cái ghế",
      "method2": "Khăn giấy (KG)",
      "img_page": 39,
      "m2_page": 48
    },
    {
      "num": "05",
      "name": "Trái táo",
      "en": "Apple",
      "method1": "Trái táo",
      "method2": "Khăn nhung (KN)",
      "img_page": 39,
      "m2_page": 48
    },
    {
      "num": "06",
      "name": "Vỏ ốc",
      "en": "Snail Shell",
      "method1": "Vỏ ốc",
      "method2": "Khách sạn (KS)",
      "img_page": 39,
      "m2_page": 48
    },
    {
      "num": "07",
      "name": "Cái rìu",
      "en": "Axe",
      "method1": "Cái rìu",
      "method2": "Khổng lồ (KL)",
      "img_page": 39,
      "m2_page": 48
    },
    {
      "num": "08",
      "name": "Người tuyết",
      "en": "Snowman",
      "method1": "Người tuyết",
      "method2": "Khúc tương (KT)",
      "img_page": 39,
      "m2_page": 48
    },
    {
      "num": "09",
      "name": "Hươu cao cổ",
      "en": "Giraffe",
      "method1": "Hươu cao cổ",
      "method2": "Kim chỉ (KC)",
      "img_page": 39,
      "m2_page": 48
    },
    {
      "num": "10",
      "name": "Con lợn (heo)",
      "en": "Pig",
      "method1": "Con lợn",
      "method2": "Mũ len (ML)",
      "img_page": 39,
      "m2_page": 49
    },
    {
      "num": "11",
      "name": "Cái thang",
      "en": "Ladder",
      "method1": "Cái thang",
      "method2": "Mũ miện (MM)",
      "img_page": 39,
      "m2_page": 49
    },
    {
      "num": "12",
      "name": "Cá mập",
      "en": "Shark",
      "method1": "Cá mập",
      "method2": "Mèo hoang (MH)",
      "img_page": 39,
      "m2_page": 49
    },
    {
      "num": "13",
      "name": "Con bướm",
      "en": "Butterfly",
      "method1": "Con bướm",
      "method2": "Máy bay (MB)",
      "img_page": 39,
      "m2_page": 49
    },
    {
      "num": "14",
      "name": "Thuyền",
      "en": "Boat",
      "method1": "Thuyền",
      "method2": "Máy giặt (MG)",
      "img_page": 39,
      "m2_page": 49
    },
    {
      "num": "15",
      "name": "Tiền",
      "en": "Money",
      "method1": "Tiền",
      "method2": "Mặt nạ (MN)",
      "img_page": 39,
      "m2_page": 49
    },
    {
      "num": "16",
      "name": "Ốc sên",
      "en": "Snail",
      "method1": "Ốc sên",
      "method2": "Mắt xích / Mặt sẹo (MS)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "17",
      "name": "Nốt nhạc",
      "en": "Musical Note",
      "method1": "Nốt nhạc",
      "method2": "Măng luộc (ML)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "18",
      "name": "Đèn giao thông",
      "en": "Traffic Lights",
      "method1": "Đèn giao thông",
      "method2": "Máy tính (MT)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "19",
      "name": "Con chó",
      "en": "Dog",
      "method1": "Con chó",
      "method2": "Móng chân (MC)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "20",
      "name": "Quả bom",
      "en": "Bomb",
      "method1": "Quả bom",
      "method2": "Hoa khế (HK)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "21",
      "name": "Nến / Đèn cầy",
      "en": "Candle",
      "method1": "Nến",
      "method2": "Hộp mực (HM)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "22",
      "name": "Thiên nga",
      "en": "Swan",
      "method1": "Thiên nga",
      "method2": "Hồng hạc (HH)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "23",
      "name": "Con công",
      "en": "Peacock",
      "method1": "Con công",
      "method2": "Hộp bút (HB)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "24",
      "name": "Con sóc",
      "en": "Squirrel",
      "method1": "Con sóc",
      "method2": "Hạt gạo (HG)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "25",
      "name": "Cần cẩu",
      "en": "Crane",
      "method1": "Cần cẩu",
      "method2": "Hạt ngọc (HN)",
      "img_page": 40,
      "m2_page": 50
    },
    {
      "num": "26",
      "name": "Gà trống",
      "en": "Rooster",
      "method1": "Gà trống",
      "method2": "Hộp sữa (HS)",
      "img_page": 40,
      "m2_page": 51
    },
    {
      "num": "27",
      "name": "Con chuột",
      "en": "Mouse",
      "method1": "Con chuột",
      "method2": "Hồ lô (HL)",
      "img_page": 40,
      "m2_page": 51
    },
    {
      "num": "28",
      "name": "Cà rốt & Thỏ",
      "en": "Carrot & Rabbit",
      "method1": "Cà rốt & thỏ",
      "method2": "Hạt tiêu (HT)",
      "img_page": 40,
      "m2_page": 51
    },
    {
      "num": "29",
      "name": "Chuột máy tính",
      "en": "Computer Mouse",
      "method1": "Chuột máy tính",
      "method2": "Hoa cúc (HC)",
      "img_page": 40,
      "m2_page": 51
    },
    {
      "num": "30",
      "name": "Núi & Mặt trời",
      "en": "Mountain & Sun",
      "method1": "Núi & Mặt trời",
      "method2": "Bánh khảo (BK)",
      "img_page": 41,
      "m2_page": 51
    },
    {
      "num": "31",
      "name": "Bóng đèn",
      "en": "Light Bulb",
      "method1": "Bóng đèn",
      "method2": "Bút máy (BM)",
      "img_page": 41,
      "m2_page": 51
    },
    {
      "num": "32",
      "name": "Vòi sen",
      "en": "Shower",
      "method1": "Vòi sen",
      "method2": "Bông hồng (BH)",
      "img_page": 41,
      "m2_page": 51
    },
    {
      "num": "33",
      "name": "Khúc xương",
      "en": "Bone",
      "method1": "Khúc xương",
      "method2": "Búp bê (BB)",
      "img_page": 41,
      "m2_page": 51
    },
    {
      "num": "34",
      "name": "Dưa hấu",
      "en": "Watermelon",
      "method1": "Dưa hấu",
      "method2": "Bàn ghế (BG)",
      "img_page": 41,
      "m2_page": 51
    },
    {
      "num": "35",
      "name": "Đu đủ",
      "en": "Papaya",
      "method1": "Đu đủ",
      "method2": "Bắp ngô (BN)",
      "img_page": 41,
      "m2_page": 51
    },
    {
      "num": "36",
      "name": "Hoa hồng",
      "en": "Rose",
      "method1": "Hoa hồng",
      "method2": "Bánh sinh nhật (BS)",
      "img_page": 41,
      "m2_page": 52
    },
    {
      "num": "37",
      "name": "Loa cầm tay",
      "en": "Hand Speaker",
      "method1": "Loa cầm tay",
      "method2": "Bóng lan (BL)",
      "img_page": 41,
      "m2_page": 52
    },
    {
      "num": "38",
      "name": "Nhẫn kim cương",
      "en": "Diamond Ring",
      "method1": "Nhẫn kim cương",
      "method2": "Bánh tét (BT)",
      "img_page": 41,
      "m2_page": 52
    },
    {
      "num": "39",
      "name": "Tê giác",
      "en": "Rhinoceros",
      "method1": "Tê giác",
      "method2": "Bồ câu (BC)",
      "img_page": 41,
      "m2_page": 52
    },
    {
      "num": "40",
      "name": "Bút chì",
      "en": "Pencil",
      "method1": "Bút chì",
      "method2": "Găng khô (GK)",
      "img_page": 41,
      "m2_page": 52
    },
    {
      "num": "41",
      "name": "Bình cứu hỏa",
      "en": "Fire Extinguisher",
      "method1": "Bình cứu hỏa",
      "method2": "Gỗ mục (GM)",
      "img_page": 41,
      "m2_page": 52
    },
    {
      "num": "42",
      "name": "Con diều",
      "en": "Kite",
      "method1": "Con diều",
      "method2": "Ghế hộp (GH)",
      "img_page": 41,
      "m2_page": 52
    },
    {
      "num": "43",
      "name": "Người lướt sóng",
      "en": "Surfer",
      "method1": "Người lướt sóng",
      "method2": "Gậy bóng chày (GB)",
      "img_page": 41,
      "m2_page": 52
    },
    {
      "num": "44",
      "name": "Rừng thông",
      "en": "Pine Forest",
      "method1": "Rừng thông",
      "method2": "Gạo gãy (GG)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "45",
      "name": "Nam châm",
      "en": "Magnet",
      "method1": "Nam châm",
      "method2": "Gối nhung (GN)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "46",
      "name": "Cung tên & Mục tiêu",
      "en": "Arrow & Target",
      "method1": "Cung tên",
      "method2": "Ghế xoay (GS)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "47",
      "name": "Cầu thang",
      "en": "Stair",
      "method1": "Cầu thang",
      "method2": "Gà lôi (GL)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "48",
      "name": "Đô-rê-mon",
      "en": "Doraemon",
      "method1": "Đô-rê-mon",
      "method2": "Gối thêu (GT)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "49",
      "name": "Ly / Tách",
      "en": "Cup",
      "method1": "Ly tách",
      "method2": "Gà con (GC)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "50",
      "name": "Xe đạp",
      "en": "Bicycle / Bike",
      "method1": "Xe đạp",
      "method2": "Nón kết (NK)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "51",
      "name": "Sư tử",
      "en": "Lion",
      "method1": "Sư tử",
      "method2": "Nón len / Nước mắm (NM)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "52",
      "name": "Xe hơi / Ô tô",
      "en": "Car",
      "method1": "Xe hơi",
      "method2": "Nồi hấp (NH)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "53",
      "name": "Răng",
      "en": "Tooth",
      "method1": "Răng",
      "method2": "Nồi cơm / Nải bầu (NB)",
      "img_page": 42,
      "m2_page": 53
    },
    {
      "num": "54",
      "name": "Người phục vụ",
      "en": "Waiter",
      "method1": "Người phục vụ",
      "method2": "Nồi gốm (NG)",
      "img_page": 42,
      "m2_page": 54
    },
    {
      "num": "55",
      "name": "Găng tay đấm bốc",
      "en": "Boxing Gloves",
      "method1": "Găng tay đấm bốc",
      "method2": "Nơ nhung (NN)",
      "img_page": 42,
      "m2_page": 54
    },
    {
      "num": "56",
      "name": "Phao cứu sinh",
      "en": "Lifebuoy Ring",
      "method1": "Phao cứu sinh",
      "method2": "Nến sáp (NS)",
      "img_page": 42,
      "m2_page": 54
    },
    {
      "num": "57",
      "name": "Cổng thành",
      "en": "City Gate",
      "method1": "Cổng thành",
      "method2": "Nụ lan (NL)",
      "img_page": 42,
      "m2_page": 54
    },
    {
      "num": "58",
      "name": "Chú hề",
      "en": "Clown",
      "method1": "Chú hề",
      "method2": "Nhà tranh (NT)",
      "img_page": 43,
      "m2_page": 54
    },
    {
      "num": "59",
      "name": "Mèo",
      "en": "Cat",
      "method1": "Mèo",
      "method2": "Nhẫn cưới (NC)",
      "img_page": 43,
      "m2_page": 54
    },
    {
      "num": "60",
      "name": "Cua",
      "en": "Crab",
      "method1": "Cua",
      "method2": "Súng lục / Sâm khô (SK)",
      "img_page": 43,
      "m2_page": 54
    },
    {
      "num": "61",
      "name": "Kẹo mút",
      "en": "Lollipop",
      "method1": "Kẹo mút",
      "method2": "Sổ mở (SM)",
      "img_page": 43,
      "m2_page": 54
    },
    {
      "num": "62",
      "name": "Điện thoại",
      "en": "Telephone",
      "method1": "Điện thoại",
      "method2": "Sao hỏa (SH)",
      "img_page": 43,
      "m2_page": 55
    },
    {
      "num": "63",
      "name": "Xe máy",
      "en": "Motorbike",
      "method1": "Xe máy",
      "method2": "Sâu bướm (SB)",
      "img_page": 43,
      "m2_page": 55
    },
    {
      "num": "64",
      "name": "Người lính",
      "en": "Soldier",
      "method1": "Người lính",
      "method2": "Sầu gai (SG)",
      "img_page": 43,
      "m2_page": 55
    },
    {
      "num": "65",
      "name": "Cú mèo",
      "en": "Owl",
      "method1": "Cú mèo",
      "method2": "Sò ngao (SN)",
      "img_page": 43,
      "m2_page": 55
    },
    {
      "num": "66",
      "name": "Tai nghe",
      "en": "Headphones",
      "method1": "Tai nghe",
      "method2": "Sừng sao (SS)",
      "img_page": 43,
      "m2_page": 55
    },
    {
      "num": "67",
      "name": "Cá",
      "en": "Fish",
      "method1": "Cá",
      "method2": "Sợi len (SL)",
      "img_page": 43,
      "m2_page": 55
    },
    {
      "num": "68",
      "name": "Hồ lô",
      "en": "Bottle Gourd",
      "method1": "Hồ lô",
      "method2": "Sọ dừa / Súp tỏi (ST)",
      "img_page": 43,
      "m2_page": 55
    },
    {
      "num": "69",
      "name": "Bát quái",
      "en": "Bagua",
      "method1": "Bát quái",
      "method2": "Sông Cửu Long (SC)",
      "img_page": 43,
      "m2_page": 55
    },
    {
      "num": "70",
      "name": "Sầu riêng",
      "en": "Durian",
      "method1": "Sầu riêng",
      "method2": "Lá khoai (LK)",
      "img_page": 43,
      "m2_page": 56
    },
    {
      "num": "71",
      "name": "Lá cờ",
      "en": "Flag",
      "method1": "Lá cờ",
      "method2": "Lông mày (LM)",
      "img_page": 43,
      "m2_page": 56
    },
    {
      "num": "72",
      "name": "Con ma",
      "en": "Ghost",
      "method1": "Con ma",
      "method2": "Lọ hoa (LH)",
      "img_page": 44,
      "m2_page": 56
    },
    {
      "num": "73",
      "name": "Con trâu",
      "en": "Buffalo",
      "method1": "Con trâu",
      "method2": "Lá bạc hà (LB)",
      "img_page": 44,
      "m2_page": 56
    },
    {
      "num": "74",
      "name": "Con đường",
      "en": "Road",
      "method1": "Con đường",
      "method2": "Lò gạch (LG)",
      "img_page": 44,
      "m2_page": 56
    },
    {
      "num": "75",
      "name": "Xe tăng",
      "en": "Tank",
      "method1": "Xe tăng",
      "method2": "Ly nước (LN)",
      "img_page": 44,
      "m2_page": 56
    },
    {
      "num": "76",
      "name": "Nước mía",
      "en": "Sugarcane Juice",
      "method1": "Nước mía",
      "method2": "Lốp xe / Lá sen (LS)",
      "img_page": 44,
      "m2_page": 56
    },
    {
      "num": "77",
      "name": "Súng",
      "en": "Gun",
      "method1": "Súng",
      "method2": "Lưỡi liềm (LL)",
      "img_page": 44,
      "m2_page": 56
    },
    {
      "num": "78",
      "name": "Cà chua",
      "en": "Tomato",
      "method1": "Cà chua",
      "method2": "Lá trà (LT)",
      "img_page": 44,
      "m2_page": 57
    },
    {
      "num": "79",
      "name": "Trái dừa",
      "en": "Coconut",
      "method1": "Trái dừa",
      "method2": "Lông cừu (LC)",
      "img_page": 44,
      "m2_page": 57
    },
    {
      "num": "80",
      "name": "Dấu chân",
      "en": "Footprint",
      "method1": "Dấu chân",
      "method2": "Tàu không gian (TK)",
      "img_page": 44,
      "m2_page": 57
    },
    {
      "num": "81",
      "name": "Loa thùng",
      "en": "Speaker Cabinet",
      "method1": "Loa thùng",
      "method2": "Tủ mây (TM)",
      "img_page": 44,
      "m2_page": 57
    },
    {
      "num": "82",
      "name": "Cá sấu",
      "en": "Crocodile",
      "method1": "Cá sấu",
      "method2": "Tàu hỏa (TH)",
      "img_page": 44,
      "m2_page": 57
    },
    {
      "num": "83",
      "name": "Bạch tuộc",
      "en": "Octopus",
      "method1": "Bạch tuộc",
      "method2": "Tủ bếp (TB)",
      "img_page": 44,
      "m2_page": 57
    },
    {
      "num": "84",
      "name": "Kéo",
      "en": "Scissors",
      "method1": "Kéo",
      "method2": "Tủ gỗ (TG)",
      "img_page": 44,
      "m2_page": 57
    },
    {
      "num": "85",
      "name": "Hạt đậu",
      "en": "Bean",
      "method1": "Hạt đậu",
      "method2": "Tổ nhện (TN)",
      "img_page": 44,
      "m2_page": 57
    },
    {
      "num": "86",
      "name": "Nho",
      "en": "Grapes",
      "method1": "Chùm nho",
      "method2": "Trà sữa (TS)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "87",
      "name": "Mắt kính & Sách",
      "en": "Glasses & Book",
      "method1": "Mắt kính & sách",
      "method2": "Tủ lạnh (TL)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "88",
      "name": "Còng tay",
      "en": "Handcuffs",
      "method1": "Còng tay",
      "method2": "Tàu thủy (TT)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "89",
      "name": "Thuốc nổ",
      "en": "Dynamite",
      "method1": "Thuốc nổ",
      "method2": "Trái chuối (TC)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "90",
      "name": "Dao & Thớt",
      "en": "Knife & Chopping Board",
      "method1": "Dao & thớt",
      "method2": "Chìa khóa (CK)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "91",
      "name": "Bóng rổ",
      "en": "Basketball",
      "method1": "Bóng rổ",
      "method2": "Chó mực (CM)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "92",
      "name": "Bóng bay",
      "en": "Balloon",
      "method1": "Bóng bay",
      "method2": "Chuột hồng (CH)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "93",
      "name": "Cái cúp",
      "en": "Trophy",
      "method1": "Cái cúp",
      "method2": "Cá bống (CB)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "94",
      "name": "Gốc cây",
      "en": "Stump",
      "method1": "Gốc cây",
      "method2": "Cá gỗ (CG)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "95",
      "name": "Bác sĩ",
      "en": "Doctor",
      "method1": "Bác sĩ",
      "method2": "Cá ngừ (CN)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "96",
      "name": "Trống",
      "en": "Drum",
      "method1": "Trống",
      "method2": "Chó sói (CS)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "97",
      "name": "Dê",
      "en": "Goat",
      "method1": "Con dê",
      "method2": "Chuột lắt (CL)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "98",
      "name": "Ong & Hoa",
      "en": "Bee & Flower",
      "method1": "Ong & hoa",
      "method2": "Cối xay / Chuông tre (CT)",
      "img_page": 45,
      "m2_page": 58
    },
    {
      "num": "99",
      "name": "Vợt cầu lông",
      "en": "Badminton Racket",
      "method1": "Vợt cầu lông",
      "method2": "Củ cải (CC)",
      "img_page": 45,
      "m2_page": 58
    }
  ],
  "alphabetLetters": [
    {
      "char": "A",
      "word": "Áo",
      "en": "Shirt",
      "img_page": 26
    },
    {
      "char": "B",
      "word": "Bò",
      "en": "Cow",
      "img_page": 26
    },
    {
      "char": "C",
      "word": "Cua",
      "en": "Crab",
      "img_page": 27
    },
    {
      "char": "D",
      "word": "Dù",
      "en": "Umbrella",
      "img_page": 27
    },
    {
      "char": "E",
      "word": "Em bé",
      "en": "Baby",
      "img_page": 28
    },
    {
      "char": "G",
      "word": "Gà",
      "en": "Chicken",
      "img_page": 28
    },
    {
      "char": "H",
      "word": "Hổ",
      "en": "Tiger",
      "img_page": 29
    },
    {
      "char": "I",
      "word": "Ỉn (heo)",
      "en": "Piglet",
      "img_page": 29
    },
    {
      "char": "K",
      "word": "Khỉ",
      "en": "Monkey",
      "img_page": 30
    },
    {
      "char": "L",
      "word": "Lợn / Lá",
      "en": "Pig / Leaf",
      "img_page": 30
    },
    {
      "char": "M",
      "word": "Mèo",
      "en": "Cat",
      "img_page": 31
    },
    {
      "char": "N",
      "word": "Nai",
      "en": "Deer",
      "img_page": 31
    },
    {
      "char": "O",
      "word": "Ong",
      "en": "Bee",
      "img_page": 32
    },
    {
      "char": "P",
      "word": "Phở / Pin",
      "en": "Battery",
      "img_page": 32
    },
    {
      "char": "Q",
      "word": "Quạt",
      "en": "Fan",
      "img_page": 33
    },
    {
      "char": "R",
      "word": "Rắn",
      "en": "Snake",
      "img_page": 33
    },
    {
      "char": "S",
      "word": "Sóc",
      "en": "Squirrel",
      "img_page": 34
    },
    {
      "char": "T",
      "word": "Tôm",
      "en": "Shrimp",
      "img_page": 34
    },
    {
      "char": "U",
      "word": "Uyên ương",
      "en": "Mandarin Duck",
      "img_page": 35
    },
    {
      "char": "V",
      "word": "Voi",
      "en": "Elephant",
      "img_page": 35
    },
    {
      "char": "X",
      "word": "Xe",
      "en": "Vehicle",
      "img_page": 36
    },
    {
      "char": "Y",
      "word": "Y tá",
      "en": "Nurse",
      "img_page": 36
    },
    {
      "char": "W",
      "word": "Water (Nước)",
      "en": "Water",
      "img_page": 37
    },
    {
      "char": "J",
      "word": "Joker (Chú hề)",
      "en": "Joker",
      "img_page": 37
    },
    {
      "char": "F",
      "word": "Fish (Con cá)",
      "en": "Fish",
      "img_page": 37
    },
    {
      "char": "Z",
      "word": "Zebra (Ngựa vằn)",
      "en": "Zebra",
      "img_page": 37
    }
  ]
};

if (typeof module !== 'undefined') module.exports = BOOK_DATA;
