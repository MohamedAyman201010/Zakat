import '../css/Campaigns.css'
import DonateBtnStatic from './DonateBtnStatic'
import Header from './Header'
import { useState } from 'react'

export default function Campaigns(){
    var card1 = new CampaignsCard(1,'مشروع المدرسة','تعليم أجر رمزي للطلبة','',400000,400000-360000,360000,((400000-360000)/400000)*100,true,'https://framework.md-license.com:8093/ZakatImages/2111111118.jpg')
    var card2 = new CampaignsCard(2,'مشروع المسجد','تحقيظ القرآن الكريم','',300000,300000-280000,280000,((300000-280000)/300000)*100,true,'https://framework.md-license.com:8093/ZakatImages/2111111118.jpg')
    
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

    return(
        <div className='min-h-screen w-screen bg-gray-50'>
            <DonateBtnStatic/>
            <Header/>
            <div className='pt-16 lg:pt-20'>
                <div className='relative overflow-hidden'>
                    <div className='page' style={{backgroundImage: 'url("https://zakat-ecru-gamma.vercel.app/background%20pattern.png")' ,backgroundRepeat: 'repeat' ,backgroundSize: 'auto'}}>
                        <div className='header-campaigns'>
                            <div className='title-header-campaigns'>
                                <div className='square-div'>
                                    <div className='square'></div>
                                </div>
                                الحملات
                            </div>
                        </div>
                        <div className='search-container'>
                            <div className='search-input-div'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-5 h-5">
                                    <path d="m21 21-4.34-4.34"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                </svg>
                                <input placeholder="ابحث هنا ..." className="input-search" type="text"/>
                                <img alt="بحث" className="w-5 h-5" src="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.72%2018.8181L19.78%2017.8781C20.27%2017.1381%2020.56%2016.2481%2020.56%2015.2881C20.56%2012.6881%2018.45%2010.5781%2015.85%2010.5781C13.25%2010.5781%2011.14%2012.6881%2011.14%2015.2881C11.14%2017.8881%2013.25%2019.9981%2015.85%2019.9981C16.81%2019.9981%2017.69%2019.7081%2018.44%2019.2181L19.38%2020.1581C19.57%2020.3481%2019.81%2020.4381%2020.06%2020.4381C20.31%2020.4381%2020.55%2020.3481%2020.74%2020.1581C21.09%2019.7981%2021.09%2019.1981%2020.72%2018.8181Z'%20fill='%2316343A'/%3e%3cpath%20d='M19.58%204.59812V6.81812C19.58%207.62812%2019.08%208.63812%2018.58%209.14812L18.4%209.30812C18.26%209.43812%2018.05%209.46812%2017.87%209.40812C17.67%209.33812%2017.47%209.28813%2017.27%209.23812C16.83%209.12812%2016.36%209.07812%2015.88%209.07812C12.43%209.07812%209.63001%2011.8781%209.63001%2015.3281C9.63001%2016.4681%209.94001%2017.5881%2010.53%2018.5481C11.03%2019.3881%2011.73%2020.0881%2012.49%2020.5581C12.72%2020.7081%2012.81%2021.0281%2012.61%2021.2081C12.54%2021.2681%2012.47%2021.3181%2012.4%2021.3681L11%2022.2781C9.70001%2023.0881%207.91001%2022.1781%207.91001%2020.5581V15.2081C7.91001%2014.4981%207.51001%2013.5881%207.11001%2013.0881L3.32001%209.04813C2.82001%208.53813%202.42001%207.62812%202.42001%207.02812V4.69812C2.42001%203.48812%203.32001%202.57812%204.41001%202.57812H17.59C18.68%202.57812%2019.58%203.48812%2019.58%204.59812Z'%20fill='%2316343A'/%3e%3c/svg%3e"></img>
                            </div>

                            <button className='btn-search-container'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus text-[#17343B] bg-white rounded-md">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                                إنشاء حملة
                            </button>
                        </div>
                        <div className='btn-div'>
                            <button className='donation-campaigns-btn'>حملات التبرع</button>
                            <button className='myCampaigns-btn'>حملاتي</button>
                        </div>
                        <div className='min-h-[400px]'>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {currentCards.map((card, index) => (
                                    <div key={index} className='card-campaigns-content'>{card}</div>
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

                    <div className="rightBow"></div>
                </div>
            </div>
        </div>
    )
}
class CampaignsCard{
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
        return(
            <>
                <img className="img-card-donate-zakat-content" src="data:image/svg+xml,%3csvg%20width='24'%20height='297'%20viewBox='0%200%2024%20297'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.233978%200.779297C0.233978%200.779297%2014.2853%2030.7055%2018.8852%2051.2887C24.3145%2075.5825%2024.4799%2091.545%2021.5342%20116.932C13.6046%20185.271%203.05636%20231.153%203.05636%20284.623C3.05636%20287.472%200.235233%20296.754%200.235233%20296.754L0.233978%200.779297Z'%20fill='url(%23paint0_linear_833_15377)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_833_15377'%20x1='11.2758'%20y1='0.779297'%20x2='11.2758'%20y2='296.754'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E7E7E7'/%3e%3cstop%20offset='1'%20stop-color='%23DBDBDB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>
                <div className='card-donate-zakat-information'>
                    <div className='card-donate-zakat-information-header'>
                        <div className='right-card-donate-zakat-information-header'>
                            <img alt="مشروع مستوصف خيري" className="img-right-card-donate-zakat-information-header" src={this.PhotoName}></img>
                            <div className='left-right-card-donate-zakat-information-header'>
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