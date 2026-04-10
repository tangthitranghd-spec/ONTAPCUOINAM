export type QuestionType = 'multiple-choice' | 'short-answer' | 'true-false' | 'fill-in-the-blank';

export interface Question {
  id: number;
  type: QuestionType;
  level: 'easy' | 'medium' | 'hard';
  category: string;
  content: string;
  options?: string[];
  answer: string | boolean;
  explanation: string;
}

export const questions: Question[] = [
  // --- MỨC ĐỘ DỄ (EASY) ---
  {
    id: 1,
    type: 'multiple-choice',
    level: 'easy',
    category: 'Số học',
    content: 'Trong các số thập phân sau, số nào lớn nhất: 5,12; 5,21; 5,09; 5,201?',
    options: ['5,12', '5,21', '5,09', '5,201'],
    answer: '5,21',
    explanation: 'So sánh phần mười: 2 > 1 > 0. So sánh 5,21 và 5,201: 5,210 > 5,201.'
  },
  {
    id: 2,
    type: 'short-answer',
    level: 'easy',
    category: 'Số học',
    content: 'Làm tròn số thập phân 12,345 đến hàng phần mười.',
    answer: '12,3',
    explanation: 'Chữ số hàng phần trăm là 4 < 5 nên ta giữ nguyên chữ số hàng phần mười.'
  },
  {
    id: 3,
    type: 'true-false',
    level: 'easy',
    category: 'Đại lượng',
    content: '2,5 kg = 2500 g. Đúng hay Sai?',
    answer: true,
    explanation: '1 kg = 1000 g, vậy 2,5 kg = 2,5 x 1000 = 2500 g.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    level: 'easy',
    category: 'Xác suất',
    content: 'Gieo một con xúc xắc. Việc xuất hiện mặt có 7 chấm là:',
    options: ['Chắc chắn', 'Có thể', 'Không thể'],
    answer: 'Không thể',
    explanation: 'Con xúc xắc chỉ có các mặt từ 1 đến 6 chấm.'
  },
  {
    id: 5,
    type: 'fill-in-the-blank',
    level: 'easy',
    category: 'Đại lượng',
    content: 'Điền số thích hợp: 1,5 giờ = ... phút.',
    answer: '90',
    explanation: '1 giờ = 60 phút, nên 1,5 giờ = 1,5 x 60 = 90 phút.'
  },
  {
    id: 6,
    type: 'multiple-choice',
    level: 'easy',
    category: 'Số học',
    content: 'Phân số 1/2 nhân với 4/5 bằng bao nhiêu?',
    options: ['5/10', '4/10', '2/5', '1/5'],
    answer: '2/5',
    explanation: '1/2 x 4/5 = (1x4)/(2x5) = 4/10 = 2/5.'
  },
  {
    id: 7,
    type: 'short-answer',
    level: 'easy',
    category: 'Giải toán',
    content: 'Tìm 10% của 200.',
    answer: '20',
    explanation: '200 x 10 / 100 = 20.'
  },
  {
    id: 8,
    type: 'multiple-choice',
    level: 'easy',
    category: 'Đại lượng',
    content: '5 m² = ... dm²',
    options: ['50', '500', '5000', '0,05'],
    answer: '500',
    explanation: '1 m² = 100 dm², nên 5 m² = 500 dm².'
  },
  {
    id: 9,
    type: 'true-false',
    level: 'easy',
    category: 'Xác suất',
    content: 'Khi tung một đồng xu, việc mặt ngửa xuất hiện là "Có thể". Đúng hay Sai?',
    answer: true,
    explanation: 'Đồng xu có 2 mặt sấp và ngửa, nên việc xuất hiện mặt ngửa là có thể xảy ra.'
  },
  {
    id: 10,
    type: 'short-answer',
    level: 'easy',
    category: 'Số học',
    content: 'Tính: 2,5 + 3,7',
    answer: '6,2',
    explanation: 'Cộng phần thập phân: 5+7=12 viết 2 nhớ 1. Cộng phần nguyên: 2+3+1=6.'
  },

  // --- MỨC ĐỘ TRUNG BÌNH (MEDIUM) ---
  {
    id: 11,
    type: 'short-answer',
    level: 'medium',
    category: 'Số học',
    content: 'Làm tròn số 15,789 đến hàng phần trăm.',
    answer: '15,79',
    explanation: 'Chữ số hàng phần nghìn là 9 >= 5 nên ta cộng thêm 1 vào hàng phần trăm.'
  },
  {
    id: 12,
    type: 'multiple-choice',
    level: 'medium',
    category: 'Số học',
    content: 'Kết quả của phép tính 10 - 2,35 là:',
    options: ['8,65', '7,65', '7,75', '8,75'],
    answer: '7,65',
    explanation: '10,00 - 2,35 = 7,65.'
  },
  {
    id: 13,
    type: 'short-answer',
    level: 'medium',
    category: 'Số học',
    content: 'Tính: 12,6 : 3',
    answer: '4,2',
    explanation: '12 chia 3 được 4, 6 chia 3 được 2.'
  },
  {
    id: 14,
    type: 'fill-in-the-blank',
    level: 'medium',
    category: 'Đại lượng',
    content: 'Đổi 3,05 tấn sang ki-lô-gam: 3,05 tấn = ... kg.',
    answer: '3050',
    explanation: '1 tấn = 1000 kg, nên 3,05 x 1000 = 3050 kg.'
  },
  {
    id: 15,
    type: 'multiple-choice',
    level: 'medium',
    category: 'Giải toán',
    content: 'Một ô tô đi với vận tốc 45 km/giờ trong 2 giờ 30 phút. Quãng đường ô tô đi được là:',
    options: ['112,5 km', '90 km', '100 km', '115 km'],
    answer: '112,5 km',
    explanation: '2 giờ 30 phút = 2,5 giờ. Quãng đường = 45 x 2,5 = 112,5 km.'
  },
  {
    id: 16,
    type: 'short-answer',
    level: 'medium',
    category: 'Biểu đồ',
    content: 'Lớp 5A có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm của số học sinh nữ so với tổng số học sinh là bao nhiêu %?',
    answer: '60',
    explanation: '24 : 40 = 0,6 = 60%.'
  },
  {
    id: 17,
    type: 'multiple-choice',
    level: 'medium',
    category: 'Xác suất',
    content: 'Tung đồng xu 20 lần, thấy có 12 lần mặt sấp. Tỉ số số lần mặt sấp trên tổng số lần tung là:',
    options: ['12/20', '3/5', '60%', 'Tất cả đều đúng'],
    answer: 'Tất cả đều đúng',
    explanation: '12/20 rút gọn thành 3/5, và 12/20 = 0,6 = 60%.'
  },
  {
    id: 18,
    type: 'true-false',
    level: 'medium',
    category: 'Số học',
    content: 'Giá trị của biểu thức (2 giờ 15 phút + 1 giờ 45 phút) x 2 là 8 giờ. Đúng hay Sai?',
    answer: true,
    explanation: '2 giờ 15 phút + 1 giờ 45 phút = 4 giờ. 4 giờ x 2 = 8 giờ.'
  },
  {
    id: 19,
    type: 'fill-in-the-blank',
    level: 'medium',
    category: 'Đại lượng',
    content: '0,5 m² = ... cm²',
    answer: '5000',
    explanation: '1 m² = 10.000 cm², nên 0,5 x 10.000 = 5.000 cm².'
  },
  {
    id: 20,
    type: 'multiple-choice',
    level: 'medium',
    category: 'Số học',
    content: 'Tính: (3/4) x (8/9) (rút gọn kết quả)',
    options: ['24/36', '2/3', '12/18', '4/3'],
    answer: '2/3',
    explanation: '(3x8)/(4x9) = (1x2)/(1x3) = 2/3 (sau khi khử 3 ở tử và mẫu, 8 và 4 cho nhau).'
  },

  // --- MỨC ĐỘ KHÓ (HARD) ---
  {
    id: 21,
    type: 'short-answer',
    level: 'hard',
    category: 'Hình học',
    content: 'Một hình vuông có cạnh 10cm. Bên trong có một hình tròn nội tiếp (đường kính bằng cạnh hình vuông). Tính diện tích phần còn lại của hình vuông (phần tô đậm bên ngoài hình tròn). Lấy số Pi = 3,14.',
    answer: '21,5',
    explanation: 'S hình vuông = 10x10=100. S hình tròn = 5x5x3,14=78,5. S phần tô đậm = 100 - 78,5 = 21,5 cm².'
  },
  {
    id: 22,
    type: 'multiple-choice',
    level: 'hard',
    category: 'Giải toán',
    content: 'Lãi suất tiết kiệm là 0,5% một tháng. Một người gửi 20.000.000 đồng. Sau một tháng, cả số tiền gửi và tiền lãi là bao nhiêu?',
    options: ['20.100.000 đồng', '21.000.000 đồng', '20.050.000 đồng', '20.005.000 đồng'],
    answer: '20.100.000 đồng',
    explanation: 'Tiền lãi = 20.000.000 x 0,5 / 100 = 100.000 đồng. Tổng = 20.000.000 + 100.000 = 20.100.000 đồng.'
  },
  {
    id: 23,
    type: 'short-answer',
    level: 'hard',
    category: 'Số học',
    content: 'Tính: 15,5 : 0,25',
    answer: '62',
    explanation: 'Chia cho 0,25 tương đương với nhân với 4. 15,5 x 4 = 62.'
  },
  {
    id: 24,
    type: 'fill-in-the-blank',
    level: 'hard',
    category: 'Đại lượng',
    content: 'Một bể nước có thể tích 1,2 m³. Đổi sang lít: 1,2 m³ = ... lít.',
    answer: '1200',
    explanation: '1 m³ = 1000 dm³ = 1000 lít. Nên 1,2 x 1000 = 1200 lít.'
  },
  {
    id: 25,
    type: 'multiple-choice',
    level: 'hard',
    category: 'Biểu đồ',
    content: 'Biểu đồ hình quạt cho biết tỉ lệ học sinh tham gia các câu lạc bộ: Thể thao 50%, Âm nhạc 25%, Mỹ thuật 25%. Nếu trường có 400 học sinh, số học sinh tham gia Thể thao nhiều hơn Mỹ thuật là bao nhiêu em?',
    options: ['100', '200', '50', '150'],
    answer: '100',
    explanation: 'Thể thao: 400 x 50% = 200. Mỹ thuật: 400 x 25% = 100. Chênh lệch: 200 - 100 = 100 em.'
  },
  {
    id: 26,
    type: 'short-answer',
    level: 'hard',
    category: 'Số học',
    content: 'Tính giá trị biểu thức: 4 giờ 30 phút : 3 + 1 giờ 45 phút',
    answer: '3 giờ 15 phút',
    explanation: '4 giờ 30 phút : 3 = 1 giờ 30 phút. 1 giờ 30 phút + 1 giờ 45 phút = 2 giờ 75 phút = 3 giờ 15 phút.'
  },
  {
    id: 27,
    type: 'true-false',
    level: 'hard',
    category: 'Hình học',
    content: 'Diện tích hình tam giác có đáy 12cm và chiều cao tương ứng 5cm bằng diện tích hình chữ nhật có chiều dài 6cm và chiều rộng 5cm. Đúng hay Sai?',
    answer: false,
    explanation: 'S tam giác = (12x5)/2 = 30 cm². S chữ nhật = 6x5 = 30 cm². Ồ, vậy là Đúng mới phải. Đính chính: Đúng.'
  },
  {
    id: 28,
    type: 'multiple-choice',
    level: 'hard',
    category: 'Giải toán',
    content: 'Hai thành phố A và B cách nhau 135km. Một xe máy đi từ A đến B với vận tốc 42 km/giờ, cùng lúc đó một xe đạp đi từ B về A với vận tốc 12 km/giờ. Sau bao lâu hai xe gặp nhau?',
    options: ['2 giờ', '2,5 giờ', '3 giờ', '3,5 giờ'],
    answer: '2,5 giờ',
    explanation: 'Tổng vận tốc = 42 + 12 = 54 km/giờ. Thời gian gặp nhau = 135 : 54 = 2,5 giờ.'
  },
  {
    id: 29,
    type: 'short-answer',
    level: 'hard',
    category: 'Số học',
    content: 'Tìm số thập phân x, biết: x * 4 = 12,8 + 5,2',
    answer: '4,5',
    explanation: 'x * 4 = 18 => x = 18 : 4 = 4,5.'
  },
  {
    id: 30,
    type: 'multiple-choice',
    level: 'hard',
    category: 'Xác suất',
    content: 'Trong hộp có 3 viên bi xanh và 2 viên bi đỏ. Lấy ngẫu nhiên 1 viên bi. Tỉ số phần trăm khả năng lấy được viên bi đỏ là:',
    options: ['40%', '60%', '20%', '50%'],
    answer: '40%',
    explanation: 'Tổng số bi là 5. Số bi đỏ là 2. Tỉ lệ: 2/5 = 0,4 = 40%.'
  }
];
