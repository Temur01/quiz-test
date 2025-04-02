import { Question, QuestionsByCategory } from "../types";
import ques_1 from "../assets/iq/1.jpg";
import ques_2 from "../assets/iq/2.jpg";
import ques_3 from "../assets/iq/3.jpg";
import ques_4 from "../assets/iq/4.jpg";
import ques_5 from "../assets/iq/5.jpg";
import ques_6 from "../assets/iq/6.jpg";
import ques_7 from "../assets/iq/7.jpg";
import ques_8 from "../assets/iq/8.jpg";
import ques_9 from "../assets/iq/9.jpg";
import ques_10 from "../assets/iq/10.jpg";

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
        "Ushbu gapdagi nuqtalar o‘rniga qo‘shimchalar ketma-ketligi to‘g‘ri berilgan javobni aniqlang. Mehnat shartnomasi bekor qilingan kuni ma’muriyat xodim… u… mehnat daftarchasi… va mehnat shartnomasi… bekor qilinganligi haqidagi buyruq nusxasi… berishi shart.",
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
        "Ushbu gapda nuqtalar o‘rniga qo‘yilishi lozim bo‘lgan qo‘shimchalar ketma-ketligi to‘g‘ri berilgan javobni aniqlang. Xalqaro aloqalar… qabul qilingan tijorat xatlari… hozirgi shakli, u… yozilish odobi 150 yil muqaddam Angliya… yuzaga kelgan.",
      options: [
        "-da, -ning, -ni, -da",
        "-da, -ni, -ning, -ga",
        "-ga, -ning, -ni, -da",
        "-da, -ning, -ni, -ni",
      ],
      correctAnswer: "-da, -ning, -ni, -da",
      type: "Davlat tili",
    },
  ],
  "Axborot kommunikatsiya texnologiyalari": [
    {
      id: 11,
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
      id: 12,
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
      id: 13,
      question:
        "Klaviatura yordamida kiritiladigan va monitor ekranida ko‘rinadigan xar qanday harf, raqam, tinish belgisi, arifmetik amal belgisi nima deb ataladi?",
      options: ["Belgi", "So‘z", "Abzas", "Matn"],
      correctAnswer: "Belgi",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 14,
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
      id: 15,
      question:
        "Amaldagi Microsoft Office Word 2016 versiyasi uchun mo‘ljallangan operatsion tizim.",
      options: ["Windows va MacOS", "Unix", "Linux", "MsDos"],
      correctAnswer: "Windows va MacOS",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 16,
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
      id: 17,
      question:
        "Quyidagi tezkor tugmalardan qaysi biri YANGI DOKUMENT yaratish tugmasi?",
      options: ["Ctrl + N", "Ctrl + 0", "Ctrl + F12", "Ctrl + W"],
      correctAnswer: "Ctrl + N",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 18,
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
      id: 19,
      question:
        "Klaviaturaning qaysi klavishlarini bosish orqali matnni yakunlash mumkin?",
      options: ["Alt + F4", "Alt + F1", "'Alt + Ctrl' po'radke", "Alt + F12"],
      correctAnswer: "Alt + F4",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 20,
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
      id: 21,
      question:
        "Excel dasturida jadvaldagi barcha kataklarni ajratish uchun qaysi qoshutmadan foydalaniladi?",
      options: ["Ctrl + A", "Ctrl + Shift", "Ctrl + Alt", "Ctrl + D"],
      correctAnswer: "Ctrl + A",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 22,
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
      id: 23,
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
      id: 24,
      question:
        "Microsoft Word dasturida matnni qalin (bold) qilish uchun qanday tugmalar ishlatiladi?",
      options: ["Ctrl+B", "Ctrl+U", "Ctrl+H", "Ctrl+S"],
      correctAnswer: "Ctrl+B",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 25,
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
      id: 26,
      question:
        "Power point dasturida “Hyuperlink” funksiyasi nima uchun ishlatiladi?",
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
      id: 27,
      question: "Quidagilardan qaysi biri MC Office tarkibiga kirmaydi?",
      options: ["WordPad", "Publisher", "Outlook", "Access"],
      correctAnswer: "WordPad",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 28,
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
      id: 29,
      question:
        "Axborotlarni kompyuterning xotirasiga grafikli axborot sifatida ko‘chiradigan qurilmaning nomini aniqlang.",
      options: ["Skaner", "Plotter", "Monitor", "Klaviatura"],
      correctAnswer: "Skaner",
      type: "Axborot kommunikatsiya texnologiyalari",
    },
    {
      id: 30,
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
      id: 31,
      question:
        "Huquq normalarining maqsadi, mazmun va mohiyatini aniqlash hamda tushuntirishga yo‘naltirilgan faoliyat berilgan javobni aniqlang",
      options: [
        "Huquq normalarini sharhlash",
        "Huquq ijodkorligi",
        "Huquq normalarini qo‘llash",
        "Huquq normalarini amalga oshirish",
      ],
      correctAnswer: "Huquq normalarini sharhlash",
      type: "Milliy qonunchilik",
    },
    {
      id: 32,
      question: "Rasmiy sharhlash qanday ko‘rinishlarda amalga oshiriladi",
      options: [
        "Normativ va kazual",
        "Autentik va legal",
        "Ilmiy, malakali va oddiy",
        "Umumiy va maxsus",
      ],
      correctAnswer: "Normativ va kazual",
      type: "Milliy qonunchilik",
    },
    {
      id: 33,
      question:
        "Huquqiy aktni o‘zi chiqargan organ tomonidan amalga oshiriladigan sharhlash turini aniqlang",
      options: [
        "Autentik sharhlash",
        "Legal sharhlash",
        "Ilmiy sharhlash",
        "Malakali sharhlash",
      ],
      correctAnswer: "Autentik sharhlash",
      type: "Milliy qonunchilik",
    },
    {
      id: 34,
      question:
        "O‘zbekiston Respublikasi Konstitutsiyasining birinchi bo‘limiga kiruvchi bo‘limlarni belgilang",
      options: ["1, 3", "2, 4", "2, 3", "1, 4"],
      correctAnswer: "1, 3",
      type: "Milliy qonunchilik",
    },
    {
      id: 35,
      question:
        "O‘zbekiston Respublikasi davlatlar va tashkilotlar bilan qanday tashqi siyosat amalga oshiradi?",
      options: ["tinchliksevar", "birdamlik", "mutanosiblik", "adolatlilik"],
      correctAnswer: "tinchliksevar",
      type: "Milliy qonunchilik",
    },
    {
      id: 36,
      question:
        "O‘zbekiston Respublikasida qaysi mafkura davlat mafkurasi sifatida o‘rnatilgan?",
      options: [
        "hech qanday mafkura",
        "kuchli davlatdan kuchli fuqarolik jamiyati sari",
        "Davlatlarning suveren tengligi",
        "taraqqiyotning o‘zbek modeli",
      ],
      correctAnswer: "hech qanday mafkura",
      type: "Milliy qonunchilik",
    },
    {
      id: 37,
      question: "O‘zbekiston davlati boshqaruv shakliga qanday davlat?",
      options: ["respublika", "ijtimoiy", "demokratik", "suveren"],
      correctAnswer: "respublika",
      type: "Milliy qonunchilik",
    },
    {
      id: 38,
      question:
        "Qaysi qatorda Konstitutsiyamizning birinchi bo‘limi nomi to‘g‘ri berilgan?",
      options: [
        "Asosiy prinsiplar",
        "Muqaddima",
        "Davlat suvereniteti",
        "Xalq hokimiyatchiligi",
      ],
      correctAnswer: "Asosiy prinsiplar",
      type: "Milliy qonunchilik",
    },
    {
      id: 39,
      question:
        "O‘zbekiston davlati huquqqa bo‘lgan munosabatiga ko‘ra qanday davlat hisoblanadi?",
      options: ["huquqiy", "etatik", "dunyoiy", "ijtimoiy"],
      correctAnswer: "huquqiy",
      type: "Milliy qonunchilik",
    },
    {
      id: 40,
      question:
        "Qaysi qatorda O‘zbekistonning tashqi siyosatda amal qiladigan prinsiplari xato berilgan?",
      options: [
        "davlatlararo muammolarda o‘z manfaatini himoya qilish",
        "kuch ishlatmaslik yoki kuch bilan tahdid solmaslik",
        "chegaralarning buzilmasligi",
        "nizolarni tich yo‘l bilan hal etish",
      ],
      correctAnswer: "davlatlararo muammolarda o‘z manfaatini himoya qilish",
      type: "Milliy qonunchilik",
    },
    {
      id: 41,
      question:
        "Insonning shaxsiy huquq va erkinliklari har kimga qachondan boshlab tegishli bo‘ladi?",
      options: [
        "tug‘ilgandan boshlab",
        "16 yoshda",
        "18 yoshga to‘lganda",
        "1 yoshdan boshlab",
      ],
      correctAnswer: "tug‘ilgandan boshlab",
      type: "Milliy qonunchilik",
    },
    {
      id: 42,
      question:
        "Konstitutsiyamizga ko‘ra, har bir insonning ajralmas huquqi bu...?",
      options: ["yashash", "nikoh qurish", "fikr erkinligi", "mulkdor bo‘lish"],
      correctAnswer: "yashash",
      type: "Milliy qonunchilik",
    },
    {
      id: 43,
      question:
        "O‘zbekistonda insonning huquq va erkinlari nima asosida kafolatlanadi?",
      options: [
        "xalqaro huquqning umume’tirof etilgan normalari va Konstitutsiya",
        "Prezident farmoni va Oliy Majlis qarorlari",
        "Umumxalq referendumi",
        "BMT va SHHT nizomiga ko‘ra",
      ],
      correctAnswer:
        "xalqaro huquqning umume’tirof etilgan normalari va Konstitutsiya",
      type: "Milliy qonunchilik",
    },
    {
      id: 44,
      question:
        "Fuqarolarga beriladigan imtiyozlar qanday prinsipga asoslanishi kerak?",
      options: [
        "ijtimoiy adolat",
        "millat ustunligi",
        "insoparvarlik",
        "mutanosiblik",
      ],
      correctAnswer: "ijtimoiy adolat",
      type: "Milliy qonunchilik",
    },
    {
      id: 45,
      question:
        "Insonning Konstitutsiya va qonunlarda mustahkamlab qo‘yilgan huquq va erkinliklari qanday holatda cheklab qo‘yish mumkin?",
      options: [
        "Sud qarori bilan",
        "Prezident farmoni bilan",
        "Oliy Majlis qonuni bilan",
        "Prokuratura qarori asosida",
      ],
      correctAnswer: "Sud qarori bilan",
      type: "Milliy qonunchilik",
    },
    {
      id: 46,
      question:
        "Shaxsni sudning qarorisiz qancha vaqtgacha ushlab turish mumkin?",
      options: ["48 soat", "72 soat", "24 soat", "12 kun"],
      correctAnswer: "48 soat",
      type: "Milliy qonunchilik",
    },
    {
      id: 47,
      question:
        "O‘zbekiston insonlar qanday holatlarda ijtimoiy nafaqa olish huquqiga ega? 1) o'qiyotgan vaqtda 2) kasodga uchraganda 3) mehnat qobiliyatini yo'qotganda 4) ishsizlikda 5) boquvchini yo'qotganda 6) yangi uyga ko'chganda",
      options: ["3, 4, 5", "1, 2, 6", "2, 4, 6", "1, 3, 5"],
      correctAnswer: "3, 4, 5",
      type: "Milliy qonunchilik",
    },
    {
      id: 48,
      question: "Konstitutsiyamizga ko‘ra, Davlatning oliy maqsadi bu...?",
      options: [
        "Insonning huquq va erkinliklarini ta’minlash",
        "Eksport-importni rivojlantirish",
        "Aholiga siyosiy huquqlar berish",
        "Dunyoning eng rivojlangan davlatlari qatoriga kirish",
      ],
      correctAnswer: "Insonning huquq va erkinliklarini ta’minlash",
      type: "Milliy qonunchilik",
    },
    {
      id: 49,
      question:
        "Davlat organlarining yoxud ularning mansabdor shaxslarining qonunga xilof qarorlari va harakatlari tufayli kishilarga yetkazilgan zararning o‘rnini kim qoplaydi?",
      options: [
        "davlat qoplaydi",
        "deputatlar hisobidan qoplab beriladi",
        "shaxsning o‘zi qoplaydi",
        "qoplab berilmaydi",
      ],
      correctAnswer: "davlat qoplaydi",
      type: "Milliy qonunchilik",
    },
  ],
  IQ: [
    {
      id: 51,
      question: ques_1,
      options: ["31", "28", "29", "30", "32", "33"],
      correctAnswer: "31",
      type: "IQ",
    },
    {
      id: 52,
      question: ques_2,
      options: ["2", "1", "3", "4"],
      correctAnswer: "2",
      type: "IQ",
    },
    {
      id: 53,
      question: ques_3,
      options: ["3", "1", "2", "4"],
      correctAnswer: "3",
      type: "IQ",
    },
    {
      id: 54,
      question: ques_4,
      options: ["1", "2", "3", "4", "5"],
      correctAnswer: "1",
      type: "IQ",
    },
    {
      id: 55,
      question: ques_5,
      options: ["4", "1", "2", "3", "5", "6"],
      correctAnswer: "4",
      type: "IQ",
    },
    {
      id: 56,
      question: ques_6,
      options: ["3", "1", "2", "4", "5", "6"],
      correctAnswer: "3",
      type: "IQ",
    },
    {
      id: 57,
      question: ques_7,
      options: ["3,5", "3,6", "1,3", "1,5", "2,5", "2,6"],
      correctAnswer: "3,5",
      type: "IQ",
    },
    {
      id: 58,
      question: ques_8,
      options: ["5", "1", "2", "3", "4", "6"],
      correctAnswer: "5",
      type: "IQ",
    },
    {
      id: 59,
      question: ques_9,
      options: ["2", "1", "5", "3", "4"],
      correctAnswer: "2",
      type: "IQ",
    },
    {
      id: 60,
      question: ques_10,
      options: ["4", "1", "2", "3", "5"],
      correctAnswer: "4",
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
  ...shuffledQuestionsByCategory["Davlat tili"].slice(0, 10),
  ...shuffledQuestionsByCategory["Milliy qonunchilik"].slice(0, 10),
  ...shuffledQuestionsByCategory[
    "Axborot kommunikatsiya texnologiyalari"
  ].slice(0, 10),
  ...shuffledQuestionsByCategory.IQ.slice(0, 10),
];

// Also export the shuffled questions by category
export { shuffledQuestionsByCategory as questionsByCategory };
