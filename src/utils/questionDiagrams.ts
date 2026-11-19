/**
 * Generator Diagram SVG 3D Presisi untuk Soal Matematika Volume Bangun Ruang
 */

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * 1. Susunan Kubus Satuan Isometric (nx × ny × nz)
 */
export function createUnitCubeGridSvg(
  nx: number,
  ny: number,
  nz: number,
  options?: { title?: string }
): string {
  const unit = Math.min(26, Math.floor(170 / (nx + ny + nz * 0.7)));
  const cos30 = 0.866;
  const sin30 = 0.5;

  const project = (x: number, y: number, z: number) => ({
    px: (x - y) * cos30 * unit,
    py: (x + y) * sin30 * unit - z * unit,
  });

  // Compute bounding box
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;

  for (let x = 0; x <= nx; x++) {
    for (let y = 0; y <= ny; y++) {
      for (let z = 0; z <= nz; z++) {
        const { px, py } = project(x, y, z);
        if (px < minX) minX = px;
        if (px > maxX) maxX = px;
        if (py < minY) minY = py;
        if (py > maxY) maxY = py;
      }
    }
  }

  const padX = 48;
  const padTop = options?.title ? 36 : 22;
  const padBottom = 30;
  const width = Math.max(320, Math.ceil(maxX - minX + padX * 2));
  const height = Math.max(190, Math.ceil(maxY - minY + padTop + padBottom));
  const ox = (width - (maxX + minX)) / 2;
  const oy = padTop - minY;

  const cubes: string[] = [];
  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        const p001 = project(x, y, z + 1);
        const p101 = project(x + 1, y, z + 1);
        const p111 = project(x + 1, y + 1, z + 1);
        const p011 = project(x, y + 1, z + 1);

        const p100 = project(x + 1, y, z);
        const p110 = project(x + 1, y + 1, z);
        const p010 = project(x, y + 1, z);

        const pt = (p: { px: number; py: number }) =>
          `${(p.px + ox).toFixed(1)},${(p.py + oy).toFixed(1)}`;

        // Top face
        cubes.push(
          `<polygon points="${pt(p001)} ${pt(p101)} ${pt(p111)} ${pt(p011)}" fill="#93c5fd" stroke="#1e3a8a" stroke-width="1.2" stroke-linejoin="round"/>`
        );
        // Left-front face (+y)
        cubes.push(
          `<polygon points="${pt(p010)} ${pt(p110)} ${pt(p111)} ${pt(p011)}" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1.2" stroke-linejoin="round"/>`
        );
        // Right-front face (+x)
        cubes.push(
          `<polygon points="${pt(p100)} ${pt(p110)} ${pt(p111)} ${pt(p101)}" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.2" stroke-linejoin="round"/>`
        );
      }
    }
  }

  // Legend small sample cube in bottom-right
  const titleEl = options?.title
    ? `<text x="${width / 2}" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">${escapeXml(options.title)}</text>`
    : '';

  const footerLabel = `<text x="${width / 2}" y="${height - 10}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">Susunan Kubus Satuan (${nx} × ${ny} × ${nz})</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="12" fill="#f8fafc"/>
  ${titleEl}
  ${cubes.join('\n  ')}
  ${footerLabel}
</svg>`;
}

/**
 * 2. Susunan Kubus Satuan Bertingkat (Custom heights grid[y][x])
 */
export function createSteppedUnitCubesSvg(
  heightsGrid: number[][],
  title = 'Tumpukan Kubus Satuan Bertingkat'
): string {
  const ny = heightsGrid.length;
  const nx = heightsGrid[0]?.length || 1;
  const nz = Math.max(...heightsGrid.flat(), 1);
  const unit = 26;
  const cos30 = 0.866;
  const sin30 = 0.5;

  const project = (x: number, y: number, z: number) => ({
    px: (x - y) * cos30 * unit,
    py: (x + y) * sin30 * unit - z * unit,
  });

  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;

  for (let x = 0; x <= nx; x++) {
    for (let y = 0; y <= ny; y++) {
      for (let z = 0; z <= nz; z++) {
        const { px, py } = project(x, y, z);
        if (px < minX) minX = px;
        if (px > maxX) maxX = px;
        if (py < minY) minY = py;
        if (py > maxY) maxY = py;
      }
    }
  }

  const width = 340;
  const height = Math.max(195, Math.ceil(maxY - minY + 68));
  const ox = (width - (maxX + minX)) / 2;
  const oy = 34 - minY;

  const cubes: string[] = [];
  for (let z = 0; z < nz; z++) {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        if (z >= (heightsGrid[y]?.[x] ?? 0)) continue;

        const p001 = project(x, y, z + 1);
        const p101 = project(x + 1, y, z + 1);
        const p111 = project(x + 1, y + 1, z + 1);
        const p011 = project(x, y + 1, z + 1);

        const p100 = project(x + 1, y, z);
        const p110 = project(x + 1, y + 1, z);
        const p010 = project(x, y + 1, z);

        const pt = (p: { px: number; py: number }) =>
          `${(p.px + ox).toFixed(1)},${(p.py + oy).toFixed(1)}`;

        const isTopLayer = z > 0;
        const topFill = isTopLayer ? '#fde68a' : '#93c5fd';
        const leftFill = isTopLayer ? '#fbbf24' : '#60a5fa';
        const rightFill = isTopLayer ? '#d97706' : '#2563eb';
        const stroke = isTopLayer ? '#78350f' : '#1e3a8a';

        cubes.push(
          `<polygon points="${pt(p001)} ${pt(p101)} ${pt(p111)} ${pt(p011)}" fill="${topFill}" stroke="${stroke}" stroke-width="1.2" stroke-linejoin="round"/>`
        );
        cubes.push(
          `<polygon points="${pt(p010)} ${pt(p110)} ${pt(p111)} ${pt(p011)}" fill="${leftFill}" stroke="${stroke}" stroke-width="1.2" stroke-linejoin="round"/>`
        );
        cubes.push(
          `<polygon points="${pt(p100)} ${pt(p110)} ${pt(p111)} ${pt(p101)}" fill="${rightFill}" stroke="${stroke}" stroke-width="1.2" stroke-linejoin="round"/>`
        );
      }
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="12" fill="#f8fafc"/>
  <text x="${width / 2}" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">${escapeXml(title)}</text>
  ${cubes.join('\n  ')}
  <text x="${width / 2}" y="${height - 10}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#475569">Alas: ${nx} × ${ny} kubus | Lapisan atas ditandai warna kuning</text>
</svg>`;
}

/**
 * 3. Kubus Tunggal dengan Label Rusuk & Opsional Ketinggian Air
 */
export function createCubeSvg(
  sideLabel: string,
  options?: { waterFraction?: number; labelTitle?: string }
): string {
  const width = 340;
  const height = 215;
  const s = 92;
  const dx = 42;
  const dy = 30;
  const x0 = 105;
  const y0 = 66;

  const wf = options?.waterFraction ?? 0;
  const waterEl =
    wf > 0
      ? (() => {
          const wh = s * wf;
          const wy = y0 + s - wh;
          return `
    <!-- Air di dalam kubus -->
    <polygon points="${x0},${wy} ${x0 + s},${wy} ${x0 + s},${y0 + s} ${x0},${y0 + s}" fill="#38bdf8" fill-opacity="0.45"/>
    <polygon points="${x0 + s},${wy} ${x0 + s + dx},${wy - dy} ${x0 + s + dx},${y0 + s - dy} ${x0 + s},${y0 + s}" fill="#0284c7" fill-opacity="0.45"/>
    <polygon points="${x0},${wy} ${x0 + dx},${wy - dy} ${x0 + s + dx},${wy - dy} ${x0 + s},${wy}" fill="#7dd3fc" fill-opacity="0.7" stroke="#0284c7" stroke-width="1.2"/>`;
        })()
      : '';

  const titleEl = options?.labelTitle
    ? `<text x="${width / 2}" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">${escapeXml(options.labelTitle)}</text>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="12" fill="#f8fafc"/>
  ${titleEl}
  <!-- Bidang Dasar Kubus -->
  <polygon points="${x0},${y0} ${x0 + dx},${y0 - dy} ${x0 + s + dx},${y0 - dy} ${x0 + s},${y0}" fill="#dbeafe" fill-opacity="0.65"/>
  <polygon points="${x0},${y0} ${x0 + s},${y0} ${x0 + s},${y0 + s} ${x0},${y0 + s}" fill="#eff6ff" fill-opacity="0.55"/>
  <polygon points="${x0 + s},${y0} ${x0 + s + dx},${y0 - dy} ${x0 + s + dx},${y0 + s - dy} ${x0 + s},${y0 + s}" fill="#bfdbfe" fill-opacity="0.6"/>
  ${waterEl}
  <!-- Garis Belakang Putus-Putus -->
  <g stroke="#64748b" stroke-width="1.4" stroke-dasharray="4 3" fill="none">
    <line x1="${x0 + dx}" y1="${y0 - dy}" x2="${x0 + dx}" y2="${y0 + s - dy}"/>
    <line x1="${x0 + dx}" y1="${y0 + s - dy}" x2="${x0 + s + dx}" y2="${y0 + s - dy}"/>
    <line x1="${x0}" y1="${y0 + s}" x2="${x0 + dx}" y2="${y0 + s - dy}"/>
  </g>
  <!-- Garis Tepi Depan -->
  <g stroke="#1e3a8a" stroke-width="2" stroke-linejoin="round" fill="none">
    <rect x="${x0}" y="${y0}" width="${s}" height="${s}"/>
    <line x1="${x0}" y1="${y0}" x2="${x0 + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + s}" y1="${y0}" x2="${x0 + s + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + s}" y1="${y0 + s}" x2="${x0 + s + dx}" y2="${y0 + s - dy}"/>
    <line x1="${x0 + dx}" y1="${y0 - dy}" x2="${x0 + s + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + s + dx}" y1="${y0 - dy}" x2="${x0 + s + dx}" y2="${y0 + s - dy}"/>
  </g>
  <!-- Label Dimensi -->
  <text x="${x0 + s / 2}" y="${y0 + s + 19}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#1e3a8a">s = ${escapeXml(sideLabel)}</text>
  <text x="${x0 + s + dx + 10}" y="${y0 - dy + s / 2 + 4}" text-anchor="start" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e3a8a">${escapeXml(sideLabel)}</text>
  <text x="${x0 + s + dx / 2 + 10}" y="${y0 + s - dy / 2 + 14}" text-anchor="start" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#475569">${escapeXml(sideLabel)}</text>
</svg>`;
}

/**
 * 4. Balok dengan Label Panjang, Lebar, Tinggi & Opsional Air
 */
export function createCuboidSvg(
  pLabel: string,
  lLabel: string,
  tLabel: string,
  options?: { waterFraction?: number; labelTitle?: string; highlightUnknown?: 't' }
): string {
  const width = 360;
  const height = 215;
  const w = 150;
  const h = 82;
  const dx = 46;
  const dy = 32;
  const x0 = 80;
  const y0 = 72;

  const wf = options?.waterFraction ?? 0;
  const waterEl =
    wf > 0
      ? (() => {
          const wh = h * wf;
          const wy = y0 + h - wh;
          return `
    <!-- Air di dalam balok -->
    <polygon points="${x0},${wy} ${x0 + w},${wy} ${x0 + w},${y0 + h} ${x0},${y0 + h}" fill="#38bdf8" fill-opacity="0.45"/>
    <polygon points="${x0 + w},${wy} ${x0 + w + dx},${wy - dy} ${x0 + w + dx},${y0 + h - dy} ${x0 + w},${y0 + h}" fill="#0284c7" fill-opacity="0.45"/>
    <polygon points="${x0},${wy} ${x0 + dx},${wy - dy} ${x0 + w + dx},${wy - dy} ${x0 + w},${wy}" fill="#7dd3fc" fill-opacity="0.72" stroke="#0284c7" stroke-width="1.2"/>`;
        })()
      : '';

  const titleEl = options?.labelTitle
    ? `<text x="${width / 2}" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">${escapeXml(options.labelTitle)}</text>`
    : '';

  const tColor = options?.highlightUnknown === 't' ? '#dc2626' : '#1e3a8a';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="12" fill="#f8fafc"/>
  ${titleEl}
  <!-- Bidang Balok -->
  <polygon points="${x0},${y0} ${x0 + dx},${y0 - dy} ${x0 + w + dx},${y0 - dy} ${x0 + w},${y0}" fill="#dbeafe" fill-opacity="0.65"/>
  <polygon points="${x0},${y0} ${x0 + w},${y0} ${x0 + w},${y0 + h} ${x0},${y0 + h}" fill="#eff6ff" fill-opacity="0.55"/>
  <polygon points="${x0 + w},${y0} ${x0 + w + dx},${y0 - dy} ${x0 + w + dx},${y0 + h - dy} ${x0 + w},${y0 + h}" fill="#bfdbfe" fill-opacity="0.6"/>
  ${waterEl}
  <!-- Garis Belakang Putus-Putus -->
  <g stroke="#64748b" stroke-width="1.4" stroke-dasharray="4 3" fill="none">
    <line x1="${x0 + dx}" y1="${y0 - dy}" x2="${x0 + dx}" y2="${y0 + h - dy}"/>
    <line x1="${x0 + dx}" y1="${y0 + h - dy}" x2="${x0 + w + dx}" y2="${y0 + h - dy}"/>
    <line x1="${x0}" y1="${y0 + h}" x2="${x0 + dx}" y2="${y0 + h - dy}"/>
  </g>
  <!-- Garis Tepi Depan -->
  <g stroke="#1e3a8a" stroke-width="2" stroke-linejoin="round" fill="none">
    <rect x="${x0}" y="${y0}" width="${w}" height="${h}"/>
    <line x1="${x0}" y1="${y0}" x2="${x0 + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + w}" y1="${y0}" x2="${x0 + w + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + w}" y1="${y0 + h}" x2="${x0 + w + dx}" y2="${y0 + h - dy}"/>
    <line x1="${x0 + dx}" y1="${y0 - dy}" x2="${x0 + w + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + w + dx}" y1="${y0 - dy}" x2="${x0 + w + dx}" y2="${y0 + h - dy}"/>
  </g>
  <!-- Label Dimensi -->
  <text x="${x0 + w / 2}" y="${y0 + h + 19}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#1e3a8a">p = ${escapeXml(pLabel)}</text>
  <text x="${x0 + w + dx / 2 + 8}" y="${y0 + h - dy / 2 + 14}" text-anchor="start" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">l = ${escapeXml(lLabel)}</text>
  <text x="${x0 + w + dx + 8}" y="${y0 - dy + h / 2 + 4}" text-anchor="start" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="${tColor}">t = ${escapeXml(tLabel)}</text>
</svg>`;
}

/**
 * 5. Balok dengan Sorotan Luas Alas dan Tinggi
 */
export function createCuboidWithBaseAreaSvg(baseAreaLabel: string, heightLabel: string): string {
  const width = 360;
  const height = 215;
  const w = 150;
  const h = 84;
  const dx = 46;
  const dy = 32;
  const x0 = 80;
  const y0 = 70;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="12" fill="#f8fafc"/>
  <text x="${width / 2}" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Balok dengan Luas Alas Diketahui</text>
  <!-- Alas Berwarna -->
  <polygon points="${x0},${y0 + h} ${x0 + dx},${y0 + h - dy} ${x0 + w + dx},${y0 + h - dy} ${x0 + w},${y0 + h}" fill="#fde047" fill-opacity="0.7" stroke="#ca8a04" stroke-width="1.2"/>
  <!-- Sisi Transparan -->
  <polygon points="${x0},${y0} ${x0 + dx},${y0 - dy} ${x0 + w + dx},${y0 - dy} ${x0 + w},${y0}" fill="#dbeafe" fill-opacity="0.45"/>
  <polygon points="${x0},${y0} ${x0 + w},${y0} ${x0 + w},${y0 + h} ${x0},${y0 + h}" fill="#eff6ff" fill-opacity="0.35"/>
  <!-- Garis Belakang Putus-Putus -->
  <g stroke="#64748b" stroke-width="1.4" stroke-dasharray="4 3" fill="none">
    <line x1="${x0 + dx}" y1="${y0 - dy}" x2="${x0 + dx}" y2="${y0 + h - dy}"/>
    <line x1="${x0 + dx}" y1="${y0 + h - dy}" x2="${x0 + w + dx}" y2="${y0 + h - dy}"/>
    <line x1="${x0}" y1="${y0 + h}" x2="${x0 + dx}" y2="${y0 + h - dy}"/>
  </g>
  <!-- Garis Tepi Utama -->
  <g stroke="#1e3a8a" stroke-width="2" stroke-linejoin="round" fill="none">
    <rect x="${x0}" y="${y0}" width="${w}" height="${h}"/>
    <line x1="${x0}" y1="${y0}" x2="${x0 + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + w}" y1="${y0}" x2="${x0 + w + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + w}" y1="${y0 + h}" x2="${x0 + w + dx}" y2="${y0 + h - dy}"/>
    <line x1="${x0 + dx}" y1="${y0 - dy}" x2="${x0 + w + dx}" y2="${y0 - dy}"/>
    <line x1="${x0 + w + dx}" y1="${y0 - dy}" x2="${x0 + w + dx}" y2="${y0 + h - dy}"/>
  </g>
  <text x="${x0 + w / 2 + 12}" y="${y0 + h + 20}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#854d0e">Luas Alas = ${escapeXml(baseAreaLabel)}</text>
  <text x="${x0 + w + dx + 8}" y="${y0 - dy + h / 2 + 4}" text-anchor="start" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e3a8a">t = ${escapeXml(heightLabel)}</text>
</svg>`;
}

/**
 * 6. Perbandingan Dua Wadah / Bangun Ruang (A dan B berdampingan)
 */
export interface ContainerSpec {
  title: string;
  type: 'cube' | 'cuboid';
  s?: string;
  p?: string;
  l?: string;
  t?: string;
}

export function createTwoContainersSvg(a: ContainerSpec, b: ContainerSpec): string {
  const width = 420;
  const height = 215;

  const drawSingle = (spec: ContainerSpec, baseX: number, baseY: number, accent: string, light: string) => {
    const w = spec.type === 'cube' ? 76 : 106;
    const h = spec.type === 'cube' ? 76 : 64;
    const dx = 30;
    const dy = 22;
    const y0 = baseY + (spec.type === 'cube' ? 0 : 12);

    const labels =
      spec.type === 'cube'
        ? `<text x="${baseX + w / 2}" y="${y0 + h + 18}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="${accent}">s = ${escapeXml(spec.s || '')}</text>`
        : `<text x="${baseX + w / 2}" y="${y0 + h + 18}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="${accent}">p = ${escapeXml(spec.p || '')}</text>
           <text x="${baseX + w + dx / 2 + 6}" y="${y0 + h - dy / 2 + 12}" text-anchor="start" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#334155">l=${escapeXml(spec.l || '')}</text>
           <text x="${baseX + w + dx + 5}" y="${y0 - dy + h / 2 + 4}" text-anchor="start" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="${accent}">t=${escapeXml(spec.t || '')}</text>`;

    return `
      <text x="${baseX + w / 2 + 10}" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">${escapeXml(spec.title)}</text>
      <polygon points="${baseX},${y0} ${baseX + dx},${y0 - dy} ${baseX + w + dx},${y0 - dy} ${baseX + w},${y0}" fill="${light}"/>
      <polygon points="${baseX},${y0} ${baseX + w},${y0} ${baseX + w},${y0 + h} ${baseX},${y0 + h}" fill="#ffffff" fill-opacity="0.7"/>
      <polygon points="${baseX + w},${y0} ${baseX + w + dx},${y0 - dy} ${baseX + w + dx},${y0 + h - dy} ${baseX + w},${y0 + h}" fill="${light}" fill-opacity="0.9"/>
      <g stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3" fill="none">
        <line x1="${baseX + dx}" y1="${y0 - dy}" x2="${baseX + dx}" y2="${y0 + h - dy}"/>
        <line x1="${baseX + dx}" y1="${y0 + h - dy}" x2="${baseX + w + dx}" y2="${y0 + h - dy}"/>
        <line x1="${baseX}" y1="${y0 + h}" x2="${baseX + dx}" y2="${y0 + h - dy}"/>
      </g>
      <g stroke="${accent}" stroke-width="1.8" stroke-linejoin="round" fill="none">
        <rect x="${baseX}" y="${y0}" width="${w}" height="${h}"/>
        <line x1="${baseX}" y1="${y0}" x2="${baseX + dx}" y2="${y0 - dy}"/>
        <line x1="${baseX + w}" y1="${y0}" x2="${baseX + w + dx}" y2="${y0 - dy}"/>
        <line x1="${baseX + w}" y1="${y0 + h}" x2="${baseX + w + dx}" y2="${y0 + h - dy}"/>
        <line x1="${baseX + dx}" y1="${y0 - dy}" x2="${baseX + w + dx}" y2="${y0 - dy}"/>
        <line x1="${baseX + w + dx}" y1="${y0 - dy}" x2="${baseX + w + dx}" y2="${y0 + h - dy}"/>
      </g>
      ${labels}
    `;
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="12" fill="#f8fafc"/>
  <line x1="${width / 2 - 6}" y1="20" x2="${width / 2 - 6}" y2="${height - 18}" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  ${drawSingle(a, 42, 68, '#1d4ed8', '#dbeafe')}
  ${drawSingle(b, 232, 68, '#047857', '#d1fae5')}
</svg>`;
}

/**
 * 7. Bangun Ruang Gabungan: Balok Bawah + Kubus di Atasnya
 */
export function createCompositeSolidSvg(dims: {
  bottomP: string;
  bottomL: string;
  bottomT: string;
  topS: string;
}): string {
  const width = 360;
  const height = 240;

  // Bottom cuboid
  const bw = 160;
  const bh = 58;
  const bdx = 44;
  const bdy = 28;
  const bx0 = 72;
  const by0 = 135;

  // Top cube sitting on left-top of bottom cuboid
  const tw = 64;
  const th = 56;
  const tdx = 34;
  const tdy = 22;
  const tx0 = bx0 + 14;
  const ty0 = by0 - th - 6;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="12" fill="#f8fafc"/>
  <text x="${width / 2}" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Gabungan Balok dan Kubus</text>

  <!-- Balok Bawah -->
  <polygon points="${bx0},${by0} ${bx0 + bdx},${by0 - bdy} ${bx0 + bw + bdx},${by0 - bdy} ${bx0 + bw},${by0}" fill="#dbeafe"/>
  <polygon points="${bx0},${by0} ${bx0 + bw},${by0} ${bx0 + bw},${by0 + bh} ${bx0},${by0 + bh}" fill="#eff6ff"/>
  <polygon points="${bx0 + bw},${by0} ${bx0 + bw + bdx},${by0 - bdy} ${bx0 + bw + bdx},${by0 + bh - bdy} ${bx0 + bw},${by0 + bh}" fill="#bfdbfe"/>
  <g stroke="#1e3a8a" stroke-width="1.8" stroke-linejoin="round" fill="none">
    <rect x="${bx0}" y="${by0}" width="${bw}" height="${bh}"/>
    <line x1="${bx0}" y1="${by0}" x2="${bx0 + bdx}" y2="${by0 - bdy}"/>
    <line x1="${bx0 + bw}" y1="${by0}" x2="${bx0 + bw + bdx}" y2="${by0 - bdy}"/>
    <line x1="${bx0 + bw}" y1="${by0 + bh}" x2="${bx0 + bw + bdx}" y2="${by0 + bh - bdy}"/>
    <line x1="${bx0 + bdx}" y1="${by0 - bdy}" x2="${bx0 + bw + bdx}" y2="${by0 - bdy}"/>
    <line x1="${bx0 + bw + bdx}" y1="${by0 - bdy}" x2="${bx0 + bw + bdx}" y2="${by0 + bh - bdy}"/>
  </g>

  <!-- Kubus Atas -->
  <polygon points="${tx0},${ty0} ${tx0 + tdx},${ty0 - tdy} ${tx0 + tw + tdx},${ty0 - tdy} ${tx0 + tw},${ty0}" fill="#fde68a"/>
  <polygon points="${tx0},${ty0} ${tx0 + tw},${ty0} ${tx0 + tw},${ty0 + th} ${tx0},${ty0 + th}" fill="#fef3c7"/>
  <polygon points="${tx0 + tw},${ty0} ${tx0 + tw + tdx},${ty0 - tdy} ${tx0 + tw + tdx},${ty0 + th - tdy} ${tx0 + tw},${ty0 + th}" fill="#fcd34d"/>
  <g stroke="#92400e" stroke-width="1.8" stroke-linejoin="round" fill="none">
    <rect x="${tx0}" y="${ty0}" width="${tw}" height="${th}"/>
    <line x1="${tx0}" y1="${ty0}" x2="${tx0 + tdx}" y2="${ty0 - tdy}"/>
    <line x1="${tx0 + tw}" y1="${ty0}" x2="${tx0 + tw + tdx}" y2="${ty0 - tdy}"/>
    <line x1="${tx0 + tw}" y1="${ty0 + th}" x2="${tx0 + tw + tdx}" y2="${ty0 + th - tdy}"/>
    <line x1="${tx0 + tdx}" y1="${ty0 - tdy}" x2="${tx0 + tw + tdx}" y2="${ty0 - tdy}"/>
    <line x1="${tx0 + tw + tdx}" y1="${ty0 - tdy}" x2="${tx0 + tw + tdx}" y2="${ty0 + th - tdy}"/>
  </g>

  <!-- Label Dimensi -->
  <text x="${tx0 - 8}" y="${ty0 + th / 2 + 4}" text-anchor="end" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#92400e">s = ${escapeXml(dims.topS)}</text>
  <text x="${tx0 + tw / 2}" y="${ty0 - tdy - 6}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e">Kubus (${escapeXml(dims.topS)})</text>
  <text x="${bx0 + bw / 2}" y="${by0 + bh + 18}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#1e3a8a">p = ${escapeXml(dims.bottomP)}</text>
  <text x="${bx0 + bw + bdx / 2 + 8}" y="${by0 + bh - bdy / 2 + 14}" text-anchor="start" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">l = ${escapeXml(dims.bottomL)}</text>
  <text x="${bx0 + bw + bdx + 8}" y="${by0 - bdy + bh / 2 + 4}" text-anchor="start" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#1e3a8a">t = ${escapeXml(dims.bottomT)}</text>
</svg>`;
}

/**
 * 8. Bangun Ruang Gabungan Dua Balok Bertumpuk
 */
export function createCompositeCuboidsSvg(dims: {
  bottomP: string;
  bottomL: string;
  bottomT: string;
  topP: string;
  topL: string;
  topT: string;
}): string {
  const width = 370;
  const height = 240;

  // Bottom cuboid
  const bw = 165;
  const bh = 56;
  const bdx = 44;
  const bdy = 28;
  const bx0 = 70;
  const by0 = 136;

  // Top smaller cuboid
  const tw = 96;
  const th = 44;
  const tdx = 44;
  const tdy = 28;
  const tx0 = bx0 + 12;
  const ty0 = by0 - th - 6;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="${width}" height="${height}" rx="12" fill="#f8fafc"/>
  <text x="${width / 2}" y="20" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Gabungan Dua Balok Bertumpuk</text>

  <!-- Balok Bawah -->
  <polygon points="${bx0},${by0} ${bx0 + bdx},${by0 - bdy} ${bx0 + bw + bdx},${by0 - bdy} ${bx0 + bw},${by0}" fill="#dbeafe"/>
  <polygon points="${bx0},${by0} ${bx0 + bw},${by0} ${bx0 + bw},${by0 + bh} ${bx0},${by0 + bh}" fill="#eff6ff"/>
  <polygon points="${bx0 + bw},${by0} ${bx0 + bw + bdx},${by0 - bdy} ${bx0 + bw + bdx},${by0 + bh - bdy} ${bx0 + bw},${by0 + bh}" fill="#bfdbfe"/>
  <g stroke="#1e3a8a" stroke-width="1.8" stroke-linejoin="round" fill="none">
    <rect x="${bx0}" y="${by0}" width="${bw}" height="${bh}"/>
    <line x1="${bx0}" y1="${by0}" x2="${bx0 + bdx}" y2="${by0 - bdy}"/>
    <line x1="${bx0 + bw}" y1="${by0}" x2="${bx0 + bw + bdx}" y2="${by0 - bdy}"/>
    <line x1="${bx0 + bw}" y1="${by0 + bh}" x2="${bx0 + bw + bdx}" y2="${by0 + bh - bdy}"/>
    <line x1="${bx0 + bdx}" y1="${by0 - bdy}" x2="${bx0 + bw + bdx}" y2="${by0 - bdy}"/>
    <line x1="${bx0 + bw + bdx}" y1="${by0 - bdy}" x2="${bx0 + bw + bdx}" y2="${by0 + bh - bdy}"/>
  </g>

  <!-- Balok Atas -->
  <polygon points="${tx0},${ty0} ${tx0 + tdx},${ty0 - tdy} ${tx0 + tw + tdx},${ty0 - tdy} ${tx0 + tw},${ty0}" fill="#a7f3d0"/>
  <polygon points="${tx0},${ty0} ${tx0 + tw},${ty0} ${tx0 + tw},${ty0 + th} ${tx0},${ty0 + th}" fill="#d1fae5"/>
  <polygon points="${tx0 + tw},${ty0} ${tx0 + tw + tdx},${ty0 - tdy} ${tx0 + tw + tdx},${ty0 + th - tdy} ${tx0 + tw},${ty0 + th}" fill="#6ee7b7"/>
  <g stroke="#065f46" stroke-width="1.8" stroke-linejoin="round" fill="none">
    <rect x="${tx0}" y="${ty0}" width="${tw}" height="${th}"/>
    <line x1="${tx0}" y1="${ty0}" x2="${tx0 + tdx}" y2="${ty0 - tdy}"/>
    <line x1="${tx0 + tw}" y1="${ty0}" x2="${tx0 + tw + tdx}" y2="${ty0 - tdy}"/>
    <line x1="${tx0 + tw}" y1="${ty0 + th}" x2="${tx0 + tw + tdx}" y2="${ty0 + th - tdy}"/>
    <line x1="${tx0 + tdx}" y1="${ty0 - tdy}" x2="${tx0 + tw + tdx}" y2="${ty0 - tdy}"/>
    <line x1="${tx0 + tw + tdx}" y1="${ty0 - tdy}" x2="${tx0 + tw + tdx}" y2="${ty0 + th - tdy}"/>
  </g>

  <!-- Label Dimensi Atas -->
  <text x="${tx0 + tw / 2 + 12}" y="${ty0 - tdy - 6}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#065f46">Balok Atas: ${escapeXml(dims.topP)} × ${escapeXml(dims.topL)} × ${escapeXml(dims.topT)}</text>
  <text x="${tx0 + tw + tdx + 8}" y="${ty0 - tdy + th / 2 + 4}" text-anchor="start" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#065f46">t=${escapeXml(dims.topT)}</text>

  <!-- Label Dimensi Bawah -->
  <text x="${bx0 + bw / 2}" y="${by0 + bh + 18}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#1e3a8a">p = ${escapeXml(dims.bottomP)}</text>
  <text x="${bx0 + bw + bdx / 2 + 8}" y="${by0 + bh - bdy / 2 + 14}" text-anchor="start" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">l = ${escapeXml(dims.bottomL)}</text>
  <text x="${bx0 + bw + bdx + 8}" y="${by0 - bdy + bh / 2 + 4}" text-anchor="start" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#1e3a8a">t = ${escapeXml(dims.bottomT)}</text>
</svg>`;
}
