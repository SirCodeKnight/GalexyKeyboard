// Keyboard layouts + per-language SEO content.
// Key syntax: "base|shift" (shift optional). `autoUpper` derives the shift
// layer by upper-casing (bicameral scripts). `extra` is a helper row of marks
// or accents rendered under the main keyboard (not physically mapped).

export interface KeyboardDef {
  slug: string;
  name: string;
  native: string;
  dir: 'ltr' | 'rtl';
  autoUpper?: boolean;
  compose?: boolean; // Hangul jamo composition
  rows: Key[][];
  extra?: Key[];
  title: string;
  description: string;
  tagline: string;
  intro: string;
  tips: string[];
  faqs: Faq[];
  countryCode: string;
  welcome: string;
  meme: string;
}

const r = (s: string): Key[] =>
  s.trim().split(/\s+/).map((k) => {
    const [b, sh] = k.split('|');
    return sh ? { b, s: sh } : { b };
  });

const baseFaqs = (name: string): Faq[] => [
  {
    q: `How do I type in ${name} without a ${name} keyboard?`,
    a: `Open this free online ${name} keyboard, click or tap the on-screen keys (or enable physical typing so your own keyboard is remapped), then press Copy and paste the ${name} text anywhere: WhatsApp, email, Google, or social media.`,
  },
  {
    q: `Is this ${name} typing tool free?`,
    a: `Yes. The GalexyKeyboard ${name} keyboard is 100% free with no download, no sign-up and no limits. It works in any modern browser on desktop and mobile.`,
  },
  {
    q: `Can I use the ${name} keyboard on my phone?`,
    a: `Yes. The layout is fully responsive. Tap the on-screen keys in any Android or iOS browser, then use the Copy button to send your ${name} text in any app.`,
  },
  {
    q: `How do I copy and send the ${name} text I typed?`,
    a: `Type with the on-screen keys, then press the Copy button. The text goes to your clipboard so you can paste it into chats, documents, search engines or emails. You can also download it as a .txt file.`,
  },
  {
    q: 'Does this tool store or send what I type?',
    a: 'No. Everything runs locally in your browser. Nothing you type is transmitted to a server or stored by GalexyKeyboard.',
  },
];

const def = (
  d: Omit<KeyboardDef, 'faqs'> & { extraFaqs?: Faq[] }
): KeyboardDef => {
  const { extraFaqs = [], ...rest } = d;
  return { ...rest, faqs: [...baseFaqs(d.name), ...extraFaqs] };
};

export const KEYBOARDS: KeyboardDef[] = [
  def({
    slug: 'hindi-keyboard', name: 'Hindi', native: '\u0939\u093f\u0928\u094d\u0926\u0940', dir: 'ltr',
    title: 'Hindi Keyboard Online \u2013 Type in Hindi (\u0939\u093f\u0928\u094d\u0926\u0940) Free',
    description: 'Free online Hindi keyboard (InScript layout). Type in Devanagari with matras and conjuncts, then copy-paste your Hindi text anywhere. No download, works on mobile.',
    tagline: 'Type Devanagari with the standard InScript layout \u2014 matras, conjuncts and all.',
    intro: 'This online Hindi keyboard uses the InScript layout, the official standard for Devanagari typing in India. Vowel signs (matras) sit on the left half and consonants on the right, so frequent combinations fall naturally under alternating hands. Use the halant key (\u094d) to build conjunct characters like \u0915\u094d\u0937 and \u091c\u094d\u091e, and hold Shift for independent vowels and aspirated consonants. Whatever you type can be copied with one click and pasted into WhatsApp, Google search, YouTube comments or any document.',
    tips: ['Press Shift to reach independent vowels (\u0905 \u0906 \u0907\u2026) and aspirated consonants (\u0916 \u0918 \u091b\u2026).', 'Type consonant + \u094d (halant) + consonant to create conjuncts such as \u0915\u094d\u0915 or \u0924\u094d\u0930.', 'Enable physical typing to use your QWERTY keys mapped to InScript positions.'],
    extraFaqs: [{ q: 'How do I type half letters (conjuncts) in Hindi?', a: 'Type the first consonant, then the halant key \u094d, then the second consonant. For example \u0915 + \u094d + \u0937 produces \u0915\u094d\u0937. This is exactly how the standard InScript layout works on Windows and Android.' }],
    rows: [
      r('\u094c|\u0914 \u0948|\u0910 \u093e|\u0906 \u0940|\u0908 \u0942|\u090a \u092c|\u092d \u0939|\u0919 \u0917|\u0918 \u0926|\u0927 \u091c|\u091d \u0921|\u0922 \u093c|\u091e'),
      r('\u094b|\u0913 \u0947|\u090f \u094d|\u0905 \u093f|\u0907 \u0941|\u0909 \u092a|\u092b \u0930|\u0931 \u0915|\u0916 \u0924|\u0925 \u091a|\u091b \u091f|\u0920'),
      r('\u0949|\u0911 \u0902|\u0901 \u092e|\u0923 \u0928|\u0929 \u0935|\u0934 \u0932|\u0933 \u0938|\u0936 \u092f|\u095f \u0964|\u0965'),
    ],
    countryCode: 'in', welcome: 'नमस्ते और स्वागत है!', meme: 'hindi.png',
  }),
  def({
    slug: 'arabic-keyboard', name: 'Arabic', native: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629', dir: 'rtl',
    title: 'Arabic Keyboard Online \u2013 Type Arabic (\u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u0639\u0631\u0628\u064a\u0629) Free',
    description: 'Free online Arabic keyboard with all 28 letters, hamza forms and harakat diacritics. Type Arabic right-to-left, copy and paste anywhere. No download needed.',
    tagline: 'The full Arabic 101 layout with hamza forms and a dedicated harakat row.',
    intro: 'Type Arabic online with the standard Arabic 101 layout used across the Middle East and North Africa: all 28 letters, every hamza form (\u0621 \u0623 \u0625 \u0626 \u0624), taa marbuta (\u0629) and alif maqsura (\u0649). A dedicated marks row below the keyboard gives you the complete set of harakat \u2014 fatha, damma, kasra, sukun, shadda and the tanwin marks \u2014 for Quranic, educational or fully vocalised text. The text area is right-to-left, so your text appears exactly as it will in WhatsApp, email or a Google search.',
    tips: ['Click a letter first, then a mark from the harakat row \u2014 it combines automatically (e.g. \u0628 + \u064e = \u0628\u064e).', 'The text area is right-to-left; mixed Arabic/English is handled automatically by your browser.', 'Enable physical typing to use your QWERTY keys mapped to the Arabic 101 layout.'],
    extraFaqs: [{ q: 'How do I type Arabic harakat (diacritics) like fatha and shadda?', a: 'Use the marks row under the main keys. Type the letter, then click the diacritic ( \u064e \u064f \u0650 \u0651 \u0652 or a tanwin mark) and it attaches to the letter automatically.' }],
    rows: [
      r('\u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f'),
      r('\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637'),
      r('\u0626 \u0621 \u0624 \u0631 \u0649 \u0629 \u0648 \u0632 \u0638 \u0630'),
    ],
    extra: r('\u064b \u064c \u064d \u064e \u064f \u0650 \u0651 \u0652 \u0640 \u0623 \u0625 \u0622 \u061f \u060c \u061b'),
    countryCode: 'sa', welcome: 'أهلاً وسهلاً بك!', meme: 'arabic.png',
  }),
  def({
    slug: 'bengali-keyboard', name: 'Bengali', native: '\u09ac\u09be\u0982\u09b2\u09be', dir: 'ltr',
    title: 'Bengali Keyboard Online \u2013 Type in Bangla (\u09ac\u09be\u0982\u09b2\u09be) Free',
    description: 'Free online Bengali keyboard (InScript). Type Bangla script with kars and juktakkhor, copy and paste your Bengali text anywhere. Works on mobile, no download.',
    tagline: 'Standard Bangla InScript layout with vowel signs and conjunct support.',
    intro: 'Type Bangla online using the InScript arrangement standard for Bengali script in both Bangladesh and West Bengal. Vowel signs (kars) are on the left half and consonants on the right, with Shift giving independent vowels and aspirated consonants. Build conjuncts (juktakkhor) like \u0995\u09cd\u09b7 using the hasanta key (\u09cd). Copy your text with one click and paste it into Facebook, WhatsApp, Google or any document.',
    tips: ['Shift reaches independent vowels (\u0985 \u0986 \u0987\u2026) and aspirates (\u0996 \u0998 \u099b\u2026).', 'Consonant + \u09cd + consonant creates juktakkhor, e.g. \u0995 + \u09cd + \u09b7 = \u0995\u09cd\u09b7.', 'Use \u09cd + \u09af for the ya-phala and \u09b0 + \u09cd for the reph.'],
    extraFaqs: [{ q: 'How do I type juktakkhor (conjuncts) in Bengali?', a: 'Type the first consonant, the hasanta \u09cd, then the second consonant. For example \u0995 + \u09cd + \u09b7 gives \u0995\u09cd\u09b7 \u2014 the same method used by InScript keyboards on Windows and Android.' }],
    rows: [
      r('\u09cc|\u0994 \u09c8|\u0990 \u09be|\u0986 \u09c0|\u0988 \u09c2|\u098a \u09ac|\u09ad \u09b9|\u0999 \u0997|\u0998 \u09a6|\u09a7 \u099c|\u099d \u09a1|\u09a2 \u09bc|\u099e'),
      r('\u09cb|\u0993 \u09c7|\u098f \u09cd|\u0985 \u09bf|\u0987 \u09c1|\u0989 \u09aa|\u09ab \u09b0|\u09dc \u0995|\u0996 \u09a4|\u09a5 \u099a|\u099b \u099f|\u09a0'),
      r('\u0982|\u0981 \u09ae|\u09a3 \u09a8|\u09a3 \u09af|\u09df \u09b2|\u09b2 \u09b8|\u09b6 \u09b7|\u098b \u0964|\u09ce'),
    ],
    countryCode: 'bd', welcome: 'স্বাগতম!', meme: 'bengali.png',
  }),
  def({
    slug: 'assamese-keyboard', name: 'Assamese', native: '\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be', dir: 'ltr',
    title: 'Assamese Keyboard Online \u2013 Type in Assamese (\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be) Free',
    description: 'Free online Assamese keyboard with the distinct letters \u09f0 (ra) and \u09f1 (va). Type Assamese script, copy and paste it anywhere. No download, mobile friendly.',
    tagline: 'Full Assamese script including the distinct \u09f0 and \u09f1 letters.',
    intro: 'Type Assamese online with a layout built for the Assamese script \u2014 not just a relabeled Bengali keyboard. It includes the two letters that make Assamese distinct: \u09f0 (ra, with the diagonal stroke) and \u09f1 (va), alongside the full set of vowels, vowel signs and consonants shared with the Eastern Nagari script. Use the hasanta (\u09cd) for conjuncts, and copy your text straight into WhatsApp, Facebook or any document.',
    tips: ['Assamese \u09f0 (ra) and \u09f1 (va) are on the layout directly \u2014 no workarounds needed.', 'Consonant + \u09cd + consonant builds conjuncts, e.g. \u0995 + \u09cd + \u09b7 = \u0995\u09cd\u09b7.', 'Shift reaches independent vowels and aspirated consonants.'],
    extraFaqs: [{ q: 'What is the difference between the Assamese and Bengali keyboards?', a: 'Both use the Eastern Nagari script, but Assamese uses \u09f0 for ra (Bengali uses \u09b0) and has the extra letter \u09f1 (va). This keyboard puts \u09f0 and \u09f1 directly on the layout so you type genuine Assamese text.' }],
    rows: [
      r('\u09cc|\u0994 \u09c8|\u0990 \u09be|\u0986 \u09c0|\u0988 \u09c2|\u098a \u09ac|\u09ad \u09b9|\u0999 \u0997|\u0998 \u09a6|\u09a7 \u099c|\u099d \u09a1|\u09a2 \u09bc|\u099e'),
      r('\u09cb|\u0993 \u09c7|\u098f \u09cd|\u0985 \u09bf|\u0987 \u09c1|\u0989 \u09aa|\u09ab \u09f0|\u09dc \u0995|\u0996 \u09a4|\u09a5 \u099a|\u099b \u099f|\u09a0'),
      r('\u0982|\u0981 \u09ae|\u09a3 \u09a8|\u09a3 \u09af|\u09df \u09b2|\u09b2 \u09b8|\u09b6 \u09f1|\u09b7 \u0964|\u09ce'),
    ],
    countryCode: 'in', welcome: 'স্বাগতম!', meme: 'assamese.png',
  }),
  def({
    slug: 'urdu-keyboard', name: 'Urdu', native: '\u0627\u0631\u062f\u0648', dir: 'rtl',
    title: 'Urdu Keyboard Online \u2013 Type in Urdu (\u0627\u0631\u062f\u0648) Free',
    description: 'Free online Urdu keyboard. Type right-to-left Urdu with all letters including \u067e \u0686 \u0698 \u06af \u0691 \u0688, copy and paste anywhere. No download needed.',
    tagline: 'Right-to-left Urdu with every letter the Arabic layout is missing.',
    intro: 'Type Urdu online with a layout covering the full Urdu alphabet \u2014 including the letters missing from Arabic keyboards: \u067e (pe), \u0686 (che), \u0698 (zhe), \u06af (gaf), \u0691 (rre), \u0688 (ddal) and \u0679 (tte), plus \u06d2 (bari ye), \u06ba (noon ghunna) and \u06c1 (gol he). The text area is right-to-left, so your text renders exactly as it will appear in WhatsApp, Facebook or a Google search. Copy with one click and paste anywhere.',
    tips: ['\u06d2 (bari ye) and \u06ba (noon ghunna) are on the layout \u2014 both are essential for correct Urdu.', 'Use the helper row for \u0622 \u0624 \u0626 \u0621 and Urdu punctuation \u06d4 \u060c.', 'Browsers render Urdu in Naskh style by default; the letters remain identical to Nastaliq.'],
    extraFaqs: [{ q: 'How do I type Urdu letters like \u067e, \u0691 and \u06d2 that Arabic keyboards lack?', a: 'They are directly on this layout: \u067e \u0686 \u0698 \u06af on the main rows, \u0691 \u0688 \u0679 for the retroflex sounds, and \u06d2 (bari ye) for word-final \u201cay\u201d. No Arabic-keyboard workarounds are needed.' }],
    rows: [
      r('\u0637 \u0635 \u06be \u062f \u0679 \u067e \u062a \u062b \u062c \u062d \u0686 \u062e'),
      r('\u0645 \u0648 \u0631 \u0646 \u0644 \u06c1 \u0627 \u06a9 \u06cc \u0642 \u0641'),
      r('\u06d2 \u0633 \u0634 \u063a \u0639 \u0638 \u0636 \u0630 \u0688 \u0632 \u062b \u06ba'),
    ],
    extra: r('\u06af \u0698 \u0691 \u0621 \u0622 \u0624 \u0626 \u06c3 \u06d4 \u060c \u061f'),
    countryCode: 'pk', welcome: 'خوش آمدید!', meme: 'urdu.png',
  }),
  def({
    slug: 'russian-keyboard', name: 'Russian', native: '\u0440\u0443\u0441\u0441\u043a\u0438\u0439', dir: 'ltr', autoUpper: true,
    title: 'Russian Keyboard Online \u2013 Type Cyrillic (\u0419\u0426\u0423\u041a\u0415\u041d) Free',
    description: 'Free online Russian keyboard with the standard \u0419\u0426\u0423\u041a\u0415\u041d Cyrillic layout including \u0451. Type Russian, copy and paste it anywhere. No download.',
    tagline: 'The standard \u0419\u0426\u0423\u041a\u0415\u041d layout, \u0451 included.',
    intro: 'Type Russian online with the standard \u0419\u0426\u0423\u041a\u0415\u041d (JCUKEN) layout used on every Russian computer and phone \u2014 including the letter \u0451, which many online tools omit. Shift produces capitals exactly as a physical keyboard would. Whether you are writing a message, searching in Russian, or studying the language, type here, press Copy, and paste the Cyrillic text anywhere.',
    tips: ['Shift gives capital letters, just like a physical Russian keyboard.', '\u0401/\u0451 is on the layout \u2014 use it for correct spelling of words like \u0451\u0436 and \u0451\u043b\u043a\u0430.', 'Enable physical typing: your QWERTY keys map to \u0419\u0426\u0423\u041a\u0415\u041d positions.'],
    extraFaqs: [{ q: 'Is this the same layout as a real Russian keyboard?', a: 'Yes \u2014 it follows the standard \u0419\u0426\u0423\u041a\u0415\u041d arrangement used on Russian Windows, macOS and Android keyboards, so the muscle memory transfers directly.' }],
    rows: [
      r('\u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a'),
      r('\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d \u0451'),
      r('\u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e'),
    ],
    countryCode: 'ru', welcome: 'Добро пожаловать!', meme: 'russian.png',
  }),
  def({
    slug: 'ukrainian-keyboard', name: 'Ukrainian', native: '\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430', dir: 'ltr', autoUpper: true,
    title: 'Ukrainian Keyboard Online \u2013 Type Ukrainian (\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430) Free',
    description: 'Free online Ukrainian keyboard with \u0457 \u0454 \u0456 \u0491 on the standard layout. Type Ukrainian Cyrillic, copy and paste anywhere. No download, mobile friendly.',
    tagline: 'Standard Ukrainian layout with \u0457, \u0454, \u0456 and \u0491 in their proper places.',
    intro: 'Type Ukrainian online with the standard Ukrainian national layout, including the four letters that distinguish it from Russian: \u0456, \u0457, \u0454 and \u0491. Shift produces capitals as on a physical keyboard. Type your text, press Copy, and paste it into messengers, documents or search engines \u2014 nothing is stored or sent anywhere.',
    tips: ['\u0407/\u0457, \u0404/\u0454, \u0406/\u0456 and \u0490/\u0491 are on the layout in their standard positions.', 'Shift gives capital letters, matching a physical Ukrainian keyboard.', 'Use the apostrophe from your physical keyboard for words like \u043c\u02bc\u044f\u0441\u043e.'],
    extraFaqs: [{ q: 'Does this keyboard have the Ukrainian letters \u0457, \u0454, \u0456 and \u0491?', a: 'Yes \u2014 all four are on the layout in the positions used by the standard Ukrainian keyboard, so you can type fully correct Ukrainian without substitutions.' }],
    rows: [
      r('\u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u0457'),
      r('\u0444 \u0456 \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u0454 \u0491'),
      r('\u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e'),
    ],
    countryCode: 'ua', welcome: 'Ласкаво просимо!', meme: 'ukrainian.png',
  }),
  def({
    slug: 'greek-keyboard', name: 'Greek', native: '\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac', dir: 'ltr', autoUpper: true,
    title: 'Greek Keyboard Online \u2013 Type Greek Letters (\u03b1\u03b2\u03b3) Free',
    description: 'Free online Greek keyboard with accented vowels and final sigma. Type Greek text or math symbols, copy and paste anywhere. No download required.',
    tagline: 'Modern Greek with accents (\u03ac \u03ad \u03ae\u2026) and final sigma \u03c2.',
    intro: 'Type Greek online with the standard Greek layout \u2014 every letter from \u03b1 to \u03c9, the final sigma \u03c2, and a helper row of accented vowels (\u03ac \u03ad \u03ae \u03af \u03cc \u03cd \u03ce \u03ca \u03cb) so you can write fully accented Modern Greek without dead keys. It is equally handy for maths and science: copy \u03b1, \u03b2, \u03b3, \u03b8, \u03bb, \u03c0, \u03c3 or \u03a9 straight into your paper or code.',
    tips: ['Use \u03c2 (final sigma) at the end of words, \u03c3 elsewhere.', 'Accented vowels are on the helper row \u2014 no dead-key sequences needed.', 'Shift gives capitals: \u0391 \u0392 \u0393 \u0394\u2026 useful for maths symbols too.'],
    extraFaqs: [{ q: 'How do I type Greek letters with accents (tonos)?', a: 'Click the accented vowels \u03ac \u03ad \u03ae \u03af \u03cc \u03cd \u03ce directly from the helper row below the keyboard \u2014 no dead-key combination is required.' }],
    rows: [
      r('\u03c2 \u03b5 \u03c1 \u03c4 \u03c5 \u03b8 \u03b9 \u03bf \u03c0'),
      r('\u03b1 \u03c3 \u03b4 \u03c6 \u03b3 \u03b7 \u03be \u03ba \u03bb'),
      r('\u03b6 \u03c7 \u03c8 \u03c9 \u03b2 \u03bd \u03bc'),
    ],
    extra: r('\u03ac \u03ad \u03ae \u03af \u03cc \u03cd \u03ce \u03ca \u03cb \u0390 \u03b0 ;'),
    countryCode: 'gr', welcome: 'Καλώς ορίσατε!', meme: 'greek.png',
  }),
  def({
    slug: 'hebrew-keyboard', name: 'Hebrew', native: '\u05e2\u05d1\u05e8\u05d9\u05ea', dir: 'rtl',
    title: 'Hebrew Keyboard Online \u2013 Type Hebrew (\u05e2\u05d1\u05e8\u05d9\u05ea) Free',
    description: 'Free online Hebrew keyboard with the standard Israeli layout and all final letters. Type right-to-left Hebrew, copy and paste anywhere. No download.',
    tagline: 'Standard Israeli layout with all five final letters.',
    intro: 'Type Hebrew online with the standard Israeli keyboard layout, including all five final (sofit) letters \u2014 \u05da \u05dd \u05df \u05e3 \u05e5 \u2014 in their real positions. The text area is right-to-left, so your text appears exactly as it will in WhatsApp, email or a Google search. Type, press Copy, and paste your Hebrew anywhere.',
    tips: ['Use the final forms \u05da \u05dd \u05df \u05e3 \u05e5 at the ends of words.', 'The text area is right-to-left; mixed Hebrew/English is handled automatically.', 'Enable physical typing to map your QWERTY keys to the Israeli layout.'],
    extraFaqs: [{ q: 'How do I type Hebrew final letters like \u05dd and \u05df?', a: 'They are on the layout in the standard Israeli positions \u2014 for example \u05dd sits where M\u2019s neighbor is on QWERTY. Just click them directly at the end of a word.' }],
    rows: [
      r('\u05e7 \u05e8 \u05d0 \u05d8 \u05d5 \u05df \u05dd \u05e4'),
      r('\u05e9 \u05d3 \u05d2 \u05db \u05e2 \u05d9 \u05d7 \u05dc \u05da \u05e3'),
      r('\u05d6 \u05e1 \u05d1 \u05d4 \u05e0 \u05de \u05e6 \u05ea \u05e5'),
    ],
    countryCode: 'il', welcome: 'ברוך הבא!', meme: 'hebrew.png',
  }),
  def({
    slug: 'thai-keyboard', name: 'Thai', native: '\u0e44\u0e17\u0e22', dir: 'ltr',
    title: 'Thai Keyboard Online \u2013 Type Thai (\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22) Free',
    description: 'Free online Thai keyboard with the standard Kedmanee layout, tone marks and Thai numerals. Type Thai, copy and paste anywhere. No download needed.',
    tagline: 'The Kedmanee layout with tone marks, vowels and Thai numerals.',
    intro: 'Type Thai online with the Kedmanee layout \u2014 the standard on every Thai computer. Consonants, the vowels that sit above, below, before and after them, all four tone marks (\u0e48 \u0e49 \u0e4a \u0e4b) and the Thai numerals \u0e51\u2013\u0e50 are all available, with the Shift layer matching the physical Thai keyboard. Remember that Thai is written without spaces between words; use the space bar only between sentences or phrases.',
    tips: ['Thai has no spaces between words \u2014 space is used between phrases and sentences.', 'Tone marks (\u0e48 \u0e49 \u0e4a \u0e4b) are typed after the consonant they modify.', 'Shift reaches the rarer letters and Thai numerals, matching the physical Kedmanee layout.'],
    extraFaqs: [{ q: 'How do I type Thai tone marks?', a: 'Type the consonant first, then the tone mark (\u0e48 \u0e49 \u0e4a or \u0e4b) \u2014 it stacks above the letter automatically, exactly as on a physical Thai keyboard.' }],
    rows: [
      r('\u0e45|+ \u0e51|\u0e52 /|\u0e53 _|\u0e54 \u0e20|\u0e55 \u0e16|\u0e56 \u0e38|\u0e39 \u0e36|\u0e3f \u0e04|\u0e57 \u0e15|\u0e58 \u0e08|\u0e59 \u0e02|\u0e50 \u0e0a|,'),
      r('\u0e46|\u0e51 \u0e44|" \u0e33|\u0e0e \u0e1e|\u0e11 \u0e30|\u0e18 \u0e31|\u0e4d \u0e35|\u0e4a \u0e23|\u0e13 \u0e19|\u0e2f \u0e22|\u0e0d \u0e1a|\u0e10 \u0e25|\u0e05'),
      r('\u0e1f|\u0e24 \u0e2b|\u0e06 \u0e01|\u0e0f \u0e14|\u0e42 \u0e40|\u0e0c \u0e49|\u0e47 \u0e48|\u0e4b \u0e32|\u0e29 \u0e2a|\u0e28 \u0e27|\u0e0b \u0e07|.'),
      r('\u0e1c|( \u0e1b|) \u0e41|\u0e09 \u0e2d|\u0e2e \u0e34|\u0e3a \u0e37|\u0e4c \u0e17|? \u0e21|\u0e12 \u0e43|\u0e2c \u0e1d|\u0e26'),
    ],
    countryCode: 'th', welcome: 'ยินดีต้อนรับ!', meme: 'thai.png',
  }),
  def({
    slug: 'japanese-keyboard', name: 'Japanese', native: '\u65e5\u672c\u8a9e', dir: 'ltr',
    title: 'Japanese Keyboard Online \u2013 Type Hiragana (\u3072\u3089\u304c\u306a) Free',
    description: 'Free online Japanese hiragana keyboard with dakuten, handakuten and small kana via Shift. Type Japanese, copy and paste anywhere. No download.',
    tagline: 'Hiragana in goj\u016bon order, with dakuten and small kana on Shift.',
    intro: 'Type Japanese hiragana online with the kana arranged in goj\u016bon (fifty-sound) order \u2014 the same order used in dictionaries and textbooks, so every character is easy to find even if you have never used a kana keyboard. The Shift layer adds voiced (dakuten) and semi-voiced (handakuten) forms like \u304c, \u3070 and \u3071, the small kana \u3063 \u3083 \u3085 \u3087, the long-vowel mark \u30fc and Japanese punctuation \u3002 \u3001 \u300c \u300d.',
    tips: ['Shift turns \u304b\u2192\u304c, \u306f\u2192\u3070 and reaches small kana like \u3063 and \u3083.', 'Use \u3063 (small tsu) before a consonant for doubled sounds: \u304d\u3063\u3066.', 'Japanese punctuation \u3002 \u3001 \u300c \u300d is on the Shift layer of the bottom rows.'],
    extraFaqs: [{ q: 'Can I type katakana or kanji with this keyboard?', a: 'This tool types hiragana directly. For katakana and kanji you normally need an IME that converts kana \u2014 a katakana layer is on our roadmap. Hiragana alone is valid Japanese and perfect for names, messages and study notes.' }],
    rows: [
      r('\u3042|\u3041 \u3044|\u3043 \u3046|\u3045 \u3048|\u3047 \u304a|\u3049 \u304b|\u304c \u304d|\u304e \u304f|\u3050 \u3051|\u3052 \u3053|\u3054'),
      r('\u3055|\u3056 \u3057|\u3058 \u3059|\u305a \u305b|\u305c \u305d|\u305e \u305f|\u3060 \u3061|\u3062 \u3064|\u3063 \u3066|\u3067 \u3068|\u3069'),
      r('\u306a \u306b \u306c \u306d \u306e \u306f|\u3070 \u3072|\u3073 \u3075|\u3076 \u3078|\u3079 \u307b|\u307c'),
      r('\u307e|\u3071 \u307f|\u3074 \u3080|\u3077 \u3081|\u307a \u3082|\u307d \u3084|\u3083 \u3086|\u3085 \u3088|\u3087 \u3089|\u300c \u308a|\u300d'),
      r('\u308b|\u3002 \u308c|\u3001 \u308d|\u30fb \u308f|\u30fc \u3092|\uff01 \u3093|\uff1f'),
    ],
    countryCode: 'jp', welcome: 'ようこそ！', meme: 'japanese.png',
  }),
  def({
    slug: 'korean-keyboard', name: 'Korean', native: '\ud55c\uad6d\uc5b4', dir: 'ltr', compose: true,
    title: 'Korean Keyboard Online \u2013 Type Hangul (\ud55c\uae00) Free',
    description: 'Free online Korean keyboard with the 2-set (Dubeolsik) layout and automatic hangul syllable composition. Type Korean, copy and paste anywhere.',
    tagline: '2-set (Dubeolsik) layout with real-time hangul syllable composition.',
    intro: 'Type Korean online with the standard 2-set (Dubeolsik) layout used throughout South Korea \u2014 consonants on the left, vowels on the right. Jamo compose into full syllable blocks automatically as you type: \u3112 + \u3153 + \u3134 becomes \ud55c, compound vowels like \u3157 + \u314f \u2192 \u3158 work, and a trailing consonant carries over to the next syllable exactly as on a real Korean keyboard. Shift gives the tense consonants \u3143 \u3149 \u3138 \u3132 \u3146 and the vowels \u3152 \u3156.',
    tips: ['Just type jamo in order \u2014 syllables compose automatically (\u3112\u3153\u3134 \u2192 \ud55c).', 'Shift gives tense consonants \u3143 \u3149 \u3138 \u3132 \u3146 and vowels \u3152 \u3156.', 'A trailing consonant moves to the next syllable when you type a vowel after it \u2014 exactly like a real IME.'],
    extraFaqs: [{ q: 'Do the Korean letters combine into syllable blocks automatically?', a: 'Yes. This keyboard implements real hangul composition: typing \u3112 \u3153 \u3134 produces \ud55c as a single block, including compound vowels (\u3158 \u3159 \u315a\u2026) and double final consonants (\u313a \u313b\u2026).' }],
    rows: [
      r('\u3142|\u3143 \u3148|\u3149 \u3137|\u3138 \u3131|\u3132 \u3145|\u3146 \u315b \u3155 \u3151 \u3150|\u3152 \u3154|\u3156'),
      r('\u3141 \u3134 \u3147 \u3139 \u314e \u3157 \u3153 \u314f \u3163'),
      r('\u314b \u314c \u314a \u314d \u3160 \u315c \u3161'),
    ],
    countryCode: 'kr', welcome: '환영합니다!', meme: 'korean.png',
  }),
  def({
    slug: 'spanish-keyboard', name: 'Spanish', native: 'espa\u00f1ol', dir: 'ltr', autoUpper: true,
    title: 'Spanish Keyboard Online \u2013 Type \u00d1 and Accents (\u00e1 \u00e9 \u00ed \u00f3 \u00fa) Free',
    description: 'Free online Spanish keyboard with \u00f1, accented vowels and \u00bf \u00a1. Type Spanish correctly, copy and paste it anywhere. No download or setup needed.',
    tagline: 'The \u00f1, every accented vowel, and \u00bf \u00a1 \u2014 one click each.',
    intro: 'Type Spanish online with every special character in one place: the \u00f1, all five accented vowels (\u00e1 \u00e9 \u00ed \u00f3 \u00fa), the diaeresis \u00fc, and the inverted punctuation marks \u00bf and \u00a1 that English keyboards make so awkward. The base layout is familiar QWERTY (Spanish arrangement), so you can type entire sentences here, or just grab the special characters you need and paste them into your document.',
    tips: ['\u00bf and \u00a1 open questions and exclamations: \u00bfC\u00f3mo est\u00e1s? \u00a1Hola!', 'Use \u00fc in words like ping\u00fcino and verg\u00fcenza.', 'Shift capitalizes everything, including \u00c1 \u00c9 \u00cd \u00d3 \u00da \u00d1.'],
    extraFaqs: [{ q: 'How do I type \u00f1 and Spanish accents without a Spanish keyboard?', a: 'Click \u00f1 or any accented vowel (\u00e1 \u00e9 \u00ed \u00f3 \u00fa \u00fc) directly on this keyboard, then copy the text. No Alt-codes or keyboard-settings changes are required.' }],
    rows: [
      r('q w e r t y u i o p'),
      r('a s d f g h j k l \u00f1'),
      r('z x c v b n m'),
    ],
    extra: r('\u00e1 \u00e9 \u00ed \u00f3 \u00fa \u00fc \u00bf \u00a1 \u00ab \u00bb'),
    countryCode: 'es', welcome: '¡Bienvenido!', meme: 'spanish.png',
  }),
  def({
    slug: 'tamil-keyboard', name: 'Tamil', native: '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd', dir: 'ltr',
    title: 'Tamil Keyboard Online \u2013 Type in Tamil (\u0ba4\u0bae\u0bbf\u0bb4\u0bcd) Free',
    description: 'Free online Tamil keyboard with all uyir and mei letters plus vowel signs. Type Tamil script, copy and paste it anywhere. No download, mobile friendly.',
    tagline: 'All 12 uyir vowels, 18 mei consonants and every vowel sign.',
    intro: 'Type Tamil online with a layout organised the way Tamil is taught: the 12 uyir (vowel) letters, the 18 mei (consonant) letters, the Grantha letters (\u0bb8 \u0bb7 \u0b9c \u0bb9), the aytham \u0b83, and a full row of vowel signs. Combine a consonant with a vowel sign to form uyirmei letters \u2014 \u0b95 + \u0bbe = \u0b95\u0bbe \u2014 and use the pulli (\u0bcd) for pure consonants. Copy your text with one click into WhatsApp, documents or search.',
    tips: ['Consonant + vowel sign forms uyirmei letters: \u0b95 + \u0bbe = \u0b95\u0bbe, \u0b95 + \u0bbf = \u0b95\u0bbf.', 'Use the pulli \u0bcd for pure consonants: \u0b95 + \u0bcd = \u0b95\u0bcd.', 'Grantha letters \u0bb8 \u0bb7 \u0b9c \u0bb9 are included for loanwords and names.'],
    extraFaqs: [{ q: 'How do I type Tamil compound (uyirmei) letters?', a: 'Type the consonant first, then the vowel sign from the signs row. For example \u0b95 + \u0bc6 gives \u0b95\u0bc6. For a pure consonant add the pulli: \u0b95 + \u0bcd = \u0b95\u0bcd.' }],
    rows: [
      r('\u0b85 \u0b86 \u0b87 \u0b88 \u0b89 \u0b8a \u0b8e \u0b8f \u0b90 \u0b92 \u0b93 \u0b94'),
      r('\u0b95 \u0b99 \u0b9a \u0b9e \u0b9f \u0ba3 \u0ba4 \u0ba8 \u0baa \u0bae \u0baf \u0bb0'),
      r('\u0bb2 \u0bb5 \u0bb4 \u0bb3 \u0bb1 \u0ba9 \u0bb8 \u0bb7 \u0b9c \u0bb9 \u0b83'),
    ],
    extra: r('\u0bbe \u0bbf \u0bc0 \u0bc1 \u0bc2 \u0bc6 \u0bc7 \u0bc8 \u0bca \u0bcb \u0bcc \u0bcd'),
    countryCode: 'in', welcome: 'வரவேற்கிறோம்!', meme: 'tamil.png',
  }),
  def({
    slug: 'farsi-keyboard', name: 'Persian', native: '\u0641\u0627\u0631\u0633\u06cc', dir: 'rtl',
    title: 'Persian Keyboard Online \u2013 Type Farsi (\u0641\u0627\u0631\u0633\u06cc) Free',
    description: 'Free online Persian (Farsi) keyboard with \u067e \u0686 \u0698 \u06af and the standard Iranian layout. Type Farsi right-to-left, copy and paste anywhere.',
    tagline: 'The standard Iranian layout with \u067e \u0686 \u0698 \u06af where they belong.',
    intro: 'Type Persian (Farsi) online with the standard Iranian keyboard layout, including the four letters Persian adds to the Arabic script \u2014 \u067e (pe), \u0686 (che), \u0698 (zhe) and \u06af (gaf) \u2014 plus the Persian forms \u06a9 and \u06cc, which differ from their Arabic counterparts in Unicode. The text area is right-to-left, so your text looks exactly as it will in Telegram, Instagram or a Google search. Type, copy, paste \u2014 done.',
    tips: ['This layout uses the correct Persian \u06a9 and \u06cc (not Arabic \u0643/\u064a) \u2014 important for search.', '\u067e \u0686 \u0698 \u06af are directly on the main rows.', 'Use the helper row for \u0622 \u0621 \u0624 \u0626 and Persian punctuation \u060c \u061f.'],
    extraFaqs: [{ q: 'What is the difference between Persian \u06cc and Arabic \u064a?', a: 'They look similar but are different Unicode characters; Persian text should use \u06cc and \u06a9. This keyboard outputs the correct Persian forms, so your text matches what Iranians type and search for.' }],
    rows: [
      r('\u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u0686'),
      r('\u0634 \u0633 \u06cc \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u06a9 \u06af'),
      r('\u0638 \u0637 \u0632 \u0631 \u0630 \u062f \u067e \u0648 \u0698'),
    ],
    extra: r('\u0622 \u0621 \u0624 \u0626 \u0623 \u0625 \u0629 \u060c \u061f \u061b'),
    countryCode: 'ir', welcome: 'خوش آمدید!', meme: 'persian.png',
  }),
];

export const getKeyboard = (slug: string) => KEYBOARDS.find((k) => k.slug === slug);
