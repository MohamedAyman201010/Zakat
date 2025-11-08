import '../css/ServiceZakat.css'
import DonateBtnStatic from './DonateBtnStatic'
import Header from './Header'
import { useState } from 'react'

export default function ServiceZakat(){
    var card1 = new ProjectCard(1,'مشروع المدرسة','تعليم أجر رمزي للطلبة','',400000,400000-360000,360000,((400000-360000)/400000)*100,true,'https://framework.md-license.com:8093/ZakatImages/2111111118.jpg')
    var card2 = new ProjectCard(2,'مشروع المسجد','تحقيظ القرآن الكريم','',300000,300000-280000,280000,((300000-280000)/300000)*100,true,'https://framework.md-license.com:8093/ZakatImages/2111111118.jpg')
    
    const allCards = [
        card2.cardDiv(),
        card1.cardDiv(),
        card2.cardDiv(),
        card1.cardDiv(),
        card2.cardDiv(),
        card1.cardDiv(),
        card2.cardDiv()
    ]

    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(allCards.length / cardsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = allCards.slice(startIndex, endIndex);

    const [selectedOffice, setSelectedOffice] = useState("");
    const [appearDonateDiv, setappearDonateDiv] = useState('none');

    const handleChange = (event) => {
        setSelectedOffice(event.target.value);
        setappearDonateDiv('flex')
    };
    return(
        <div className='min-h-screen w-screen bg-gray-50'>
            <DonateBtnStatic/>
            <Header/>
            <main className='pt-16 lg:pt-20'>
                <div className='zakat-main-div'>
                    <div className='background-zakat-div'>
                        <div className='zakat-content'>

                            <div className="title-form-div">
                                <div className="title-form-container">
                                    <div className="square-zakat-div">
                                        <div className="square-zakat"></div>
                                    </div>
                                        اخرج زكاتك
                                </div>
                            </div>

                            <div className='zakat-form-div'>
                                <div className="select-container">
                                    <div className="right-select-div">
                                        <label className="label-right-select">المكاتب</label>
                                        <select className="right-select" value={selectedOffice} onChange={handleChange}>
                                            <option className="option-right-select" value="">اختر مكتب</option>
                                            <option value="1" className="option-right-select">مكتب بنغازي 1</option>
                                            <option value="2" className="option-right-select">مكتب بنغازي 2</option>
                                            <option value="3" className="option-right-select">مكتب بنغازي 3</option>
                                            <option value="4" className="option-right-select">مكتب طرابلس 1</option>
                                            <option value="5" className="option-right-select">مكتب طرابلس 2</option>
                                            <option value="6" className="option-right-select">مكتب طرابلس 3</option>
                                        </select>
                                    </div>
                                    <div className="left-select-div">
                                        <label className="label-left-select">الإعانة</label>
                                        <select className="left-select">
                                            <option className="" value="">يرجى اختيار مكتب أولاً</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='middle-labels-div'>
                                    <label className="middle-label">
                                        <input className="middle-input" placeholder='' type="radio"/>
                                        الفقراء والمساكين                     
                                    </label>
                                    <label className="middle-label">
                                        <input className="middle-input"  type="radio"/>
                                         العاملين عليها                     
                                    </label>
                                    <label className="middle-label">
                                        <input className="middle-input"  type="radio"/>
                                        في الرقاب                     
                                    </label>
                                    <label className="middle-label">
                                        <input className="middle-input"  type="radio"/>
                                        ابن السبيل                     
                                    </label>
                                    <label className="middle-label">
                                        <input className="middle-input"  type="radio"/>
                                         الغارمين                     
                                    </label>
                                    <label className="middle-label">
                                        <input className="middle-input"  type="radio"/>
                                        في سبيل الله                     
                                    </label>
                                    <label className="middle-label">
                                        <input className="middle-input"  type="radio"/>
                                        المؤلفة قلوبهم                     
                                    </label>
                                </div>
                                <hr className="hr-zakat-form"></hr>
                                <div className='footer-zakat-form-div'>
                                    
                                    <div className='right-footer-zakat-form-div'>
                                        <div className='text-right-footer-zakat-form-div'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator">
                                                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                                                <line x1="8" x2="16" y1="6" y2="6"></line>
                                                <line x1="16" x2="16" y1="14" y2="18"></line>
                                                <path d="M16 10h.01"></path>
                                                <path d="M12 10h.01"></path>
                                                <path d="M8 10h.01"></path>
                                                <path d="M12 14h.01"></path>
                                                <path d="M8 14h.01"></path>
                                                <path d="M12 18h.01"></path>
                                                <path d="M8 18h.01"></path>
                                            </svg>
                                            <div className='text-zakat-form-container'>
                                                <h3 className="h3-text-zakat-form-container">حاسبة الزكاة</h3>
                                                <span className="span-text-zakat-form-container">أداة ذكية لحساب الزكاة لأموالك وممتلكاتك بسهولة</span>
                                            </div>
                                        </div>
                                        <button className="right-footer-zakat-form-div-btn">احسب الآن</button>
                                    </div>

                                    <div className='left-footer-zakat-form-div'>
                                        <div className="left-footer-zakat-form-content">
                                            <img className="img-left-footer-zakat-form-content" alt="Money" src="data:image/svg+xml,%3csvg%20width='30'%20height='31'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9625%208.79941C23.425%206.08691%2021.4125%204.89941%2018.6125%204.89941H7.63751C4.33751%204.89941%202.13751%206.54941%202.13751%2010.3994V16.8369C2.13751%2019.6119%203.27501%2021.2369%205.15001%2021.9369C5.42501%2022.0369%205.72501%2022.1244%206.03751%2022.1744C6.53751%2022.2869%207.07501%2022.3369%207.63751%2022.3369H18.625C21.925%2022.3369%2024.125%2020.6869%2024.125%2016.8369V10.3994C24.125%209.81191%2024.075%209.28691%2023.9625%208.79941ZM6.91251%2015.4994C6.91251%2016.0119%206.48751%2016.4369%205.97501%2016.4369C5.46251%2016.4369%205.03751%2016.0119%205.03751%2015.4994V11.7494C5.03751%2011.2369%205.46251%2010.8119%205.97501%2010.8119C6.48751%2010.8119%206.91251%2011.2369%206.91251%2011.7494V15.4994ZM13.125%2016.9244C11.3%2016.9244%209.82501%2015.4494%209.82501%2013.6244C9.82501%2011.7994%2011.3%2010.3244%2013.125%2010.3244C14.95%2010.3244%2016.425%2011.7994%2016.425%2013.6244C16.425%2015.4494%2014.95%2016.9244%2013.125%2016.9244ZM21.2%2015.4994C21.2%2016.0119%2020.775%2016.4369%2020.2625%2016.4369C19.75%2016.4369%2019.325%2016.0119%2019.325%2015.4994V11.7494C19.325%2011.2369%2019.75%2010.8119%2020.2625%2010.8119C20.775%2010.8119%2021.2%2011.2369%2021.2%2011.7494V15.4994Z'%20fill='%2316343A'/%3e%3cpath%20d='M27.875%2014.1508V20.5883C27.875%2024.4383%2025.675%2026.1008%2022.3625%2026.1008H11.3875C10.45%2026.1008%209.61252%2025.9633%208.88752%2025.6883C8.30002%2025.4758%207.78752%2025.1633%207.37502%2024.7633C7.15002%2024.5508%207.32502%2024.2133%207.63752%2024.2133H18.6125C23.2375%2024.2133%2025.9875%2021.4633%2025.9875%2016.8508V10.4008C25.9875%2010.1008%2026.325%209.91333%2026.5375%2010.1383C27.3875%2011.0383%2027.875%2012.3508%2027.875%2014.1508Z'%20fill='%2316343A'/%3e%3c/svg%3e"></img>
                                            <input min="1" placeholder="يرجى اختيار مكتب أولاً" className="left-footer-zakat-form-content-input" disabled="" type="number" value=""/>
                                        </div>
                                    </div>
                        
                                </div>
                                <div className='btn-donate-zakat-div'>
                                    <button className="btn-donate" disabled="">
                                        <img alt="تبرع" className="w-5 h-5 md:w-6 md:h-6" src="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.2583%208.56936C24.7057%205.78016%2022.6362%204.55908%2019.7571%204.55908H8.47172C5.0784%204.55908%202.81619%206.25574%202.81619%2010.2146V16.8341C2.81619%2019.6876%203.98586%2021.3586%205.91388%2022.0784C6.19665%2022.1812%206.50514%2022.2712%206.82648%2022.3226C7.34061%2022.4383%207.89331%2022.4897%208.47172%2022.4897H19.7699C23.1632%2022.4897%2025.4254%2020.793%2025.4254%2016.8341V10.2146C25.4254%209.6105%2025.374%209.07065%2025.2583%208.56936ZM7.72622%2015.4588C7.72622%2015.9858%207.2892%2016.4228%206.76221%2016.4228C6.23522%2016.4228%205.7982%2015.9858%205.7982%2015.4588V11.6028C5.7982%2011.0758%206.23522%2010.6388%206.76221%2010.6388C7.2892%2010.6388%207.72622%2011.0758%207.72622%2011.6028V15.4588ZM14.1144%2016.9241C12.2378%2016.9241%2010.7211%2015.4074%2010.7211%2013.5308C10.7211%2011.6542%2012.2378%2010.1375%2014.1144%2010.1375C15.991%2010.1375%2017.5077%2011.6542%2017.5077%2013.5308C17.5077%2015.4074%2015.991%2016.9241%2014.1144%2016.9241ZM22.4177%2015.4588C22.4177%2015.9858%2021.9807%2016.4228%2021.4537%2016.4228C20.9267%2016.4228%2020.4897%2015.9858%2020.4897%2015.4588V11.6028C20.4897%2011.0758%2020.9267%2010.6388%2021.4537%2010.6388C21.9807%2010.6388%2022.4177%2011.0758%2022.4177%2011.6028V15.4588Z'%20fill='%23F2DCA5'/%3e%3cpath%20d='M29.2815%2014.0703V20.6899C29.2815%2024.6487%2027.0193%2026.3582%2023.6131%2026.3582H12.3278C11.3638%2026.3582%2010.5026%2026.2169%209.75708%2025.9341C9.15296%2025.7156%208.62597%2025.3942%208.20181%2024.9829C7.97044%2024.7644%208.15039%2024.4174%208.47173%2024.4174H19.7571C24.5129%2024.4174%2027.3406%2021.5896%2027.3406%2016.8467V10.2143C27.3406%209.9058%2027.6877%209.713%2027.9062%209.94436C28.7802%2010.8698%2029.2815%2012.2194%2029.2815%2014.0703Z'%20fill='%23F2DCA5'/%3e%3c/svg%3e"></img>
                                        <span>تبرع الآن</span>
                                    </button>
                                    <button className="btn-shop" disabled="">
                                        <img alt="سلة التسوق" className="w-5 h-5" src="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.38562%202.60547H5.62213C7.01031%202.60547%208.10285%203.80084%207.98716%205.17616L6.92032%2017.9782C6.74038%2020.0733%208.39846%2021.8728%2010.5064%2021.8728H24.1954C26.0463%2021.8728%2027.6658%2020.3561%2027.8072%2018.5181L28.5013%208.87797C28.6555%206.74429%2027.036%205.00906%2024.8895%205.00906H8.29566'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M21.7018%2028.3125C22.5892%2028.3125%2023.3085%2027.5932%2023.3085%2026.7058C23.3085%2025.8185%2022.5892%2025.0991%2021.7018%2025.0991C20.8145%2025.0991%2020.0951%2025.8185%2020.0951%2026.7058C20.0951%2027.5932%2020.8145%2028.3125%2021.7018%2028.3125Z'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M11.419%2028.3125C12.3064%2028.3125%2013.0257%2027.5932%2013.0257%2026.7058C13.0257%2025.8185%2012.3064%2025.0991%2011.419%2025.0991C10.5317%2025.0991%209.81235%2025.8185%209.81235%2026.7058C9.81235%2027.5932%2010.5317%2028.3125%2011.419%2028.3125Z'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M12.383%2010.3174H27.8072'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='donate-div-zakat' style={{display: selectedOffice == "" || null ? 'none' : appearDonateDiv}}>
                            <div className='donate-header-zakat'>
                                <div className='right-donate-header-zakat'>
                                    <div className='square-donate-header-zakat-div'>
                                        <div className='square-donate-zakat-header'></div>
                                    </div>
                                    فرص التبرع
                                </div>
                            </div>
                            <div className='donate-div-zakat-content'>
                                <div className='header-donate-div-zakat-content-div'>
                                    <div className='search-header-donate-div-zakat-content'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-5 h-5">
                                            <path d="m21 21-4.34-4.34"></path>
                                            <circle cx="11" cy="11" r="8"></circle>
                                        </svg>
                                        <input placeholder="ابحث هنا ..." className="input-search-header-donate-div-zakat-content" type="text"/>
                                        <img alt="بحث" className="w-5 h-5" src="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.72%2018.8181L19.78%2017.8781C20.27%2017.1381%2020.56%2016.2481%2020.56%2015.2881C20.56%2012.6881%2018.45%2010.5781%2015.85%2010.5781C13.25%2010.5781%2011.14%2012.6881%2011.14%2015.2881C11.14%2017.8881%2013.25%2019.9981%2015.85%2019.9981C16.81%2019.9981%2017.69%2019.7081%2018.44%2019.2181L19.38%2020.1581C19.57%2020.3481%2019.81%2020.4381%2020.06%2020.4381C20.31%2020.4381%2020.55%2020.3481%2020.74%2020.1581C21.09%2019.7981%2021.09%2019.1981%2020.72%2018.8181Z'%20fill='%2316343A'/%3e%3cpath%20d='M19.58%204.59812V6.81812C19.58%207.62812%2019.08%208.63812%2018.58%209.14812L18.4%209.30812C18.26%209.43812%2018.05%209.46812%2017.87%209.40812C17.67%209.33812%2017.47%209.28813%2017.27%209.23812C16.83%209.12812%2016.36%209.07812%2015.88%209.07812C12.43%209.07812%209.63001%2011.8781%209.63001%2015.3281C9.63001%2016.4681%209.94001%2017.5881%2010.53%2018.5481C11.03%2019.3881%2011.73%2020.0881%2012.49%2020.5581C12.72%2020.7081%2012.81%2021.0281%2012.61%2021.2081C12.54%2021.2681%2012.47%2021.3181%2012.4%2021.3681L11%2022.2781C9.70001%2023.0881%207.91001%2022.1781%207.91001%2020.5581V15.2081C7.91001%2014.4981%207.51001%2013.5881%207.11001%2013.0881L3.32001%209.04813C2.82001%208.53813%202.42001%207.62812%202.42001%207.02812V4.69812C2.42001%203.48812%203.32001%202.57812%204.41001%202.57812H17.59C18.68%202.57812%2019.58%203.48812%2019.58%204.59812Z'%20fill='%2316343A'/%3e%3c/svg%3e"></img>
                                    </div>
                                    <button className='btn-header-donate-div-zakat-content'>
                                        <span>الفرص المكتملة</span>
                                        <img alt="قائمة" className="w-5 h-5" src="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.35%202.57812H9.65001C8.61001%202.57812%207.76001%203.41813%207.76001%204.45813V5.39813C7.76001%206.43813%208.60001%207.27812%209.64001%207.27812H14.35C15.39%207.27812%2016.23%206.43813%2016.23%205.39813V4.45813C16.24%203.41813%2015.39%202.57812%2014.35%202.57812Z'%20fill='white'/%3e%3cpath%20d='M17.24%205.39859C17.24%206.98859%2015.94%208.28859%2014.35%208.28859H9.64998C8.05998%208.28859%206.75998%206.98859%206.75998%205.39859C6.75998%204.83859%206.15998%204.48859%205.65998%204.74859C4.24998%205.49859%203.28998%206.98859%203.28998%208.69859V18.1086C3.28998%2020.5686%205.29998%2022.5786%207.75998%2022.5786H16.24C18.7%2022.5786%2020.71%2020.5686%2020.71%2018.1086V8.69859C20.71%206.98859%2019.75%205.49859%2018.34%204.74859C17.84%204.48859%2017.24%204.83859%2017.24%205.39859ZM15.34%2013.3086L11.34%2017.3086C11.19%2017.4586%2011%2017.5286%2010.81%2017.5286C10.62%2017.5286%2010.43%2017.4586%2010.28%2017.3086L8.77998%2015.8086C8.48998%2015.5186%208.48998%2015.0386%208.77998%2014.7486C9.06998%2014.4586%209.54998%2014.4586%209.83998%2014.7486L10.81%2015.7186L14.28%2012.2486C14.57%2011.9586%2015.05%2011.9586%2015.34%2012.2486C15.63%2012.5386%2015.63%2013.0186%2015.34%2013.3086Z'%20fill='white'/%3e%3c/svg%3e"></img>
                                    </button>
                                </div>
                                <div className='main-donate-div-zakat-content'>
                                   {currentCards.map((card, index) => (
                                     <div key={index} className='card-donate-zakat-content'>{card}</div>
                                    ))}
                                </div>
                                <div className='navigate-page-div'>
                                    <div className='navigate-page-container'>
                                        <button 
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        style={{border:'0',padding:'0 0 0 0'}}
                                        >
                                            <img className="rotate-180" style={{opacity:currentPage === 1 ? '0.5px':'1px'}} alt="الصفحة التالية" src="data:image/svg+xml,%3csvg%20width='10'%20height='19'%20viewBox='0%200%2010%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.779932%207.62266L3.24243%205.16016L7.25493%201.14766C8.10493%200.310162%209.55493%200.910163%209.55493%202.11016V9.89766V16.9102C9.55493%2018.1102%208.10493%2018.7102%207.25493%2017.8602L0.779932%2011.3852C-0.257568%2010.3602%20-0.257568%208.66016%200.779932%207.62266Z'%20fill='url(%23paint0_linear_833_8901)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_833_8901'%20x1='5.59515'%20y1='10.4449'%20x2='0.00180688'%20y2='10.4449'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2324645E'/%3e%3cstop%20offset='0.711538'%20stop-color='%2318383D'/%3e%3cstop%20offset='1'%20stop-color='%2317343B'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>
                                        </button>

                                        {pageNumbers.map(num => (
                                            <button
                                            key={num}
                                            className="navigate-btn"
                                            onClick={() => setCurrentPage(num)}
                                            >
                                            {num}
                                            </button>
                                        ))}

                                        <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        style={{border:'0',padding:'0 0 0 0'}}
                                        >
                                            <img  style={{opacity: currentPage === totalPages ? '0.5px':'1px'}} alt="الصفحة السابقة" src="data:image/svg+xml,%3csvg%20width='10'%20height='19'%20viewBox='0%200%2010%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.779932%207.62266L3.24243%205.16016L7.25493%201.14766C8.10493%200.310162%209.55493%200.910163%209.55493%202.11016V9.89766V16.9102C9.55493%2018.1102%208.10493%2018.7102%207.25493%2017.8602L0.779932%2011.3852C-0.257568%2010.3602%20-0.257568%208.66016%200.779932%207.62266Z'%20fill='url(%23paint0_linear_833_8901)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_833_8901'%20x1='5.59515'%20y1='10.4449'%20x2='0.00180688'%20y2='10.4449'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2324645E'/%3e%3cstop%20offset='0.711538'%20stop-color='%2318383D'/%3e%3cstop%20offset='1'%20stop-color='%2317343B'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="rightBow"></div>
                    <div className="leftBow"></div>
                </div>
            </main>
        </div>
    )
}
class ProjectCard{
    constructor(Id,Name,Description,SubventionType_Id,WantedAmount,CollectedAmount,RemainingAmount,RatioTarget,AllowZakat,PhotoName){
        this.Id = Id
        this.Name = Name
        this.Description = Description
        this.SubventionType_Id = SubventionType_Id
        this.WantedAmount = WantedAmount
        this.CollectedAmount = CollectedAmount
        this.RemainingAmount = RemainingAmount
        this.RatioTarget = RatioTarget
        this.AllowZakat = AllowZakat
        this.PhotoName = PhotoName
    }
    cardDiv(){
        let button;
        if (this.AllowZakat) {
            button = <button className='left-right-card-donate-zakat-information-header-btn'>
                        <img alt="زكاة" className="img-left-right-card-donate-zakat-information-header-btn" src="data:image/svg+xml,%3csvg%20width='22'%20height='26'%20viewBox='0%200%2022%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.6798%2021.2463L17.4344%2018.001C16.9305%2017.497%2016.2451%2017.2148%2015.5329%2017.2148H14.6325L13.2887%2017.8868H10.601C9.86193%2017.8868%209.25721%2018.4915%209.25721%2019.2306V20.5744'%20stroke='white'%20strokeWidth='0.84'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M16.6481%2025.2773L15.3042%2023.9335H7.24125L1.19401%2017.8863L2.24892%2017.6242C3.27695%2017.3689%204.37217%2017.6041%205.19863%2018.2693L7.91316%2020.5739H13.2885'%20stroke='white'%20strokeWidth='0.84'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M5.4971%209.80618C5.4971%2010.5229%206.0471%2011.1006%206.73043%2011.1006H8.12487C8.71932%2011.1006%209.20265%2010.5951%209.20265%209.97285C9.20265%209.29507%208.90821%209.05618%208.46932%208.90063L6.23043%208.12285C5.79154%207.9673%205.4971%207.72841%205.4971%207.05063C5.4971%206.42841%205.98043%205.92285%206.57487%205.92285H7.96932C8.65265%205.92285%209.20265%206.50063%209.20265%207.2173'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M7.34606%205.17773V11.8444'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M7.34606%2014.0672C10.4143%2014.0672%2012.9016%2011.5799%2012.9016%208.51161C12.9016%205.44336%2010.4143%202.95605%207.34606%202.95605C4.27781%202.95605%201.7905%205.44336%201.7905%208.51161C1.7905%2011.5799%204.27781%2014.0672%207.34606%2014.0672Z'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                        <span>تقبل الزكاة</span>
                    </button>;
        }
        return(
            <>
                <img className="img-card-donate-zakat-content" src="data:image/svg+xml,%3csvg%20width='24'%20height='297'%20viewBox='0%200%2024%20297'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.233978%200.779297C0.233978%200.779297%2014.2853%2030.7055%2018.8852%2051.2887C24.3145%2075.5825%2024.4799%2091.545%2021.5342%20116.932C13.6046%20185.271%203.05636%20231.153%203.05636%20284.623C3.05636%20287.472%200.235233%20296.754%200.235233%20296.754L0.233978%200.779297Z'%20fill='url(%23paint0_linear_833_15377)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_833_15377'%20x1='11.2758'%20y1='0.779297'%20x2='11.2758'%20y2='296.754'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E7E7E7'/%3e%3cstop%20offset='1'%20stop-color='%23DBDBDB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>
                <div className='card-donate-zakat-information'>
                    <div className='card-donate-zakat-information-header'>
                        <div className='right-card-donate-zakat-information-header'>
                            <img alt="مشروع مستوصف خيري" className="img-right-card-donate-zakat-information-header" src={this.PhotoName}></img>
                            <div className='left-right-card-donate-zakat-information-header'>
                                {button}
                                <h2 className='h2-left-right-card-donate-zakat-information-header'>{this.Name}</h2>
                                <span className='span-left-right-card-donate-zakat-information-header'>{this.Description}</span>
                            </div>
                        </div>
                        <img width="25" src="data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.8149%2015.0652L27.3548%204.52539'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M28.383%209.66674V3.49707H22.2133'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M14.2442%203.49707H11.6735C5.2468%203.49707%202.6761%206.06776%202.6761%2012.4945V20.2066C2.6761%2026.6333%205.2468%2029.204%2011.6735%2029.204H19.3856C25.8123%2029.204%2028.383%2026.6333%2028.383%2020.2066V17.6359'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                    </div>
                    <hr className="hr-card-donate-zakat-information"></hr>
                    <div className='main-card-donate-zakat-information'>
                        <div className='header-main-card-donate-zakat-information'>
                            <span>تم جمع {this.CollectedAmount.toFixed(0)}$</span>
                            <span>المتبقي {this.RemainingAmount.toFixed(0)}$</span>
                        </div>
                        <div className='middle-main-card-donate-zakat-information'>
                            <div className='content-middle-main-card-donate-zakat-information' style={{width:this.RatioTarget + "%"}}></div>
                        </div>
                        <span className='span-main-card-donate-zakat-information'>تم الوصول الى الهدف بنسبة {this.RatioTarget.toFixed(0) +'%'}</span>
                    </div>
                    <div className="flex-1"></div>
                </div>
                <div className='card-donate-zakat-btn-div'>
                    <button className='card-donate-zakat-btn'>
                        <img width="30" src="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.2583%208.56936C24.7057%205.78016%2022.6362%204.55908%2019.7571%204.55908H8.47172C5.0784%204.55908%202.81619%206.25574%202.81619%2010.2146V16.8341C2.81619%2019.6876%203.98586%2021.3586%205.91388%2022.0784C6.19665%2022.1812%206.50514%2022.2712%206.82648%2022.3226C7.34061%2022.4383%207.89331%2022.4897%208.47172%2022.4897H19.7699C23.1632%2022.4897%2025.4254%2020.793%2025.4254%2016.8341V10.2146C25.4254%209.6105%2025.374%209.07065%2025.2583%208.56936ZM7.72622%2015.4588C7.72622%2015.9858%207.2892%2016.4228%206.76221%2016.4228C6.23522%2016.4228%205.7982%2015.9858%205.7982%2015.4588V11.6028C5.7982%2011.0758%206.23522%2010.6388%206.76221%2010.6388C7.2892%2010.6388%207.72622%2011.0758%207.72622%2011.6028V15.4588ZM14.1144%2016.9241C12.2378%2016.9241%2010.7211%2015.4074%2010.7211%2013.5308C10.7211%2011.6542%2012.2378%2010.1375%2014.1144%2010.1375C15.991%2010.1375%2017.5077%2011.6542%2017.5077%2013.5308C17.5077%2015.4074%2015.991%2016.9241%2014.1144%2016.9241ZM22.4177%2015.4588C22.4177%2015.9858%2021.9807%2016.4228%2021.4537%2016.4228C20.9267%2016.4228%2020.4897%2015.9858%2020.4897%2015.4588V11.6028C20.4897%2011.0758%2020.9267%2010.6388%2021.4537%2010.6388C21.9807%2010.6388%2022.4177%2011.0758%2022.4177%2011.6028V15.4588Z'%20fill='%23F2DCA5'/%3e%3cpath%20d='M29.2815%2014.0703V20.6899C29.2815%2024.6487%2027.0193%2026.3582%2023.6131%2026.3582H12.3278C11.3638%2026.3582%2010.5026%2026.2169%209.75708%2025.9341C9.15296%2025.7156%208.62597%2025.3942%208.20181%2024.9829C7.97044%2024.7644%208.15039%2024.4174%208.47173%2024.4174H19.7571C24.5129%2024.4174%2027.3406%2021.5896%2027.3406%2016.8467V10.2143C27.3406%209.9058%2027.6877%209.713%2027.9062%209.94436C28.7802%2010.8698%2029.2815%2012.2194%2029.2815%2014.0703Z'%20fill='%23F2DCA5'/%3e%3c/svg%3e"></img>
                        تبرع الآن
                    </button>
                </div>
            </>
        )
    }
}