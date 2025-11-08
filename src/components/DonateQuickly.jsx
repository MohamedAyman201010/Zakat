import '../css/DonateQuickly.css'
import { motion } from "framer-motion";

export default function DonateQuickly({ setShowComponent , setClassName , className}){
    return(
        <div className={`donateQuickly-background ${className}`}>
            <div className='donateQuickly-page'>
                <div className='donateQuickly-container'>
                    <div className='header-donateQuickly-container'>
                        <h1 className="h1-header-donateQuickly-container">حاسبة الزكاة</h1>
                        <button className='header-donateQuickly-container-btn' onClick={changeShowComponent}>
                            <span className='span-header-donateQuickly-container-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div className='main-donateQuickly-container'>
                        <p className="pra-main-donateQuickly-container">اختر نوع الزكاة المراد حسابها</p>
                        <div className='space-y-3'>
                            <div className='buttons-container-div'>
                                <button className='buttons-container'>
                                    <span class="font-medium text-base">زكاة المال</span>
                                    <div className='flex items-center gap-3'>
                                        <div class="w-10 h-5 rounded-full transition-colors bg-gray-300 relative">
                                            <div class="w-3 h-3 bg-white rounded-full absolute top-1 transition-all right-6"></div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='buttons-container-div mt-3'>
                                <button className='buttons-container'>
                                    <span class="font-medium text-base">زكاة الذهب</span>
                                    <div className='flex items-center gap-3'>
                                        <div class="w-10 h-5 rounded-full transition-colors bg-gray-300 relative">
                                            <div class="w-3 h-3 bg-white rounded-full absolute top-1 transition-all right-6"></div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='buttons-container-div mt-3'>
                                <button className='buttons-container'>
                                    <span class="font-medium text-base">زكاة الفضة</span>
                                    <div className='flex items-center gap-3'>
                                        <div class="w-10 h-5 rounded-full transition-colors bg-gray-300 relative">
                                            <div class="w-3 h-3 bg-white rounded-full absolute top-1 transition-all right-6"></div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 w-full px-6 mx-auto h-px bg-gray-300"></div>
                        <div className='extra-zakat-div py-4'>
                            <div className='tatal-extra-zakat-div'>
                                <span class="font-medium">إجمالي مستحق الزكاة</span>
                                <span class="text-2xl font-bold">0</span>
                            </div>
                            <div className='extra-price-div'>
                                <div className='right-extra-price-div'>
                                    <span class="font-medium">مبلغ إضافي</span>
                                    <span class="text-gray-400 text-sm">(اختياري)</span>
                                </div>
                                <div className='left-extra-price-div'>
                                    <input className='input-left-extra-price-div' type='text' placeholder='0' value="" />
                                    <div className='icon-left-extra-price-div'>
                                        <img alt="money" src="data:image/svg+xml,%3csvg%20width='30'%20height='31'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9625%208.79941C23.425%206.08691%2021.4125%204.89941%2018.6125%204.89941H7.63751C4.33751%204.89941%202.13751%206.54941%202.13751%2010.3994V16.8369C2.13751%2019.6119%203.27501%2021.2369%205.15001%2021.9369C5.42501%2022.0369%205.72501%2022.1244%206.03751%2022.1744C6.53751%2022.2869%207.07501%2022.3369%207.63751%2022.3369H18.625C21.925%2022.3369%2024.125%2020.6869%2024.125%2016.8369V10.3994C24.125%209.81191%2024.075%209.28691%2023.9625%208.79941ZM6.91251%2015.4994C6.91251%2016.0119%206.48751%2016.4369%205.97501%2016.4369C5.46251%2016.4369%205.03751%2016.0119%205.03751%2015.4994V11.7494C5.03751%2011.2369%205.46251%2010.8119%205.97501%2010.8119C6.48751%2010.8119%206.91251%2011.2369%206.91251%2011.7494V15.4994ZM13.125%2016.9244C11.3%2016.9244%209.82501%2015.4494%209.82501%2013.6244C9.82501%2011.7994%2011.3%2010.3244%2013.125%2010.3244C14.95%2010.3244%2016.425%2011.7994%2016.425%2013.6244C16.425%2015.4494%2014.95%2016.9244%2013.125%2016.9244ZM21.2%2015.4994C21.2%2016.0119%2020.775%2016.4369%2020.2625%2016.4369C19.75%2016.4369%2019.325%2016.0119%2019.325%2015.4994V11.7494C19.325%2011.2369%2019.75%2010.8119%2020.2625%2010.8119C20.775%2010.8119%2021.2%2011.2369%2021.2%2011.7494V15.4994Z'%20fill='%2316343A'/%3e%3cpath%20d='M27.875%2014.1508V20.5883C27.875%2024.4383%2025.675%2026.1008%2022.3625%2026.1008H11.3875C10.45%2026.1008%209.61252%2025.9633%208.88752%2025.6883C8.30002%2025.4758%207.78752%2025.1633%207.37502%2024.7633C7.15002%2024.5508%207.32502%2024.2133%207.63752%2024.2133H18.6125C23.2375%2024.2133%2025.9875%2021.4633%2025.9875%2016.8508V10.4008C25.9875%2010.1008%2026.325%209.91333%2026.5375%2010.1383C27.3875%2011.0383%2027.875%2012.3508%2027.875%2014.1508Z'%20fill='%2316343A'/%3e%3c/svg%3e"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mx-auto h-px bg-gray-300"></div>
                        <div className="total-main-donateQuickly-container">
                            <span className="text-lg font-medium">الإجمالي</span>
                            <span className="text-2xl font-bold">0</span>
                        </div>
                    </div>

                    <div className='p-4 border-t'>
                        <button className='footer-donateQuickly-container-btn'>احسب الآن</button>
                    </div>
                </div>
            </div>
        </div>
    )
    function changeShowComponent(){
        setClassName("slide-left")
        setTimeout(() => setShowComponent(false), 300);
    }
}
