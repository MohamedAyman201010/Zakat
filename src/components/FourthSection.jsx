import { motion } from "framer-motion";
import '../css/FourthSection.css'
import useScrollButtton from './useScrollButton'
import { useNavigate } from "react-router-dom";


export default function FourthSection({ Data }){ 
    const {
    containerRef,
    opacityLeftBtn,
    opacityRightBtn,
    scroll,
    } = useScrollButtton(Data.length,'library') 

    return(
            <motion.div className='library-div'
            initial={{ opacity: 0, y: 100 }}           
            whileInView={{ opacity: 1, y: 0 }}        
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            >
                <div className='library-header'>
                    <div className='right-library-header'>
                        <div className='square-library-header-div'>
                            <div className='square-library-header'></div>
                        </div>
                        المكاتب
                    </div>
                    <a className='link-library-header'>المزيد</a>
                </div>

                <div className="library-section">
                    <button className='scroll-left-btn' onClick={() => scroll("left")} style={{display: opacityLeftBtn ? 'block' : 'none'}}>
                        <svg className='svg-scroll-left-btn' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </button>
                    <button className='scroll-right-btn' onClick={() => scroll("right")} style={{display: opacityRightBtn ? 'block' : 'none'}}>
                        <svg className='svg-scroll-right-btn' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                    
                    <div className="library-cards-div" ref={containerRef}>
                        {Data.map((item, index) => (
                            <OfficeCard key={index} item={item} />
                        ))}
                    </div>


                    <div className="right-shadow-library-section"></div>
                    <div className="left-shadow-library-section"></div>
                </div>

            </motion.div>
        
        
    )
    function OfficeCard ({ item }){
        const navigate = useNavigate();

        const handleClick = (id) => {
            localStorage.setItem("DataOffice", JSON.stringify(Data));
            localStorage.setItem("valuOfficeBtn", id);
            navigate("/office");
        };

    return(
        <div className="libraryCard-section" onClick={() => handleClick(item.Id)} id={item.Id}>
            <div className="libraryCard">
                <img className="img-libraryCard" src="data:image/svg+xml,%3csvg%20width='24'%20height='297'%20viewBox='0%200%2024%20297'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.233978%200.779297C0.233978%200.779297%2014.2853%2030.7055%2018.8852%2051.2887C24.3145%2075.5825%2024.4799%2091.545%2021.5342%20116.932C13.6046%20185.271%203.05636%20231.153%203.05636%20284.623C3.05636%20287.472%200.235233%20296.754%200.235233%20296.754L0.233978%200.779297Z'%20fill='url(%23paint0_linear_833_15377)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_833_15377'%20x1='11.2758'%20y1='0.779297'%20x2='11.2758'%20y2='296.754'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E7E7E7'/%3e%3cstop%20offset='1'%20stop-color='%23DBDBDB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>
                <div className="libraryCard-content">
                    <img alt="" className="img-libraryCard-content" src={`https://framework.md-license.com:8093/ZakatImages/${item.OfficePhotoName}.jpg`}></img>
                    <div class="officeText-div">
                        <h2 class="h2-libraryCard-content">{item.OfficeName}</h2>
                        <div class="numberOffice-div">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                </svg>
                            </span>
                            <h2 className="h2-numberOffice-div">{item.PhoneNum}</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
}


