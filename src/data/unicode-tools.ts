export type UnicodeToolKind = 'hub' | 'rtl' | 'inspector' | 'invisible' | 'counter';

export interface UnicodeToolDef {
  slug: string;
  name: string;
  kind: UnicodeToolKind;
  title: string;
  description: string;
  direction?: 'ltr' | 'rtl';
}

export const UNICODE_TOOLS: UnicodeToolDef[] = [
  { slug: 'unicode-tools', name: 'Unicode & RTL Tools', kind: 'hub', title: 'Unicode & RTL Tools – Inspect, Clean and Count Text', description: 'Free browser tools for Unicode code points, invisible characters, RTL text cleanup and multilingual word counting.' },
  { slug: 'arabic-text-fixer', name: 'Arabic Text Fixer', kind: 'rtl', direction: 'rtl', title: 'Arabic Text Fixer – Clean RTL Text Online', description: 'Clean and normalize Arabic text for design, video, documents and web publishing in your browser.' },
  { slug: 'persian-text-fixer', name: 'Persian Text Fixer', kind: 'rtl', direction: 'rtl', title: 'Persian Text Fixer – Normalize Farsi Text Online', description: 'Normalize Persian text, remove layout control noise and prepare Farsi text for copy and paste.' },
  { slug: 'urdu-text-fixer', name: 'Urdu Text Fixer', kind: 'rtl', direction: 'rtl', title: 'Urdu Text Fixer – Clean Urdu RTL Text Online', description: 'Clean and normalize Urdu text locally for publishing, design tools and messaging.' },
  { slug: 'unicode-inspector', name: 'Unicode Inspector', kind: 'inspector', title: 'Unicode Inspector – Code Points, Bytes and Normalization', description: 'Inspect Unicode code points, grapheme clusters, UTF-8 bytes and NFC/NFD/NFKC/NFKD forms in your browser.' },
  { slug: 'invisible-character-detector', name: 'Invisible Character Detector', kind: 'invisible', title: 'Invisible Character Detector – Find Zero-Width and BiDi Marks', description: 'Find and remove zero-width spaces, joiners, BOMs and bidirectional control characters from pasted text.' },
  { slug: 'multilingual-word-counter', name: 'Multilingual Word Counter', kind: 'counter', title: 'Multilingual Word Counter – Characters, Bytes and SMS Segments', description: 'Count words, characters, graphemes, UTF-8 bytes and SMS segments for multilingual text.' },
];

export const getUnicodeTool = (slug: string) => UNICODE_TOOLS.find((tool) => tool.slug === slug);
