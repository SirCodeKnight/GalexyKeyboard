export interface PhoneticPageDef {
  slug: string;
  name: string;
  native: string;
  langCode: string;
  title: string;
  description: string;
  sample: string;
  output: string;
}

const make = (slug: string, name: string, native: string, langCode: string, sample: string, output: string): PhoneticPageDef => ({
  slug,
  name,
  native,
  langCode,
  sample,
  output,
  title: `English to ${name} Phonetic Typing – Type ${native} Online`,
  description: `Type ${name} by entering familiar English sounds. The local browser tool converts common phonetic words to ${native} text, then lets you copy or download the result.`,
});

export const PHONETIC_PAGES: PhoneticPageDef[] = [
  { slug: 'phonetic-typing', name: 'Multilingual Phonetic Typing', native: 'नमस्ते · سلام · привет', langCode: 'hi', title: 'Phonetic Typing Online – English to Native Script', description: 'Type English sounds and convert common words into Hindi, Assamese, Bengali, Arabic, Urdu, Persian, Russian, Tamil, Japanese and other native scripts locally in your browser.', sample: 'namaste salam privet', output: 'नमस्ते سلام привет' },
  make('english-to-hindi-typing', 'Hindi', 'हिन्दी', 'hi', 'namaste', 'नमस्ते'),
  make('english-to-assamese-typing', 'Assamese', 'অসমীয়া', 'as', 'nomoskar', 'নমস্কাৰ'),
  make('english-to-bengali-typing', 'Bengali', 'বাংলা', 'bn', 'nomoskar', 'নমস্কার'),
  make('english-to-marathi-typing', 'Marathi', 'मराठी', 'hi', 'namaste', 'नमस्ते'),
  make('english-to-nepali-typing', 'Nepali', 'नेपाली', 'hi', 'namaste', 'नमस्ते'),
  make('english-to-punjabi-typing', 'Punjabi', 'ਪੰਜਾਬੀ', 'hi', 'sat sri akal', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ'),
  make('english-to-tamil-typing', 'Tamil', 'தமிழ்', 'ta', 'vanakkam', 'வணக்கம்'),
  make('english-to-telugu-typing', 'Telugu', 'తెలుగు', 'hi', 'namaste', 'నమస్తే'),
  make('english-to-kannada-typing', 'Kannada', 'ಕನ್ನಡ', 'hi', 'namaste', 'ನಮಸ್ತೆ'),
  make('english-to-malayalam-typing', 'Malayalam', 'മലയാളം', 'hi', 'namaste', 'നമസ്തേ'),
  make('english-to-gujarati-typing', 'Gujarati', 'ગુજરાતી', 'hi', 'namaste', 'નમસ્તે'),
  make('english-to-odia-typing', 'Odia', 'ଓଡ଼ିଆ', 'hi', 'namaste', 'ନମସ୍ତେ'),
  make('english-to-arabic-typing', 'Arabic', 'العربية', 'ar', 'salam', 'سلام'),
  make('english-to-urdu-typing', 'Urdu', 'اردو', 'ur', 'salam', 'سلام'),
  make('english-to-persian-typing', 'Persian', 'فارسی', 'fa', 'salam', 'سلام'),
  make('english-to-russian-typing', 'Russian', 'русский', 'ru', 'privet', 'привет'),
];

export const getPhoneticPage = (slug: string) => PHONETIC_PAGES.find((page) => page.slug === slug);
