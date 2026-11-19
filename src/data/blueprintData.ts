import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Matematika (Lingkup Materi: Volume Bangun Ruang)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Volume Bangun Ruang
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan volume bangun ruang menggunakan satuan tidak baku (kubus satuan).',
    indikatorSoal:
      'Disajikan gambar susunan kubus satuan berukuran 3 × 2 × 2, peserta didik dapat menghitung volume bangun dalam kubus satuan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan volume bangun ruang balok dari susunan kubus satuan 1 cm³.',
    indikatorSoal:
      'Disajikan gambar susunan kubus satuan berukuran 4 × 3 × 2 dengan tiap kubus 1 cm³, peserta didik dapat menghitung volumenya dalam cm³.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung banyak kubus satuan pada tumpukan bangun ruang bertingkat.',
    indikatorSoal:
      'Disajikan gambar tumpukan kubus satuan bertingkat dua lapisan, peserta didik dapat menentukan jumlah seluruh kubus satuan penyusunnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bangun ruang kubus menggunakan satuan baku (cm³).',
    indikatorSoal:
      'Disajikan gambar kotak mainan berbentuk kubus dengan panjang rusuk 5 cm, peserta didik dapat menghitung volumenya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bangun ruang balok dengan ukuran panjang, lebar, dan tinggi tertentu.',
    indikatorSoal:
      'Disajikan gambar balok dengan ukuran panjang, lebar, dan tinggi dalam cm, peserta didik dapat menentukan volume balok tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume benda berbentuk kubus dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan narasi rubik berbentuk kubus dengan panjang rusuk 6 cm, peserta didik dapat menghitung volumenya dalam cm³.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat mengonversi satuan volume antara liter (dm³) dan sentimeter kubik (cm³).',
    indikatorSoal:
      'Disajikan kapasitas ember dalam satuan liter, peserta didik dapat mengonversinya ke satuan sentimeter kubik (cm³).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan volume air pada wadah berbentuk balok yang terisi sebagian.',
    indikatorSoal:
      'Disajikan gambar akuarium balok berisi air 3/4 bagian beserta dimensinya, peserta didik dapat menghitung volume air dalam satuan liter.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan panjang rusuk kubus jika diketahui volumenya.',
    indikatorSoal:
      'Disajikan volume kotak kado berbentuk kubus sebesar 1.000 cm³, peserta didik dapat menentukan panjang rusuknya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan volume balok berdasarkan luas alas dan tingginya.',
    indikatorSoal:
      'Disajikan gambar balok dengan sorotan luas alas dan ukuran tinggi, peserta didik dapat menghitung volume balok.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume air pada bak mandi berbentuk kubus dalam satuan liter (dm³).',
    indikatorSoal:
      'Disajikan gambar bak mandi kubus bersisi 10 dm yang terisi setengah bagian, peserta didik dapat menghitung volume air dalam liter.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume benda sehari-hari berbentuk balok.',
    indikatorSoal:
      'Disajikan ukuran panjang, lebar, dan tinggi kotak pensil berbentuk balok, peserta didik dapat menghitung volumenya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan banyak kubus kecil yang dapat mengisi penuh sebuah wadah berbentuk balok.',
    indikatorSoal:
      'Disajikan ukuran kardus balok dan panjang rusuk kubus mainan, peserta didik dapat menghitung banyak kubus mainan yang muat di dalam kardus.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan tinggi balok apabila volume, panjang, dan lebarnya diketahui.',
    indikatorSoal:
      'Disajikan gambar balok beserta volume, panjang, dan lebarnya, peserta didik dapat menghitung tinggi balok tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan menghitung selisih volume antara bangun kubus dan balok.',
    indikatorSoal:
      'Disajikan gambar Kubus A dan Balok B beserta ukurannya, peserta didik dapat menentukan selisih volume kedua bangun tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah kontekstual pengisian bak balok menggunakan takaran liter.',
    indikatorSoal:
      'Disajikan ukuran bak air balok dan kapasitas ember pengisi dalam liter, peserta didik dapat menentukan berapa kali pengisian hingga bak penuh.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume gabungan dua bangun ruang (balok dan kubus).',
    indikatorSoal:
      'Disajikan gambar bangun ruang gabungan balok bawah dan kubus di atasnya beserta ukurannya, peserta didik dapat menghitung volume totalnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perubahan volume kubus apabila panjang rusuknya diperbesar.',
    indikatorSoal:
      'Disajikan panjang rusuk kubus awal yang diperbesar 2 kali lipat, peserta didik dapat menentukan kelipatan perubahan volumenya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis lapisan alas, tinggi lapisan, dan volume total pada susunan kubus satuan.',
    indikatorSoal:
      'Disajikan gambar susunan kubus satuan 3 × 3 × 2 dan 3 pernyataan, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi luas alas, volume awal, dan perubahan volume balok jika tingginya bertambah.',
    indikatorSoal:
      'Disajikan gambar balok berukuran 12 × 5 × 4 cm dan 3 pernyataan, peserta didik dapat menentukan semua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan kapasitas dua wadah berbentuk kubus dan balok beserta konversi liter dan selisihnya.',
    indikatorSoal:
      'Disajikan gambar Kotak A (kubus) dan Kotak B (balok), peserta didik dapat memilih semua pernyataan perbandingan volume yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi ukuran alas, jumlah kubus tiap lapisan, dan volume total dari susunan kubus satuan.',
    indikatorSoal:
      'Disajikan gambar susunan kubus satuan 4 × 2 × 3, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) pada 3 pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi luas sisi alas, rumus, dan hasil perhitungan volume kubus.',
    indikatorSoal:
      'Disajikan gambar kotak hadiah berbentuk kubus berusuk 8 cm, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis kapasitas maksimal, volume terisi setengah bagian, dan kekurangan air pada akuarium balok.',
    indikatorSoal:
      'Disajikan gambar akuarium balok terisi 1/2 bagian, peserta didik dapat mengevaluasi kebenaran (Benar/Salah) dari 3 pernyataan volume liter.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume satuan, konversi ke liter, dan volume gabungan beberapa kemasan balok.',
    indikatorSoal:
      'Disajikan ukuran kemasan kotak susu balok dan jumlah kemasan yang dibeli, peserta didik dapat menilai kebenaran (Benar/Salah) pada 3 pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan ukuran lebar yang belum diketahui serta luas alas balok dari volume yang diketahui.',
    indikatorSoal:
      'Disajikan volume balok, panjang, dan tingginya, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan dimensi dan luas alas.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bak kubus dalam cm³ dan liter serta lama waktu pengisian berdasarkan debit aliran.',
    indikatorSoal:
      'Disajikan gambar bak kubus berusuk 60 cm dan aliran air 18 liter/menit, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan menjumlahkan volume dua buah balok berukuran berbeda.',
    indikatorSoal:
      'Disajikan gambar Balok A dan Balok B beserta dimensinya, peserta didik dapat menilai kebenaran (Benar/Salah) dari 3 pernyataan perbandingan volume.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis volume masing-masing bagian dan volume total bangun ruang gabungan dua balok.',
    indikatorSoal:
      'Disajikan gambar gabungan dua balok bertumpuk beserta ukurannya, peserta didik dapat memverifikasi kebenaran (Benar/Salah) pada 3 pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah muatan kotak kubus kecil di dalam peti besar berbentuk balok.',
    indikatorSoal:
      'Disajikan ukuran peti balok dan kotak kue kubus, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan kapasitas peti.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan volume bangun ruang.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('rusuk') || t.includes('pangkat') || t.includes('bilangan')) {
    return 'Bilangan';
  }
  if (t.includes('gabungan') || t.includes('bertingkat') || t.includes('analisis susunan')) {
    return 'Geometri';
  }
  return 'Pengukuran';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
