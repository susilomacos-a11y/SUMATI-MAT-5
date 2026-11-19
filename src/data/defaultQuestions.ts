import { Question } from '../types';
import {
  createUnitCubeGridSvg,
  createSteppedUnitCubesSvg,
  createCubeSvg,
  createCuboidSvg,
  createCuboidWithBaseAreaSvg,
  createTwoContainersSvg,
  createCompositeSolidSvg,
  createCompositeCuboidsSvg,
} from '../utils/questionDiagrams';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================
  // --- PILIHAN GANDA (18 SOAL) ---
  // =========================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Volume Kubus Satuan',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar susunan kubus satuan berikut! Berapakah volume bangun ruang tersebut dalam kubus satuan?',
    imageSvg: createUnitCubeGridSvg(3, 2, 2, { title: 'Susunan Kubus Satuan' }),
    imageCaption: 'Gambar susunan kubus satuan (panjang 3, lebar 2, tinggi 2)',
    options: [
      { id: 'A', text: '8 kubus satuan' },
      { id: 'B', text: '10 kubus satuan' },
      { id: 'C', text: '12 kubus satuan' },
      { id: 'D', text: '14 kubus satuan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak kubus satuan ke kanan (panjang) = 3, ke belakang (lebar) = 2, dan ke atas (tinggi) = 2.\nVolume = 3 × 2 × 2 = 12 kubus satuan.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Volume Kubus Satuan',
    difficulty: 'Mudah',
    text: 'Hitunglah volume bangun ruang pada gambar di bawah ini jika setiap kubus kecil memiliki volume 1 cm³!',
    imageSvg: createUnitCubeGridSvg(4, 3, 2, { title: 'Bangun Ruang dari Kubus 1 cm³' }),
    imageCaption: 'Setiap kubus kecil berukuran 1 cm × 1 cm × 1 cm = 1 cm³',
    options: [
      { id: 'A', text: '18 cm³' },
      { id: 'B', text: '24 cm³' },
      { id: 'C', text: '28 cm³' },
      { id: 'D', text: '32 cm³' },
    ],
    correctAnswer: 'B',
    explanation:
      'Panjang = 4 kubus, lebar = 3 kubus, tinggi = 2 kubus.\nVolume = 4 × 3 × 2 = 24 kubus satuan = 24 cm³.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Volume Kubus Satuan Bertingkat',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar tumpukan kubus satuan bertingkat berikut! Banyak seluruh kubus satuan yang menyusun bangun tersebut adalah...',
    imageSvg: createSteppedUnitCubesSvg([
      [2, 2, 1],
      [1, 1, 1],
    ]),
    imageCaption: 'Tumpukan kubus satuan bertingkat (lapisan bawah 6 kubus, lapisan atas 2 kubus)',
    options: [
      { id: 'A', text: '6 kubus satuan' },
      { id: 'B', text: '7 kubus satuan' },
      { id: 'C', text: '8 kubus satuan' },
      { id: 'D', text: '9 kubus satuan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Lapisan bawah terdiri atas 3 × 2 = 6 kubus satuan.\nLapisan atas (warna kuning) terdiri atas 2 kubus satuan.\nTotal volume = 6 + 2 = 8 kubus satuan.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Volume Kubus',
    difficulty: 'Mudah',
    text: 'Sebuah kotak mainan berbentuk kubus memiliki panjang rusuk 5 cm seperti pada gambar. Volume kotak mainan tersebut adalah...',
    imageSvg: createCubeSvg('5 cm', { labelTitle: 'Kotak Mainan Berbentuk Kubus' }),
    imageCaption: 'Kubus dengan panjang rusuk s = 5 cm',
    options: [
      { id: 'A', text: '25 cm³' },
      { id: 'B', text: '75 cm³' },
      { id: 'C', text: '125 cm³' },
      { id: 'D', text: '150 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume kubus = s × s × s = 5 cm × 5 cm × 5 cm = 125 cm³.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Volume Balok',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar bangun ruang balok berikut! Jika panjang = 10 cm, lebar = 4 cm, dan tinggi = 5 cm, berapakah volume balok tersebut?',
    imageSvg: createCuboidSvg('10 cm', '4 cm', '5 cm', { labelTitle: 'Bangun Ruang Balok' }),
    imageCaption: 'Balok berukuran p = 10 cm, l = 4 cm, t = 5 cm',
    options: [
      { id: 'A', text: '190 cm³' },
      { id: 'B', text: '200 cm³' },
      { id: 'C', text: '240 cm³' },
      { id: 'D', text: '400 cm³' },
    ],
    correctAnswer: 'B',
    explanation:
      'Volume balok = p × l × t = 10 cm × 4 cm × 5 cm = 200 cm³.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Volume Kubus',
    difficulty: 'Mudah',
    text: 'Rani memiliki rubik berbentuk kubus dengan panjang sisi (rusuk) 6 cm. Volume rubik milik Rani adalah...',
    options: [
      { id: 'A', text: '36 cm³' },
      { id: 'B', text: '108 cm³' },
      { id: 'C', text: '216 cm³' },
      { id: 'D', text: '256 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume kubus = s × s × s = 6 cm × 6 cm × 6 cm = 216 cm³.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Konversi Satuan Volume',
    difficulty: 'Mudah',
    text: 'Sebuah ember dapat menampung air sebanyak 4 liter. Jika diubah ke dalam satuan sentimeter kubik (cm³), volume air di dalam ember tersebut adalah... (Ingat: 1 liter = 1.000 cm³)',
    options: [
      { id: 'A', text: '40 cm³' },
      { id: 'B', text: '400 cm³' },
      { id: 'C', text: '4.000 cm³' },
      { id: 'D', text: '40.000 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Karena 1 liter = 1.000 cm³, maka 4 liter = 4 × 1.000 cm³ = 4.000 cm³.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Volume Balok & Pecahan Bagian',
    difficulty: 'Sedang',
    text: 'Sebuah akuarium berbentuk balok memiliki panjang 40 cm, lebar 20 cm, dan tinggi 30 cm. Saat ini akuarium terisi air 3/4 bagian seperti tampak pada gambar. Berapa liter volume air yang ada di dalam akuarium tersebut?',
    imageSvg: createCuboidSvg('40 cm', '20 cm', '30 cm', {
      waterFraction: 0.75,
      labelTitle: 'Akuarium Terisi Air 3/4 Bagian',
    }),
    imageCaption: 'Akuarium balok terisi air sebanyak 3/4 dari tinggi total',
    options: [
      { id: 'A', text: '12 liter' },
      { id: 'B', text: '16 liter' },
      { id: 'C', text: '18 liter' },
      { id: 'D', text: '24 liter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume akuarium penuh = 40 × 20 × 30 = 24.000 cm³ = 24 liter.\nVolume air (3/4 bagian) = 3/4 × 24 liter = 18 liter.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Menentukan Panjang Rusuk Kubus',
    difficulty: 'Sedang',
    text: 'Sebuah kotak kado berbentuk kubus memiliki volume 1.000 cm³. Panjang rusuk kotak kado tersebut adalah...',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '12 cm' },
      { id: 'C', text: '15 cm' },
      { id: 'D', text: '20 cm' },
    ],
    correctAnswer: 'A',
    explanation:
      'Volume kubus = s × s × s = 1.000 cm³.\nKarena 10 × 10 × 10 = 1.000, maka panjang rusuk (s) = 10 cm.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Hubungan Luas Alas dan Volume',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar balok berikut! Diketahui luas alas balok adalah 36 cm² dan tingginya 8 cm. Volume balok tersebut adalah...',
    imageSvg: createCuboidWithBaseAreaSvg('36 cm²', '8 cm'),
    imageCaption: 'Bagian alas balok berwarna kuning memiliki luas 36 cm²',
    options: [
      { id: 'A', text: '248 cm³' },
      { id: 'B', text: '288 cm³' },
      { id: 'C', text: '308 cm³' },
      { id: 'D', text: '328 cm³' },
    ],
    correctAnswer: 'B',
    explanation:
      'Volume balok = Luas alas × tinggi = 36 cm² × 8 cm = 288 cm³.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Volume Kubus & Konversi Liter',
    difficulty: 'Sedang',
    text: 'Sebuah bak mandi berbentuk kubus memiliki panjang rusuk bagian dalam 10 dm (1 dm³ = 1 liter). Jika bak mandi tersebut diisi air hingga setengahnya seperti gambar, berapa liter air di dalam bak?',
    imageSvg: createCubeSvg('10 dm', {
      waterFraction: 0.5,
      labelTitle: 'Bak Mandi Kubus (Terisi 1/2 Bagian)',
    }),
    imageCaption: 'Bak mandi berbentuk kubus dengan rusuk 10 dm terisi setengah bagian',
    options: [
      { id: 'A', text: '250 liter' },
      { id: 'B', text: '500 liter' },
      { id: 'C', text: '750 liter' },
      { id: 'D', text: '1.000 liter' },
    ],
    correctAnswer: 'B',
    explanation:
      'Volume bak mandi penuh = 10 dm × 10 dm × 10 dm = 1.000 dm³ = 1.000 liter.\nKarena terisi setengahnya = 1/2 × 1.000 liter = 500 liter.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Volume Balok',
    difficulty: 'Mudah',
    text: 'Sebuah kotak pensil berbentuk balok berukuran panjang 20 cm, lebar 8 cm, dan tinggi 5 cm. Volume kotak pensil tersebut adalah...',
    options: [
      { id: 'A', text: '400 cm³' },
      { id: 'B', text: '600 cm³' },
      { id: 'C', text: '800 cm³' },
      { id: 'D', text: '1.000 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume kotak pensil = p × l × t = 20 cm × 8 cm × 5 cm = 800 cm³.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Kapasitas Wadah & Kubus Kecil',
    difficulty: 'Sedang',
    text: 'Sebuah kardus besar berbentuk balok berukuran panjang 12 cm, lebar 8 cm, dan tinggi 6 cm akan diisi penuh dengan kubus-kubus mainan berukuran rusuk 2 cm. Berapa banyak kubus mainan yang dapat masuk ke dalam kardus?',
    options: [
      { id: 'A', text: '48 buah' },
      { id: 'B', text: '64 buah' },
      { id: 'C', text: '72 buah' },
      { id: 'D', text: '96 buah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume kardus = 12 × 8 × 6 = 576 cm³.\nVolume 1 kubus mainan = 2 × 2 × 2 = 8 cm³.\nBanyak kubus mainan = 576 ÷ 8 = 72 buah.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Menentukan Tinggi Balok dari Volume',
    difficulty: 'Sedang',
    text: 'Sebuah balok kayu pada gambar memiliki volume 240 cm³. Jika panjangnya 8 cm dan lebarnya 5 cm, maka tinggi balok kayu tersebut adalah...',
    imageSvg: createCuboidSvg('8 cm', '5 cm', '? cm', {
      labelTitle: 'Mencari Tinggi Balok (Volume = 240 cm³)',
      highlightUnknown: 't',
    }),
    imageCaption: 'Balok dengan p = 8 cm, l = 5 cm, dan tinggi t belum diketahui',
    options: [
      { id: 'A', text: '4 cm' },
      { id: 'B', text: '5 cm' },
      { id: 'C', text: '6 cm' },
      { id: 'D', text: '8 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Tinggi balok = Volume ÷ (panjang × lebar)\n= 240 ÷ (8 × 5) = 240 ÷ 40 = 6 cm.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Selisih Volume Kubus dan Balok',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar Kubus A dan Balok B berikut! Berapakah selisih volume antara Kubus A dan Balok B?',
    imageSvg: createTwoContainersSvg(
      { title: 'Kubus A', type: 'cube', s: '6 cm' },
      { title: 'Balok B', type: 'cuboid', p: '9 cm', l: '4 cm', t: '5 cm' }
    ),
    imageCaption: 'Kubus A (rusuk 6 cm) dan Balok B (9 cm × 4 cm × 5 cm)',
    options: [
      { id: 'A', text: '24 cm³' },
      { id: 'B', text: '36 cm³' },
      { id: 'C', text: '44 cm³' },
      { id: 'D', text: '56 cm³' },
    ],
    correctAnswer: 'B',
    explanation:
      'Volume Kubus A = 6 × 6 × 6 = 216 cm³.\nVolume Balok B = 9 × 4 × 5 = 180 cm³.\nSelisih volume = 216 cm³ - 180 cm³ = 36 cm³.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Pengisian Air dengan Ember',
    difficulty: 'Sukar',
    text: 'Sebuah bak penampungan air berbentuk balok memiliki panjang 50 cm, lebar 40 cm, dan tinggi 30 cm. Bak tersebut kosong dan akan diisi air menggunakan ember kecil yang bervolume 5 liter (1 liter = 1.000 cm³). Berapa kali pengisian ember yang dibutuhkan sampai bak penuh?',
    options: [
      { id: 'A', text: '10 kali' },
      { id: 'B', text: '12 kali' },
      { id: 'C', text: '15 kali' },
      { id: 'D', text: '20 kali' },
    ],
    correctAnswer: 'B',
    explanation:
      'Volume bak = 50 × 40 × 30 = 60.000 cm³.\nUbah ke liter = 60.000 ÷ 1.000 = 60 liter.\nBanyak pengisian ember = 60 liter ÷ 5 liter = 12 kali.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Volume Gabungan Bangun Ruang',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar bangun ruang gabungan berikut! Bangun bawah berbentuk balok (panjang 10 cm, lebar 5 cm, tinggi 4 cm) dan bangun atas berbentuk kubus dengan panjang rusuk 4 cm. Volume total gabungan kedua bangun tersebut adalah...',
    imageSvg: createCompositeSolidSvg({
      bottomP: '10 cm',
      bottomL: '5 cm',
      bottomT: '4 cm',
      topS: '4 cm',
    }),
    imageCaption: 'Bangun ruang gabungan balok bawah dan kubus atas',
    options: [
      { id: 'A', text: '232 cm³' },
      { id: 'B', text: '248 cm³' },
      { id: 'C', text: '264 cm³' },
      { id: 'D', text: '280 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume balok bawah = 10 × 5 × 4 = 200 cm³.\nVolume kubus atas = 4 × 4 × 4 = 64 cm³.\nVolume total gabungan = 200 cm³ + 64 cm³ = 264 cm³.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Perubahan Volume Kubus',
    difficulty: 'Sukar',
    text: 'Sebuah kubus mula-mula memiliki panjang rusuk 3 cm. Jika panjang rusuk kubus tersebut diperbesar menjadi 2 kali lipat (6 cm), maka volume kubus yang baru menjadi ... kali volume kubus semula.',
    options: [
      { id: 'A', text: '2 kali' },
      { id: 'B', text: '4 kali' },
      { id: 'C', text: '6 kali' },
      { id: 'D', text: '8 kali' },
    ],
    correctAnswer: 'D',
    explanation:
      'Volume kubus semula = 3 × 3 × 3 = 27 cm³.\nVolume kubus baru (rusuk 6 cm) = 6 × 6 × 6 = 216 cm³.\nPerbandingan = 216 ÷ 27 = 8 kali.',
  },

  // =========================================================
  // --- PILIHAN GANDA KOMPLEKS (3 SOAL, MASING-MASING 3 PILIHAN) ---
  // =========================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Analisis Susunan Kubus Satuan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar susunan kubus satuan berikut! Pilihlah SEMUA pernyataan yang BENAR mengenai bangun ruang tersebut! (Pilihan benar bisa lebih dari satu)',
    imageSvg: createUnitCubeGridSvg(3, 3, 2, { title: 'Susunan Kubus Satuan 3 × 3 × 2' }),
    imageCaption: 'Bangun tersusun dari kubus-kubus satuan yang rapat tanpa rongga',
    options: [
      { id: 'A', text: 'Banyak kubus satuan pada lapisan paling bawah (alas) adalah 9 kubus satuan' },
      { id: 'B', text: 'Tinggi susunan bangun ruang tersebut terdiri dari 2 lapisan kubus satuan' },
      { id: 'C', text: 'Volume seluruh bangun ruang tersebut adalah 15 kubus satuan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Lapisan alas = 3 × 3 = 9 kubus satuan (A Benar).\n• Tinggi susunan = 2 lapisan (B Benar).\n• Volume seluruhnya = 3 × 3 × 2 = 18 kubus satuan, bukan 15 (C Salah).\nJadi pilihan yang benar adalah A dan B.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Sifat & Volume Balok',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar balok dengan panjang 12 cm, lebar 5 cm, dan tinggi 4 cm berikut. Manakah dari pernyataan-pernyataan di bawah ini yang bernilai BENAR? (Pilihan benar bisa lebih dari satu)',
    imageSvg: createCuboidSvg('12 cm', '5 cm', '4 cm', { labelTitle: 'Kotak Penyimpanan Berbentuk Balok' }),
    imageCaption: 'Balok berukuran p = 12 cm, l = 5 cm, t = 4 cm',
    options: [
      { id: 'A', text: 'Luas bagian alas balok tersebut adalah 60 cm²' },
      { id: 'B', text: 'Volume balok tersebut adalah 240 cm³' },
      { id: 'C', text: 'Jika tinggi balok ditambah 1 cm menjadi 5 cm, volumenya menjadi 300 cm³' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '• Luas alas = p × l = 12 × 5 = 60 cm² (A Benar).\n• Volume = 12 × 5 × 4 = 240 cm³ (B Benar).\n• Jika tinggi menjadi 5 cm, volume baru = 12 × 5 × 5 = 300 cm³ (C Benar).\nKetiga pernyataan bernilai benar.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Perbandingan Volume Dua Wadah',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar Kotak A (kubus rusuk 10 cm) dan Kotak B (balok 12 cm × 10 cm × 8 cm) berikut! Pilihlah SEMUA pernyataan yang BENAR! (Pilihan benar bisa lebih dari satu)',
    imageSvg: createTwoContainersSvg(
      { title: 'Kotak A (Kubus)', type: 'cube', s: '10 cm' },
      { title: 'Kotak B (Balok)', type: 'cuboid', p: '12 cm', l: '10 cm', t: '8 cm' }
    ),
    imageCaption: 'Perbandingan kapasitas Kotak A dan Kotak B',
    options: [
      { id: 'A', text: 'Volume Kotak A adalah 1.000 cm³ atau setara dengan 1 liter' },
      { id: 'B', text: 'Volume Kotak B lebih besar daripada volume Kotak A' },
      { id: 'C', text: 'Selisih volume kedua kotak tersebut adalah 40 cm³' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      '• Volume Kotak A = 10 × 10 × 10 = 1.000 cm³ = 1 liter (A Benar).\n• Volume Kotak B = 12 × 10 × 8 = 960 cm³. Jadi Kotak B lebih KECIL dari Kotak A (B Salah).\n• Selisih volume = 1.000 cm³ - 960 cm³ = 40 cm³ (C Benar).\nJadi pilihan yang benar adalah A dan C.',
  },

  // =========================================================
  // --- PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL, 3 PERNYATAAN B/S) ---
  // =========================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Volume Kubus Satuan',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar susunan kubus satuan berikut! Tentukan kebenaran dari masing-masing pernyataan di bawah ini (Pilih Benar atau Salah):',
    imageSvg: createUnitCubeGridSvg(4, 2, 3, { title: 'Susunan Kubus Satuan' }),
    imageCaption: 'Susunan kubus satuan dengan ukuran 4 × 2 × 3',
    statements: [
      {
        id: 's1',
        text: 'Panjang alas susunan tersebut adalah 4 kubus satuan dan lebarnya 2 kubus satuan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam satu lapisan mendatar terdapat 8 kubus satuan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Volume total susunan kubus satuan tersebut adalah 20 kubus satuan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Panjang = 4 dan lebar = 2 kubus satuan (BENAR).\n2. Satu lapisan mendatar = 4 × 2 = 8 kubus satuan (BENAR).\n3. Total volume = 4 × 2 × 3 = 24 kubus satuan (SALAH, tertulis 20).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Volume Kubus',
    difficulty: 'Mudah',
    text: 'Sebuah kotak hadiah berbentuk kubus memiliki panjang rusuk 8 cm seperti pada gambar. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageSvg: createCubeSvg('8 cm', { labelTitle: 'Kotak Hadiah Kubus' }),
    imageCaption: 'Kotak hadiah berbentuk kubus dengan panjang rusuk 8 cm',
    statements: [
      {
        id: 's1',
        text: 'Luas satu sisi alas kotak hadiah tersebut adalah 64 cm².',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Volume kotak hadiah tersebut dapat dihitung dengan cara 8 × 8 × 8.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Volume kotak hadiah tersebut adalah 512 cm³.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Luas sisi alas = 8 × 8 = 64 cm² (BENAR).\n2. Rumus volume kubus = s × s × s = 8 × 8 × 8 (BENAR).\n3. Hasil perkalian 8 × 8 × 8 = 512 cm³ (BENAR).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Volume Akuarium & Satuan Liter',
    difficulty: 'Sedang',
    text: 'Sebuah akuarium berbentuk balok memiliki panjang 50 cm, lebar 30 cm, dan tinggi 40 cm. Akuarium tersebut terisi air sebanyak setengah (1/2) bagian seperti tampak pada gambar. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageSvg: createCuboidSvg('50 cm', '30 cm', '40 cm', {
      waterFraction: 0.5,
      labelTitle: 'Akuarium Terisi Air 1/2 Bagian',
    }),
    imageCaption: 'Akuarium ukuran 50 cm × 30 cm × 40 cm terisi air setengahnya',
    statements: [
      {
        id: 's1',
        text: 'Volume maksimal akuarium jika diisi air hingga penuh adalah 60.000 cm³ atau 60 liter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Volume air yang ada di dalam akuarium saat ini adalah 30 liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Untuk memenuhi akuarium tersebut, perlu ditambahkan lagi air sebanyak 25 liter.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Volume penuh = 50 × 30 × 40 = 60.000 cm³ = 60 liter (BENAR).\n2. Air saat ini (1/2 bagian) = 1/2 × 60 = 30 liter (BENAR).\n3. Sisa air yang dibutuhkan hingga penuh = 60 - 30 = 30 liter (SALAH, tertulis 25 liter).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Volume Kotak Susu (Balok)',
    difficulty: 'Sedang',
    text: 'Sebuah kotak susu kemasan berbentuk balok memiliki panjang 10 cm, lebar 5 cm, dan tinggi 20 cm. Ibu membeli 2 kotak susu yang sama persis. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Volume satu kotak susu adalah 1.000 cm³.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Volume satu kotak susu tersebut sama dengan 1 liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Total volume dari 2 kotak susu yang dibeli Ibu adalah 2.500 cm³.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Volume 1 kotak susu = 10 × 5 × 20 = 1.000 cm³ (BENAR).\n2. 1.000 cm³ = 1 liter (BENAR).\n3. Total 2 kotak susu = 2 × 1.000 cm³ = 2.000 cm³ (SALAH, tertulis 2.500 cm³).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Menentukan Dimensi Balok',
    difficulty: 'Sedang',
    text: 'Sebuah balok memiliki volume 360 cm³. Panjang balok tersebut 10 cm dan tingginya 6 cm. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Hasil kali panjang dan tinggi balok adalah 60 cm².',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Lebar balok tersebut adalah 6 cm.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Luas alas balok (panjang × lebar) adalah 50 cm².',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Panjang × tinggi = 10 × 6 = 60 cm² (BENAR).\n2. Lebar = Volume ÷ (p × t) = 360 ÷ 60 = 6 cm (BENAR).\n3. Luas alas = p × l = 10 × 6 = 60 cm² (SALAH, tertulis 50 cm²).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Volume Bak Kubus & Pengisian Air',
    difficulty: 'Sedang',
    text: 'Sebuah bak penampungan air berbentuk kubus memiliki panjang rusuk bagian dalam 60 cm seperti pada gambar. Bak tersebut kosong dan akan diisi air menggunakan selang dengan aliran air 18 liter setiap menit. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageSvg: createCubeSvg('60 cm', {
      waterFraction: 0.25,
      labelTitle: 'Bak Penampungan Air Kubus',
    }),
    imageCaption: 'Bak air kubus berukuran rusuk 60 cm',
    statements: [
      {
        id: 's1',
        text: 'Volume penuh bak tersebut adalah 216.000 cm³.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kapasitas air maksimal bak tersebut dalam satuan liter adalah 216 liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Waktu yang diperlukan untuk mengisi bak hingga penuh adalah 10 menit.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Volume penuh = 60 × 60 × 60 = 216.000 cm³ (BENAR).\n2. 216.000 cm³ = 216.000 ÷ 1.000 = 216 liter (BENAR).\n3. Waktu pengisian = 216 liter ÷ 18 liter/menit = 12 menit (SALAH, tertulis 10 menit).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Kesetaraan Volume Dua Balok',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar dua buah kotak berbentuk balok, yaitu Balok A (8 cm × 5 cm × 4 cm) dan Balok B (10 cm × 4 cm × 4 cm). Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageSvg: createTwoContainersSvg(
      { title: 'Balok A', type: 'cuboid', p: '8 cm', l: '5 cm', t: '4 cm' },
      { title: 'Balok B', type: 'cuboid', p: '10 cm', l: '4 cm', t: '4 cm' }
    ),
    imageCaption: 'Dua kotak balok dengan ukuran berbeda',
    statements: [
      {
        id: 's1',
        text: 'Volume Balok A adalah 160 cm³.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Volume Balok B lebih besar daripada volume Balok A.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Jumlah volume Balok A dan Balok B adalah 320 cm³.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Volume Balok A = 8 × 5 × 4 = 160 cm³ (BENAR).\n2. Volume Balok B = 10 × 4 × 4 = 160 cm³, artinya SAMA BESAR dengan Balok A (SALAH).\n3. Jumlah volume = 160 + 160 = 320 cm³ (BENAR).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Volume Gabungan Dua Balok',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar bangun ruang gabungan dua balok bertumpuk berikut! Balok bawah berukuran 10 cm × 5 cm × 4 cm, sedangkan balok atas berukuran 6 cm × 5 cm × 3 cm. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    imageSvg: createCompositeCuboidsSvg({
      bottomP: '10 cm',
      bottomL: '5 cm',
      bottomT: '4 cm',
      topP: '6 cm',
      topL: '5 cm',
      topT: '3 cm',
    }),
    imageCaption: 'Gabungan balok bawah (10×5×4 cm) dan balok atas (6×5×3 cm)',
    statements: [
      {
        id: 's1',
        text: 'Volume balok bagian bawah adalah 200 cm³.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Volume balok bagian atas adalah 90 cm³.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Volume total gabungan kedua balok tersebut adalah 300 cm³.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Volume balok bawah = 10 × 5 × 4 = 200 cm³ (BENAR).\n2. Volume balok atas = 6 × 5 × 3 = 90 cm³ (BENAR).\n3. Volume total = 200 + 90 = 290 cm³ (SALAH, tertulis 300 cm³).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Kapasitas Peti & Kotak Kubus Kecil',
    difficulty: 'Sukar',
    text: 'Sebuah peti berbentuk balok berukuran panjang 40 cm, lebar 30 cm, dan tinggi 20 cm. Peti tersebut akan diisi kotak-kotak kue berbentuk kubus dengan panjang rusuk 10 cm hingga penuh tanpa ruang kosong. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Volume peti berbentuk balok tersebut adalah 24.000 cm³.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Volume satu buah kotak kue berbentuk kubus adalah 1.000 cm³.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Banyak kotak kue yang dapat dimuat ke dalam peti tersebut adalah 24 buah.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Volume peti = 40 × 30 × 20 = 24.000 cm³ (BENAR).\n2. Volume 1 kotak kue kubus = 10 × 10 × 10 = 1.000 cm³ (BENAR).\n3. Banyak kotak kue = 24.000 ÷ 1.000 = 24 buah (BENAR).',
  },
];
