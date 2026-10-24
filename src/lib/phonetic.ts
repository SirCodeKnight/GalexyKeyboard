type PhoneticPack = {
  words: Record<string, string>;
  chunks: Array<[string, string]>;
  chars: Record<string, string>;
};

const pack = (words: Record<string, string>, chunks: Array<[string, string]>, chars: Record<string, string>): PhoneticPack => ({ words, chunks, chars });

const indicChunks: Array<[string, string]> = [
  ['chh', 'छ'], ['sh', 'श'], ['ch', 'च'], ['kh', 'ख'], ['gh', 'घ'], ['th', 'थ'], ['dh', 'ध'], ['ph', 'फ'], ['bh', 'भ'],
  ['aa', 'ा'], ['ee', 'ी'], ['oo', 'ू'], ['ai', 'ै'], ['au', 'ौ'], ['ri', 'ृ'],
];

const PACKS: Record<string, PhoneticPack> = {
  hi: pack({ namaste: 'नमस्ते', dhanyavaad: 'धन्यवाद', dhanyavad: 'धन्यवाद', shukriya: 'शुक्रिया', hindi: 'हिन्दी', bharat: 'भारत', mera: 'मेरा', naam: 'नाम', hai: 'है', kya: 'क्या', kaise: 'कैसे', aap: 'आप' }, indicChunks, {
    a: 'अ', i: 'इ', u: 'उ', e: 'ए', o: 'ओ', k: 'क', g: 'ग', c: 'च', j: 'ज', t: 'त', d: 'द', n: 'न', p: 'प', b: 'ब', m: 'म', y: 'य', r: 'र', l: 'ल', v: 'व', s: 'स', h: 'ह', f: 'फ', q: 'क', x: 'क्ष', w: 'व', z: 'ज़'
  }),
  bn: pack({ nomoskar: 'নমস্কার', nomoshkar: 'নমস্কার', dhonnobad: 'ধন্যবাদ', bangla: 'বাংলা', ami: 'আমি', tumi: 'তুমি', kemon: 'কেমন', acho: 'আছো' }, [['chh', 'ছ'], ['sh', 'শ'], ['kh', 'খ'], ['gh', 'ঘ'], ['th', 'থ'], ['dh', 'ধ'], ['ph', 'ফ'], ['bh', 'ভ'], ['aa', 'া'], ['ee', 'ী'], ['oo', 'ূ'], ['oi', 'ৈ'], ['ou', 'ৌ']], { a: 'অ', i: 'ই', u: 'উ', e: 'এ', o: 'ও', k: 'ক', g: 'গ', c: 'চ', j: 'জ', t: 'ত', d: 'দ', n: 'ন', p: 'প', b: 'ব', m: 'ম', y: 'য', r: 'র', l: 'ল', s: 'স', h: 'হ' }),
  as: pack({ nomoskar: 'নমস্কাৰ', nomoshkar: 'নমস্কাৰ', dhonyobad: 'ধন্যবাদ', dhanyabad: 'ধন্যবাদ', oxomiya: 'অসমীয়া', moi: 'মই', mur: 'মোৰ', naam: 'নাম', bhal: 'ভাল' }, [['chh', 'ছ'], ['sh', 'শ'], ['kh', 'খ'], ['gh', 'ঘ'], ['th', 'থ'], ['dh', 'ধ'], ['ph', 'ফ'], ['bh', 'ভ'], ['aa', 'া'], ['ee', 'ী'], ['oo', 'ূ'], ['oi', 'ৈ'], ['ou', 'ৌ']], { a: 'অ', i: 'ই', u: 'উ', e: 'এ', o: 'ও', k: 'ক', g: 'গ', c: 'চ', j: 'জ', t: 'ত', d: 'দ', n: 'ন', p: 'প', b: 'ব', m: 'ম', y: 'য', r: 'ৰ', l: 'ল', s: 'স', h: 'হ', w: 'ৱ' }),
  ta: pack({ vanakkam: 'வணக்கம்', nandri: 'நன்றி', tamil: 'தமிழ்', en: 'என்', peyar: 'பெயர்', eppadi: 'எப்படி', irukkireergal: 'இருக்கிறீர்கள்' }, [['sh', 'ஷ'], ['aa', 'ா'], ['ee', 'ீ'], ['oo', 'ூ'], ['ai', 'ை'], ['au', 'ௌ'], ['ng', 'ங்'], ['th', 'த்'], ['dh', 'த்'], ['ch', 'ச்']], { a: 'அ', i: 'இ', u: 'உ', e: 'எ', o: 'ஒ', k: 'க', g: 'க', c: 'ச', j: 'ஜ', t: 'த', d: 'த', n: 'ந', p: 'ப', b: 'ப', m: 'ம', y: 'ய', r: 'ர', l: 'ல', v: 'வ', s: 'ச', h: 'ஹ' }),
  ar: pack({ marhaba: 'مرحبا', salam: 'سلام', shukran: 'شكراً', ahlan: 'أهلاً', alhamdulillah: 'الحمد لله', kayf: 'كيف', halak: 'حالك', arabic: 'العربية', ana: 'أنا', anta: 'أنت' }, [['sh', 'ش'], ['kh', 'خ'], ['gh', 'غ'], ['th', 'ث'], ['dh', 'ذ'], ['aa', 'ا'], ['ee', 'ي'], ['oo', 'و']], { a: 'ا', b: 'ب', t: 'ت', j: 'ج', h: 'ه', d: 'د', r: 'ر', z: 'ز', s: 'س', f: 'ف', q: 'ق', k: 'ك', l: 'ل', m: 'م', n: 'ن', w: 'و', y: 'ي', e: 'ع', g: 'غ' }),
  fa: pack({ salam: 'سلام', khodahafez: 'خداحافظ', mamnoon: 'ممنون', lotfan: 'لطفاً', farsi: 'فارسی', man: 'من', shoma: 'شما', chetoreh: 'چطوره' }, [['kh', 'خ'], ['gh', 'غ'], ['ch', 'چ'], ['sh', 'ش'], ['zh', 'ژ'], ['aa', 'ا'], ['ee', 'ی'], ['oo', 'و']], { a: 'ا', b: 'ب', p: 'پ', t: 'ت', j: 'ج', c: 'چ', h: 'ه', d: 'د', r: 'ر', z: 'ز', s: 'س', f: 'ف', q: 'ق', k: 'ک', l: 'ل', m: 'م', n: 'ن', v: 'و', y: 'ی', g: 'گ' }),
  ur: pack({ assalamualaikum: 'السلام علیکم', salam: 'سلام', shukriya: 'شکریہ', mehrbani: 'مہربانی', urdu: 'اردو', aap: 'آپ', kaise: 'کیسے', hain: 'ہیں' }, [['kh', 'خ'], ['gh', 'غ'], ['ch', 'چ'], ['sh', 'ش'], ['zh', 'ژ'], ['aa', 'ا'], ['ee', 'ی'], ['oo', 'و']], { a: 'ا', b: 'ب', p: 'پ', t: 'ت', j: 'ج', c: 'چ', h: 'ہ', d: 'د', r: 'ر', z: 'ز', s: 'س', f: 'ف', q: 'ق', k: 'ک', l: 'ل', m: 'م', n: 'ن', v: 'و', y: 'ی', g: 'گ' }),
  ru: pack({ privet: 'привет', spasibo: 'спасибо', poka: 'пока', russkiy: 'русский', dobro: 'добро', den: 'день', kak: 'как', dela: 'дела' }, [['shch', 'щ'], ['zh', 'ж'], ['ch', 'ч'], ['sh', 'ш'], ['yu', 'ю'], ['ya', 'я'], ['yo', 'ё'], ['kh', 'х'], ['ts', 'ц']], { a: 'а', b: 'б', v: 'в', g: 'г', d: 'д', e: 'е', z: 'з', i: 'и', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с', t: 'т', u: 'у', f: 'ф', h: 'х', c: 'ц', y: 'ы' }),
  uk: pack({ pryvit: 'привіт', dyakuyu: 'дякую', budlaska: 'будь ласка', ukrayina: 'україна', tak: 'так', ni: 'ні' }, [['shch', 'щ'], ['zh', 'ж'], ['ch', 'ч'], ['sh', 'ш'], ['yu', 'ю'], ['ya', 'я'], ['ye', 'є'], ['yi', 'ї'], ['kh', 'х'], ['ts', 'ц']], { a: 'а', b: 'б', v: 'в', h: 'г', g: 'ґ', d: 'д', e: 'е', z: 'з', i: 'і', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с', t: 'т', u: 'у', f: 'ф', c: 'ц' }),
  el: pack({ kalimera: 'καλημέρα', efcharisto: 'ευχαριστώ', parakalo: 'παρακαλώ', yiasou: 'γεια σου', ellinika: 'ελληνικά' }, [['th', 'θ'], ['ch', 'χ'], ['ps', 'ψ'], ['ks', 'ξ'], ['ou', 'ου'], ['ei', 'ει'], ['ai', 'αι']], { a: 'α', b: 'β', g: 'γ', d: 'δ', e: 'ε', z: 'ζ', i: 'ι', k: 'κ', l: 'λ', m: 'μ', n: 'ν', x: 'ξ', o: 'ο', p: 'π', r: 'ρ', s: 'σ', t: 'τ', y: 'υ', f: 'φ', h: 'η', w: 'ω' }),
  he: pack({ shalom: 'שלום', toda: 'תודה', bevakasha: 'בבקשה', ivrit: 'עברית', boker: 'בוקר', tov: 'טוב', ma: 'מה', shlomkha: 'שלומך' }, [['sh', 'ש'], ['kh', 'ח'], ['ts', 'צ'], ['ch', 'ח']], { a: 'א', b: 'ב', g: 'ג', d: 'ד', h: 'ה', v: 'ו', z: 'ז', t: 'ט', y: 'י', k: 'כ', l: 'ל', m: 'מ', n: 'נ', s: 'ס', p: 'פ', r: 'ר', q: 'ק', w: 'ו', x: 'ח' }),
  th: pack({ sawasdee: 'สวัสดี', khobkhun: 'ขอบคุณ', thai: 'ไทย', khrap: 'ครับ', kha: 'ค่ะ', mai: 'ไม่', chai: 'ใช่' }, [['kh', 'ข'], ['th', 'ท'], ['ph', 'พ'], ['ch', 'ช'], ['ng', 'ง'], ['aa', 'า']], { a: 'ะ', i: 'ิ', u: 'ุ', e: 'เ', o: 'โ', k: 'ก', g: 'ก', c: 'ช', j: 'จ', t: 'ต', d: 'ด', n: 'น', p: 'ป', b: 'บ', m: 'ม', y: 'ย', r: 'ร', l: 'ล', s: 'ส', h: 'ห', w: 'ว' }),
  ja: pack({ konnichiwa: 'こんにちは', arigatou: 'ありがとう', sumimasen: 'すみません', ohayou: 'おはよう', nihongo: 'にほんご' }, [['sha', 'しゃ'], ['shi', 'し'], ['shu', 'しゅ'], ['sho', 'しょ'], ['cha', 'ちゃ'], ['chi', 'ち'], ['tsu', 'つ'], ['kyo', 'きょ'], ['ryo', 'りょ'], ['ka', 'か'], ['ki', 'き'], ['ku', 'く'], ['ke', 'け'], ['ko', 'こ'], ['sa', 'さ'], ['su', 'す'], ['se', 'せ'], ['so', 'そ'], ['ta', 'た'], ['te', 'て'], ['to', 'と'], ['na', 'な'], ['ni', 'に'], ['nu', 'ぬ'], ['ne', 'ね'], ['no', 'の'], ['ha', 'は'], ['hi', 'ひ'], ['fu', 'ふ'], ['he', 'へ'], ['ho', 'ほ']], {}),
  ko: pack({ annyeonghaseyo: '안녕하세요', gamsahamnida: '감사합니다', saranghaeyo: '사랑해요', hanguk: '한국', hangugeo: '한국어' }, [['ann', '안'], ['nyeong', '녕'], ['ha', '하'], ['se', '세'], ['yo', '요'], ['gam', '감'], ['sa', '사'], ['ham', '함'], ['ni', '니'], ['da', '다'], ['sarang', '사랑']], {}),
  es: pack({ hola: 'hola', gracias: 'gracias', espanol: 'español', como: 'cómo', que: 'qué', manana: 'mañana' }, [], {}),
  mr: pack({ namaste: 'नमस्ते', dhanyavaad: 'धन्यवाद', marathi: 'मराठी' }, [], {}),
  ne: pack({ namaste: 'नमस्ते', dhanyabad: 'धन्यवाद', nepali: 'नेपाली' }, [], {}),
  pa: pack({ 'sat': 'ਸਤ', 'sri': 'ਸ੍ਰੀ', 'akal': 'ਅਕਾਲ', 'sat sri akal': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', punjabi: 'ਪੰਜਾਬੀ' }, [], {}),
  te: pack({ namaste: 'నమస్తే', telugu: 'తెలుగు', dhanyavadalu: 'ధన్యవాదాలు' }, [], {}),
  kn: pack({ namaste: 'ನಮಸ್ತೆ', kannada: 'ಕನ್ನಡ', dhanyavadagalu: 'ಧನ್ಯವಾದಗಳು' }, [], {}),
  ml: pack({ namaste: 'നമസ്തേ', malayalam: 'മലയാളം', nanni: 'നന്ദി' }, [], {}),
  gu: pack({ namaste: 'નમસ્તે', gujarati: 'ગુજરાતી', aabhar: 'આભાર' }, [], {}),
  or: pack({ namaste: 'ନମସ୍ତେ', odia: 'ଓଡ଼ିଆ', dhanyabad: 'ଧନ୍ୟବାଦ' }, [], {}),
  en: pack({}, [], {}),
};

function applyChunks(text: string, current: PhoneticPack): string {
  let value = text.toLowerCase();
  for (const [source, target] of [...current.chunks].sort((a, b) => b[0].length - a[0].length)) {
    value = value.split(source).join(target);
  }
  return value;
}

export function transliterate(text: string, language = 'hi'): string {
  const current = PACKS[language] ?? PACKS.hi;
  return text.split(/(\s+|[^\p{L}\p{N}]+)/u).map((token) => {
    if (!token || /^\s+$/u.test(token) || /^[^\p{L}\p{N}]+$/u.test(token)) return token;
    const key = token.toLowerCase();
    if (current.words[key]) return current.words[key];
    const chunked = applyChunks(key, current);
    if (chunked !== key) return chunked;
    if (!Object.keys(current.chars).length) return token;
    return [...key].map((character) => current.chars[character] ?? character).join('');
  }).join('');
}

export const PHONETIC_LANGUAGES = Object.keys(PACKS);
