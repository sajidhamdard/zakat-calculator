
  // ─── Currencies ────────────────────────────────────────────────
  const currencies = {
    INR: { symbol: '₹', locale: 'hi-IN' },
    USD: { symbol: '$', locale: 'en-US' },
    EUR: { symbol: '€', locale: 'de-DE' },
    GBP: { symbol: '£', locale: 'en-GB' },
    SAR: { symbol: 'ر.س', locale: 'ar-SA' },
    AED: { symbol: 'د.إ', locale: 'ar-AE' },
    PKR: { symbol: '₨', locale: 'ur-PK' },
    BDT: { symbol: '৳', locale: 'bn-BD' },
    IDR: { symbol: 'Rp', locale: 'id-ID' },
    CNY: { symbol: '¥', locale: 'zh-CN' },
    MYR: { symbol: 'RM', locale: 'ms-MY' }
  };
  let currentCurrency = 'INR';

  // ─── Translations ──────────────────────────────────────────────
  const translations = {
    hi: {
      navHome: 'होम', navAbout: 'हमारे बारे में', navContact: 'संपर्क', navPrivacy: 'गोपनीयता', navTerms: 'नियम व शर्तें',
      pageTitle: 'ज़कात कैलकुलेटर',
      heroTitle: 'ज़कात कैलकुलेटर',
      heroSubtitle: 'अपनी सालाना ज़कात (2.5%) की गणना कुछ आसान स्टेप्स में करें',
      sec1: '1️⃣ नकद और बैंक राशि',
      labelCash: 'नकद राशि ({currency})',
      labelBank: 'बैंक बैलेंस ({currency})',
      sec2: '2️⃣ सोना और चांदी',
      labelGoldWeight: 'सोने का वजन (ग्राम)',
      labelGoldPrice: 'सोने की प्रति ग्राम कीमत ({currency})',
      goldValuePrefix: 'सोने का कुल मूल्य:',
      labelSilverWeight: 'चांदी का वजन (ग्राम)',
      labelSilverPrice: 'चांदी की प्रति ग्राम कीमत ({currency})',
      silverValuePrefix: 'चांदी का कुल मूल्य:',
      sec3: '3️⃣ निवेश और व्यापारिक संपत्ति',
      labelStocks: 'शेयर / म्यूचुअल फंड ({currency})',
      labelBusinessStock: 'बिजनेस स्टॉक ({currency})',
      labelPropertyInvestment: 'प्रॉपर्टी (Resale / Investment) ({currency})',
      sec4: '4️⃣ देनदारियां',
      labelLoan: 'अल्पकालीन देय ऋण ({currency})',
      labelPendingBills: 'बकाया बिल/Tax ({currency})',
      sec6: '6️⃣ पिछला साल की बकाया ज़कात',
      labelLastYearZakat: 'पिछले साल की ज़कात (अगर बाकी हो) ({currency})',
      noteLastYear: 'अगर पिछला साल अदा नहीं किया तो यहाँ जोड़ें।',
      sec5: '5️⃣ निसाब विकल्प',
      radioSilver: 'चांदी के आधार पर (मुनासिब)',
      radioGold: 'सोने के आधार पर',
      labelNisabGoldPrice: 'वर्तमान सोने की कीमत ({currency}/ग्राम)',
      noteGoldNisab: 'सोना निसाब = 87.48 ग्राम × बाज़ार क़ीमत',
      labelNisabSilverPrice: 'वर्तमान चांदी की कीमत ({currency}/ग्राम)',
      noteSilverNisab: 'चांदी निसाब = 612.36 ग्राम × बाज़ार क़ीमत',
      btnCalculate: 'हिसाब करें',
      btnReset: 'दुबारा सेट करें',
      noteBottom: 'ज़कात उस वक्त वाजिब होती है जब आपकी दौलत पहली बार निसाब तक पहुंचती है और एक क़मरी साल (हौल) गुज़र जाता है। साल के दौरान अस्थायी उतार-चढ़ाव अक्सर उलमा के नज़दीक ज़कात को रद्द नहीं करते।',
      nisabNote1: 'अगर किसी के पास सिर्फ सोना हो तो ज़कात सिर्फ सोने के निसाब के अनुसार होगी ।',
      nisabNote2: 'अगर किसी के पास सिर्फ चांदी हो तो ज़कात सिर्फ चांदी के निसाब के अनुसार होगी ।',
      nisabNote3: 'अगर चांदी, नकद पैसा या व्यापार का माल हो तो चांदी के निसाब के अनुसार होगी क्यूंकि चांदी का निसाब जल्दी पहुंच जाता है।',
      resultTitle: '📊 परिणाम',
      resultTotalAssets: 'कुल संपत्ति',
      resultDebts: 'जुमला देनदारियां',
      resultNetWealth: 'खालिस दौलत',
      resultNisab: 'निसाब हद',
      resultZakat: 'ज़कात देय राशि (2.5%)',
      infoTitle1: 'यह कैलकुलेटर कैसे काम करता है',
      infoContent1: 'इस्तेमाल किया गया फ़ॉर्मूला: <strong>(कुल ज़कात योग्य संपत्ति − देय देनदारियां) × 2.5%</strong>। ज़कात तब लाज़िम होती है जब आपकी खालिस दौलत निसाब के बराबर या उससे अधिक हो और एक क़मरी साल तक बनी रहे।',
      tableHead1: 'निसाब प्रकार',
      tableHead2: 'वजन आधार',
      tableHead3: 'मकसद',
      tableRow1Col1: 'सोना निसाब',
      tableRow1Col2: '87.48 ग्राम',
      tableRow1Col3: 'ऊंची हद',
      tableRow2Col1: 'चांदी निसाब',
      tableRow2Col2: '612.36 ग्राम',
      tableRow2Col3: 'कम सीमा (आमतौर पर मुनासिब)',
      infoTitle2: 'क्या शामिल करें और क्या नहीं',
      infoContent2: '<li><strong>शामिल करें:</strong> नकद, बैंक बचत, सोना/चांदी, निवेश, बिजनेस स्टॉक।</li><li><strong>शामिल न करें:</strong> मुख्य निवास, क्रिप्टो, डिजिटल मुद्रा, निजी उपयोग की गाड़ी, घरेलू सामान, बिक्री के लिए नहीं होने वाले उपकरण।</li><li><strong>देनदारियां:</strong> देय रकम घटाएं।</li>',
      infoTitle3: 'फ़ौरी सवाल-जवाब',
      faq1Q: 'क्या यह कैलकुलेटर ज़कात अल-फित्र के लिए है?',
      faq1A: 'नहीं। यह कैलकुलेटर सालाना ज़कात अल-माल (माल की ज़कात) के लिए है, ज़कात अल-फ़ित्र के लिए नहीं।',
      faq2Q: 'क्या मैं नियत तिथि से पहले ज़कात दे सकता/सकती हूँ?',
      faq2A: 'हाँ, पहले अदायगी करना आम तौर पर जायज़ है। बिना मुनासिब वजह ताख़ीर करना दुरुस्त नहीं है।',
      faq3Q: 'क्या मैं परिवार को ज़कात दे सकता/सकती हूँ?',
      faq3A: 'मुनासिब विस्तारित रिश्तेदार (जैसे भाई-बहन, चचेरे/ममेरे रिश्तेदार) पात्र होने पर ज़कात ले सकते हैं। जीवनसाथी, माता-पिता या बच्चों को ज़कात नहीं दी जा सकती।',
      faq4Q: 'क्या प्रॉपर्टी पर ज़कात देनी होती है?',
      faq4A: 'यदि प्रॉपर्टी बेचने (निवेश या व्यापार) के इरादे से खरीदी गई हो, तो उसकी मौजूदा बाजार कीमत पर ज़कात देना जरूरी है। लेकिन अगर प्रॉपर्टी रहने के लिए या केवल रखने (बिना बेचने के इरादे) के लिए ली गई है, तो उस पर ज़कात नहीं है।',
            liabilityHelper: 'केवल अल्पकालीन देनदारियां घटाएं जो एक क़मरी साल के अंदर देय हों (जैसे, आगामी EMI, बकाया बिल, Tax)। लंबी अवधि के लोन की पूरी रकम न घटाएं।',
      scholarDisclaimer: 'उलमा की राय मस्लक और व्यक्तिगत परिस्थितियों के आधार पर भिन्न हो सकती है। व्यक्तिगत मार्गदर्शन के लिए किसी योग्य आलिम से परामर्श करें।',
      faqSilverNisabQ: 'चांदी निसाब क्यों मुनासिब है?',
      faqSilverNisabA: '<li>चांदी निसाब (612.36 ग्राम) कम सीमा देता है।</li><li>इससे अधिक ज़रूरतमंद लोगों को फ़ायदा होता है।</li><li>कई समकालीन उलमा मिश्रित संपत्ति (नकद + सोना + व्यापारिक संपत्ति) के लिए चांदी निसाब की सिफ़ारिश करते हैं।</li>',
      formulaBreakdown: 'गणना का विवरण',
      footer: 'यह कैलकुलेटर आम अंदाज़ा देता है। पेचीदा मामलों में किसी मुअतबर आलिम से मशविरा लें।',
      errorNegative: 'मेहरबानी करके मनफ़ी (negative) क़ीमत दर्ज न करें।',
      madhabHanafi: 'हन्फ़ी मस्लक चुना गया: सोना/चांदी की दर्ज की गई वैल्यू ज़कात योग्य संपत्ति मानी जाती है।',
      madhabShafai: 'शाफ़ई मस्लक चुना गया: सामान्य इस्तेमाल का सोना/चांदी ज़कात योग्य में शामिल नहीं।'
    },
    en: {
      navHome: 'Home', navAbout: 'About', navContact: 'Contact', navPrivacy: 'Privacy', navTerms: 'Terms',
      pageTitle: 'Zakat Calculator',
      heroTitle: 'Zakat Calculator',
      heroSubtitle: 'Calculate your annual Zakat (2.5%) in a few easy steps',
      sec1: '1️⃣ Cash and Bank Balance',
      labelCash: 'Cash Amount ({currency})',
      labelBank: 'Bank Balance ({currency})',
      sec2: '2️⃣ Gold and Silver',
      labelGoldWeight: 'Gold Weight (grams)',
      labelGoldPrice: 'Gold Price per gram ({currency})',
      goldValuePrefix: 'Total Gold Value:',
      labelSilverWeight: 'Silver Weight (grams)',
      labelSilverPrice: 'Silver Price per gram ({currency})',
      silverValuePrefix: 'Total Silver Value:',
      sec3: '3️⃣ Investments and Business Assets',
      labelStocks: 'Shares / Mutual Funds ({currency})',
      labelBusinessStock: 'Business Stock ({currency})',
      labelPropertyInvestment: 'Property (Resale / Investment) ({currency})',
      sec4: '4️⃣ Liabilities',
      labelLoan: 'Short-Term Payable Loan Amount ({currency})',
      labelPendingBills: 'Pending Bills/Tax ({currency})',
      sec6: "6️⃣ Previous Year's Pending Zakat",
      labelLastYearZakat: "Previous Year's Zakat (if pending) ({currency})",
      noteLastYear: 'Add here if not paid last year.',
      sec5: '5️⃣ Nisab Options',
      radioSilver: 'Based on Silver (Recommended)',
      radioGold: 'Based on Gold',
      labelNisabGoldPrice: 'Current Gold Price ({currency}/gram)',
      noteGoldNisab: 'Gold Nisab = 87.48 grams × market price',
      labelNisabSilverPrice: 'Current Silver Price ({currency}/gram)',
      noteSilverNisab: 'Silver Nisab = 612.36 grams × market price',
      btnCalculate: 'Calculate',
      btnReset: 'Reset',
      noteBottom: 'Zakat becomes obligatory when your wealth first reaches Nisab and one lunar year (Hawl) passes. Temporary fluctuations during the year do not cancel Zakat according to most scholars.',
      nisabNote1: 'If someone only has gold, Zakat will be based on the gold Nisab only.',
      nisabNote2: 'If someone only has silver, Zakat will be based on the silver Nisab only.',
      nisabNote3: 'If someone has silver, cash, or business goods, it will be based on silver Nisab as the silver threshold is reached earlier.',
      resultTitle: '📊 Results',
      resultTotalAssets: 'Total Assets',
      resultDebts: 'Total Liabilities',
      resultNetWealth: 'Net Wealth',
      resultNisab: 'Nisab Threshold',
      resultZakat: 'Zakat Due (2.5%)',
      infoTitle1: 'How this Calculator Works',
      infoContent1: 'Formula used: <strong>(Total Zakatable Assets − Payable Liabilities) × 2.5%</strong>. Zakat becomes obligatory when your net wealth equals or exceeds the Nisab and remains so for one lunar year.',
      tableHead1: 'Nisab Type',
      tableHead2: 'Weight Basis',
      tableHead3: 'Purpose',
      tableRow1Col1: 'Gold Nisab',
      tableRow1Col2: '87.48 grams',
      tableRow1Col3: 'Higher threshold',
      tableRow2Col1: 'Silver Nisab',
      tableRow2Col2: '612.36 grams',
      tableRow2Col3: 'Lower threshold (generally recommended)',
      infoTitle2: 'What to Include and Exclude',
      infoContent2: '<li><strong>Include:</strong> Cash, bank savings, gold/silver, investments, business stock.</li><li><strong>Exclude:</strong> Primary residence, crypto, digital currency, personal-use vehicle, household items, non-resale equipment.</li><li><strong>Liabilities:</strong> Deduct payable amounts.</li>',
      infoTitle3: 'Quick Q&A',
      faq1Q: 'Is this calculator for Zakat al-Fitr?',
      faq1A: 'No. This calculator is for annual Zakat al-Mal (wealth Zakat), not Zakat al-Fitr.',
      faq2Q: 'Can I pay Zakat before the due date?',
      faq2A: 'Yes, early payment is generally permissible. Delaying without a valid reason is not appropriate.',
      faq3Q: 'Can I give Zakat to family members?',
      faq3A: 'Eligible extended relatives (e.g., siblings, cousins) can receive Zakat if they qualify. Zakat cannot be given to a spouse, parents, or children.',
      faq4Q: 'Is Zakat due on property?',
      faq4A: 'If property was purchased with the intention to sell (investment or trade), Zakat is due on its current market value. However, if the property is for personal use or just held (without intent to sell), Zakat is not due on it.',
            liabilityHelper: 'Only deduct short-term liabilities that are due within one lunar year (e.g., upcoming EMI, payable bills, taxes). Do not deduct full long-term loan amounts.',
      scholarDisclaimer: 'Scholarly opinions may differ based on madhab and individual circumstances. Please consult a qualified scholar for personalized guidance.',
      faqSilverNisabQ: 'Why is Silver Nisab Recommended?',
      faqSilverNisabA: '<li>Silver Nisab (612.36g) results in a lower threshold.</li><li>It benefits more people in need.</li><li>Many contemporary scholars recommend using Silver Nisab for mixed assets (cash + gold + business assets).</li>',
      formulaBreakdown: 'Calculation Breakdown',
      footer: 'This calculator provides a general estimate. Consult a qualified scholar for complex cases.',
      errorNegative: 'Please do not enter negative values.',
      madhabHanafi: 'Hanafi school selected: Entered gold/silver value is considered zakatable.',
      madhabShafai: "Shafi'i school selected: Gold/silver for general use is not included in zakatable assets."
    },
    ar: {
      navHome: 'الرئيسية', navAbout: 'حول', navContact: 'اتصل', navPrivacy: 'الخصوصية', navTerms: 'الشروط',
      pageTitle: 'حاسبة الزكاة',
      heroTitle: 'حاسبة الزكاة',
      heroSubtitle: 'احسب زكاتك السنوية (2.5%) في خطوات بسيطة',
      sec1: '1️⃣ النقد والرصيد البنكي',
      labelCash: 'المبلغ النقدي ({currency})',
      labelBank: 'الرصيد البنكي ({currency})',
      sec2: '2️⃣ الذهب والفضة',
      labelGoldWeight: 'وزن الذهب (جرام)',
      labelGoldPrice: 'سعر الذهب لكل جرام ({currency})',
      goldValuePrefix: 'إجمالي قيمة الذهب:',
      labelSilverWeight: 'وزن الفضة (جرام)',
      labelSilverPrice: 'سعر الفضة لكل جرام ({currency})',
      silverValuePrefix: 'إجمالي قيمة الفضة:',
      sec3: '3️⃣ الاستثمارات والأصول التجارية',
      labelStocks: 'الأسهم / صناديق الاستثمار ({currency})',
      labelBusinessStock: 'المخزون التجاري ({currency})',
      labelPropertyInvestment: 'العقار (إعادة بيع / استثمار) ({currency})',
      sec4: '4️⃣ الالتزامات',
      labelLoan: 'مبلغ القرض قصير الأجل ({currency})',
      labelPendingBills: 'الفواتير المعلقة / الضريبة ({currency})',
      sec6: '6️⃣ زكاة العام الماضي المتبقية',
      labelLastYearZakat: 'زكاة العام الماضي (إن وجدت) ({currency})',
      noteLastYear: 'أضف هنا إذا لم تُدفع العام الماضي.',
      sec5: '5️⃣ خيارات النصاب',
      radioSilver: 'على أساس الفضة (موصى به)',
      radioGold: 'على أساس الذهب',
      labelNisabGoldPrice: 'سعر الذهب الحالي ({currency}/جرام)',
      noteGoldNisab: 'نصاب الذهب = 87.48 جرام × سعر السوق',
      labelNisabSilverPrice: 'سعر الفضة الحالي ({currency}/جرام)',
      noteSilverNisab: 'نصاب الفضة = 612.36 جرام × سعر السوق',
      btnCalculate: 'احسب',
      btnReset: 'إعادة تعيين',
      noteBottom: 'تجب الزكاة عندما تبلغ ثروتك النصاب لأول مرة ويمر حول قمري (الحول). التقلبات المؤقتة خلال العام لا تُلغي الزكاة وفق جمهور العلماء.',
      nisabNote1: 'إذا كان لدى شخص ذهب فقط، تُحسب الزكاة على أساس نصاب الذهب فقط.',
      nisabNote2: 'إذا كان لدى شخص فضة فقط، تُحسب الزكاة على أساس نصاب الفضة فقط.',
      nisabNote3: 'إذا كان لديه فضة أو نقود أو بضاعة تجارية، يُعتمد نصاب الفضة لأنه يُبلغ أسرع.',
      resultTitle: '📊 النتائج',
      resultTotalAssets: 'إجمالي الأصول',
      resultDebts: 'إجمالي الالتزامات',
      resultNetWealth: 'صافي الثروة',
      resultNisab: 'حد النصاب',
      resultZakat: 'الزكاة المستحقة (2.5%)',
      infoTitle1: 'كيف تعمل هذه الحاسبة',
      infoContent1: 'الصيغة المستخدمة: <strong>(إجمالي الأصول الخاضعة للزكاة − الالتزامات المستحقة) × 2.5%</strong>. تجب الزكاة عندما تبلغ ثروتك الصافية النصاب أو تتجاوزه وتبقى كذلك لمدة حول قمري.',
      tableHead1: 'نوع النصاب',
      tableHead2: 'أساس الوزن',
      tableHead3: 'الغرض',
      tableRow1Col1: 'نصاب الذهب',
      tableRow1Col2: '87.48 جرام',
      tableRow1Col3: 'الحد الأعلى',
      tableRow2Col1: 'نصاب الفضة',
      tableRow2Col2: '612.36 جرام',
      tableRow2Col3: 'الحد الأدنى (موصى به عموماً)',
      infoTitle2: 'ما يُدرج وما لا يُدرج',
      infoContent2: '<li><strong>أدرج:</strong> النقد، المدخرات البنكية، الذهب/الفضة، الاستثمارات، المخزون التجاري.</li><li><strong>استثنِ:</strong> السكن الرئيسي، العملات الرقمية، السيارة للاستخدام الشخصي، الأثاث المنزلي، المعدات غير المخصصة للبيع.</li><li><strong>الالتزامات:</strong> اطرح المبالغ المستحقة.</li>',
      infoTitle3: 'أسئلة شائعة',
      faq1Q: 'هل هذه الحاسبة لزكاة الفطر؟',
      faq1A: 'لا. هذه الحاسبة لزكاة المال السنوية، وليست لزكاة الفطر.',
      faq2Q: 'هل يمكنني دفع الزكاة قبل موعدها؟',
      faq2A: 'نعم، الدفع المبكر جائز في الغالب. التأخير بدون عذر مشروع غير مناسب.',
      faq3Q: 'هل يمكنني إعطاء الزكاة لأفراد الأسرة؟',
      faq3A: 'يمكن للأقارب المستحقين (كالإخوة والأبناء عمومة) قبول الزكاة. لا تُعطى الزكاة للزوج/الزوجة أو الوالدين أو الأبناء.',
      faq4Q: 'هل تجب الزكاة على العقار؟',
      faq4A: 'إذا اشتُري العقار بنية البيع (استثمار أو تجارة)، تجب الزكاة على قيمته السوقية الحالية. أما إذا كان للسكن أو الاحتفاظ (بدون نية البيع)، فلا تجب عليه زكاة.',
            liabilityHelper: 'اخصم فقط الالتزامات قصيرة الأجل المستحقة خلال عام قمري واحد (مثل أقساط قادمة، فواتير، ضرائب). لا تخصم كامل مبالغ القروض طويلة الأجل.',
      scholarDisclaimer: 'قد تختلف آراء العلماء بناءً على المذهب والظروف الشخصية. يُرجى استشارة عالم مؤهل للحصول على توجيه شخصي.',
      faqSilverNisabQ: 'لماذا يُوصى بنصاب الفضة؟',
      faqSilverNisabA: '<li>نصاب الفضة (612.36 جرام) يُعطي حداً أدنى أقل.</li><li>يستفيد منه عدد أكبر من المحتاجين.</li><li>كثير من العلماء المعاصرين يوصون باستخدام نصاب الفضة للأصول المختلطة (نقد + ذهب + أصول تجارية).</li>',
      formulaBreakdown: 'تفصيل الحساب',
      footer: 'توفر هذه الحاسبة تقديراً عاماً. استشر عالماً مؤهلاً للحالات المعقدة.',
      errorNegative: 'يرجى عدم إدخال قيم سالبة.',
      madhabHanafi: 'تم اختيار المذهب الحنفي: قيمة الذهب/الفضة المُدخلة تُعدّ خاضعة للزكاة.',
      madhabShafai: 'تم اختيار المذهب الشافعي: الذهب/الفضة للاستخدام العام غير مشمول في الأصول الخاضعة للزكاة.'
    },
    es: {
      navHome: 'Inicio', navAbout: 'Acerca de', navContact: 'Contacto', navPrivacy: 'Privacidad', navTerms: 'Términos',
      pageTitle: 'Calculadora de Zakat',
      heroTitle: 'Calculadora de Zakat',
      heroSubtitle: 'Calcula tu Zakat anual (2.5%) en unos sencillos pasos',
      sec1: '1️⃣ Efectivo y Saldo Bancario',
      labelCash: 'Efectivo ({currency})',
      labelBank: 'Saldo Bancario ({currency})',
      sec2: '2️⃣ Oro y Plata',
      labelGoldWeight: 'Peso del Oro (gramos)',
      labelGoldPrice: 'Precio del Oro por gramo ({currency})',
      goldValuePrefix: 'Valor Total del Oro:',
      labelSilverWeight: 'Peso de la Plata (gramos)',
      labelSilverPrice: 'Precio de la Plata por gramo ({currency})',
      silverValuePrefix: 'Valor Total de la Plata:',
      sec3: '3️⃣ Inversiones y Activos Comerciales',
      labelStocks: 'Acciones / Fondos Mutuos ({currency})',
      labelBusinessStock: 'Inventario Comercial ({currency})',
      labelPropertyInvestment: 'Propiedad (Reventa / Inversión) ({currency})',
      sec4: '4️⃣ Pasivos',
      labelLoan: 'Monto de Préstamo a Corto Plazo ({currency})',
      labelPendingBills: 'Facturas Pendientes/Impuesto ({currency})',
      sec6: '6️⃣ Zakat Pendiente del Año Anterior',
      labelLastYearZakat: 'Zakat del Año Anterior (si aplica) ({currency})',
      noteLastYear: 'Agrega aquí si no pagaste el año pasado.',
      sec5: '5️⃣ Opciones de Nisab',
      radioSilver: 'Basado en Plata (Recomendado)',
      radioGold: 'Basado en Oro',
      labelNisabGoldPrice: 'Precio Actual del Oro ({currency}/gramo)',
      noteGoldNisab: 'Nisab de Oro = 87.48 gramos × precio de mercado',
      labelNisabSilverPrice: 'Precio Actual de la Plata ({currency}/gramo)',
      noteSilverNisab: 'Nisab de Plata = 612.36 gramos × precio de mercado',
      btnCalculate: 'Calcular',
      btnReset: 'Restablecer',
      noteBottom: 'El Zakat se vuelve obligatorio cuando tu riqueza alcanza el Nisab por primera vez y pasa un año lunar (Hawl). Las fluctuaciones temporales durante el año no cancelan el Zakat según la mayoría de los eruditos.',
      nisabNote1: 'Si alguien solo tiene oro, el Zakat se calculará solo según el Nisab de oro.',
      nisabNote2: 'Si alguien solo tiene plata, el Zakat se calculará solo según el Nisab de plata.',
      nisabNote3: 'Si alguien tiene plata, efectivo o bienes comerciales, se usará el Nisab de plata ya que su umbral se alcanza antes.',
      resultTitle: '📊 Resultados',
      resultTotalAssets: 'Total de Activos',
      resultDebts: 'Total de Pasivos',
      resultNetWealth: 'Riqueza Neta',
      resultNisab: 'Umbral de Nisab',
      resultZakat: 'Zakat Debido (2.5%)',
      infoTitle1: 'Cómo Funciona esta Calculadora',
      infoContent1: 'Fórmula utilizada: <strong>(Total de Activos Zakatable − Pasivos Pagaderos) × 2.5%</strong>. El Zakat se vuelve obligatorio cuando tu riqueza neta iguala o supera el Nisab y permanece así durante un año lunar.',
      tableHead1: 'Tipo de Nisab',
      tableHead2: 'Base de Peso',
      tableHead3: 'Propósito',
      tableRow1Col1: 'Nisab de Oro',
      tableRow1Col2: '87.48 gramos',
      tableRow1Col3: 'Umbral alto',
      tableRow2Col1: 'Nisab de Plata',
      tableRow2Col2: '612.36 gramos',
      tableRow2Col3: 'Umbral bajo (generalmente recomendado)',
      infoTitle2: 'Qué Incluir y Excluir',
      infoContent2: '<li><strong>Incluir:</strong> Efectivo, ahorros bancarios, oro/plata, inversiones, inventario comercial.</li><li><strong>Excluir:</strong> Residencia principal, criptomonedas, moneda digital, vehículo personal, artículos del hogar, equipo no para reventa.</li><li><strong>Pasivos:</strong> Deduce los montos pagaderos.</li>',
      infoTitle3: 'Preguntas Frecuentes',
      faq1Q: '¿Esta calculadora es para Zakat al-Fitr?',
      faq1A: 'No. Esta calculadora es para el Zakat al-Mal anual, no para el Zakat al-Fitr.',
      faq2Q: '¿Puedo pagar el Zakat antes de la fecha límite?',
      faq2A: 'Sí, el pago anticipado es generalmente permisible. Retrasar sin una razón válida no es apropiado.',
      faq3Q: '¿Puedo dar Zakat a miembros de la familia?',
      faq3A: 'Parientes extendidos elegibles (p. ej., hermanos, primos) pueden recibir Zakat si califican. No se puede dar Zakat a cónyuge, padres o hijos.',
      faq4Q: '¿Se debe Zakat sobre la propiedad?',
      faq4A: 'Si la propiedad fue comprada con intención de vender (inversión o comercio), se debe Zakat sobre su valor de mercado actual. Sin embargo, si es para uso personal o solo retención, no se debe Zakat.',
            liabilityHelper: 'Solo deduce pasivos a corto plazo que vencen dentro de un año lunar (ej.: próximas cuotas, facturas, impuestos). No deduzca el monto total de préstamos a largo plazo.',
      scholarDisclaimer: 'Las opiniones de los eruditos pueden diferir según el madhab y las circunstancias individuales. Consulta a un erudito calificado para orientación personalizada.',
      faqSilverNisabQ: '¿Por qué se recomienda el Nisab de Plata?',
      faqSilverNisabA: '<li>El Nisab de Plata (612.36g) resulta en un umbral más bajo.</li><li>Beneficia a más personas necesitadas.</li><li>Muchos eruditos contemporáneos recomiendan usar el Nisab de Plata para activos mixtos (efectivo + oro + activos comerciales).</li>',
      formulaBreakdown: 'Desglose del Cálculo',
      footer: 'Esta calculadora proporciona una estimación general. Consulta a un erudito calificado para casos complejos.',
      errorNegative: 'Por favor, no ingrese valores negativos.',
      madhabHanafi: 'Escuela Hanafi seleccionada: El valor de oro/plata ingresado se considera zakatable.',
      madhabShafai: 'Escuela Shafi\'i seleccionada: El oro/plata para uso general no se incluye en los activos zakatables.'
    },
    fr: {
      navHome: 'Accueil', navAbout: 'À propos', navContact: 'Contact', navPrivacy: 'Confidentialité', navTerms: 'Conditions',
      pageTitle: 'Calculateur de Zakat',
      heroTitle: 'Calculateur de Zakat',
      heroSubtitle: 'Calculez votre Zakat annuelle (2,5%) en quelques étapes simples',
      sec1: '1️⃣ Espèces et Solde Bancaire',
      labelCash: 'Montant en Espèces ({currency})',
      labelBank: 'Solde Bancaire ({currency})',
      sec2: '2️⃣ Or et Argent',
      labelGoldWeight: 'Poids de l\'Or (grammes)',
      labelGoldPrice: 'Prix de l\'Or par gramme ({currency})',
      goldValuePrefix: 'Valeur Totale de l\'Or:',
      labelSilverWeight: 'Poids de l\'Argent (grammes)',
      labelSilverPrice: 'Prix de l\'Argent par gramme ({currency})',
      silverValuePrefix: 'Valeur Totale de l\'Argent:',
      sec3: '3️⃣ Investissements et Actifs Commerciaux',
      labelStocks: 'Actions / Fonds Communs ({currency})',
      labelBusinessStock: 'Stock Commercial ({currency})',
      labelPropertyInvestment: 'Propriété (Revente / Investissement) ({currency})',
      sec4: '4️⃣ Passifs',
      labelLoan: 'Montant du Prêt à Court Terme ({currency})',
      labelPendingBills: 'Factures en Attente/Taxe ({currency})',
      sec6: '6️⃣ Zakat en Attente de l\'Année Précédente',
      labelLastYearZakat: 'Zakat de l\'Année Précédente (si applicable) ({currency})',
      noteLastYear: 'Ajoutez ici si non payé l\'année dernière.',
      sec5: '5️⃣ Options de Nisab',
      radioSilver: 'Basé sur l\'Argent (Recommandé)',
      radioGold: 'Basé sur l\'Or',
      labelNisabGoldPrice: 'Prix Actuel de l\'Or ({currency}/gramme)',
      noteGoldNisab: 'Nisab de l\'Or = 87,48 grammes × prix du marché',
      labelNisabSilverPrice: 'Prix Actuel de l\'Argent ({currency}/gramme)',
      noteSilverNisab: 'Nisab de l\'Argent = 612,36 grammes × prix du marché',
      btnCalculate: 'Calculer',
      btnReset: 'Réinitialiser',
      noteBottom: 'Le Zakat devient obligatoire lorsque votre richesse atteint le Nisab pour la première fois et qu\'une année lunaire (Hawl) s\'écoule. Les fluctuations temporaires au cours de l\'année n\'annulent pas le Zakat selon la majorité des érudits.',
      nisabNote1: 'Si quelqu\'un n\'a que de l\'or, le Zakat sera calculé uniquement sur la base du Nisab de l\'or.',
      nisabNote2: 'Si quelqu\'un n\'a que de l\'argent, le Zakat sera calculé uniquement sur la base du Nisab de l\'argent.',
      nisabNote3: 'Si quelqu\'un possède de l\'argent, des espèces ou des marchandises commerciales, le Nisab de l\'argent s\'applique car son seuil est atteint plus tôt.',
      resultTitle: '📊 Résultats',
      resultTotalAssets: 'Total des Actifs',
      resultDebts: 'Total des Passifs',
      resultNetWealth: 'Richesse Nette',
      resultNisab: 'Seuil de Nisab',
      resultZakat: 'Zakat Dû (2,5%)',
      infoTitle1: 'Comment Fonctionne ce Calculateur',
      infoContent1: 'Formule utilisée: <strong>(Total des Actifs Zakatables − Passifs Payables) × 2,5%</strong>. Le Zakat devient obligatoire lorsque votre richesse nette égale ou dépasse le Nisab et reste ainsi pendant une année lunaire.',
      tableHead1: 'Type de Nisab',
      tableHead2: 'Base de Poids',
      tableHead3: 'Objectif',
      tableRow1Col1: 'Nisab de l\'Or',
      tableRow1Col2: '87,48 grammes',
      tableRow1Col3: 'Seuil élevé',
      tableRow2Col1: 'Nisab de l\'Argent',
      tableRow2Col2: '612,36 grammes',
      tableRow2Col3: 'Seuil bas (généralement recommandé)',
      infoTitle2: 'Ce qu\'il Faut Inclure et Exclure',
      infoContent2: '<li><strong>Inclure:</strong> Espèces, épargne bancaire, or/argent, investissements, stock commercial.</li><li><strong>Exclure:</strong> Résidence principale, crypto, monnaie numérique, véhicule personnel, articles ménagers, équipements non revendus.</li><li><strong>Passifs:</strong> Déduisez les montants payables.</li>',
      infoTitle3: 'Questions Fréquentes',
      faq1Q: 'Ce calculateur est-il pour le Zakat al-Fitr?',
      faq1A: 'Non. Ce calculateur est pour le Zakat al-Mal annuel, pas pour le Zakat al-Fitr.',
      faq2Q: 'Puis-je payer le Zakat avant la date d\'échéance?',
      faq2A: 'Oui, le paiement anticipé est généralement permis. Retarder sans raison valable n\'est pas approprié.',
      faq3Q: 'Puis-je donner le Zakat aux membres de la famille?',
      faq3A: 'Les proches parents éligibles (p. ex., frères, cousins) peuvent recevoir le Zakat s\'ils y ont droit. Le Zakat ne peut pas être donné au conjoint, aux parents ou aux enfants.',
      faq4Q: 'Le Zakat est-il dû sur la propriété?',
      faq4A: 'Si la propriété a été achetée dans l\'intention de la vendre (investissement ou commerce), le Zakat est dû sur sa valeur marchande actuelle. Si elle est pour usage personnel ou simplement détenue, le Zakat n\'est pas dû.',
            liabilityHelper: "Ne déduisez que les passifs à court terme dus dans un an lunaire (ex : prochaines mensualités, factures, impôts). Ne déduisez pas le montant total des prêts à long terme.",
      scholarDisclaimer: "Les avis des érudits peuvent différer selon le madhab et les circonstances individuelles. Veuillez consulter un érudit qualifié pour des conseils personnalisés.",
      faqSilverNisabQ: 'Pourquoi le Nisab de l\'Argent est-il recommandé ?',
      faqSilverNisabA: '<li>Le Nisab de l\'Argent (612,36 g) donne un seuil plus bas.</li><li>Il bénéficie à plus de personnes dans le besoin.</li><li>De nombreux érudits contemporains recommandent d\'utiliser le Nisab de l\'Argent pour les actifs mixtes (espèces + or + actifs commerciaux).</li>',
      formulaBreakdown: 'Détail du Calcul',
      footer: 'Ce calculateur fournit une estimation générale. Consultez un érudit qualifié pour les cas complexes.',
      errorNegative: 'Veuillez ne pas entrer de valeurs négatives.',
      madhabHanafi: 'École Hanafi sélectionnée: La valeur or/argent saisie est considérée zakatable.',
      madhabShafai: 'École Shafi\'i sélectionnée: L\'or/argent pour usage général n\'est pas inclus dans les actifs zakatables.'
    },
    zh: {
      navHome: '首页', navAbout: '关于', navContact: '联系', navPrivacy: '隐私', navTerms: '条款',
      pageTitle: '天课计算器',
      heroTitle: '天课计算器',
      heroSubtitle: '几个简单步骤计算您的年度天课（2.5%）',
      sec1: '1️⃣ 现金和银行余额',
      labelCash: '现金金额（{currency}）',
      labelBank: '银行余额（{currency}）',
      sec2: '2️⃣ 黄金和白银',
      labelGoldWeight: '黄金重量（克）',
      labelGoldPrice: '每克黄金价格（{currency}）',
      goldValuePrefix: '黄金总价值：',
      labelSilverWeight: '白银重量（克）',
      labelSilverPrice: '每克白银价格（{currency}）',
      silverValuePrefix: '白银总价值：',
      sec3: '3️⃣ 投资和商业资产',
      labelStocks: '股票/共同基金（{currency}）',
      labelBusinessStock: '商业库存（{currency}）',
      labelPropertyInvestment: '房产（转售/投资）（{currency}）',
      sec4: '4️⃣ 负债',
      labelLoan: '短期应付贷款金额（{currency}）',
      labelPendingBills: '未付账单/税款（{currency}）',
      sec6: '6️⃣ 上年度未缴天课',
      labelLastYearZakat: '上年度天课（如有）（{currency}）',
      noteLastYear: '如果去年未付，请在此添加。',
      sec5: '5️⃣ 尼萨布选项',
      radioSilver: '基于白银（推荐）',
      radioGold: '基于黄金',
      labelNisabGoldPrice: '当前黄金价格（{currency}/克）',
      noteGoldNisab: '黄金尼萨布 = 87.48克 × 市场价格',
      labelNisabSilverPrice: '当前白银价格（{currency}/克）',
      noteSilverNisab: '白银尼萨布 = 612.36克 × 市场价格',
      btnCalculate: '计算',
      btnReset: '重置',
      noteBottom: '当您的财富第一次达到尼萨布并经过一个太阴年（哈乌尔）时，天课变为义务。根据大多数学者，年内的暂时波动不会取消天课义务。',
      nisabNote1: '如果某人只有黄金，天课将仅基于黄金尼萨布计算。',
      nisabNote2: '如果某人只有白银，天课将仅基于白银尼萨布计算。',
      nisabNote3: '如果某人有白银、现金或商品，将使用白银尼萨布，因为其门槛更容易达到。',
      resultTitle: '📊 结果',
      resultTotalAssets: '总资产',
      resultDebts: '总负债',
      resultNetWealth: '净财富',
      resultNisab: '尼萨布门槛',
      resultZakat: '应缴天课（2.5%）',
      infoTitle1: '计算器工作原理',
      infoContent1: '使用公式：<strong>（应缴天课总资产 − 应付负债）× 2.5%</strong>。当您的净财富达到或超过尼萨布并持续一个太阴年时，天课变为义务。',
      tableHead1: '尼萨布类型',
      tableHead2: '重量基准',
      tableHead3: '目的',
      tableRow1Col1: '黄金尼萨布',
      tableRow1Col2: '87.48克',
      tableRow1Col3: '较高门槛',
      tableRow2Col1: '白银尼萨布',
      tableRow2Col2: '612.36克',
      tableRow2Col3: '较低门槛（通常推荐）',
      infoTitle2: '包含和排除什么',
      infoContent2: '<li><strong>包含：</strong>现金、银行储蓄、黄金/白银、投资、商业库存。</li><li><strong>排除：</strong>主要住所、加密货币、数字货币、个人用途车辆、家庭用品、非转售设备。</li><li><strong>负债：</strong>扣除应付金额。</li>',
      infoTitle3: '常见问题',
      faq1Q: '这个计算器是用于开斋天课的吗？',
      faq1A: '不是。这个计算器用于年度财富天课，不是开斋天课。',
      faq2Q: '我可以在到期日前缴纳天课吗？',
      faq2A: '可以，提前缴纳通常是允许的。无正当理由拖延是不适当的。',
      faq3Q: '我可以把天课给家庭成员吗？',
      faq3A: '符合条件的远亲（如兄弟姐妹、表亲）可以接受天课。天课不能给予配偶、父母或子女。',
      faq4Q: '房产需要缴纳天课吗？',
      faq4A: '如果房产是以出售为目的购买的（投资或贸易），则需按当前市场价值缴纳天课。如果是自用或仅持有（无出售意图），则不需缴纳天课。',
            liabilityHelper: '仅扣除一个太阴年内到期的短期负债（如即将到期的EMI、应付账单、税款）。不得扣除长期贷款的全部金额。',
      scholarDisclaimer: '学者意见可能因法学派和个人情况而异。请咨询合格学者以获取个性化指导。',
      faqSilverNisabQ: '为什么推荐白银尼萨布？',
      faqSilverNisabA: '<li>白银尼萨布（612.36克）的门槛较低。</li><li>使更多有需要的人受益。</li><li>许多当代学者建议将白银尼萨布用于混合资产（现金+黄金+商业资产）。</li>',
      formulaBreakdown: '计算明细',
      footer: '此计算器提供一般估计。复杂情况请咨询合格学者。',
      errorNegative: '请不要输入负值。',
      madhabHanafi: '已选择哈纳菲学派：输入的黄金/白银价值被视为应缴天课资产。',
      madhabShafai: '已选择沙菲仪学派：日常使用的黄金/白银不包含在应缴天课资产中。'
    },
    bn: {
      navHome: 'হোম', navAbout: 'আমাদের সম্পর্কে', navContact: 'যোগাযোগ', navPrivacy: 'গোপনীয়তা', navTerms: 'শর্তাবলী',
      pageTitle: 'যাকাত ক্যালকুলেটর',
      heroTitle: 'যাকাত ক্যালকুলেটর',
      heroSubtitle: 'কয়েকটি সহজ ধাপে আপনার বার্ষিক যাকাত (২.৫%) গণনা করুন',
      sec1: '1️⃣ নগদ এবং ব্যাংক ব্যালেন্স',
      labelCash: 'নগদ পরিমাণ ({currency})',
      labelBank: 'ব্যাংক ব্যালেন্স ({currency})',
      sec2: '2️⃣ সোনা এবং রুপা',
      labelGoldWeight: 'সোনার ওজন (গ্রাম)',
      labelGoldPrice: 'প্রতি গ্রাম সোনার মূল্য ({currency})',
      goldValuePrefix: 'মোট সোনার মূল্য:',
      labelSilverWeight: 'রুপার ওজন (গ্রাম)',
      labelSilverPrice: 'প্রতি গ্রাম রুপার মূল্য ({currency})',
      silverValuePrefix: 'মোট রুপার মূল্য:',
      sec3: '3️⃣ বিনিয়োগ এবং ব্যবসায়িক সম্পদ',
      labelStocks: 'শেয়ার / মিউচুয়াল ফান্ড ({currency})',
      labelBusinessStock: 'ব্যবসায়িক স্টক ({currency})',
      labelPropertyInvestment: 'সম্পত্তি (বিক্রয়/বিনিয়োগ) ({currency})',
      sec4: '4️⃣ দায়',
      labelLoan: 'স্বল্পমেয়াদী প্রদেয় ঋণের পরিমাণ ({currency})',
      labelPendingBills: 'মুলতুবি বিল/কর ({currency})',
      sec6: '6️⃣ গত বছরের বকেয়া যাকাত',
      labelLastYearZakat: 'গত বছরের যাকাত (যদি বাকি থাকে) ({currency})',
      noteLastYear: 'গত বছর পরিশোধ না করলে এখানে যোগ করুন।',
      sec5: '5️⃣ নিসাব বিকল্প',
      radioSilver: 'রুপার ভিত্তিতে (প্রস্তাবিত)',
      radioGold: 'সোনার ভিত্তিতে',
      labelNisabGoldPrice: 'বর্তমান সোনার মূল্য ({currency}/গ্রাম)',
      noteGoldNisab: 'সোনার নিসাব = ৮৭.৪৮ গ্রাম × বাজার মূল্য',
      labelNisabSilverPrice: 'বর্তমান রুপার মূল্য ({currency}/গ্রাম)',
      noteSilverNisab: 'রুপার নিসাব = ৬১২.৩৬ গ্রাম × বাজার মূল্য',
      btnCalculate: 'গণনা করুন',
      btnReset: 'রিসেট',
      noteBottom: 'যাকাত তখনই বাধ্যতামূলক হয় যখন আপনার সম্পদ প্রথমবার নিসাব পৌঁছায় এবং একটি চন্দ্র বছর (হাওল) অতিবাহিত হয়। বছরের মধ্যে সাময়িক উত্থান-পতন বেশিরভাগ আলেমের মতে যাকাত বাতিল করে না।',
      nisabNote1: 'কারো শুধু সোনা থাকলে যাকাত শুধুমাত্র সোনার নিসাবের ভিত্তিতে হবে।',
      nisabNote2: 'কারো শুধু রুপা থাকলে যাকাত শুধুমাত্র রুপার নিসাবের ভিত্তিতে হবে।',
      nisabNote3: 'কারো রুপা, নগদ বা ব্যবসায়িক পণ্য থাকলে রুপার নিসাব প্রযোজ্য কারণ এর সীমা আগে পৌঁছায়।',
      resultTitle: '📊 ফলাফল',
      resultTotalAssets: 'মোট সম্পদ',
      resultDebts: 'মোট দায়',
      resultNetWealth: 'নেট সম্পদ',
      resultNisab: 'নিসাব সীমা',
      resultZakat: 'প্রদেয় যাকাত (২.৫%)',
      infoTitle1: 'এই ক্যালকুলেটর কীভাবে কাজ করে',
      infoContent1: 'ব্যবহৃত সূত্র: <strong>(মোট যাকাতযোগ্য সম্পদ − প্রদেয় দায়) × ২.৫%</strong>। যাকাত বাধ্যতামূলক হয় যখন আপনার নেট সম্পদ নিসাব সমান বা বেশি হয় এবং এক চন্দ্র বছর ধরে তা বজায় থাকে।',
      tableHead1: 'নিসাব প্রকার',
      tableHead2: 'ওজনের ভিত্তি',
      tableHead3: 'উদ্দেশ্য',
      tableRow1Col1: 'সোনার নিসাব',
      tableRow1Col2: '৮৭.৪৮ গ্রাম',
      tableRow1Col3: 'উচ্চ সীমা',
      tableRow2Col1: 'রুপার নিসাব',
      tableRow2Col2: '৬১২.৩৬ গ্রাম',
      tableRow2Col3: 'নিম্ন সীমা (সাধারণত প্রস্তাবিত)',
      infoTitle2: 'কী অন্তর্ভুক্ত করবেন এবং কী বাদ দেবেন',
      infoContent2: '<li><strong>অন্তর্ভুক্ত করুন:</strong> নগদ, ব্যাংক সঞ্চয়, সোনা/রুপা, বিনিয়োগ, ব্যবসায়িক স্টক।</li><li><strong>বাদ দিন:</strong> প্রধান বাসস্থান, ক্রিপ্টো, ডিজিটাল মুদ্রা, ব্যক্তিগত যানবাহন, গৃহস্থালি সামগ্রী, অ-বিক্রয় সরঞ্জাম।</li><li><strong>দায়:</strong> প্রদেয় পরিমাণ কেটে নিন।</li>',
      infoTitle3: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
      faq1Q: 'এই ক্যালকুলেটর কি যাকাত আল-ফিতরের জন্য?',
      faq1A: 'না। এই ক্যালকুলেটর বার্ষিক যাকাত আল-মালের জন্য, যাকাত আল-ফিতরের জন্য নয়।',
      faq2Q: 'আমি কি নির্ধারিত তারিখের আগে যাকাত দিতে পারি?',
      faq2A: 'হ্যাঁ, আগাম পরিশোধ সাধারণত অনুমোদিত। বৈধ কারণ ছাড়া বিলম্ব করা উপযুক্ত নয়।',
      faq3Q: 'আমি কি পরিবারের সদস্যদের যাকাত দিতে পারি?',
      faq3A: 'যোগ্য বর্ধিত আত্মীয়রা (যেমন ভাই-বোন, চাচাতো ভাই) যোগ্য হলে যাকাত পেতে পারেন। স্বামী/স্ত্রী, বাবা-মা বা সন্তানদের যাকাত দেওয়া যায় না।',
      faq4Q: 'সম্পত্তিতে কি যাকাত দিতে হয়?',
      faq4A: 'যদি সম্পত্তি বিক্রির উদ্দেশ্যে কেনা হয়, তাহলে বর্তমান বাজার মূল্যে যাকাত দিতে হবে। ব্যক্তিগত ব্যবহারের জন্য বা ধরে রাখার জন্য কেনা হলে যাকাত নেই।',
            liabilityHelper: 'কেবলমাত্র সেই স্বল্পমেয়াদী দায় বাদ দিন যা এক চন্দ্র বছরের মধ্যে প্রদেয় (যেমন আসন্ন EMI, বকেয়া বিল, কর)। দীর্ঘমেয়াদী ঋণের পুরো পরিমাণ বাদ দেবেন না।',
      scholarDisclaimer: 'আলেমদের মতামত মাযহাব ও ব্যক্তিগত পরিস্থিতির উপর ভিত্তি করে ভিন্ন হতে পারে। ব্যক্তিগত নির্দেশনার জন্য একজন যোগ্য আলেমের পরামর্শ নিন।',
      faqSilverNisabQ: 'রুপার নিসাব কেন প্রস্তাবিত?',
      faqSilverNisabA: '<li>রুপার নিসাব (612.36g) একটি নিম্নতর সীমা দেয়।</li><li>এটি আরও বেশি অভাবী মানুষকে উপকৃত করে।</li><li>অনেক সমসাময়িক আলেম মিশ্র সম্পদের (নগদ + সোনা + ব্যবসায়িক সম্পদ) জন্য রুপার নিসাব ব্যবহারের পরামর্শ দেন।</li>',
      formulaBreakdown: 'হিসাবের বিবরণ',
      footer: 'এই ক্যালকুলেটর একটি সাধারণ অনুমান প্রদান করে। জটিল ক্ষেত্রে যোগ্য আলেমের পরামর্শ নিন।',
      errorNegative: 'অনুগ্রহ করে নেতিবাচক মান প্রবেশ করবেন না।',
      madhabHanafi: 'হানাফি মাজহাব নির্বাচিত: প্রবেশ করা সোনা/রুপার মান যাকাতযোগ্য বলে গণ্য হয়।',
      madhabShafai: 'শাফেঈ মাজহাব নির্বাচিত: সাধারণ ব্যবহারের সোনা/রুপা যাকাতযোগ্য সম্পদে অন্তর্ভুক্ত নয়।'
    },
    pt: {
      navHome: 'Início', navAbout: 'Sobre', navContact: 'Contato', navPrivacy: 'Privacidade', navTerms: 'Termos',
      pageTitle: 'Calculadora de Zakat',
      heroTitle: 'Calculadora de Zakat',
      heroSubtitle: 'Calcule seu Zakat anual (2,5%) em alguns passos simples',
      sec1: '1️⃣ Dinheiro e Saldo Bancário',
      labelCash: 'Valor em Dinheiro ({currency})',
      labelBank: 'Saldo Bancário ({currency})',
      sec2: '2️⃣ Ouro e Prata',
      labelGoldWeight: 'Peso do Ouro (gramas)',
      labelGoldPrice: 'Preço do Ouro por grama ({currency})',
      goldValuePrefix: 'Valor Total do Ouro:',
      labelSilverWeight: 'Peso da Prata (gramas)',
      labelSilverPrice: 'Preço da Prata por grama ({currency})',
      silverValuePrefix: 'Valor Total da Prata:',
      sec3: '3️⃣ Investimentos e Ativos Comerciais',
      labelStocks: 'Ações / Fundos Mútuos ({currency})',
      labelBusinessStock: 'Estoque Comercial ({currency})',
      labelPropertyInvestment: 'Imóvel (Revenda / Investimento) ({currency})',
      sec4: '4️⃣ Passivos',
      labelLoan: 'Valor do Empréstimo de Curto Prazo ({currency})',
      labelPendingBills: 'Contas Pendentes/Imposto ({currency})',
      sec6: '6️⃣ Zakat Pendente do Ano Anterior',
      labelLastYearZakat: 'Zakat do Ano Anterior (se aplicável) ({currency})',
      noteLastYear: 'Adicione aqui se não foi pago no ano passado.',
      sec5: '5️⃣ Opções de Nisab',
      radioSilver: 'Baseado na Prata (Recomendado)',
      radioGold: 'Baseado no Ouro',
      labelNisabGoldPrice: 'Preço Atual do Ouro ({currency}/grama)',
      noteGoldNisab: 'Nisab do Ouro = 87,48 gramas × preço de mercado',
      labelNisabSilverPrice: 'Preço Atual da Prata ({currency}/grama)',
      noteSilverNisab: 'Nisab da Prata = 612,36 gramas × preço de mercado',
      btnCalculate: 'Calcular',
      btnReset: 'Redefinir',
      noteBottom: 'O Zakat torna-se obrigatório quando sua riqueza atinge o Nisab pela primeira vez e passa um ano lunar (Hawl). Flutuações temporárias durante o ano não cancelam o Zakat segundo a maioria dos eruditos.',
      nisabNote1: 'Se alguém só tem ouro, o Zakat será calculado apenas com base no Nisab do ouro.',
      nisabNote2: 'Se alguém só tem prata, o Zakat será calculado apenas com base no Nisab da prata.',
      nisabNote3: 'Se alguém tem prata, dinheiro ou mercadorias comerciais, o Nisab da prata se aplica pois seu limiar é atingido mais cedo.',
      resultTitle: '📊 Resultados',
      resultTotalAssets: 'Total de Ativos',
      resultDebts: 'Total de Passivos',
      resultNetWealth: 'Riqueza Líquida',
      resultNisab: 'Limiar de Nisab',
      resultZakat: 'Zakat Devido (2,5%)',
      infoTitle1: 'Como Funciona esta Calculadora',
      infoContent1: 'Fórmula utilizada: <strong>(Total de Ativos Zakatáveis − Passivos Pagáveis) × 2,5%</strong>. O Zakat torna-se obrigatório quando sua riqueza líquida iguala ou supera o Nisab e permanece assim por um ano lunar.',
      tableHead1: 'Tipo de Nisab',
      tableHead2: 'Base de Peso',
      tableHead3: 'Propósito',
      tableRow1Col1: 'Nisab do Ouro',
      tableRow1Col2: '87,48 gramas',
      tableRow1Col3: 'Limiar alto',
      tableRow2Col1: 'Nisab da Prata',
      tableRow2Col2: '612,36 gramas',
      tableRow2Col3: 'Limiar baixo (geralmente recomendado)',
      infoTitle2: 'O Que Incluir e Excluir',
      infoContent2: '<li><strong>Incluir:</strong> Dinheiro, poupança bancária, ouro/prata, investimentos, estoque comercial.</li><li><strong>Excluir:</strong> Residência principal, criptomoeda, moeda digital, veículo pessoal, itens domésticos, equipamentos não revendidos.</li><li><strong>Passivos:</strong> Deduza os valores pagáveis.</li>',
      infoTitle3: 'Perguntas Frequentes',
      faq1Q: 'Esta calculadora é para o Zakat al-Fitr?',
      faq1A: 'Não. Esta calculadora é para o Zakat al-Mal anual, não para o Zakat al-Fitr.',
      faq2Q: 'Posso pagar o Zakat antes da data de vencimento?',
      faq2A: 'Sim, o pagamento antecipado é geralmente permitido. Atrasar sem motivo válido não é apropriado.',
      faq3Q: 'Posso dar Zakat a membros da família?',
      faq3A: 'Parentes próximos elegíveis (ex: irmãos, primos) podem receber Zakat se qualificados. Zakat não pode ser dado ao cônjuge, pais ou filhos.',
      faq4Q: 'O Zakat é devido sobre imóveis?',
      faq4A: 'Se o imóvel foi comprado com intenção de venda (investimento ou comércio), o Zakat é devido sobre seu valor atual de mercado. Se for para uso pessoal ou apenas mantido, o Zakat não é devido.',
            liabilityHelper: 'Deduza apenas passivos de curto prazo devidos dentro de um ano lunar (ex.: prestações próximas, contas, impostos). Não deduza o valor total de empréstimos de longo prazo.',
      scholarDisclaimer: 'As opiniões dos eruditos podem diferir com base no madhab e nas circunstâncias individuais. Consulte um erudito qualificado para orientação personalizada.',
      faqSilverNisabQ: 'Por que o Nisab de Prata é Recomendado?',
      faqSilverNisabA: '<li>O Nisab de Prata (612,36g) resulta em um limiar mais baixo.</li><li>Beneficia mais pessoas necessitadas.</li><li>Muitos eruditos contemporâneos recomendam usar o Nisab de Prata para ativos mistos (dinheiro + ouro + ativos comerciais).</li>',
      formulaBreakdown: 'Detalhamento do Cálculo',
      footer: 'Esta calculadora fornece uma estimativa geral. Consulte um estudioso qualificado para casos complexos.',
      errorNegative: 'Por favor, não insira valores negativos.',
      madhabHanafi: 'Escola Hanafi selecionada: O valor de ouro/prata inserido é considerado zakatable.',
      madhabShafai: 'Escola Shafi\'i selecionada: Ouro/prata para uso geral não é incluído nos ativos zakatáveis.'
    },
    ru: {
      navHome: 'Главная', navAbout: 'О нас', navContact: 'Контакты', navPrivacy: 'Конфиденциальность', navTerms: 'Условия',
      pageTitle: 'Калькулятор Заката',
      heroTitle: 'Калькулятор Заката',
      heroSubtitle: 'Рассчитайте ваш годовой Закат (2,5%) за несколько простых шагов',
      sec1: '1️⃣ Наличные и Банковский Баланс',
      labelCash: 'Сумма Наличных ({currency})',
      labelBank: 'Банковский Баланс ({currency})',
      sec2: '2️⃣ Золото и Серебро',
      labelGoldWeight: 'Вес Золота (граммы)',
      labelGoldPrice: 'Цена Золота за грамм ({currency})',
      goldValuePrefix: 'Общая Стоимость Золота:',
      labelSilverWeight: 'Вес Серебра (граммы)',
      labelSilverPrice: 'Цена Серебра за грамм ({currency})',
      silverValuePrefix: 'Общая Стоимость Серебра:',
      sec3: '3️⃣ Инвестиции и Коммерческие Активы',
      labelStocks: 'Акции / Паевые Фонды ({currency})',
      labelBusinessStock: 'Коммерческий Запас ({currency})',
      labelPropertyInvestment: 'Недвижимость (Перепродажа / Инвестиция) ({currency})',
      sec4: '4️⃣ Обязательства',
      labelLoan: 'Сумма краткосрочного кредита ({currency})',
      labelPendingBills: 'Непогашенные Счета/Налог ({currency})',
      sec6: '6️⃣ Задолженность по Закату за Прошлый Год',
      labelLastYearZakat: 'Закат за Прошлый Год (если применимо) ({currency})',
      noteLastYear: 'Добавьте сюда, если не было уплачено в прошлом году.',
      sec5: '5️⃣ Параметры Нисаба',
      radioSilver: 'На основе Серебра (Рекомендуется)',
      radioGold: 'На основе Золота',
      labelNisabGoldPrice: 'Текущая Цена Золота ({currency}/грамм)',
      noteGoldNisab: 'Нисаб Золота = 87,48 граммов × рыночная цена',
      labelNisabSilverPrice: 'Текущая Цена Серебра ({currency}/грамм)',
      noteSilverNisab: 'Нисаб Серебра = 612,36 граммов × рыночная цена',
      btnCalculate: 'Рассчитать',
      btnReset: 'Сбросить',
      noteBottom: 'Закат становится обязательным, когда ваше состояние впервые достигает Нисаба и проходит один лунный год (Хауль). Временные колебания в течение года не отменяют Закат согласно большинству учёных.',
      nisabNote1: 'Если у человека есть только золото, Закат рассчитывается только по нисабу золота.',
      nisabNote2: 'Если у человека есть только серебро, Закат рассчитывается только по нисабу серебра.',
      nisabNote3: 'Если у человека есть серебро, наличные или товары, применяется нисаб серебра, так как его порог достигается раньше.',
      resultTitle: '📊 Результаты',
      resultTotalAssets: 'Общие Активы',
      resultDebts: 'Общие Обязательства',
      resultNetWealth: 'Чистое Состояние',
      resultNisab: 'Порог Нисаба',
      resultZakat: 'Закат к Уплате (2,5%)',
      infoTitle1: 'Как Работает Этот Калькулятор',
      infoContent1: 'Используемая формула: <strong>(Общие Закатооблагаемые Активы − Подлежащие Уплате Обязательства) × 2,5%</strong>. Закат становится обязательным, когда ваше чистое состояние достигает или превышает Нисаб и остаётся таким в течение одного лунного года.',
      tableHead1: 'Тип Нисаба',
      tableHead2: 'Весовая База',
      tableHead3: 'Цель',
      tableRow1Col1: 'Нисаб Золота',
      tableRow1Col2: '87,48 граммов',
      tableRow1Col3: 'Высокий порог',
      tableRow2Col1: 'Нисаб Серебра',
      tableRow2Col2: '612,36 граммов',
      tableRow2Col3: 'Низкий порог (обычно рекомендуется)',
      infoTitle2: 'Что Включать и Исключать',
      infoContent2: '<li><strong>Включить:</strong> Наличные, банковские сбережения, золото/серебро, инвестиции, коммерческий запас.</li><li><strong>Исключить:</strong> Основное жильё, крипто, цифровая валюта, личный транспорт, предметы быта, оборудование не для перепродажи.</li><li><strong>Обязательства:</strong> Вычтите суммы к уплате.</li>',
      infoTitle3: 'Частые Вопросы',
      faq1Q: 'Этот калькулятор для Заката аль-Фитр?',
      faq1A: 'Нет. Этот калькулятор для годового Заката аль-Маль, не для Заката аль-Фитр.',
      faq2Q: 'Могу ли я заплатить Закат до даты уплаты?',
      faq2A: 'Да, досрочная оплата обычно разрешена. Задержка без уважительной причины недопустима.',
      faq3Q: 'Могу ли я дать Закат членам семьи?',
      faq3A: 'Подходящие дальние родственники (например, братья, двоюродные) могут получать Закат, если соответствуют условиям. Закат нельзя давать супругу, родителям или детям.',
      faq4Q: 'Облагается ли недвижимость Закатом?',
      faq4A: 'Если недвижимость куплена с намерением продать (инвестиция или торговля), Закат уплачивается с её текущей рыночной стоимости. Если для личного использования или просто хранения — Закат не уплачивается.',
            liabilityHelper: 'Вычитайте только краткосрочные обязательства, подлежащие уплате в течение одного лунного года (напр., предстоящие платежи по кредиту, счета, налоги). Не вычитайте полную сумму долгосрочных кредитов.',
      scholarDisclaimer: 'Мнения учёных могут различаться в зависимости от мазхаба и индивидуальных обстоятельств. Пожалуйста, проконсультируйтесь с квалифицированным учёным для персонального руководства.',
      faqSilverNisabQ: 'Почему рекомендуется Нисаб серебра?',
      faqSilverNisabA: '<li>Нисаб серебра (612,36 г) даёт более низкий порог.</li><li>Это приносит пользу большему числу нуждающихся.</li><li>Многие современные учёные рекомендуют использовать Нисаб серебра для смешанных активов (наличные + золото + коммерческие активы).</li>',
      formulaBreakdown: 'Детализация расчёта',
      footer: 'Этот калькулятор предоставляет общую оценку. Проконсультируйтесь с квалифицированным учёным в сложных случаях.',
      errorNegative: 'Пожалуйста, не вводите отрицательные значения.',
      madhabHanafi: 'Выбрана школа Ханафи: Введённое значение золота/серебра считается закатооблагаемым.',
      madhabShafai: 'Выбрана школа Шафии: Золото/серебро для общего использования не включается в закатооблагаемые активы.'
    },
    ur: {
      navHome: 'ہوم', navAbout: 'ہمارے بارے میں', navContact: 'رابطہ', navPrivacy: 'رازداری', navTerms: 'شرائط',
      pageTitle: 'زکات کیلکولیٹر',
      heroTitle: 'زکات کیلکولیٹر',
      heroSubtitle: 'چند آسان مراحل میں اپنی سالانہ زکات (2.5%) کا حساب لگائیں',
      sec1: '1️⃣ نقد اور بینک بیلنس',
      labelCash: 'نقد رقم ({currency})',
      labelBank: 'بینک بیلنس ({currency})',
      sec2: '2️⃣ سونا اور چاندی',
      labelGoldWeight: 'سونے کا وزن (گرام)',
      labelGoldPrice: 'فی گرام سونے کی قیمت ({currency})',
      goldValuePrefix: 'سونے کی کل قیمت:',
      labelSilverWeight: 'چاندی کا وزن (گرام)',
      labelSilverPrice: 'فی گرام چاندی کی قیمت ({currency})',
      silverValuePrefix: 'چاندی کی کل قیمت:',
      sec3: '3️⃣ سرمایہ کاری اور کاروباری اثاثے',
      labelStocks: 'حصص / میوچوئل فنڈز ({currency})',
      labelBusinessStock: 'کاروباری اسٹاک ({currency})',
      labelPropertyInvestment: 'جائیداد (فروخت / سرمایہ کاری) ({currency})',
      sec4: '4️⃣ واجبات',
      labelLoan: 'قلیل مدتی قابل ادائیگی قرض ({currency})',
      labelPendingBills: 'زیر التواء بل/ٹیکس ({currency})',
      sec6: '6️⃣ گزشتہ سال کی بقایا زکات',
      labelLastYearZakat: 'گزشتہ سال کی زکات (اگر باقی ہو) ({currency})',
      noteLastYear: 'اگر گزشتہ سال ادا نہیں کی تو یہاں شامل کریں۔',
      sec5: '5️⃣ نصاب کے اختیارات',
      radioSilver: 'چاندی کی بنیاد پر (مناسب)',
      radioGold: 'سونے کی بنیاد پر',
      labelNisabGoldPrice: 'موجودہ سونے کی قیمت ({currency}/گرام)',
      noteGoldNisab: 'سونے کا نصاب = 87.48 گرام × بازار قیمت',
      labelNisabSilverPrice: 'موجودہ چاندی کی قیمت ({currency}/گرام)',
      noteSilverNisab: 'چاندی کا نصاب = 612.36 گرام × بازار قیمت',
      btnCalculate: 'حساب کریں',
      btnReset: 'دوبارہ ترتیب دیں',
      noteBottom: 'زکات اس وقت واجب ہوتی ہے جب آپ کی دولت پہلی بار نصاب تک پہنچے اور ایک قمری سال (حول) گزر جائے۔ سال کے دوران عارضی اتار چڑھاؤ اکثر علماء کے نزدیک زکات کو ختم نہیں کرتا۔',
      nisabNote1: 'اگر کسی کے پاس صرف سونا ہو تو زکات صرف سونے کے نصاب کے مطابق ہوگی۔',
      nisabNote2: 'اگر کسی کے پاس صرف چاندی ہو تو زکات صرف چاندی کے نصاب کے مطابق ہوگی۔',
      nisabNote3: 'اگر کسی کے پاس چاندی، نقد پیسہ یا کاروباری مال ہو تو چاندی کا نصاب لاگو ہوگا کیونکہ اس کی حد جلد پہنچ جاتی ہے۔',
      resultTitle: '📊 نتائج',
      resultTotalAssets: 'کل اثاثے',
      resultDebts: 'کل واجبات',
      resultNetWealth: 'خالص دولت',
      resultNisab: 'نصاب کی حد',
      resultZakat: 'واجب الادا زکات (2.5%)',
      infoTitle1: 'یہ کیلکولیٹر کیسے کام کرتا ہے',
      infoContent1: 'استعمال شدہ فارمولا: <strong>(کل قابل زکات اثاثے − واجب الادا واجبات) × 2.5%</strong>۔ زکات واجب ہوتی ہے جب آپ کی خالص دولت نصاب کے برابر یا اس سے زیادہ ہو اور ایک قمری سال تک برقرار رہے۔',
      tableHead1: 'نصاب کی قسم',
      tableHead2: 'وزن کی بنیاد',
      tableHead3: 'مقصد',
      tableRow1Col1: 'سونے کا نصاب',
      tableRow1Col2: '87.48 گرام',
      tableRow1Col3: 'اونچی حد',
      tableRow2Col1: 'چاندی کا نصاب',
      tableRow2Col2: '612.36 گرام',
      tableRow2Col3: 'کم حد (عموماً مناسب)',
      infoTitle2: 'کیا شامل کریں اور کیا نہ کریں',
      infoContent2: '<li><strong>شامل کریں:</strong> نقد، بینک بچت، سونا/چاندی، سرمایہ کاری، کاروباری اسٹاک۔</li><li><strong>شامل نہ کریں:</strong> بنیادی رہائش، کرپٹو، ڈیجیٹل کرنسی، ذاتی استعمال کی گاڑی، گھریلو سامان، غیر فروختنی آلات۔</li><li><strong>واجبات:</strong> واجب الادا رقوم گھٹائیں۔</li>',
      infoTitle3: 'فوری سوال و جواب',
      faq1Q: 'کیا یہ کیلکولیٹر زکات الفطر کے لیے ہے؟',
      faq1A: 'نہیں۔ یہ کیلکولیٹر سالانہ زکات المال (مال کی زکات) کے لیے ہے، زکات الفطر کے لیے نہیں۔',
      faq2Q: 'کیا میں مقررہ تاریخ سے پہلے زکات دے سکتا/سکتی ہوں؟',
      faq2A: 'ہاں، قبل از وقت ادائیگی عموماً جائز ہے۔ معقول وجہ کے بغیر تاخیر درست نہیں۔',
      faq3Q: 'کیا میں خاندان کو زکات دے سکتا/سکتی ہوں؟',
      faq3A: 'اہل قریبی رشتہ دار (جیسے بھائی بہن، چچازاد) اگر مستحق ہوں تو زکات لے سکتے ہیں۔ شوہر/بیوی، والدین یا بچوں کو زکات نہیں دی جا سکتی۔',
      faq4Q: 'کیا جائیداد پر زکات دینی ہوتی ہے؟',
      faq4A: 'اگر جائیداد فروخت کی نیت سے خریدی گئی ہو (سرمایہ کاری یا تجارت)، تو موجودہ بازاری قیمت پر زکات واجب ہے۔ اگر رہائش یا صرف رکھنے کے لیے ہو تو زکات نہیں۔',
            liabilityHelper: 'صرف وہ مختصر مدتی واجبات کاٹیں جو ایک قمری سال کے اندر واجب الادا ہوں (جیسے آنے والی EMI، بقایا بل، ٹیکس)۔ طویل مدتی قرضوں کی پوری رقم نہ کاٹیں۔',
      scholarDisclaimer: 'علماء کی آراء مسلک اور انفرادی حالات کی بنیاد پر مختلف ہو سکتی ہیں۔ ذاتی رہنمائی کے لیے کسی اہل عالم سے مشورہ کریں۔',
      faqSilverNisabQ: 'چاندی کا نصاب کیوں تجویز کیا جاتا ہے؟',
      faqSilverNisabA: '<li>چاندی کا نصاب (612.36g) کم حد دیتا ہے۔</li><li>اس سے زیادہ ضرورت مند افراد کو فائدہ ہوتا ہے۔</li><li>بہت سے معاصر علماء مخلوط اثاثوں (نقد + سونا + کاروباری اثاثے) کے لیے چاندی کے نصاب کی سفارش کرتے ہیں۔</li>',
      formulaBreakdown: 'حساب کی تفصیل',
      footer: 'یہ کیلکولیٹر عمومی اندازہ فراہم کرتا ہے۔ پیچیدہ معاملات میں کسی معتبر عالم سے مشورہ لیں۔',
      errorNegative: 'براہ کرم منفی قدریں درج نہ کریں۔',
      madhabHanafi: 'حنفی مسلک منتخب: درج کردہ سونے/چاندی کی قیمت قابل زکات سمجھی جاتی ہے۔',
      madhabShafai: 'شافعی مسلک منتخب: عام استعمال کا سونا/چاندی قابل زکات اثاثوں میں شامل نہیں۔'
    }
  };

  let currentLang = 'hi';

  function t(key) {
    const cur = currencies[currentCurrency] || currencies.INR;
    let text = (translations[currentLang] && translations[currentLang][key])
      || (translations.en && translations.en[key])
      || key;
    return text.replace(/\{currency\}/g, cur.symbol);
  }

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = t('pageTitle');

    // Update language dropdown
    const langSelectEl = document.getElementById('langSelect');
    if (langSelectEl) langSelectEl.value = lang;

    // Update all elements with data-i18n (textContent) — skip navbar (always English)
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      if (el.closest('.navbar')) return;
      var key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    // Update all elements with data-i18n-html (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key);
    });

    // Refresh dynamic metal value display
    updateMetalValues();

  }

  function setCurrency(code) {
    currentCurrency = code;
    setLanguage(currentLang);
    calculate({ shouldScroll: false });
  }

  // ─── Calculator logic ──────────────────────────────────────────
  const form = document.getElementById("zakatForm");
  const errorBox = document.getElementById("errorBox");
  const resultSection = document.getElementById("resultSection");

  const goldValueEl = document.getElementById("goldValue");
  const silverValueEl = document.getElementById("silverValue");

  const totalAssetsOut = document.getElementById("totalAssetsOut");
  const debtsOut = document.getElementById("debtsOut");
  const netWealthOut = document.getElementById("netWealthOut");
  const nisabOut = document.getElementById("nisabOut");
  const zakatOut = document.getElementById("zakatOut");

  // Optional elements (may be missing in markup) — we guard their use
  const madhabSelect = document.getElementById("madhabSelect");
  const madhabStatusEl = document.getElementById("madhabStatus");

  const inputIds = [
    "cash",
    "bank",
    "goldWeight",
    "goldPrice",
    "silverWeight",
    "silverPrice",
    "stocks",
    "businessStock",
    "propertyInvestment",
    "loan",
    "pendingBills",
    "lastYearZakat",
    "nisabGoldPrice",
    "nisabSilverPrice"
  ];

  function getFormatter() {
    const cur = currencies[currentCurrency] || currencies.INR;
    return new Intl.NumberFormat(cur.locale, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  }

  function formatCurrency(value) {
    const cur = currencies[currentCurrency] || currencies.INR;
    return `${cur.symbol}${getFormatter().format(value)}`;
  }

  // Safe getter: returns 0 if element is absent or value is not a finite number
  function getNum(id) {
    const el = document.getElementById(id);
    if (!el) return 0;
    const val = Number(el.value);
    return Number.isFinite(val) ? val : 0;
  }

  function hasNegativeValues() {
    return inputIds.some((id) => getNum(id) < 0);
  }

  function getMetalValuesByMadhab() {
    // fall back to 'hanafi' if the select isn't present
    const madhab = (madhabSelect && madhabSelect.value) || "hanafi";
    const rawGoldValue = getNum("goldWeight") * getNum("goldPrice");
    const rawSilverValue = getNum("silverWeight") * getNum("silverPrice");

    if (madhab === "shafai") {
      return {
        madhab,
        goldValue: 0,
        silverValue: 0,
        note: t('madhabShafai')
      };
    }

    return {
      madhab,
      goldValue: rawGoldValue,
      silverValue: rawSilverValue,
      note: t('madhabHanafi')
    };
  }

  function updateMetalValues() {
    const { goldValue, silverValue, note } = getMetalValuesByMadhab();
    if (goldValueEl) goldValueEl.textContent = `${t('goldValuePrefix')} ${formatCurrency(goldValue)}`;
    if (silverValueEl) silverValueEl.textContent = `${t('silverValuePrefix')} ${formatCurrency(silverValue)}`;
    if (madhabStatusEl) madhabStatusEl.textContent = note;
  }

  function calculate({ shouldScroll = true } = {}) {
    if (hasNegativeValues()) {
      if (errorBox) errorBox.textContent = t('errorNegative');
      return;
    }

    if (errorBox) errorBox.textContent = "";

    const cash = getNum("cash");
    const bank = getNum("bank");
    // wallet/crypto fields may be missing from the HTML — getNum returns 0 if absent
    const wallet = getNum("wallet");
    const { goldValue, silverValue } = getMetalValuesByMadhab();

    const stocks = getNum("stocks");
    const crypto = getNum("crypto");
    const businessStock = getNum("businessStock");
    const propertyInvestment = getNum("propertyInvestment");

    const loan = getNum("loan");
    const pendingBills = getNum("pendingBills");
    const lastYearZakat = getNum("lastYearZakat");

    const nisabGoldPrice = getNum("nisabGoldPrice");
    const nisabSilverPrice = getNum("nisabSilverPrice");
    const nisabBase = (document.querySelector("input[name='nisabBase']:checked") || {}).value || "silver";

    const totalAssets =
      cash +
      bank +
      wallet +
      goldValue +
      silverValue +
      stocks +
      crypto +
      businessStock +
      propertyInvestment;

    // Debts payable within 1 year.
    const totalDebts = loan + pendingBills;

    const netWealth = totalAssets - totalDebts;

    // Nisab based on selected metal.
    const nisabByGold = 87.48 * nisabGoldPrice;
    const nisabBySilver = 612.36 * nisabSilverPrice;
    const nisabValue = nisabBase === "gold" ? nisabByGold : nisabBySilver;

    // Zakat is 2.5% only if net wealth meets or exceeds Nisab.
    const currentYearZakat = netWealth >= nisabValue ? Math.max(netWealth, 0) * 0.025 : 0;
    const zakat = currentYearZakat + lastYearZakat;

    if (totalAssetsOut) totalAssetsOut.textContent = formatCurrency(Math.max(totalAssets, 0));
    if (debtsOut) debtsOut.textContent = formatCurrency(Math.max(totalDebts, 0));
    if (netWealthOut) netWealthOut.textContent = formatCurrency(Math.max(netWealth, 0));
    if (nisabOut) nisabOut.textContent = formatCurrency(Math.max(nisabValue, 0));
    if (zakatOut) zakatOut.textContent = formatCurrency(Math.max(zakat, 0));

    if (shouldScroll && resultSection) {
      resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Update formula breakdown display
    const sym = (currencies[currentCurrency] || currencies.INR).symbol;
    const fmtNum = getFormatter();
    const fmtVal = (v) => sym + fmtNum.format(Math.max(v, 0));
    const formulaEl = document.getElementById('formulaBreakdown');
    if (formulaEl) {
      formulaEl.innerHTML =
        '<div class="formula-line"><span>' + t('resultTotalAssets') + '</span><span>' + fmtVal(totalAssets) + '</span></div>' +
        '<div class="formula-line"><span>&minus; ' + t('resultDebts') + '</span><span>' + fmtVal(totalDebts) + '</span></div>' +
        '<div class="formula-line"><span>= ' + t('resultNetWealth') + '</span><span>' + fmtVal(netWealth) + '</span></div>' +
        '<div class="formula-line formula-zakat"><span>' + t('resultNetWealth') + ' &times; 2.5%</span><span>= ' + fmtVal(zakat) + '</span></div>';
    }
  }

  // Attach listeners carefully; guard missing elements
  if (form) {
    form.addEventListener("input", () => {
      updateMetalValues();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // prevents page refresh
      calculate();
    });
  } else {
    console.warn("zakatForm not found in the DOM.");
  }

  if (madhabSelect) {
    madhabSelect.addEventListener("change", () => {
      updateMetalValues();
      calculate({ shouldScroll: false });
    });
  }

  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (form) form.reset();
      inputIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = "0";
      });
      const ns = document.querySelector("input[name='nisabBase'][value='silver']");
      if (ns) ns.checked = true;
      if (madhabSelect) madhabSelect.value = "hanafi";
      if (errorBox) errorBox.textContent = "";
      if (totalAssetsOut) totalAssetsOut.textContent = formatCurrency(0);
      if (debtsOut) debtsOut.textContent = formatCurrency(0);
      if (netWealthOut) netWealthOut.textContent = formatCurrency(0);
      if (nisabOut) nisabOut.textContent = formatCurrency(0);
      if (zakatOut) zakatOut.textContent = formatCurrency(0);
      const formulaEl2 = document.getElementById('formulaBreakdown');
      if (formulaEl2) formulaEl2.innerHTML = '';
      updateMetalValues();
    });
  }

  // Navbar hamburger
  const navHamburger = document.getElementById('navHamburger');
  const navMenu = document.getElementById('navMenu');
  if (navHamburger && navMenu) {
    navHamburger.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() { navMenu.classList.remove('open'); });
    });
  }

  // Initial update
  setLanguage('hi');
  updateMetalValues();
