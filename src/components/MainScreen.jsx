import Header from './Header'
import Into from './Into'
import FristSection from './FristSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from './SixthSection'
import SeventhSection from './SeventhSection'
import DonateBtnStatic from './DonateBtnStatic'
import ApiClass from '../ApiClass'
import { useEffect , useState} from "react";


export default  function MainScreen(){
    const [NewsData, setNewsData] = useState(null);
    const [OfficeData, setOfficeData] = useState(null);
    const [ProjectsData, setProjectsData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
        const api = new ApiClass();
        try {
            const data = await api.ExecuteProcedure({
            ProcedureName: 'I0uFFxOqnfWgAy1EbMHIi+epTgwWrmYV51/bDxo0U0s=',
            ParametersValues: '0'
            });
            setNewsData(JSON.parse(data.Data.Result[0].NewsData))
            setOfficeData(JSON.parse(data.Data.Result[0].OfficesData))
            setProjectsData(JSON.parse(data.Data.Result[0].ProjectsData))
            // console.log(data.Data.Result[0].ProjectsData)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData(); 
    }, []);
    return(
        <div className='min-h-screen w-screen bg-gray-50'>
            <Header/> 
            <Into/>

            <div className='main gap-4'>
                <div className='main-container'>
                    <FristSection/>
                    <SecondSection/>
                    {ProjectsData ? (<ThirdSection Data={ProjectsData}/>) : (<p>Loading...</p>)}
                    {OfficeData ? (<FourthSection Data={OfficeData}/>) : (<p>Loading...</p>)}
                    {NewsData ? (<FifthSection Data={NewsData} />) : (<p>Loading...</p>)}
                    <SixthSection/>
                    <SeventhSection/>
                </div>
                
                <div className='mobileSection-div'>
                    <div className='mobileSection-content'>
                    <div className='right-mobileSection-content-desk'></div>
                    <div className='left-mobileSection-content-desk'></div>

                    <div className='content-mobileSection-content-desk'>
                        <p className="pra-content-mobileSection-content-desk">حمل تطبيق وصل</p>
                        <div className='downloads-btn-desk'>
                        <button className='apple-btn-desk'>
                            <div className='apple-btn-desk-content'>
                            <span>تنزيل من</span>
                            <span>Apple Store</span>
                            </div>
                            <img alt="" src="data:image/svg+xml,%3csvg%20width='28'%20height='33'%20viewBox='0%200%2028%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.379%2017.6627C23.3955%2016.412%2023.7358%2015.1857%2024.3682%2014.0978C25.0006%2013.01%2025.9045%2012.0961%2026.9959%2011.441C26.3026%2010.4742%2025.3879%209.67864%2024.3245%209.11739C23.2612%208.55614%2022.0784%208.24469%2020.8701%208.20778C18.2928%207.94365%2015.7941%209.71348%2014.4807%209.71348C13.1419%209.71348%2011.1198%208.23401%208.94225%208.27774C7.53376%208.32217%206.16109%208.72204%204.95796%209.43839C3.75483%2010.1547%202.76229%2011.1631%202.07703%2012.3654C-0.891281%2017.3828%201.32282%2024.7568%204.16626%2028.8126C5.5889%2030.7986%207.25155%2033.017%209.42713%2032.9383C11.556%2032.8521%2012.3512%2031.613%2014.9209%2031.613C17.4669%2031.613%2018.2128%2032.9383%2020.4325%2032.8883C22.717%2032.8521%2024.1563%2030.8935%2025.529%2028.8887C26.5512%2027.4736%2027.3377%2025.9096%2027.8596%2024.2547C26.5324%2023.7067%2025.3998%2022.7893%2024.603%2021.6171C23.8062%2020.4448%2023.3805%2019.0695%2023.379%2017.6627Z'%20fill='white'/%3e%3cpath%20d='M19.1864%205.54014C20.4319%204.08033%2021.0456%202.20398%2020.897%200.30957C18.994%200.5047%2017.2363%201.39263%2015.9739%202.79643C15.3566%203.48222%2014.8839%204.28006%2014.5827%205.14433C14.2815%206.0086%2014.1577%206.92235%2014.2185%207.83335C15.1703%207.84291%2016.1119%207.6415%2016.9724%207.24428C17.8329%206.84706%2018.5899%206.26439%2019.1864%205.54014Z'%20fill='white'/%3e%3c/svg%3e"></img>
                        </button>
                        <button className='google-btn-desk'>
                            <div className='google-btn-desk-content'>
                            <span>تنزيل من</span>
                            <span>Google Play</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="33" viewBox="0 0 29 33" fill="none"><path d="M13.6536 15.893L0.444763 30.229C0.446004 30.2316 0.446004 30.2354 0.447244 30.2379C0.852926 31.7946 2.24242 32.9402 3.89244 32.9402C4.55245 32.9402 5.17151 32.7575 5.7025 32.4378L5.74468 32.4124L20.6122 23.6395L13.6536 15.893Z" fill="#EA4335"/><path d="M27.0161 13.4518L27.0037 13.4429L20.5847 9.63814L13.3532 16.2187L20.6108 23.6379L26.995 19.8712C28.114 19.2521 28.8745 18.0456 28.8745 16.6552C28.8745 15.2723 28.1252 14.0721 27.0161 13.4518Z" fill="#FBBC04"/><path d="M0.444517 3.01978C0.365118 3.31919 0.322937 3.63382 0.322937 3.9586V29.2915C0.322937 29.6162 0.365118 29.9309 0.445758 30.229L14.1074 16.2596L0.444517 3.01978Z" fill="#4285F4"/><path d="M13.7511 16.625L20.5869 9.63588L5.73673 0.831294C5.19706 0.500172 4.56683 0.309872 3.89317 0.309872C2.24315 0.309872 0.851181 1.45802 0.4455 3.01595C0.4455 3.01722 0.44426 3.01849 0.44426 3.01976L13.7511 16.625Z" fill="#34A853"/></svg>
                        </button>
                        </div>
                    </div>
                    <div className="mobile-img-div-desk">
                        <img className="mobile-img-desk" src="https://zakat-ecru-gamma.vercel.app/assets/mobiles-XFAPMac7.png"></img>
                    </div>


                    <div className='backgroud-mobileSection-content'></div>
                    <div className='content-mobileSection-content'>
                        <div className="mobil-img-div">
                        <img className="mobil-img" alt="Mobile App" src="https://zakat-ecru-gamma.vercel.app/assets/mobiles-XFAPMac7.png"></img>
                        </div>
                        <p className="pra-content-mobileSection-content">حمل تطبيق وصل</p>
                        <div className='downloads-btn'>
                        <button className='AppleStore-btn'>
                            <img alt="Apple Store" className="img-AppleStore-btn" src="data:image/svg+xml,%3csvg%20width='28'%20height='33'%20viewBox='0%200%2028%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.379%2017.6627C23.3955%2016.412%2023.7358%2015.1857%2024.3682%2014.0978C25.0006%2013.01%2025.9045%2012.0961%2026.9959%2011.441C26.3026%2010.4742%2025.3879%209.67864%2024.3245%209.11739C23.2612%208.55614%2022.0784%208.24469%2020.8701%208.20778C18.2928%207.94365%2015.7941%209.71348%2014.4807%209.71348C13.1419%209.71348%2011.1198%208.23401%208.94225%208.27774C7.53376%208.32217%206.16109%208.72204%204.95796%209.43839C3.75483%2010.1547%202.76229%2011.1631%202.07703%2012.3654C-0.891281%2017.3828%201.32282%2024.7568%204.16626%2028.8126C5.5889%2030.7986%207.25155%2033.017%209.42713%2032.9383C11.556%2032.8521%2012.3512%2031.613%2014.9209%2031.613C17.4669%2031.613%2018.2128%2032.9383%2020.4325%2032.8883C22.717%2032.8521%2024.1563%2030.8935%2025.529%2028.8887C26.5512%2027.4736%2027.3377%2025.9096%2027.8596%2024.2547C26.5324%2023.7067%2025.3998%2022.7893%2024.603%2021.6171C23.8062%2020.4448%2023.3805%2019.0695%2023.379%2017.6627Z'%20fill='white'/%3e%3cpath%20d='M19.1864%205.54014C20.4319%204.08033%2021.0456%202.20398%2020.897%200.30957C18.994%200.5047%2017.2363%201.39263%2015.9739%202.79643C15.3566%203.48222%2014.8839%204.28006%2014.5827%205.14433C14.2815%206.0086%2014.1577%206.92235%2014.2185%207.83335C15.1703%207.84291%2016.1119%207.6415%2016.9724%207.24428C17.8329%206.84706%2018.5899%206.26439%2019.1864%205.54014Z'%20fill='white'/%3e%3c/svg%3e"></img>
                            <div className='content-AppleStore-btn'>
                            <span className="fristSpan-content-AppleStore-btn">تنزيل من</span>
                            <span className="secondSpan-content-AppleStore-btn">Apple Store</span>
                            </div>
                        </button>
                        <button className='Google-btn'>
                            <img alt="Google" className="img-Google-btn" src="data:image/svg+xml,%3csvg%20width='29'%20height='33'%20viewBox='0%200%2029%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.6536%2015.893L0.444763%2030.229C0.446004%2030.2316%200.446004%2030.2354%200.447244%2030.2379C0.852926%2031.7946%202.24242%2032.9402%203.89244%2032.9402C4.55245%2032.9402%205.17151%2032.7575%205.7025%2032.4378L5.74468%2032.4124L20.6122%2023.6395L13.6536%2015.893Z'%20fill='%23EA4335'/%3e%3cpath%20d='M27.0161%2013.4518L27.0037%2013.4429L20.5847%209.63814L13.3532%2016.2187L20.6108%2023.6379L26.995%2019.8712C28.114%2019.2521%2028.8745%2018.0456%2028.8745%2016.6552C28.8745%2015.2723%2028.1252%2014.0721%2027.0161%2013.4518Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M0.444517%203.01978C0.365118%203.31919%200.322937%203.63382%200.322937%203.9586V29.2915C0.322937%2029.6162%200.365118%2029.9309%200.445758%2030.229L14.1074%2016.2596L0.444517%203.01978Z'%20fill='%234285F4'/%3e%3cpath%20d='M13.7511%2016.625L20.5869%209.63588L5.73673%200.831294C5.19706%200.500172%204.56683%200.309872%203.89317%200.309872C2.24315%200.309872%200.851181%201.45802%200.4455%203.01595C0.4455%203.01722%200.44426%203.01849%200.44426%203.01976L13.7511%2016.625Z'%20fill='%2334A853'/%3e%3c/svg%3e"></img>
                            <div className='content-Google-btn'>
                            <span className="fristSpan-content-Google-btn">تنزيل من</span>
                            <span className="secondSpan-content-Google-btn">Google play</span>
                            </div>
                        </button>
                        </div>
                    </div>

                    </div>
                </div>

                <footer className='footer-main'>
                <div className='footer-main-content'>
                    <div className='fristSection-footer-main-content'>
                    <div className='right-fristSection-footer-main-content'>
                        <img alt="وصل البيئة" className="img-right-fristSection-footer-main-content" src="data:image/png;base64,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"></img>
                    </div>
                    <div className="terms-div">
                        <h3 className="h3-terms-div">شروط وأحكام</h3>
                    </div>
                    <div className="phone-email-div">
                        <h3 className="title-phone-email-div">اتصال</h3>
                        <div className="phone-email">
                        <p>(+218) 092-093-1112</p>
                        <p>wasl@example.com</p>
                        </div>
                    </div>
                    <div className="info-footer">
                        <h3 className="h3-info-footer">الشركة</h3>
                        <div className="content-info-footer">
                        <p>الرئيسية</p>
                        <p>معلومات عنا</p>
                        <p>اتصل بنا</p>
                        </div>
                    </div>
                    <div className="location-div">
                        <h3 className="h3-location-div">الموقع</h3>
                        <p>طرابلس , ليبيا</p>
                    </div>

                    </div>
                    <div className='second-footer-main-content'>
                    <div className="twitter-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#383638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                    </div>
                    <div className="email-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#383638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                    </div>
                    <div className="link-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#383638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </div>
                    <div className="instgram-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#383638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                    </div>
                    <div className="facebook-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#383638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </div>
                    </div>
                    <div className="third--footer-main-content">
                    <p className="pra-third--footer-main-content">جميع الحقوق محفوظة لمنصة وصـــل © 2025</p>
                    </div>
                </div>
                </footer>



                {/* <div className="leftBow"></div>
                <div className="rightBow"></div> */}
            </div>

        </div>
    )
}