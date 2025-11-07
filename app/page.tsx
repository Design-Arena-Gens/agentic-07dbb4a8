"use client";

import { useRef } from 'react';
import PlusLogo from './ui/PlusLogo';

export default function Page() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const downloadSvg = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'plus-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="page">
      <div className="hero">
        <PlusLogo ref={svgRef} />
        <div className="actions">
          <button className="button" onClick={downloadSvg}>Download SVG</button>
        </div>
      </div>
      <footer className="footer">Designed for the word <strong>Plus</strong></footer>
    </main>
  );
}
