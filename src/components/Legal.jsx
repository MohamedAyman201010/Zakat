import DonateBtnStatic from './DonateBtnStatic'
import Header from './Header'
import '../css/Legal.css'
import background from '../photos/backgroundpattern.png'

export default function Legal(){
    const today = new Date();

    const formattedDate = today.toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    return(
        <div className="min-h-screen bg-gray-50 w-screen">
            <Header/>
            <DonateBtnStatic/>
            <div className='pt-16 lg:pt-20'>
                <div className='overflow-hidden min-h-screen' style={{backgroundRepeat: 'repeat', backgroundSize: 'auto' , backgroundImage: {background}}}>
                    <div className='title-DetailsLegal-div'>
                        <div className='title-DetailsLegal-container'>
                            <div className='square-div'>
                                <div className='square'></div>
                            </div>
                            التفاصيل
                        </div>
                    </div>  
                    <div className='DetailsLegal-content'>
                        <div className='gap-6 flex flex-col'>
                            <div className='frist-DetailsLegal-content-div'>
                                <div className='text-header-frist-DetailsLegal'>
                                    <h3 class="h3-text-header-frist-DetailsLegal">ملف تحميل تيست</h3>
                                    <span className='span-text-header-frist-DetailsLegal'>{formattedDate}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4 text-justify">تجربهههههه</p>
                                <div className='download-btn-div'>
                                    <a href="https://framework.md-license.com:8093/ZakatImages/3581616210300142555330.pdf" target="_blank" rel="noopener noreferrer" className="link-donwload">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                        </svg>
                                        تحميل الملف المرفق
                                    </a>
                                </div>
                            </div>
                            <div className='second-DetailsLegal-content-div'>
                                <div className='header-second-DetailsLegal-content'>
                                    <h3 className='h3-header-second-DetailsLegal-content'>تجربهههه</h3>
                                    <span className="span-header-second-DetailsLegal-content">٢٣ نوفمبر ٢٠٢٥</span>
                                </div>
                                <p className='pra-second-DetailsLegal-content'>
                                    #صندوق_الزكاة هو أحد مؤسسات الدولة الليبية العاملة على خدمة المواطن غنياً وفقيراً فتحمل مسؤولية مال الغني لإيصاله بكل أمانة ودقة إلى الفقير  ؛ ومن مقاصده الشرعية العمل على تداول الأموال وبناء جسر الثقة المتبادلة بين أصحاب الأموال ومكاتب الصندوق لإيصال أموالهم لمستحقيها حسب المصارف الشرعية  ؛ فهي خير وسيلة للنهضة والعدالة الاجتماعية ، وتربية النفوس على البذل والعطاء ، وهي سبب في إذهاب الأحقاد وإطفاء نار الحسد  في قلوب الفقراء وغرس روح المحبة والألفة بين أطياف المجتمع فالزكاة كاسمها زكاة للنفوس والمجتمعات من كل أمراضها ، قال تعالى ( خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ ۖ إِنَّ صَلَاتَكَ سَكَنٌ لَّهُمْ ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ ) (103) سورة التوبة.

                                    أنشأ صندوق الزكاة بموجب قرار من #مجلس_الوزراء تحت رقم (49) لسنة 2012م ؛ بشأن إنشاء صندوق الزكاة وتحديد اختصاصاته ، ومقره بمدينة طرابلس حرسها الله .
                                    وفي عام 2021م  أصدر  #مجلس_الوزراء_لحكومة_الوحدة_الوطنية  قرار تحت رقم  (97)لسنة 2021م  بشأن نقل تبعية صندوق الزكاة إلى مجلس الوزراء .

                                    وبما أن من مهام عمل صندوق الزكاة الموكلة إليه جباية أموال الزكاة والكفارات والنذور ممن يجب عليهم دفعها  ، وكذلك الصدقات وهبات المحسنين النقدية والعينية ، وتوزيعها على مستحقيها وفق ما جاء في كتاب الله العزيز ، #وطبقا_لأحكام_الشريعة_الإسلامية  قمنا بمخــــاطبة إدارة القـــانون (( #المجلس_الأعلى_للقضاء )) بكتاب ذي الرقــــم الإشــــاري 1-1-32 المـــؤرخ في 17 / 10 /2021 م بشأن إبداء الرأي القانوني حول #اختصاص_صــــندوق_الزكـــاة بجباية أموال الزكاة والصدقات على مستحقيها دون غيره من الجهات الأخرى (المؤسسات والجمعيات الخيرية).

                                    وجاء الرد بموجب الكتاب ذي الرقم الإشاري  2/6/195 الموافق 30/ 12/ 2021 م  من إدارة القانون وفق الآتي : 
                                    #ينعقد_اختصاص_صندوق_الزكاة بجباية الزكاة وصرفها لمستحقيها لصندوق الزكاة دون غيره وهو اختصاص مانع لا يشاركه فيه أية جهة أخرى سواء كانت عامة أو خاصة ذات نفع عام  .
                                    #يجوز_لصندوق_الزكاة قبول صدقات التطوع من المتبرعين وصرفها في أي جانب من جوانبها المختلفة مالم يحدد المتبرع أوجه صرفها .

                                    ومنذ إنشاء صندوق الزكاة كان الاعتماد على تغطية المصروفات العمومية للصندوق من حصة العاملين عليها  ، وحرصاً من #مجلس_إدارة_الصندوق  ، وحفاظاً على أموال الزكاة وتغليباً لمصلحة الفقراء والمساكين  ؛ قمنا بمخاطبة #مجلس_الوزراء بموجب كتابنا ذي الرقم الإشاري  (1-76) المؤرخ في 04\02\2023م بشأن تعديل الصرف من حصة العاملين عليها والاقتصار على صرفها للجباة المعتمدين غير الموظفين بصندوق الزكاة .
                                    وبموجبه صدر عن #مجلس_الوزراء_لحكومة_الوحدة_الوطنية قرار رقم (319) لسنة 2023م بتقرير بعض الأحكام في شأن صندوق الزكاة . (  حصة العاملين عليها على أن تصرف للجباة المعتمدين بالصندوق مما لا يتقاضون مقابل مالي نظير أعمالهم من ميزانية الصندوق ) .

                                    وخلاصة القول بأن #صندوق_الزكاة مؤسسة من مؤسسات الدولة الليبية له شخصية اعتبارية ذات ذمة مالية مستقلة وتبعيته #لمجلس_الوزراء وكل مصروفاته من الخزانة العامة إسوة بباقي مؤسسات الدولة الليبية هدفه جباية الزكاة والصدقات النقدية والعينية وصرفها على مستحقيها على الوجه الشرعي .


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}