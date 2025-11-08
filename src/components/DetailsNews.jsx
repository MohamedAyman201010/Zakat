import '../css/DetailsNews.css'
import DonateBtnStatic from './DonateBtnStatic'
import Header from './Header'
import background from '../photos/backgroundpattern.png'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function DetailsNews(){
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem("userData");
        return saved ? JSON.parse(saved) : null;
    });

    const [valueBtn, setValueBtn] = useState(() => {
        const savedValue = localStorage.getItem("valuBtn");
        return savedValue ? JSON.parse(savedValue) : null;
    });

    useEffect(() => {
        const handleStorageChange = () => {
        const savedData = localStorage.getItem("userData");
        const savedValue = localStorage.getItem("valueBtn");

        setData(savedData ? JSON.parse(savedData) : null);
        setValueBtn(savedValue ? JSON.parse(savedValue) : null);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

 
    const CurrentNews = data.find(obj => obj.Id === valueBtn);

    const PublishDateStr = CurrentNews.NewsPublishDate;
    const newPublishDateStr = new Date(PublishDateStr); 
    const formattedPublishDate = newPublishDateStr.toLocaleDateString('ar-EG'); 

    const NewsCreateDate = CurrentNews.NewsCreateDate;
    const newNewsCreateDate = new Date(NewsCreateDate);
    const formattedNewsCreateDate = newNewsCreateDate.toLocaleDateString('ar-EG'); 


    return(
        <div className='min-h-screen w-screen bg-gray-50'>
            <DonateBtnStatic/>
            <Header/>

            <div className='pt-16 lg:pt-20'>
                <div className=' relative overflow-auto '>
                    <div className='min-h-screen' style={{backgroundRepeat: 'repeat', backgroundSize: 'auto' , backgroundImage: {background}}}>
                        <div className='DetailsNews-div'>
                            <div className='DetailsNews-content'>
                                <InformationDetailsNews item={CurrentNews} />
                            </div>
                            <Link to={"/"}>
                                <button className='return-btn' >
                                    <img alt="Back" src="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5998%200.517578H8.1248C3.5748%200.517578%200.862305%203.23008%200.862305%207.78008V18.2426C0.862305%2022.8051%203.5748%2025.5176%208.1248%2025.5176H18.5873C23.1373%2025.5176%2025.8498%2022.8051%2025.8498%2018.2551V7.78008C25.8623%203.23008%2023.1498%200.517578%2018.5998%200.517578ZM16.8498%2013.6801L12.4373%2018.0926C12.2498%2018.2801%2012.0123%2018.3676%2011.7748%2018.3676C11.5373%2018.3676%2011.2998%2018.2801%2011.1123%2018.0926C10.7498%2017.7301%2010.7498%2017.1301%2011.1123%2016.7676L14.8623%2013.0176L11.1123%209.26758C10.7498%208.90508%2010.7498%208.30508%2011.1123%207.94258C11.4748%207.58008%2012.0748%207.58008%2012.4373%207.94258L16.8498%2012.3551C17.2248%2012.7176%2017.2248%2013.3176%2016.8498%2013.6801Z'%20fill='%23F2DCA5'/%3e%3c/svg%3e"></img>
                                    رجوع
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    function InformationDetailsNews({ item }){
        return(
            <>
                <img class="h-64 rounded-md object-cover w-full" alt="تبرعات جديدة 1" src={`https://framework.md-license.com:8093/ZakatImages/${item.NewsMainPhotoName}.jpg`}></img>
                <div className='text-DetailsNews-div'>
                    <h1 className='h1-text-DetailsNews-div'>{item.NewsMainTitle}</h1>
                    <h2 className='h2-text-DetailsNews-div'>{item.NewsSubTitle}</h2>
                    <p className='pra-text-DetailsNews-div'>{item.NewsContents}</p>
                </div>
                <div className='information-DetailsNews-div'>
                    <p style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" , textAlign:'start'}}> <span class="font-semibold">نوع الخبر:</span> {item.NewsTypeName}</p>
                    <p style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" , textAlign:'start'}}> <span class="font-semibold">اسم المكتب:</span> {item.OfficeName}</p>
                    <p style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" , textAlign:'start'}}>  <span class="font-semibold">المستخدم:</span> {item.UserName}</p>
                    <p style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" , textAlign:'start'}}> <span class="font-semibold">تاريخ النشر:</span> {formattedPublishDate}</p>
                    <p style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" , textAlign:'start'}}> <span class="font-semibold">تاريخ الإنشاء:</span> {formattedNewsCreateDate}</p>
                </div>
            </>
        )
    }
}
