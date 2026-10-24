export interface TypingTestDef {
  slug: string;
  name: string;
  langCode: string;
  title: string;
  description: string;
  passages: string[];
}

const make = (slug: string, name: string, langCode: string, passages: string[]): TypingTestDef => ({
  slug,
  name,
  langCode,
  passages,
  title: `${name} Typing Test – WPM, Accuracy and Exam Practice`,
  description: `Practise ${name} typing with a timed browser test. Measure gross WPM, net WPM, accuracy and errors without creating an account.`,
});

export const TYPING_TESTS: TypingTestDef[] = [
  { slug: 'typing-test', name: 'Multilingual', langCode: 'en', title: 'Free Typing Speed Test – WPM and Accuracy', description: 'Measure typing speed, accuracy, errors and net WPM with a privacy-friendly browser typing test.', passages: ['Typing practice becomes useful when the passage is clear, the timer is visible and the result is easy to understand.'] },
  make('hindi-typing-test', 'Hindi', 'hi', ['नियमित अभ्यास से हिंदी टाइपिंग की गति और सटीकता दोनों बेहतर होती हैं।', 'किसी भी परीक्षा में सही वर्तनी और स्थिर गति महत्वपूर्ण होती है।']),
  make('assamese-typing-test', 'Assamese', 'as', ['নিয়মিত অনুশীলনে অসমীয়া টাইপিঙৰ গতি আৰু সঠিকতা বৃদ্ধি পায়।']),
  make('bengali-typing-test', 'Bengali', 'bn', ['নিয়মিত অনুশীলন করলে বাংলা টাইপিংয়ের গতি ও নির্ভুলতা দুটোই বাড়ে।']),
  make('marathi-typing-test', 'Marathi', 'mr', ['नियमित सरावामुळे मराठी टायपिंगचा वेग आणि अचूकता सुधारते.']),
  make('punjabi-typing-test', 'Punjabi', 'pa', ['ਨਿਯਮਤ ਅਭਿਆਸ ਨਾਲ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਦੀ ਗਤੀ ਅਤੇ ਸਹੀਪਨ ਵਧਦਾ ਹੈ।']),
  make('tamil-typing-test', 'Tamil', 'ta', ['தொடர்ந்து பயிற்சி செய்தால் தமிழ் தட்டச்சு வேகமும் துல்லியமும் மேம்படும்.']),
  make('nepali-typing-test', 'Nepali', 'ne', ['नियमित अभ्यासले नेपाली टाइपिङको गति र शुद्धता सुधार गर्छ।']),
  make('arabic-typing-test', 'Arabic', 'ar', ['يساعد التدريب المنتظم على تحسين سرعة الكتابة العربية ودقتها.']),
  make('russian-typing-test', 'Russian', 'ru', ['Регулярная практика улучшает скорость и точность русской печати.']),
  make('english-typing-test', 'English', 'en', ['Consistent practice improves typing speed, accuracy, and confidence over time.']),
  make('telugu-typing-test', 'Telugu', 'te', ['నిరంతర సాధనతో తెలుగు టైపింగ్ వేగం మరియు ఖచ్చితత్వం మెరుగుపడతాయి.']),
  make('kannada-typing-test', 'Kannada', 'kn', ['ನಿಯಮಿತ ಅಭ್ಯಾಸದಿಂದ ಕನ್ನಡ ಟೈಪಿಂಗ್ ವೇಗ ಮತ್ತು ನಿಖರತೆ ಹೆಚ್ಚುತ್ತದೆ.']),
  make('malayalam-typing-test', 'Malayalam', 'ml', ['തുടർച്ചയായ പരിശീലനം മലയാളം ടൈപ്പിംഗ് വേഗവും കൃത്യതയും മെച്ചപ്പെടുത്തും.']),
  make('gujarati-typing-test', 'Gujarati', 'gu', ['નિયમિત અભ્યાસથી ગુજરાતી ટાઇપિંગની ઝડપ અને ચોકસાઈ સુધરે છે.']),
  make('odia-typing-test', 'Odia', 'or', ['ନିୟମିତ ଅଭ୍ୟାସରେ ଓଡ଼ିଆ ଟାଇପିଂର ଗତି ଓ ସଠିକତା ବଢ଼େ।']),
  make('urdu-typing-test', 'Urdu', 'ur', ['مسلسل مشق سے اردو ٹائپنگ کی رفتار اور درستگی بہتر ہوتی ہے۔']),
];

export const getTypingTest = (slug: string) => TYPING_TESTS.find((test) => test.slug === slug);
