import '../css/Kafarat.css'
import DonateBtnStatic from './DonateBtnStatic'
import Header from './Header'

export default function Kafarat(){
    return(
        <div className='min-h-screen w-screen bg-gray-50'>
            <DonateBtnStatic/>
            <Header/>
            <div className='pt-16 lg:pt-20'>
                <div className='kafarat-content-div'>
                    <div className='header-kafarat-content-div'>
                        <div className='header-kafarat-content-div-container'>
                            <div className='square-div'>
                                <div style={{width: '50px', height: '50px'}} className="relative bg-gradient-to-r from-[#E8B98C] to-[#AA8058] transform rotate-45 shadow-lg overflow-hidden rounded-xl"></div>
                            </div>
                            الكفارات والنذور
                        </div>
                    </div>
                    <div className='main-kafarat-content-div'>
                        <div className='buttons-div'>
                            <button className="frist-buttons-div-btn">الكفارات</button>
                            <button className="second-buttons-div-btn">النذور</button>
                        </div>
                        <div className='middle-main-kafarat-content-div'>
                            <div className='frist-middle-main-kafarat-content-div'>
                                <div className='select-frist-middle-main-div'>
                                    <label className="label-select-frist-middle-main-div">المكاتب</label>
                                    <select className="select-frist-middle-main">
                                        <option className="bg-white text-black" value="">اختر مكتب</option>
                                        <option value="2" className="bg-white text-black">مكتب بنغازي 2 - طرابلس</option>
                                        <option value="3" className="bg-white text-black">مكتب بنغازي 3 - بنغازي الشرق</option>
                                        <option value="4" className="bg-white text-black">مكتب طرابلس 1 - طرابلس</option>
                                        <option value="5" className="bg-white text-black">مكتب طرابلس 2 - طرابلس</option>
                                        <option value="6" className="bg-white text-black">مكتب طرابلس 3 - طرابلس</option>
                                        <option value="9" className="bg-white text-black"></option>
                                    </select>
                                </div>
                                <div className='flex-1 w-full'>
                                    <label className="label-count">العدد</label>
                                    <div className='flex items-center gap-2'>
                                        <button className="plus-btn">+</button>
                                        <input className="input-count" type="text"></input>
                                        <button className="minus-btn">-</button>
                                    </div>
                                </div>
                            </div>
                            <div className='price-input-div'>
                                <label className="label-price">المبلغ</label>
                                <div className='relative w-full'>
                                    <img className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6" alt="Money" src="data:image/svg+xml,%3csvg%20width='30'%20height='31'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9625%208.79941C23.425%206.08691%2021.4125%204.89941%2018.6125%204.89941H7.63751C4.33751%204.89941%202.13751%206.54941%202.13751%2010.3994V16.8369C2.13751%2019.6119%203.27501%2021.2369%205.15001%2021.9369C5.42501%2022.0369%205.72501%2022.1244%206.03751%2022.1744C6.53751%2022.2869%207.07501%2022.3369%207.63751%2022.3369H18.625C21.925%2022.3369%2024.125%2020.6869%2024.125%2016.8369V10.3994C24.125%209.81191%2024.075%209.28691%2023.9625%208.79941ZM6.91251%2015.4994C6.91251%2016.0119%206.48751%2016.4369%205.97501%2016.4369C5.46251%2016.4369%205.03751%2016.0119%205.03751%2015.4994V11.7494C5.03751%2011.2369%205.46251%2010.8119%205.97501%2010.8119C6.48751%2010.8119%206.91251%2011.2369%206.91251%2011.7494V15.4994ZM13.125%2016.9244C11.3%2016.9244%209.82501%2015.4494%209.82501%2013.6244C9.82501%2011.7994%2011.3%2010.3244%2013.125%2010.3244C14.95%2010.3244%2016.425%2011.7994%2016.425%2013.6244C16.425%2015.4494%2014.95%2016.9244%2013.125%2016.9244ZM21.2%2015.4994C21.2%2016.0119%2020.775%2016.4369%2020.2625%2016.4369C19.75%2016.4369%2019.325%2016.0119%2019.325%2015.4994V11.7494C19.325%2011.2369%2019.75%2010.8119%2020.2625%2010.8119C20.775%2010.8119%2021.2%2011.2369%2021.2%2011.7494V15.4994Z'%20fill='%2316343A'/%3e%3cpath%20d='M27.875%2014.1508V20.5883C27.875%2024.4383%2025.675%2026.1008%2022.3625%2026.1008H11.3875C10.45%2026.1008%209.61252%2025.9633%208.88752%2025.6883C8.30002%2025.4758%207.78752%2025.1633%207.37502%2024.7633C7.15002%2024.5508%207.32502%2024.2133%207.63752%2024.2133H18.6125C23.2375%2024.2133%2025.9875%2021.4633%2025.9875%2016.8508V10.4008C25.9875%2010.1008%2026.325%209.91333%2026.5375%2010.1383C27.3875%2011.0383%2027.875%2012.3508%2027.875%2014.1508Z'%20fill='%2316343A'/%3e%3c/svg%3e"></img>
                                    <input type="number" placeholder='المبلغ' className='input-price' />
                                </div>
                                <p className="pra-price">(المبلغ المحسوب: 200 × 1 = 200)</p>
                            </div>
                            <div className='w-full'>
                                <label className="label-textarea">وصف الكفارة (اختياري)</label>
                                <textarea placeholder="أضف وصفاً للكفارة (اختياري)" className="textArea" rows="4"></textarea>
                            </div>
                        </div>
                        <div className='btn-container-kafarat-content-div'>
                            <button className='btn-kafarat'>
                                <img alt="تبرع" className="w-5 h-5 md:w-6 md:h-6" src="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.2583%208.56936C24.7057%205.78016%2022.6362%204.55908%2019.7571%204.55908H8.47172C5.0784%204.55908%202.81619%206.25574%202.81619%2010.2146V16.8341C2.81619%2019.6876%203.98586%2021.3586%205.91388%2022.0784C6.19665%2022.1812%206.50514%2022.2712%206.82648%2022.3226C7.34061%2022.4383%207.89331%2022.4897%208.47172%2022.4897H19.7699C23.1632%2022.4897%2025.4254%2020.793%2025.4254%2016.8341V10.2146C25.4254%209.6105%2025.374%209.07065%2025.2583%208.56936ZM7.72622%2015.4588C7.72622%2015.9858%207.2892%2016.4228%206.76221%2016.4228C6.23522%2016.4228%205.7982%2015.9858%205.7982%2015.4588V11.6028C5.7982%2011.0758%206.23522%2010.6388%206.76221%2010.6388C7.2892%2010.6388%207.72622%2011.0758%207.72622%2011.6028V15.4588ZM14.1144%2016.9241C12.2378%2016.9241%2010.7211%2015.4074%2010.7211%2013.5308C10.7211%2011.6542%2012.2378%2010.1375%2014.1144%2010.1375C15.991%2010.1375%2017.5077%2011.6542%2017.5077%2013.5308C17.5077%2015.4074%2015.991%2016.9241%2014.1144%2016.9241ZM22.4177%2015.4588C22.4177%2015.9858%2021.9807%2016.4228%2021.4537%2016.4228C20.9267%2016.4228%2020.4897%2015.9858%2020.4897%2015.4588V11.6028C20.4897%2011.0758%2020.9267%2010.6388%2021.4537%2010.6388C21.9807%2010.6388%2022.4177%2011.0758%2022.4177%2011.6028V15.4588Z'%20fill='%23F2DCA5'/%3e%3cpath%20d='M29.2815%2014.0703V20.6899C29.2815%2024.6487%2027.0193%2026.3582%2023.6131%2026.3582H12.3278C11.3638%2026.3582%2010.5026%2026.2169%209.75708%2025.9341C9.15296%2025.7156%208.62597%2025.3942%208.20181%2024.9829C7.97044%2024.7644%208.15039%2024.4174%208.47173%2024.4174H19.7571C24.5129%2024.4174%2027.3406%2021.5896%2027.3406%2016.8467V10.2143C27.3406%209.9058%2027.6877%209.713%2027.9062%209.94436C28.7802%2010.8698%2029.2815%2012.2194%2029.2815%2014.0703Z'%20fill='%23F2DCA5'/%3e%3c/svg%3e"></img>
                                <span>تبرع الآن</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
