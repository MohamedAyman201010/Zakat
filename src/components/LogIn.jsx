import DonateBtnStatic from './DonateBtnStatic'
import '../css/LogIn.css'
import { useNavigate } from "react-router-dom";


export default function LogIn(){
    const navigate = useNavigate();
     const goToPage = () => {
        navigate("/");
    }
    return(
        <div className='min-h-screen w-screen bg-gray-50'>
            <DonateBtnStatic/>
            <div className='main-login'>
                <div className="background-right"></div>
                <div className='left-main-login'>
                    <div className='left-main-login-content'>
                        <div>
                            <img alt="Logo" className="img-left-main-login-content" src="https://zakat-ecru-gamma.vercel.app/assets/Logo-Didh4elg.png"></img>
                        </div>
                        <div className='title-left-main-login-content'>
                            <h1 className="h1-title-left-main-login-content">تسجيل الدخول</h1>
                            <p className="pra-title-left-main-login-content">مرحباً بعودتك! قم بتسجيل الدخول إلى حسابك</p>
                        </div>
                        <div className='inputs-div'>

                            <div>
                                <label className='phone-label'>
                                    رقم الهاتف 
                                    <span className="text-red-500"> * </span>
                                </label>
                                <div className='phone-input-div'>
                                    <input className='phone-input' placeholder='رجاء إدخال رقم الهاتف'></input>
                                    <div className="svg-phone-input-div">
                                        <svg className="svg-inline--fa fa-phone text-gray-400 h-4 w-4 py-3sm:h-5 sm:w-5" role="img" viewBox="0 0 512 512" >
                                            <path fill="currentColor" d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='password-label'>
                                    كلمة المرور 
                                    <span className="text-red-500"> * </span>
                                </label>
                                <div className='password-input-div'>
                                    <input className='password-input' placeholder='رجاء إدخال كلمة المرور'></input>

                                    <button type="button" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors" style={{padding:'0',margin:'0',border:'none',backgroundColor:'transparent'}}>
                                        <svg className="svg-inline--fa fa-eye h-4 w-4 sm:h-5 sm:w-5" role="img" viewBox="0 0 576 512">
                                            <path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="logIn-btn" tabindex="0">
                                تسجيل الدخول
                            </button>
                            
                            <button type="button" className="visitor-btn" onClick={goToPage}>
                                تصفح كزائر
                            </button>
                            
                        </div>
                        <div className='createAccount-link-div'>
                            <span className="span-createAccount-link-div">ليس لديك حساب ؟ </span>
                            <a className="createAccount-link" href="#">انشاء حساب</a>
                        </div>
                        <div className='footer-left-main-login-content'>
                            <img alt="Quranic verse" className="img-footer-left-main-login-content" src="	https://zakat-ecru-gamma.vercel.app/assets/Aya-DC9w-LaJ.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
