import '../css/zakat.css'
import DonateBtnStatic from './DonateBtnStatic'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from "react";
import DonateQuickly from './DonateQuickly'

export default function Zakat(){
    const [showComponent, setShowComponent] = useState(false);
    const [className, setClassName] = useState("");
    return(
        <div className={ showComponent ? "scroll-hidden min-h-screen w-screen bg-gray-50 page'" : "scroll-normal min-h-screen w-screen bg-gray-50 page'" }>
            <DonateBtnStatic/>
            <Header/>
            <div className='main-zakat-div'>
                <div className='main-zakat-content'>
                    <div className='background-main-zakat-content'>
                        <div className='header-background-main-zakat-content'>
                            <div className='title-header-background-main-zakat-content'>
                                <div className='title-header-container'>
                                    <div className='square-div'>
                                        <div className='square'></div>
                                    </div>
                                    الزكاة
                                </div>
                            </div>
                        </div>
                        <div className='main-background-main-zakat-content'>

                            <div className='container-main-background-main-zakat-content'>
                                <div className='header-container-main-background-main-zakat-content'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17343B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator">
                                            <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                                            <line x1="8" x2="16" y1="6" y2="6"></line>
                                            <line x1="16" x2="16" y1="14" y2="18"></line>
                                            <path d="M16 10h.01"></path><path d="M12 10h.01"></path>
                                            <path d="M8 10h.01"></path><path d="M12 14h.01"></path>
                                            <path d="M8 14h.01"></path><path d="M12 18h.01"></path>
                                            <path d="M8 18h.01"></path>
                                        </svg>
                                    </span>
                                    <p className="pra-header-container-main-background-main-zakat-content">الزكاة</p>
                                </div>
                                <p className='pra-container-main-background-main-zakat-content'>اداة ذكية لحساب الزكاة لأموالك وممتلكاتك بسهولة</p>
                                <img className="absolute left-0 top-0" src="https://zakat-ecru-gamma.vercel.app/assets/Union-CCzk7IgT.png"></img>
                                <button className="container-main-background-main-zakat-content-btn" onClick={changeShow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                                        <path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className='container-main-background-main-zakat-content'>
                                <div className='header-container-main-background-main-zakat-content'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#17343B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up underline underline-offset-2">
                                            <path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path>
                                        </svg>
                                    </span>
                                    <p className="pra-header-container-main-background-main-zakat-content">اخراج الزكاة</p>
                                </div>
                                <p className='pra-container-main-background-main-zakat-content'>اخرج زكاتك بكل يسر</p>
                                <img className="absolute left-0 top-0" src="https://zakat-ecru-gamma.vercel.app/assets/Union-CCzk7IgT.png"></img>
                                <Link to={'/services/zakat'}>
                                    <button className="container-main-background-main-zakat-content-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                                            <path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>
                                        </svg>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {showComponent && <DonateQuickly setShowComponent={setShowComponent} setClassName={setClassName} className={className}/>}

                    <div class="rightBow"></div>
                    <div class="leftBow"></div>
                </div>
            </div>
        </div>
    )
    function changeShow(){
        setShowComponent(true)
        setClassName("slide-right")
    }
}