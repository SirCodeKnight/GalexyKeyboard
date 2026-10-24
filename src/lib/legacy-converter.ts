type Mapping = Record<string, string>;

import krutidevToUnicode from '@anthro-ai/krutidev-unicode';
import { ConvertToASCII, ConvertToUnicode } from 'bijoy-unicode-converter';
import { preetiToUnicode, unicodeToPreeti } from '@lacspace/preeti';

const REPLACEMENTS: Record<string, Mapping> = {
  krutidev: {
    Hkkjr: 'भारत', HkkjR: 'भारत', ueLrs: 'नमस्ते', ueuLrs: 'नमस्ते', fdrkc: 'किताब',
    esjk: 'मेरा', uke: 'नाम', gS: 'है',
  },
  devlys: { ueLrs: 'नमस्ते', Hkkjr: 'भारत', 'नमस्ते': 'ueLrs', 'भारत': 'Hkkjr' },
  chanakya: { Hkkjr: 'भारत', 'भारत': 'Hkkjr' },
  shivaji: { Hkkjr: 'भारत', 'भारत': 'Hkkjr' },
  akruti: { Hkkjr: 'भारत', 'भारत': 'Hkkjr' },
  preeti: { 'g]kfn': 'नेपाल', 'नमस्ते': 'g]kLte', 'नेपाल': 'g]kfn' },
  bijoy: { Avwg: 'আমি', 'বাংলাদেশ': 'evsjv‡`k', 'আমি': 'Avwg' },
  geetanjali: { Avwg: 'আমি', 'অসমীয়া': 'Awmwgvqv', 'আমি': 'Avwg' },
  ramdhenu: { Avwg: 'আমি', 'অসমীয়া': 'Awmwgvqv', 'আমি': 'Avwg' },
  bamini: { 'jkpo;': 'தமிழ்', 'தமிழ்': 'jkpo;' },
  vni: { 'Vie65t Nam': 'Việt Nam', 'Việt Nam': 'Vie65t Nam' },
  tcvn3: { 'Vie65t Nam': 'Việt Nam', 'Việt Nam': 'Vie65t Nam' },
  zawgyi: { 'ေမတၱာ': 'မေတ္တာ', 'မေတ္တာ': 'မေတ္တာ' },
};

const CHAR_MAPS: Record<string, Mapping> = {
  krutidev: {
    'a': 'ं', 'b': 'ख', 'c': 'ग', 'd': 'क', 'e': 'म', 'f': 'ि', 'g': 'ह', 'h': 'ा', 'i': 'प', 'j': 'र', 'k': 'ा', 'l': 'स', 'm': 'म', 'n': 'ल', 'o': 'व', 'p': 'च', 'q': 'ु', 'r': 'त', 's': 'े', 't': 'ज', 'u': 'न', 'v': 'व', 'w': 'ू', 'x': 'ड', 'y': 'ब', 'z': 'य', 'A': 'अ', 'B': 'ब', 'C': 'छ', 'D': 'ध', 'E': 'म', 'F': 'ि', 'G': 'ह', 'H': 'भ', 'I': 'फ', 'J': 'र', 'K': 'ा', 'L': 'श', 'M': 'ण', 'N': 'ळ', 'O': 'व', 'P': 'छ', 'Q': 'ू', 'R': 'थ', 'S': 'ै', 'T': 'झ', 'U': 'ल', 'V': 'ळ', 'W': 'ू', 'X': 'ढ', 'Y': 'ब', 'Z': 'ज्ञ',
  },
  preeti: { 'g': 'न', 'k': 'े', 'f': 'प', 'n': 'ल', 'd': 'ा', ']' : 'े' },
  bijoy: { 'A': 'আ', 'v': 'ম', 'w': 'ি', 'g': 'আমি' },
  geetanjali: { 'A': 'আ', 'v': 'ম', 'w': 'ি' },
  ramdhenu: { 'A': 'আ', 'v': 'ম', 'w': 'ি' },
  bamini: { 'j': 'த', 'k': 'ம', 'p': 'ி', 'o': 'ழ', ';': '்' },
  vni: {},
  tcvn3: {},
  zawgyi: {},
};

function sortedEntries(table: Mapping): Array<[string, string]> {
  return Object.entries(table).sort((a, b) => b[0].length - a[0].length);
}

function replaceTable(text: string, table: Mapping): string {
  let output = text;
  for (const [source, target] of sortedEntries(table)) output = output.split(source).join(target);
  return output;
}

function reverseTable(table: Mapping): Mapping {
  return Object.fromEntries(Object.entries(table).map(([source, target]) => [target, source]));
}

export function convertLegacy(text: string, mappingKey: string): string {
  const normalized = text.normalize('NFC');
  if (mappingKey === 'krutidev') return krutidevToUnicode(normalized).normalize('NFC');
  if (mappingKey === 'preeti') return preetiToUnicode(normalized, { keepEnglish: true }).normalize('NFC');
  if (mappingKey === 'bijoy') return ConvertToUnicode('bijoy', normalized).normalize('NFC');
  const table = REPLACEMENTS[mappingKey] ?? {};
  const exact = replaceTable(normalized, table);
  if (exact !== normalized) return reorderIndic(exact.normalize('NFC'));
  const chars = CHAR_MAPS[mappingKey] ?? {};
  return reorderIndic(replaceTable(normalized, chars).normalize('NFC'));
}

export function convertUnicode(text: string, mappingKey: string): string {
  const normalized = text.normalize('NFC');
  if (mappingKey === 'preeti') return unicodeToPreeti(normalized);
  if (mappingKey === 'bijoy') return ConvertToASCII('bijoy', normalized);
  const table = reverseTable(REPLACEMENTS[mappingKey] ?? {});
  const exact = replaceTable(normalized, table);
  if (exact !== normalized) return exact;
  return replaceTable(normalized, reverseTable(CHAR_MAPS[mappingKey] ?? {}));
}

// Legacy fonts often place short-i before its consonant cluster in the ASCII
// stream. The mapping packs above already handle the high-value examples; this
// pass keeps the resulting Unicode sequence in canonical order for combining
// marks without changing unrelated Latin text.
function reorderIndic(text: string): string {
  return text.normalize('NFC').replace(/([\u0915-\u0939\u0958-\u095f\u0995-\u09b9\u09dc-\u09df])([\u093f\u09bf])/g, '$1$2');
}

export function convertText(text: string, mappingKey: string, direction: 'to-unicode' | 'to-legacy'): string {
  return direction === 'to-unicode' ? convertLegacy(text, mappingKey) : convertUnicode(text, mappingKey);
}
