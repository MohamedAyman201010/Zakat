import '../css/Header.css'
import { useState , useEffect} from 'react'
import NavDropDown from './Nav-DropDown'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (name) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };
  const [ShowServiceZakat, setShowServiceZakat] = useState(false);
  const [ShowZakat, setShowZakat] = useState(false);
  const [AboutUs, setAboutUs] = useState(false);
  const [Tos, setTos] = useState(false);
  const [svgServiceBtn, setSvgServiceBtn] = useState(null);
  const location = useLocation();

  useEffect(() => {
      if (location.pathname === "/services/zakat" || location.pathname === '/services/campaigns' || location.pathname === '/services/Kafarat') {
        setShowServiceZakat(true);
        setSvgServiceBtn(
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
              viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round" 
              className={`lucide lucide-chevron-down ml-1 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}>
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        );
      } else {
        setShowServiceZakat(false);
        setSvgServiceBtn(
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
              viewBox="0 0 24 24" fill="none" stroke="#17343B" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round" 
              className={`transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}>
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        );
      if (location.pathname === "/zakat" || location.pathname === '/project' || location.pathname === '/office' || location.pathname === '/about-us' || location.pathname === '/tos'){
        setShowZakat(true)
      }
      if(location.pathname === '/about-us'){
        setAboutUs(true)
      }
      if(location.pathname === '/tos'){
        setTos(true)
      }
      }
    }, [location.pathname, openDropdown]);

    const [OpenModalMenuBar, setOpenModalMenuBar] = useState(false);
    const [SvgMenuBar, setSvgMenuBar] = useState(null);
    const [OppartDropMenu, setOppartDropMenu] = useState(false);
    const [ServiceDropMenu, setServiceDropMenu] = useState(false);
    const toggleOppart = () => {
      setOppartDropMenu(!OppartDropMenu);
      setServiceDropMenu(false);
    };

    const toggleService = () => {
      setServiceDropMenu(!ServiceDropMenu);
      setOppartDropMenu(false);
    };

    useEffect(() => {
        if (OpenModalMenuBar) {
          setSvgMenuBar(
            <svg
              data-prefix="fas"
              data-icon="xmark"
              className="svg-inline--fa fa-xmark h-5 w-5"
              role="img"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 
                  32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 
                  32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 
                  438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 
                  0-45.3L237.8 256 375.1 118.6c12.5-12.5 
                  12.5-32.8 0-45.3s-32.8-12.5-45.3 
                  0L192.5 210.7 55.1 73.4z"
              ></path>
            </svg>
          );
        } else {
          setSvgMenuBar(
            <svg className="svg-menu-btn" viewBox="0 0 448 512">
              <path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path>
            </svg>
          );
        }
      }, [OpenModalMenuBar]);

  return (
    <header className="header-contanier">
      <nav className='navBar'>
        <div className='navBar-content'>
          <a className="link-logo-navBar" href="/">
            <img alt="وصل الليبية" src="https://zakat-ecru-gamma.vercel.app/assets/Logo-Didh4elg.png"></img>
          </a>

          <div className='right-section'>
            <a className='logo-app' href='/'>
              <img className='logo-img' src='https://zakat-ecru-gamma.vercel.app/assets/Logo-Didh4elg.png'></img>
            </a>

            <a className='home-link' href='/' style={{
            backgroundImage:ShowServiceZakat || ShowZakat ? '':'linear-gradient(to top, #17343B, #18383D, #24645E)',
            textDecoration:ShowServiceZakat || ShowZakat ? 'none' : 'underline',
            textDecorationThickness:ShowServiceZakat || ShowZakat ? '0' : '2px',
            textUnderlineOffset:ShowServiceZakat || ShowZakat ? '0' : '8px',
            color:ShowServiceZakat || ShowZakat ? '#17343B' : 'white',
            height:ShowServiceZakat || ShowZakat ? '100%' : '83.333333%',
            }}>الرئيسية</a>

            <div className=' oppartunities-div'>
              <button className=' oppartunities-btn' onClick={() => handleToggle("opportunities")}>
                الفرص
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                  viewBox="0 0 24 24" fill="none" stroke="#17343B" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round" 
                  className={`transition-transform ${openDropdown === "opportunities" ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>

            <div className='service-div'>
              <button className='service-btn' onClick={() => handleToggle("services")}
                style={{
                background:ShowServiceZakat ? 'linear-gradient(to top, #17343B, #18383D, #24645E)':'transparent',
                textDecoration:ShowServiceZakat ? 'underline' : 'none',
                textDecorationThickness:ShowServiceZakat ? '2px' : '0',
                textUnderlineOffset:ShowServiceZakat ? '8px' : '0',
                color:ShowServiceZakat ? 'white' : '#17343B',
                height:ShowServiceZakat ? '83.333333%' : '100%'
                }}
                >
                الخدمات
                {svgServiceBtn}  
              </button>
            </div>
            
            <a className="about-us-link" href="/about-us"
              style={{
                background:AboutUs ? 'linear-gradient(to top, #17343B, #18383D, #24645E)':'transparent',
                textDecoration:AboutUs ? 'underline' : 'none',
                textDecorationThickness:AboutUs ? '2px' : '0',
                textUnderlineOffset:AboutUs ? '8px' : '0',
                color:AboutUs ? 'white' : '#17343B',
                height:AboutUs ? '83.333333%' : '100%'
                }}
            >من نحن</a>
            <a className="tos-link" href="/tos"
                style={{
                background:Tos ? 'linear-gradient(to top, #17343B, #18383D, #24645E)':'transparent',
                textDecoration:Tos ? 'underline' : 'none',
                textDecorationThickness:Tos ? '2px' : '0',
                textUnderlineOffset:Tos ? '8px' : '0',
                color:Tos ? 'white' : '#17343B',
                height:Tos ? '83.333333%' : '100%'
                }}
            > اللوائح و القوانين</a>
            
          </div>

          <div className='left-section'>
              <Link to={"/Login"}>
                <button className="login-btn" >تسجيل الدخول</button>
              </Link>

              <button className="menu-btn" onClick={() => {setOpenModalMenuBar(!OpenModalMenuBar)}}>
                  {SvgMenuBar}
              </button>
          </div> 
          
        </div>

        <NavDropDown 
          isOpen={openDropdown === "opportunities"} 
          className="open" 
          type="opportunities"
          items={[
            { 
              imgSrc: "https://zakat-ecru-gamma.vercel.app/assets/coins-BwyWlNbP.webp", 
              label: "مشاريع", 
              href: "/"
            }
          ]}
        />
        <NavDropDown 
          isOpen={openDropdown === "services"} 
          className="open"
          type="services"
          items={[
            { imgSrc: "https://zakat-ecru-gamma.vercel.app/assets/Speaker-nR28nmOn.svg", label: "الحملات", href: "/services/campaigns" },
            { imgSrc: "data:image/svg+xml,%3csvg%20width='31'%20height='43'%20viewBox='0%200%2031%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.36686%2041.6577L1.346%2028.8289C2.22789%2027.947%203.42726%2027.4531%204.67366%2027.4531H6.2493L8.60101%2028.629H13.3044C14.5979%2028.629%2015.6561%2029.6872%2015.6561%2030.9807V33.3324'%20fill='url(%23paint0_linear_176_43204)'/%3e%3cpath%20d='M2.36686%2041.6577L1.346%2028.8289C2.22789%2027.947%203.42726%2027.4531%204.67366%2027.4531H6.2493L8.60101%2028.629H13.3044C14.5979%2028.629%2015.6561%2029.6872%2015.6561%2030.9807V33.3324'%20stroke='white'%20strokeWidth='1.47'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M2.72203%2041.563L5.07373%2039.2113H19.184L29.7666%2028.6286L27.9205%2028.17C26.1215%2027.7232%2024.2048%2028.1347%2022.7585%2029.2988L18.0081%2033.332H8.60129'%20fill='url(%23paint1_linear_176_43204)'/%3e%3cpath%20d='M2.72203%2041.563L5.07373%2039.2113H19.184L29.7666%2028.6286L27.9205%2028.17C26.1215%2027.7232%2024.2048%2028.1347%2022.7585%2029.2988L18.0081%2033.332H8.60129'%20stroke='white'%20strokeWidth='1.47'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M16.2443%2021.944C21.6137%2021.944%2025.9665%2017.5912%2025.9665%2012.2217C25.9665%206.8523%2021.6137%202.49951%2016.2443%202.49951C10.8749%202.49951%206.52207%206.8523%206.52207%2012.2217C6.52207%2017.5912%2010.8749%2021.944%2016.2443%2021.944Z'%20fill='url(%23paint2_linear_176_43204)'%20stroke='white'%20strokeWidth='1.45833'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M13.0086%2014.4868C13.0086%2015.7409%2013.9711%2016.752%2015.167%2016.752H17.6072C18.6475%2016.752%2019.4933%2015.8673%2019.4933%2014.7784C19.4933%2013.5923%2018.9781%2013.1743%2018.21%2012.902L14.292%2011.5409C13.5239%2011.2687%2013.0086%2010.8506%2013.0086%209.66453C13.0086%208.57564%2013.8545%207.69092%2014.8947%207.69092H17.335C18.5308%207.69092%2019.4933%208.70203%2019.4933%209.9562'%20stroke='white'%20strokeWidth='1.45833'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M16.2443%206.38867V18.0553'%20stroke='white'%20strokeWidth='1.45833'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_176_43204'%20x1='17.0383'%20y1='31.3583'%20x2='-4.33337'%20y2='31.3583'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2324645E'/%3e%3cstop%20offset='0.65'%20stop-color='%2318383D'/%3e%3cstop%20offset='1'%20stop-color='%2317343B'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_176_43204'%20x1='31.6366'%20y1='35.5046'%20x2='2.72203'%20y2='35.5046'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2324645E'/%3e%3cstop%20offset='0.65'%20stop-color='%2318383D'/%3e%3cstop%20offset='1'%20stop-color='%2317343B'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_176_43204'%20x1='5.1776'%20y1='13.2624'%20x2='25.9665'%20y2='13.2624'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2324645E'/%3e%3cstop%20offset='0.65'%20stop-color='%2318383D'/%3e%3cstop%20offset='1'%20stop-color='%2317343B'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", label: "الزكاة", href: "/zakat" },
            { imgSrc: "https://zakat-ecru-gamma.vercel.app/assets/Sheep-DiU8ShB4.svg", label: "الاضاحي", href: "/services/zakat" },
            { imgSrc: "https://zakat-ecru-gamma.vercel.app/assets/DonateRequest-BCnD37rf.svg", label: "طالب تبرع", href: "/" }
          ]}
        />

        <div className={`modal-menuBar-div ${OpenModalMenuBar ? 'show' : ''}`}>
          <div className='modal-menuBar-content'>
            <a className='link-home-modal-menuBar-content'>الرئيسية</a>
            <div>
              <button className='btn-modal-menuBar' onClick={toggleOppart}>
                الفرص
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeًidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition-transform">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {OppartDropMenu && (
                <div className='dropdown-btn-modal-menuBar-div'>
                  <a className='link-dropdown-btn-modal-menuBar-div'>
                    <div className="flex items-center justify-center ">
                      <div style={{width: '50px', height: '50px'}} className="relative bg-gradient-to-r from-[#E8B98C] to-[#AA8058] transform rotate-45 shadow-lg overflow-hidden rounded-xl">
                        <img alt="diamond-content" className="absolute inset-0 w-full h-full object-cover" src="https://zakat-ecru-gamma.vercel.app/assets/coins-BwyWlNbP.webp"></img>
                      </div>
                    </div>
                    مشاريع
                  </a>
                </div>
              )}
            </div>
            <div> 
              <button className='btn-modal-menuBar' onClick={toggleService}>
                الخدمات
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition-transform">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {ServiceDropMenu && (
                <div className='pl-6 space-y-2'>
                  <a className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 link-dropDown-menuBar" href="/services/campaigns">
                    <img alt="الحملات" className="w-5 h-5" src="https://zakat-ecru-gamma.vercel.app/assets/Speaker-nR28nmOn.svg"></img>
                    الحملات
                  </a>
                  <a className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 link-dropDown-menuBar" href="/zakat">
                    <img alt="الزكاة" className="w-5 h-5" src="data:image/svg+xml,%3csvg%20width='31'%20height='43'%20viewBox='0%200%2031%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.36686%2041.6577L1.346%2028.8289C2.22789%2027.947%203.42726%2027.4531%204.67366%2027.4531H6.2493L8.60101%2028.629H13.3044C14.5979%2028.629%2015.6561%2029.6872%2015.6561%2030.9807V33.3324'%20fill='url(%23paint0_linear_176_43204)'/%3e%3cpath%20d='M2.36686%2041.6577L1.346%2028.8289C2.22789%2027.947%203.42726%2027.4531%204.67366%2027.4531H6.2493L8.60101%2028.629H13.3044C14.5979%2028.629%2015.6561%2029.6872%2015.6561%2030.9807V33.3324'%20stroke='white'%20strokeWidth='1.47'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M2.72203%2041.563L5.07373%2039.2113H19.184L29.7666%2028.6286L27.9205%2028.17C26.1215%2027.7232%2024.2048%2028.1347%2022.7585%2029.2988L18.0081%2033.332H8.60129'%20fill='url(%23paint1_linear_176_43204)'/%3e%3cpath%20d='M2.72203%2041.563L5.07373%2039.2113H19.184L29.7666%2028.6286L27.9205%2028.17C26.1215%2027.7232%2024.2048%2028.1347%2022.7585%2029.2988L18.0081%2033.332H8.60129'%20stroke='white'%20strokeWidth='1.47'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M16.2443%2021.944C21.6137%2021.944%2025.9665%2017.5912%2025.9665%2012.2217C25.9665%206.8523%2021.6137%202.49951%2016.2443%202.49951C10.8749%202.49951%206.52207%206.8523%206.52207%2012.2217C6.52207%2017.5912%2010.8749%2021.944%2016.2443%2021.944Z'%20fill='url(%23paint2_linear_176_43204)'%20stroke='white'%20strokeWidth='1.45833'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M13.0086%2014.4868C13.0086%2015.7409%2013.9711%2016.752%2015.167%2016.752H17.6072C18.6475%2016.752%2019.4933%2015.8673%2019.4933%2014.7784C19.4933%2013.5923%2018.9781%2013.1743%2018.21%2012.902L14.292%2011.5409C13.5239%2011.2687%2013.0086%2010.8506%2013.0086%209.66453C13.0086%208.57564%2013.8545%207.69092%2014.8947%207.69092H17.335C18.5308%207.69092%2019.4933%208.70203%2019.4933%209.9562'%20stroke='white'%20strokeWidth='1.45833'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M16.2443%206.38867V18.0553'%20stroke='white'%20strokeWidth='1.45833'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_176_43204'%20x1='17.0383'%20y1='31.3583'%20x2='-4.33337'%20y2='31.3583'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2324645E'/%3e%3cstop%20offset='0.65'%20stop-color='%2318383D'/%3e%3cstop%20offset='1'%20stop-color='%2317343B'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_176_43204'%20x1='31.6366'%20y1='35.5046'%20x2='2.72203'%20y2='35.5046'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2324645E'/%3e%3cstop%20offset='0.65'%20stop-color='%2318383D'/%3e%3cstop%20offset='1'%20stop-color='%2317343B'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_176_43204'%20x1='5.1776'%20y1='13.2624'%20x2='25.9665'%20y2='13.2624'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2324645E'/%3e%3cstop%20offset='0.65'%20stop-color='%2318383D'/%3e%3cstop%20offset='1'%20stop-color='%2317343B'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>
                    الزكاة
                  </a>
                  <a className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 link-dropDown-menuBar" href="/services/zakat">
                    <img alt="الاضاحي" className="w-5 h-5" src="https://zakat-ecru-gamma.vercel.app/assets/Sheep-DiU8ShB4.svg"></img>
                    الاضاحي
                  </a>
                  <a className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 link-dropDown-menuBar" href="/DonationRequester">
                    <img alt="طلبات التبرع" className="w-5 h-5" src="	https://zakat-ecru-gamma.vercel.app/assets/DonateRequest-BCnD37rf.svg"></img>
                    طلبات التبرع
                  </a>
                </div>
              )}
            </div>
            <a className='link-about-modal-menuBar-content'>
              عن وصل
            </a>
          </div>
        </div>
      </nav>

    </header>
  );
}
