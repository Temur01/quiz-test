import { Question, QuestionsByCategory } from "../types";

// Define questions by category
const questionsByCategory: QuestionsByCategory = {
  "Davlat tili": [
    {
      id: 1,
      question:
        "Ushbu so‘zlardan nechtasi imloviy jihatdan to‘g‘ri yozilgan? Muammo, mas’uliyat, yuristkonsult, talofat",
      options: ["2", "3", "4", "1"],
      correctAnswer: "2",
      type: "Davlat tili",
    },
    {
      id: 2,
      question:
        "Ushbu so‘zlardan nechtasida imloviy xatolik uchraydi? Muammo, mas’uliyat, yuristkonsult, talofat",
      options: ["2", "1", "3", "4"],
      correctAnswer: "2",
      type: "Davlat tili",
    },
    {
      id: 3,
      question:
        "Ushbu so‘zlardan nechtasi imloviy jihatdan to‘g‘ri yozilgan? Hasharot, talon-toroj, tanazzul, taxqirlamoq",
      options: ["2", "4", "3", "1"],
      correctAnswer: "2",
      type: "Davlat tili",
    },
    {
      id: 4,
      question:
        "Ushbu so‘zlardan nech tasida imloviy xatolik uchraydi? Hasharot, talon-toroj, tanazzul, taxqirlamoq",
      options: ["3", "1", "2", "4"],
      correctAnswer: "3",
      type: "Davlat tili",
    },
    {
      id: 5,
      question:
        "Ushbu so‘zlardan nech tasi imloviy jihatdan to‘g‘ri yozilgan? Taxlit, to’palon, uvishmoq, uyquchi",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
      type: "Davlat tili",
    },
    {
      id: 6,
      question:
        "Ushbu so‘zlardan nech tasida imloviy xatolik uchraydi? Taxlit, to’palon, uvishmoq, uyquchi",
      options: ["2", "3", "4", "1"],
      correctAnswer: "2",
      type: "Davlat tili",
    },
    {
      id: 7,
      question:
        "Qaysi javobda kelishik qo‘shimchasini qo‘llash bilan bog‘liq xatolik uchraydi?",
      options: [
        "Ko‘pincha shaxsiy varaqani ayrim qismlari noto‘g‘ri to‘ldiriladi.",
        "Xodimlarning shaxsiy varaqalarini elektron tarzda to‘ldirish mumkin.",
        "Hujjatlar yig‘majildidagi barcha hujjatlar xronologik tartibda joylashtiriladi.",
        "Hujjatlar muassasa faoliyatini o‘rganishda muhim manbadir.",
      ],
      correctAnswer:
        "Ko‘pincha shaxsiy varaqani ayrim qismlari noto‘g‘ri to‘ldiriladi.",
      type: "Davlat tili",
    },
    {
      id: 8,
      question:
        "Qaysi javobda kelishik qo‘shimchasini qo‘llash bilan bog‘liq xatolik uchraydi?",
      options: [
        "Xodimlarning shaxsiy varaqalarini elektron tarzda to‘ldirish mumkin.",
        "Hujjatlar yig‘majildidagi barcha hujjatlar xronologik tartibda joylashtiriladi.",
        "Hujjatlar muassasa faoliyatini o‘rganishda muhim manbadir.",
        "Ko‘pincha shaxsiy varaqani ayrim qismlari noto‘g‘ri to‘ldiriladi.",
      ],
      correctAnswer:
        "Ko‘pincha shaxsiy varaqani ayrim qismlari noto‘g‘ri to‘ldiriladi.",
      type: "Davlat tili",
    },
    {
      id: 9,
      question:
        "Ushbu gapdagi nuqtalar o‘rniga qo‘shimchalar ketma-ketligi to‘g‘ri berilgan javobni aniqlang. _Mehnat shartnomasi bekor qilingan kuni ma’muriyat xodim… u… mehnat daftarchasi… va mehnat shartnomasi… bekor qilinganligi haqidagi buyruq nusxasi… berishi shart._",
      options: [
        "-ga, -ning, -ni, -ning, -ni",
        "-da, -ni, -ning, -ning, -ni",
        "-ga, -ning, -ni, -da, -ni",
        "-ga, -ning, -ni, -ni, -ni",
      ],
      correctAnswer: "-ga, -ning, -ni, -ning, -ni",
      type: "Davlat tili",
    },
    {
      id: 10,
      question:
        "Ushbu gapda nuqtalar o‘rniga qo‘yilishi lozim bo‘lgan qo‘shimchalar ketma-ketligi to‘g‘ri berilgan javobni aniqlang. _Xalqaro aloqalar… qabul qilingan tijorat xatlari… hozirgi shakli, u… yozilish odobi 150 yil muqaddam Angliya… yuzaga kelgan._",
      options: [
        "-da, -ning, -ning, -da",
        "-da, -ni, -ning, -ga",
        "-ga, -ning, -ni, -da",
        "-da, -ning, -ni, -da",
      ],
      correctAnswer: "-da, -ning, -ni, -da",
      type: "Davlat tili",
    },
  ],
  "Axborot kommunikatsiya texnologiyalari": [
    {
      id: 21,
      question:
        "Asosan matnli fayllarni formatlash elementlari ishlatilmasdan tayyorlaydigan dasturlarga nima deb aytiladi?",
      options: [
        "Matn muharrirlari",
        "Matn pressorlari",
        "elektron jadvallar",
        "elektron pressorlari",
      ],
      correctAnswer: "Matn muharrirlari",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 22,
      question:
        "Matnni formatlash, hujjatga grafika va boshqa ob’ektlar joylash imkoniyatini beradigan dastur nima deb aytiladi?",
      options: [
        "Matn pressorlari",
        "Matn muharrirlari",
        "elektron jadvallar",
        "elektron pressorlari",
      ],
      correctAnswer: "Matn pressorlari",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 23,
      question:
        "Klaviatura yordamida kiritiladigan va monitor ekranida ko‘rinadigan xar qanday harf, raqam, tinish belgisi, arifmetik amal belgisi nima deb ataladi?",
      options: ["Belgi", "So‘z", "Abzas", "Matn"],
      correctAnswer: "Belgi",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 24,
      question:
        "Windows o.t da ishlaydigan matn muharrirlariga kiruvchi dasturlar.",
      options: [
        "WordPad, Microsoft Word, Works kabi dasturlarni",
        "LATES, FOTON, PE2RUS",
        "QEDIT, LEXICON, WD",
        "WordPad, Microsoft excel",
      ],
      correctAnswer: "WordPad, Microsoft Word, Works kabi dasturlarni",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 25,
      question:
        "Amaldagi Microsoft Office Word 2016 versiyasi uchun mo‘ljallangan operatsion tizim .",
      options: ["Windows va MacOS", "Unix", "Linux", "MsDos"],
      correctAnswer: "Windows va MacOS",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 26,
      question:
        "Mexanik mashinalargacha bo‘lgan davrdagi sun’iy hisoblash vositalarini aniqlang.",
      options: [
        "Abakus (Sodda hisoblash vositasi)",
        "Blaise Pascal tomonidan yaratilgan Pascalina",
        "Gottfried Wilhelm Leibnizing Stepmatika mashinasi",
        "Birka",
      ],
      correctAnswer: "Abakus (Sodda hisoblash vositasi)",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 27,
      question: "Quyidagi tezkor tugmalardan qaysi biri YANGI",
      options: ["Ctrl + N", "Ctrl + 0", "Ctrl + F12", "Ctrl + W"],
      correctAnswer: "Ctrl + N",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 28,
      question:
        "Matnlar taxrirlovchisi kop amalli dasturdan iborat matn muharriri nima?",
      options: [
        "Microsoft Word 97",
        "Microsoft oce 97",
        "Excel",
        "Microsoft 79",
      ],
      correctAnswer: "Microsoft Word 97",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 29,
      question:
        "Klaviaturaning qaysi klavishlarini bosish orqali matnni yakunlash mumkin?",
      options: ["Alt + F4", "Alt + F1", "'Alt + Ctrl' po'radke", "Alt + F12"],
      correctAnswer: "Alt + F4",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 30,
      question:
        "Excel dasturida matematik funksiyalardan PRODUCT nimani hisoblaydi?",
      options: [
        "Argument qiymatlarini kopaytmasini hisoblaydi",
        "Sonning kvadrat ildizini hisoblaydi",
        "Sonning sinusini hisoblaydi",
        "Sonning tangensini hisoblaydi",
      ],
      correctAnswer: "Argument qiymatlarini kopaytmasini hisoblaydi",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 31,
      question:
        "Excel dasturida jadvaldagi barcha kataklarni ajratish uchun qaysi qoshutmadan foydalaniladi?",
      options: ["Ctrl + A", "Ctrl + Shift", "Ctrl + Alt", "Ctrl + D"],
      correctAnswer: "Ctrl + A",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 32,
      question:
        "Power Point dasturida yangi taqdimot yaratish uchun qanday menyuga kiriladi va u yerdan qanday buyruq bosiladi?",
      options: [
        "Fayl menyusi va Создать",
        "Faqat fayl menyusi",
        "Faqat Создать",
        "вставка va Создать",
      ],
      correctAnswer: "Fayl menyusi va Создать",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 33,
      question:
        "Microsoft Word dasturining eng so‘nggi versiyalarida qaysi yangi imkoniyatlar mavjud?",
      options: [
        "Bulutli saqlash va birgalikda ishlash imkoniyati.",
        "Faqat rasm qo‘yish imkoniyati.",
        "Yalpi matindan foydalanish imkoniyati.",
        "Hujjatlarni faqat chop etish imkoniyati.",
      ],
      correctAnswer: "Bulutli saqlash va birgalikda ishlash imkoniyati.",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 34,
      question:
        "Microsoft Word dasturida matnni qalin (bold) qilish uchun qanday tugmalar ishlatiladi?",
      options: ["Ctrl+B", "Ctrl+U", "Ctrl+H", "Ctrl+S"],
      correctAnswer: "Ctrl+B",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 35,
      question: "Excel dasturida “IF” funksiyasi qanday ishlatiladi?",
      options: [
        "Belgilangandan shartga qarab qiymatni tanlash",
        "Matnni to‘liq o‘zgartirish",
        "Raqamlarni qo‘shish",
        "Jadvalni avtomatik to‘ldirish",
      ],
      correctAnswer: "Belgilangandan shartga qarab qiymatni tanlash",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 36,
      question:
        "Power point dasturida “Hyuperlink’’ funksiyasi nima uchun ishlatiladi?",
      options: [
        "Hujjatlarni tashqi manbalarni yoki internet sahifalarini bog‘lash uchun",
        "Matnni qalin qilish",
        "Rasm qo‘yish",
        "Taqdimotni saqlash",
      ],
      correctAnswer:
        "Hujjatlarni tashqi manbalarni yoki internet sahifalarini bog‘lash uchun",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 37,
      question: "Quidagilardan qaysi biri MC Office tarkibiga kirmaydi?",
      options: ["WordPad", "Publisher", "Outlook", "Access"],
      correctAnswer: "WordPad",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 38,
      question:
        "Quidagilardan qaysi biri axborotni himoya qilishning eng yaxshi usullaridan biri?",
      options: [
        "Oson parollar qo‘llash",
        "Doimiy ravishda ma’lumotlarni zaxiralash",
        "Antivirus dasturlaridan foydalanmaslik",
        "Parollarni hamma bilan ulashish",
      ],
      correctAnswer: "Doimiy ravishda ma’lumotlarni zaxiralash",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 39,
      question:
        "Axborotlarni kompyuterning xotirasiga grafikli axborot sifatida ko‘chiradigan qurilmaning nomini aniqlang.",
      options: ["Skaner", "Plotter", "Monitor", "Klaviatura"],
      correctAnswer: "Skaner",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 40,
      question:
        "Masofaviy ta’limda, ta’lim jarayonini qo‘llab-quvvatlovchi, elektron shaklda taqdim etilgan darsliklar va ilmiy adabiyotlar.",
      options: [
        "Onlayn darsliklar va elektron kitoblar",
        "Internet resurslari",
        "O‘qituvchilar va mutaxassislarning tavsiyalari",
        "Video materiallar va onlayn kurslar",
      ],
      correctAnswer: "Onlayn darsliklar va elektron kitoblar",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
  ],

  "Milliy qonunchilik": [
    {
      id: 1,
      question:
        "Muayyan hududda ommaviy hokimiyatni amalga oshiradigan, umummajburiy normalar o‘rnatadigan va suverenitetga ega bo‘lgan siyosiy tashkilot",
      options: ["Davlat", "Urug‘ jamoasi", "Jamiya", "Ibtidoiy jamoa"],
      correctAnswer: "Davlat",
      type: "Milliy qonunchilik",
    },
    {
      id: 2,
      question:
        "Davlat hokimiyatining qaysi ijtimoiy-siyosiy guruhlarga mansubligi va kimning manfaatlariga xizmat qilishi kabi masalalar majmuiga nima deb yuritiladi",
      options: [
        "Davlatning Mohiyati",
        "Davlatning belgilar",
        "Davlat tipologiyasi",
        "Davlat hokimiyati",
      ],
      correctAnswer: "Davlatning Mohiyati",
      type: "Milliy qonunchilik",
    },
    {
      id: 3,
      question:
        "Halqlarning ma’naviy, ahloqiy, diniy va madaniy rivojlanish darajasiga qarab davlatlarni tiplarga ajratish qanday nomlanadi",
      options: [
        "Sivilizatsiyaviy yondoshuv",
        "Formatsion yondoshuv",
        "Noan’anaviy yondoshuv",
        "An’anaviy yondoshuv",
      ],
      correctAnswer: "Sivilizatsiyaviy yondoshuv",
      type: "Milliy qonunchilik",
    },
    {
      id: 4,
      question:
        "Davlatning mohiyati to‘g‘risidagi qaysi nazariya vakillari, mavjud davlatlarning ijobiy jihatlarini uyg‘unlashib borishi barobarida ma’lum vaqtdan keyin ular o‘rtasida o‘zaro farqlar yo‘qolib borib yagona tipdagi umumiy farovonlik davlatlari yuzaga keladi deb fikrlashganlar",
      options: [
        "Konvergensiya nazariyasi vakillari",
        "Umumiy farovonlik nazariyasi vakillari",
        "Plyuralistik demokratiya nazariyasi vakillari",
        "Texnokratik nazariyasi vakillari",
      ],
      correctAnswer: "Konvergensiya nazariyasi vakillari",
      type: "Milliy qonunchilik",
    },
    {
      id: 5,
      question:
        "Rivojlangan mamlakatlarda aholi turmush darajasining yuqori ekanligi hamda ijtimoiy, madaniy va boshqa sohalarda yirik davlat dasturlarini amalga oshirilishi ushbu nazariyaning yuzaga kelishiga davlat mohiyati haqidagi qaysi nazariyaning yuzaga kelishiga sabab bo‘lgan",
      options: [
        "Umumiy farovonlik nazariyasi",
        "Konvergensiya nazariyasi",
        "Plyuralistik demokratiya nazariyasi",
        "Texnokratik nazariyasi",
      ],
      correctAnswer: "Umumiy farovonlik nazariyasi",
      type: "Milliy qonunchilik",
    },
    {
      id: 6,
      question:
        "Davlatning mohiyati to‘g‘risidagi qaysi nazariya vakillari, sotsialistik tipdagi davlatning maqsadi kommunistik jamiyatni barpo etish, ohir-oqibat davlatning barham topishiga erishishdan iborat",
      options: [
        "Tarixiy-matérialistk nazariyasi vakillari",
        "Konvergensiya nazariyasi vakillari",
        "Umumiy farovonlik nazariyasi vakillari",
        "Plyuralistik demokratiya nazariyasi vakillari",
      ],
      correctAnswer: "Tarixiy-matérialistk nazariyasi vakillari",
      type: "Milliy qonunchilik",
    },
    {
      id: 7,
      question:
        "Davlatning maqsad va vazifalarini amalga oshirishga qaratilgan davlat faoliyatining asosiy yo‘nalishi nima deb nomlanadi",
      options: [
        "Davlat funksiyasi",
        "Davlat boshqaruvi",
        "Davlat hokimiyati",
        "Davlat faoliyati",
      ],
      correctAnswer: "Davlat funksiyasi",
      type: "Milliy qonunchilik",
    },
    {
      id: 8,
      question:
        "Davlat faoliyatini yo‘naltiruvchi va tartibga soluvchi, uning bajarilishi lozim bo‘lgan vazifalari ketma-ketligi va xarakterini belgilab beruvchi bevosita motivi bo‘lib maydonga chiqadigan hususiyat qaysi tushunchaga tegishli",
      options: [
        "Davlat maqsadi",
        "Davlat funksiyasi",
        "Davlat vazifasi",
        "Davlat faoliyati",
      ],
      correctAnswer: "Davlat maqsadi",
      type: "Milliy qonunchilik",
    },
    {
      id: 9,
      question:
        "Davlat funksiyalarini faoliyat darajasi bo‘yicha qanday turlarga ajratishimiz mumkin",
      options: [
        "Ichki va tashqi funksiya",
        "Doimiy va muvaqqat funksiya",
        "Asosiy va asosiy bo‘lmagan funksiya",
        "Davlat va nodavlat funksiyalar",
      ],
      correctAnswer: "Ichki va tashqi funksiya",
      type: "Milliy qonunchilik",
    },
    {
      id: 10,
      question:
        "Davlat funksiyalarini amalga oshirishning huquqiy shakllari bo‘yicha davlat funksiyasini qanday tasniflanadi",
      options: [
        "Huquq ijodkorligi, ijro etish, huquqni muhofaza qilish",
        "Huquqni tartibga soluvchi, huquqni iero etuvchi, huquqni paydo qiluvchi",
        "Tashkiliy tartibga soluvchi, tashkiliy-xo‘jalik, tashkiliy-mafkuraviy",
        "Huquqni amalga oshiruvchi, huquqni ta’minlovchi, huquqni ta’qiqlovchi",
      ],
      correctAnswer: "Huquq ijodkorligi, ijro etish, huquqni muhofaza qilish",
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
