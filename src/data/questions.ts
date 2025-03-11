import { Question, QuestionsByCategory } from "../types";

// Define questions by category
const questionsByCategory: QuestionsByCategory = {
  "Davlat tili": [
    {
      id: 1,
      question:
        "Davlat tili toʻgʻrisidagi Qonunga muvofiq, Oʻzbekiston Respublikasining davlat tili qaysi?",
      options: ["Oʻzbek tili", "Qoraqalpoq tili", "Rus tili", "Ingliz tili"],
      correctAnswer: "Oʻzbek tili",
      type: "Davlat tili",
    },
    {
      id: 2,
      question:
        "Qaysi javobda soʻzlar imlo qoidalariga muvofiq toʻgʻri yozilgan?",
      options: [
        "Taʼlim, maʼno, maʼmuriyat",
        "Ta'lim, ma'no, ma'muriyat",
        "Talim, mano, mamuriyat",
        "Taalim, maano, maamuriyat",
      ],
      correctAnswer: "Taʼlim, maʼno, maʼmuriyat",
      type: "Davlat tili",
    },
    {
      id: 3,
      question: "Qaysi javobda kelishik qoʻshimchalari toʻgʻri koʻrsatilgan?",
      options: [
        "Bosh, qaratqich, tushum, joʻnalish, oʻrin-payt, chiqish",
        "Bosh, qaratqich, tushum, joʻnalish, oʻrin, payt, chiqish",
        "Bosh, egalik, tushum, joʻnalish, oʻrin-payt, chiqish",
        "Bosh, qaratqich, tushum, joʻnalish, oʻrin, chiqish",
      ],
      correctAnswer: "Bosh, qaratqich, tushum, joʻnalish, oʻrin-payt, chiqish",
      type: "Davlat tili",
    },
    {
      id: 4,
      question:
        "Qaysi qatorda soʻzlarning yozilishi imlo qoidalariga muvofiq emas?",
      options: [
        "Taʼrif, taʼzim, taʼqib",
        "Inʼom, inʼikos, isʼteʼfo",
        "Masʼul, masʼala, maʼlum",
        "Taʼsir, taʼqiq, taʼlim",
      ],
      correctAnswer: "Inʼom, inʼikos, isʼteʼfo",
      type: "Davlat tili",
    },
    {
      id: 5,
      question: "Qaysi qatorda barcha soʻzlar atoqli ot hisoblanadi?",
      options: [
        "Toshkent, Bobur, Oʻzbekiston",
        "Kitob, Vatan, Qashqadaryo",
        "Samarqand, doʻstlik, Navoiy",
        "Orol, Amir Temur, bozor",
      ],
      correctAnswer: "Toshkent, Bobur, Oʻzbekiston",
      type: "Davlat tili",
    },
    {
      id: 6,
      question: "Qaysi qatorda barcha soʻzlar koʻplik shaklida qoʻllangan?",
      options: [
        "Kitoblar, daftarlar, qalamlar",
        "Bolalar, maktab, oʻquvchilar",
        "Daraxtlar, gullar, qalam",
        "Oʻqituvchilar, maktablar, kitob",
      ],
      correctAnswer: "Kitoblar, daftarlar, qalamlar",
      type: "Davlat tili",
    },
    {
      id: 7,
      question:
        "Qaysi qatorda faqat sifat soʻz turkumiga oid soʻzlar berilgan?",
      options: [
        "Chiroyli, baland, katta, yashil",
        "Yaxshi, tez, koʻp, baland",
        "Aqlli, kitob, chiroyli, katta",
        "Kecha, bugun, yaxshi, baland",
      ],
      correctAnswer: "Chiroyli, baland, katta, yashil",
      type: "Davlat tili",
    },
    {
      id: 8,
      question: "Qaysi qatorda faqat son soʻz turkumiga oid soʻzlar berilgan?",
      options: [
        "Besh, oʻn, yigirma, yuz",
        "Birinchi, ikki, koʻp, oz",
        "Uch, toʻrt, yaxshi, oltinchi",
        "Yetti, sakkiz, toʻqqiz, katta",
      ],
      correctAnswer: "Besh, oʻn, yigirma, yuz",
      type: "Davlat tili",
    },
    {
      id: 9,
      question: "Qaysi qatorda barcha soʻzlar boʻgʻinlarga toʻgʻri ajratilgan?",
      options: [
        "Ki-tob, mak-tab, o-na, va-tan",
        "Ki-to-b, mak-ta-b, o-na, va-tan",
        "Kit-ob, mak-tab, on-a, vat-an",
        "Kit-ob, ma-ktab, o-na, va-tan",
      ],
      correctAnswer: "Ki-tob, mak-tab, o-na, va-tan",
      type: "Davlat tili",
    },
    {
      id: 10,
      question:
        "Qaysi qatorda barcha soʻzlar oʻzak va qoʻshimchalarga toʻgʻri ajratilgan?",
      options: [
        "Kitob-lar, maktab-da, oʻquvchi-lar",
        "Kitob-la-r, mak-tabda, oʻquv-chilar",
        "Kitob-lar, mak-tab-da, oʻq-uvchi-lar",
        "Ki-tob-lar, maktab-da, oʻqu-vchi-lar",
      ],
      correctAnswer: "Kitob-lar, maktab-da, oʻquvchi-lar",
      type: "Davlat tili",
    },
  ],
  "Axborot kommunikatsiya texnologiyalari": [
    {
      id: 11,
      question:
        "Quyidagi qaysi dasturlash tili veb-saytlar yaratish uchun eng koʻp ishlatiladi?",
      options: ["JavaScript", "C++", "Python", "Swift"],
      correctAnswer: "JavaScript",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 12,
      question: "Kompyuter xotirasining asosiy turlari qaysilar?",
      options: ["RAM va ROM", "CPU va GPU", "HDD va SSD", "USB va HDMI"],
      correctAnswer: "RAM va ROM",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 13,
      question: "HTML qisqartmasining toʻliq maʼnosi nima?",
      options: [
        "HyperText Markup Language",
        "High Technology Modern Language",
        "Home Tool Markup Language",
        "Hyper Transfer Machine Language",
      ],
      correctAnswer: "HyperText Markup Language",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 14,
      question:
        "Quyidagi qaysi qurilma kompyuterga maʼlumot kiritish uchun ishlatiladi?",
      options: ["Klaviatura", "Monitor", "Printer", "Dinamik"],
      correctAnswer: "Klaviatura",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 15,
      question:
        "Quyidagi qaysi protokol internet orqali veb-sahifalarni uzatish uchun ishlatiladi?",
      options: ["HTTP", "FTP", "SMTP", "SSH"],
      correctAnswer: "HTTP",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 16,
      question:
        "Quyidagi qaysi dastur matn hujjatlarini yaratish va tahrirlash uchun ishlatiladi?",
      options: [
        "Microsoft Word",
        "Adobe Photoshop",
        "Microsoft Excel",
        "PowerPoint",
      ],
      correctAnswer: "Microsoft Word",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 17,
      question:
        "Quyidagi qaysi birlik kompyuter xotirasining eng kichik oʻlchov birligi hisoblanadi?",
      options: ["Bit", "Bayt", "Kilobayt", "Megabayt"],
      correctAnswer: "Bit",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 18,
      question: "IP-manzil nima?",
      options: [
        "Tarmoqda qurilmaga beriladigan noyob identifikator",
        "Internet provayderi tomonidan beriladigan parol",
        "Internetga ulanish uchun zarur boʻlgan dastur",
        "Veb-saytlarni yaratish uchun ishlatiladigan til",
      ],
      correctAnswer: "Tarmoqda qurilmaga beriladigan noyob identifikator",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 19,
      question:
        "Quyidagi qaysi dastur elektron jadvallar bilan ishlash uchun moʻljallangan?",
      options: [
        "Microsoft Excel",
        "Microsoft Word",
        "Adobe Photoshop",
        "Google Chrome",
      ],
      correctAnswer: "Microsoft Excel",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 20,
      question:
        "Kompyuter tarmoqlarida ma'lumotlar qanday ko'rinishda uzatiladi?",
      options: [
        "Paketlar ko'rinishida",
        "To'liq fayllar ko'rinishida",
        "Alohida baytlar ko'rinishida",
        "Butun dasturlar ko'rinishida",
      ],
      correctAnswer: "Paketlar ko'rinishida",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
  ],

  "Milliy qonunchilik": [
    {
      id: 31,
      question:
        "Davlat fuqarolik xizmati to'g'risidagi qonunchilikka binoan, davlat xizmatchilari qanday majburiyatga ega?",
      options: [
        "Qonunlarga qat'iy rioya qilish va kasbiy odobni saqlash",
        "Davlat organi rahbarining barcha shaxsiy farmoyishlarini so'zsiz bajarish",
        "Shaxsiy manfaatlarini himoya qilish",
        "Siyosiy partiyalar faoliyatida faol ishtirok etish",
      ],
      correctAnswer: "Qonunlarga qat'iy rioya qilish va kasbiy odobni saqlash",
      type: "Milliy qonunchilik",
    },
    {
      id: 32,
      question:
        "O'zbekiston Respublikasida referendum o'tkazish huquqi kimga tegishli?",
      options: [
        "Oliy Majlis Qonunchilik palatasi va Senatiga, shuningdek Prezidentga",
        "Faqat Oliy Majlis saylov komissiyasi tomonidan hal etiladi",
        "Mahalliy kengashlar birgalikda qaror qiladilar",
        "Faqat Markaziy saylov komissiyasi tomonidan hal etiladi",
      ],
      correctAnswer:
        "Oliy Majlis Qonunchilik palatasi va Senatiga, shuningdek Prezidentga",
      type: "Milliy qonunchilik",
    },
    {
      id: 33,
      question:
        "Oʻzbekiston Respublikasi Konstitutsiyasiga muvofiq, qaysi organ qonun chiqaruvchi hokimiyatni amalga oshiradi?",
      options: [
        "Oliy Majlis",
        "Vazirlar Mahkamasi",
        "Konstitutsiyaviy sud",
        "Prezident devoni",
      ],
      correctAnswer: "Oliy Majlis",
      type: "Milliy qonunchilik",
    },
    {
      id: 34,
      question:
        "Oʻzbekiston Respublikasi Konstitutsiyasiga koʻra, inson va fuqarolarning huquq va erkinliklari qaysi holatda cheklanishi mumkin?",
      options: [
        "Faqat qonunda koʻrsatilgan hollarda",
        "Mahalliy hokimiyat organlarining qaroriga koʻra",
        "Davlat organlarining xohishiga koʻra",
        "Jamoat tashkilotlarining talabiga koʻra",
      ],
      correctAnswer: "Faqat qonunda koʻrsatilgan hollarda",
      type: "Milliy qonunchilik",
    },
    {
      id: 35,
      question:
        "Oʻzbekiston Respublikasi Konstitutsiyasiga muvofiq, qaysi organ davlat hokimiyatining oliy vakillik organi hisoblanadi?",
      options: [
        "Oliy Majlis",
        "Vazirlar Mahkamasi",
        "Konstitutsiyaviy sud",
        "Prezident Administratsiyasi",
      ],
      correctAnswer: "Oliy Majlis",
      type: "Milliy qonunchilik",
    },
    {
      id: 36,
      question:
        "Oʻzbekiston Respublikasi Konstitutsiyasiga muvofiq, Prezident qancha muddatga saylanadi?",
      options: ["5 yil", "4 yil", "7 yil", "6 yil"],
      correctAnswer: "5 yil",
      type: "Milliy qonunchilik",
    },
    {
      id: 37,
      question:
        "Oʻzbekiston Respublikasi Konstitutsiyasiga muvofiq, qaysi organ ijro etuvchi hokimiyatni amalga oshiradi?",
      options: [
        "Vazirlar Mahkamasi",
        "Oliy Majlis",
        "Konstitutsiyaviy sud",
        "Oliy sud",
      ],
      correctAnswer: "Vazirlar Mahkamasi",
      type: "Milliy qonunchilik",
    },
    {
      id: 38,
      question:
        "Oʻzbekiston Respublikasi Konstitutsiyasiga muvofiq, qaysi organ sud hokimiyatini amalga oshiradi?",
      options: [
        "Konstitutsiyaviy sud, Oliy sud, sudlar",
        "Adliya vazirligi",
        "Bosh prokuratura",
        "Milliy gvardiya",
      ],
      correctAnswer: "Konstitutsiyaviy sud, Oliy sud, sudlar",
      type: "Milliy qonunchilik",
    },
    {
      id: 39,
      question:
        "Oʻzbekiston Respublikasi Konstitutsiyasiga muvofiq, qaysi organ qonunlarning konstitutsiyaviyligini nazorat qiladi?",
      options: [
        "Konstitutsiyaviy sud",
        "Oliy sud",
        "Bosh prokuratura",
        "Adliya vazirligi",
      ],
      correctAnswer: "Konstitutsiyaviy sud",
      type: "Milliy qonunchilik",
    },
    {
      id: 40,
      question:
        "Oʻzbekiston Respublikasi Konstitutsiyasiga muvofiq, qaysi organ davlat byudjetini qabul qiladi?",
      options: [
        "Oliy Majlis",
        "Vazirlar Mahkamasi",
        "Prezident",
        "Moliya vazirligi",
      ],
      correctAnswer: "Oliy Majlis",
      type: "Milliy qonunchilik",
    },
  ],

  IQ: [
    {
      id: 21,
      question:
        "Agar 8 ishchi bir ishni 6 kunda bajarsa, xuddi shu ishni 12 ishchi necha kunda bajaradi?",
      options: ["4", "5", "3", "2"],
      correctAnswer: "4",
      type: "IQ",
    },
    {
      id: 22,
      question:
        "Quyidagi ketma-ketlikdagi keyingi son qaysi? 2, 4, 8, 16, 32, ...",
      options: ["64", "48", "56", "40"],
      correctAnswer: "64",
      type: "IQ",
    },
    {
      id: 23,
      question: "Agar 3 + 3 × 3 - 3 ÷ 3 = ? bo'lsa, natija nechiga teng?",
      options: ["9", "10", "11", "12"],
      correctAnswer: "11",
      type: "IQ",
    },
    {
      id: 24,
      question:
        "Agar bugun dushanba bo'lsa, 100 kundan keyin qanday kun bo'ladi?",
      options: ["Dushanba", "Seshanba", "Chorshanba", "Payshanba"],
      correctAnswer: "Chorshanba",
      type: "IQ",
    },
    {
      id: 25,
      question:
        "5 ta ketma-ket juft sonlar yig'indisi 70 ga teng. Eng kichik son qaysi?",
      options: ["10", "8", "6", "4"],
      correctAnswer: "10",
      type: "IQ",
    },
    {
      id: 26,
      question:
        "Quyidagi ketma-ketlikda keyingi son qaysi? 1, 4, 9, 16, 25, ...",
      options: ["36", "49", "35", "30"],
      correctAnswer: "36",
      type: "IQ",
    },
    {
      id: 27,
      question: "Agar 3 × 5 = 15, 4 × 6 = 24, 5 × 7 = 35 bo'lsa, 8 × 9 = ?",
      options: ["72", "63", "81", "64"],
      correctAnswer: "72",
      type: "IQ",
    },
    {
      id: 28,
      question:
        "Agar A = 1, B = 2, C = 3 ... Z = 26 bo'lsa, 'CODE' so'zidagi harflar qiymatlarining yig'indisi nechiga teng?",
      options: ["27", "30", "25", "32"],
      correctAnswer: "27",
      type: "IQ",
    },
    {
      id: 29,
      question:
        "Quyidagi ketma-ketlikda keyingi son qaysi? 2, 6, 12, 20, 30, ...",
      options: ["42", "40", "36", "48"],
      correctAnswer: "42",
      type: "IQ",
    },
    {
      id: 30,
      question:
        "Agar bir quti qizil, ko'k va yashil sharlardan iborat bo'lsa, ko'zi bog'langan holda kamida nechta shar olish kerak bo'ladi, har bir rangdan kamida bittadan shar olish uchun?",
      options: ["7", "6", "3", "4"],
      correctAnswer: "7",
      type: "IQ",
    },
  ],
};

// Shuffle function for arrays
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Shuffle questions within each category
const shuffledQuestionsByCategory: QuestionsByCategory = {
  "Davlat tili": shuffleArray(questionsByCategory["Davlat tili"]),
  "Axborot kommunikatsiya texnologiyalari": shuffleArray(
    questionsByCategory["Axborot kommunikatsiya texnologiyalari"],
  ),
  "Milliy qonunchilik": shuffleArray(questionsByCategory["Milliy qonunchilik"]),
  IQ: shuffleArray(questionsByCategory.IQ),
};

// Flatten the questions array for compatibility with existing components
export const questions: Question[] = [
  ...shuffledQuestionsByCategory["Davlat tili"],
  ...shuffledQuestionsByCategory["Milliy qonunchilik"],
  ...shuffledQuestionsByCategory["Axborot kommunikatsiya texnologiyalari"],
  ...shuffledQuestionsByCategory.IQ,
];

// Also export the shuffled questions by category
export { shuffledQuestionsByCategory as questionsByCategory };
