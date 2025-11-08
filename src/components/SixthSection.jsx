import '../css/SixthSection.css'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SixthSection(){

    var card1 = new serviceCard(1,'https://zakat-ecru-gamma.vercel.app/assets/Speaker-nR28nmOn.svg','الحملات','خدمة تتيح لك إنشاء حملة لجمع التبرعات في مختلف المجالات الخيرية و نشرها ليصل أثرها إلي مستحقيها')
    var card2 = new serviceCard(2,'data:image/svg+xml,%3csvg%20width=31%20height=4…3B/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e','الزكاة','خدمة تتيح لك إمكانية حساب الزكاة بأنواعها المختلفة ودفعها عبر طرق سهلة وسريعة لتصل إلى مستحقيها.')
    var card3 = new serviceCard(3,'https://zakat-ecru-gamma.vercel.app/assets/Sheep-DiU8ShB4.svg','الأضاحي','خدمة لتوكيل ذبح الأضاحي والهدي والعقيقة والفدية والصدقة ، وتوزيعها على مستحقيها.')
    return(
        <motion.div className='service-container'
            initial={{ opacity: 0, y: 100 }}           
            whileInView={{ opacity: 1, y: 0 }}        
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className='service-header'>
                <div className='right-service-header'>
                    <div className='square-service-header-div'>
                        <div className='square-service-header'></div>
                    </div>
                    الخدمات
                </div>
                <a className='link-service-header'>المزيد</a>
            </div>


            <div className='service-section'>
                <div className='service-card-div'>
                    {card1.serviceCardFun()}
                    {card2.serviceCardFun()}
                    {card3.serviceCardFun()}
                </div>
            </div>
        </motion.div>


    )
}
class serviceCard{
    constructor(id,servicePhoto,serviceTitle,serviceDecribe){
        this.id  = id
        this.servicePhoto  = servicePhoto
        this.serviceTitle  = serviceTitle
        this.serviceDecribe  = serviceDecribe
    }

    serviceCardFun(){
            const navigate = useNavigate();

            const handleClick = () => {
                if (this.serviceTitle === "الزكاة") {
                    navigate("/zakat");
                } else if (this.serviceTitle === "الحملات") {
                    navigate("/services/campaigns");
                }
            };
            return(
            <div className='serviveCard-section'>
                <div className='serviveCard'>
                    <div className='serviveCard-header'>
                        <span>
                            {this.serviceTitle === "الزكاة" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="43" viewBox="0 0 31 43" fill="none"><path d="M2.36686 41.6577L1.346 28.8289C2.22789 27.947 3.42726 27.4531 4.67366 27.4531H6.2493L8.60101 28.629H13.3044C14.5979 28.629 15.6561 29.6872 15.6561 30.9807V33.3324" fill="url(#paint0_linear_176_43204)"/><path d="M2.36686 41.6577L1.346 28.8289C2.22789 27.947 3.42726 27.4531 4.67366 27.4531H6.2493L8.60101 28.629H13.3044C14.5979 28.629 15.6561 29.6872 15.6561 30.9807V33.3324" stroke="white" strokeWidth="1.47" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.72203 41.563L5.07373 39.2113H19.184L29.7666 28.6286L27.9205 28.17C26.1215 27.7232 24.2048 28.1347 22.7585 29.2988L18.0081 33.332H8.60129" fill="url(#paint1_linear_176_43204)"/><path d="M2.72203 41.563L5.07373 39.2113H19.184L29.7666 28.6286L27.9205 28.17C26.1215 27.7232 24.2048 28.1347 22.7585 29.2988L18.0081 33.332H8.60129" stroke="white" strokeWidth="1.47" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.2443 21.944C21.6137 21.944 25.9665 17.5912 25.9665 12.2217C25.9665 6.8523 21.6137 2.49951 16.2443 2.49951C10.8749 2.49951 6.52207 6.8523 6.52207 12.2217C6.52207 17.5912 10.8749 21.944 16.2443 21.944Z" fill="url(#paint2_linear_176_43204)" stroke="white" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0086 14.4868C13.0086 15.7409 13.9711 16.752 15.167 16.752H17.6072C18.6475 16.752 19.4933 15.8673 19.4933 14.7784C19.4933 13.5923 18.9781 13.1743 18.21 12.902L14.292 11.5409C13.5239 11.2687 13.0086 10.8506 13.0086 9.66453C13.0086 8.57564 13.8545 7.69092 14.8947 7.69092H17.335C18.5308 7.69092 19.4933 8.70203 19.4933 9.9562" stroke="white" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.2443 6.38867V18.0553" stroke="white" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="paint0_linear_176_43204" x1="17.0383" y1="31.3583" x2="-4.33337" y2="31.3583" gradientUnits="userSpaceOnUse"><stop stop-color="#24645E"/><stop offset="0.65" stop-color="#18383D"/><stop offset="1" stop-color="#17343B"/></linearGradient><linearGradient id="paint1_linear_176_43204" x1="31.6366" y1="35.5046" x2="2.72203" y2="35.5046" gradientUnits="userSpaceOnUse"><stop stop-color="#24645E"/><stop offset="0.65" stop-color="#18383D"/><stop offset="1" stop-color="#17343B"/></linearGradient><linearGradient id="paint2_linear_176_43204" x1="5.1776" y1="13.2624" x2="25.9665" y2="13.2624" gradientUnits="userSpaceOnUse"><stop stop-color="#24645E"/><stop offset="0.65" stop-color="#18383D"/><stop offset="1" stop-color="#17343B"/></linearGradient></defs></svg>
                            ) : (
                                <img alt={this.serviceTitle} src={this.servicePhoto} />
                            )}
                        </span>
                        <p className="pra-serviveCard-header">{this.serviceTitle}</p>
                    </div>
                    <p className="pra-serviveCard">{this.serviceDecribe}</p>
                    <img className="img-serviceCard" src="https://zakat-ecru-gamma.vercel.app/assets/Union-CCzk7IgT.png"></img>
                    <button className="serviveCard-btn" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}
