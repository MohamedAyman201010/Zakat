import '../css/FifthSection.css'
import { motion } from "framer-motion";
import useScrollButtton from './useScrollButton'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FifthSection({ Data }){
    const {
    containerRef,
    opacityLeftBtn,
    opacityRightBtn,
    scroll,
    } = useScrollButtton(Data.length,'news')

    return(
            <motion.div className='news-div' 
            initial={{ opacity: 0, y: 100 }}           
            whileInView={{ opacity: 1, y: 0 }}        
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            >
            <div className='news-header'>
                <div className='right-news-header'>
                    <div className='square-news-header-div'>
                        <div className='square-news-header'></div>
                    </div>
                    آخر الأخبار
                </div>
                <a className='link-news-header'>المزيد</a>
            </div>

            <div className='news-section'>
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
                
                <div className='news-card-div' ref={containerRef}>
                    {Data.map((item, index) => (
                        <NewsCard key={index} item={item} />
                    ))}
                </div>
                
                <div className="right-shadow-news-section"></div>
                <div className="left-shadow-news-section"></div>
            </div>


        </motion.div>
    )
    function NewsCard({ item }) {

        const navigate = useNavigate();

        const handleClick = (e) => {
            const valuBtn = e.target.value
            localStorage.setItem("userData", JSON.stringify(Data));
            localStorage.setItem("valuBtn", valuBtn);
            navigate("/news/details");
        };

        return (
            <div className='newsCard-section'>
                <div className='newsCard'>
                <img className="img-newsCard" alt="" src={`https://framework.md-license.com:8093/ZakatImages/${item.NewsMainPhotoName}.jpg`} />
                <div className='newsCard-content'>
                    <h1 className="h1-newsCard-content">{item.NewsMainTitle}</h1>
                    <p className="pra-newsCard-content">{item.NewsSubTitle}</p>
                    <button className='newsCard-content-btn' onClick={handleClick} value={item.Id}>التفاصيل</button>
                </div>
                </div>
            </div>
        );
    }
}
