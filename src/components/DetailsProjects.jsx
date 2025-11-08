import '../css/DetailsProjects.css'
import Header from './Header'
import DonateBtnStatic from './DonateBtnStatic'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailsProjects(){
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem("SubDataProject");
        return saved ? JSON.parse(saved) : null;
    });

    const [AllData, setAllData] = useState(() => {
        const savedAllData = localStorage.getItem("DataProject");
        return savedAllData ? JSON.parse(savedAllData) : null;
    });

    const [valueBtn, setValueBtn] = useState(() => {
        const savedValue = localStorage.getItem("valuBtnProject");
        return savedValue ? JSON.parse(savedValue) : null;
    });

    useEffect(() => {
        const handleStorageChange = () => {
        const savedData = localStorage.getItem("SubDataProject");
        const savedAllData = localStorage.getItem("DataProject");
        const savedValue = localStorage.getItem("valuBtnProject");

        setData(savedData ? JSON.parse(savedData) : null);
        setAllData(savedAllData ? JSON.parse(savedAllData) : null);
        setValueBtn(savedValue ? JSON.parse(savedValue) : null);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const CurrentProject = data.find(obj => obj.Id === valueBtn);

    const [selected, setSelected] = useState("");
    return(
        <div className="min-h-screen bg-gray-50 w-screen">
            <Header/>
            <DonateBtnStatic/>
            <div className='pt-16 lg:pt-20'>
                <div className='relative overflow-hidden min-h-screen div-content'>
                    <div className='title-DetailsProjects-div'>
                        <div className='title-DetailsProjects-container'>
                            <div className='square-div'>
                                <div className='square'></div>
                            </div>
                            التفاصيل
                        </div>
                    </div>  
                    <div className='detailsProjects-content-div'>
                        <div className='detailsProjects-content-container'>
                            <BigProjectCard item={CurrentProject} />
                            <div className='left-detailsProjects-content-div'>
                                <div className='left-detailsProjects-content-conatiner'>
                                    <div className='input-left-detailsProjects-div'>
                                        <img className="img-input-left-detailsProjects-div" alt="Money" src="data:image/svg+xml,%3csvg%20width='30'%20height='31'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.9625%208.79941C23.425%206.08691%2021.4125%204.89941%2018.6125%204.89941H7.63751C4.33751%204.89941%202.13751%206.54941%202.13751%2010.3994V16.8369C2.13751%2019.6119%203.27501%2021.2369%205.15001%2021.9369C5.42501%2022.0369%205.72501%2022.1244%206.03751%2022.1744C6.53751%2022.2869%207.07501%2022.3369%207.63751%2022.3369H18.625C21.925%2022.3369%2024.125%2020.6869%2024.125%2016.8369V10.3994C24.125%209.81191%2024.075%209.28691%2023.9625%208.79941ZM6.91251%2015.4994C6.91251%2016.0119%206.48751%2016.4369%205.97501%2016.4369C5.46251%2016.4369%205.03751%2016.0119%205.03751%2015.4994V11.7494C5.03751%2011.2369%205.46251%2010.8119%205.97501%2010.8119C6.48751%2010.8119%206.91251%2011.2369%206.91251%2011.7494V15.4994ZM13.125%2016.9244C11.3%2016.9244%209.82501%2015.4494%209.82501%2013.6244C9.82501%2011.7994%2011.3%2010.3244%2013.125%2010.3244C14.95%2010.3244%2016.425%2011.7994%2016.425%2013.6244C16.425%2015.4494%2014.95%2016.9244%2013.125%2016.9244ZM21.2%2015.4994C21.2%2016.0119%2020.775%2016.4369%2020.2625%2016.4369C19.75%2016.4369%2019.325%2016.0119%2019.325%2015.4994V11.7494C19.325%2011.2369%2019.75%2010.8119%2020.2625%2010.8119C20.775%2010.8119%2021.2%2011.2369%2021.2%2011.7494V15.4994Z'%20fill='%2316343A'/%3e%3cpath%20d='M27.875%2014.1508V20.5883C27.875%2024.4383%2025.675%2026.1008%2022.3625%2026.1008H11.3875C10.45%2026.1008%209.61252%2025.9633%208.88752%2025.6883C8.30002%2025.4758%207.78752%2025.1633%207.37502%2024.7633C7.15002%2024.5508%207.32502%2024.2133%207.63752%2024.2133H18.6125C23.2375%2024.2133%2025.9875%2021.4633%2025.9875%2016.8508V10.4008C25.9875%2010.1008%2026.325%209.91333%2026.5375%2010.1383C27.3875%2011.0383%2027.875%2012.3508%2027.875%2014.1508Z'%20fill='%2316343A'/%3e%3c/svg%3e"></img>
                                        <input min="1" step="0.01" max={CurrentProject.ProjectRemainingAmount.toFixed(2)} placeholder="رجاء ادخال المبلغ المدفوع" className="input-left-detailsProjects" type="number"></input>
                                    </div>
                                    <div className='type-donate-div'>
                                        <p className="pra-type-donate">اختر النوع:</p>
                                        <div className='type-btn-div'>
                                            <label className="label-zakat-input">
                                                <input type="radio" value="zakat" className="accent-emerald-600 w-4 h-4" checked={selected === "zakat"} onChange={(e) => setSelected(e.target.value)}/>
                                                <span className='text-sm md:text-base font-medium span-label-zakat-input'>زكاة</span>
                                            </label>
                                            <label className="label-zakat-input">
                                                <input type="radio" value="sadaqa" className="accent-emerald-600 w-4 h-4" checked={selected === "sadaqa"} onChange={(e) => setSelected(e.target.value)} />
                                                <span className='text-sm md:text-base font-medium span-label-zakat-input'>صدقة</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='btn-left-detailsProjects-div'>
                                        <button className='btn-pay'>
                                            <img alt="donate icon" src="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.2583%208.56936C24.7057%205.78016%2022.6362%204.55908%2019.7571%204.55908H8.47172C5.0784%204.55908%202.81619%206.25574%202.81619%2010.2146V16.8341C2.81619%2019.6876%203.98586%2021.3586%205.91388%2022.0784C6.19665%2022.1812%206.50514%2022.2712%206.82648%2022.3226C7.34061%2022.4383%207.89331%2022.4897%208.47172%2022.4897H19.7699C23.1632%2022.4897%2025.4254%2020.793%2025.4254%2016.8341V10.2146C25.4254%209.6105%2025.374%209.07065%2025.2583%208.56936ZM7.72622%2015.4588C7.72622%2015.9858%207.2892%2016.4228%206.76221%2016.4228C6.23522%2016.4228%205.7982%2015.9858%205.7982%2015.4588V11.6028C5.7982%2011.0758%206.23522%2010.6388%206.76221%2010.6388C7.2892%2010.6388%207.72622%2011.0758%207.72622%2011.6028V15.4588ZM14.1144%2016.9241C12.2378%2016.9241%2010.7211%2015.4074%2010.7211%2013.5308C10.7211%2011.6542%2012.2378%2010.1375%2014.1144%2010.1375C15.991%2010.1375%2017.5077%2011.6542%2017.5077%2013.5308C17.5077%2015.4074%2015.991%2016.9241%2014.1144%2016.9241ZM22.4177%2015.4588C22.4177%2015.9858%2021.9807%2016.4228%2021.4537%2016.4228C20.9267%2016.4228%2020.4897%2015.9858%2020.4897%2015.4588V11.6028C20.4897%2011.0758%2020.9267%2010.6388%2021.4537%2010.6388C21.9807%2010.6388%2022.4177%2011.0758%2022.4177%2011.6028V15.4588Z'%20fill='%23F2DCA5'/%3e%3cpath%20d='M29.2815%2014.0703V20.6899C29.2815%2024.6487%2027.0193%2026.3582%2023.6131%2026.3582H12.3278C11.3638%2026.3582%2010.5026%2026.2169%209.75708%2025.9341C9.15296%2025.7156%208.62597%2025.3942%208.20181%2024.9829C7.97044%2024.7644%208.15039%2024.4174%208.47173%2024.4174H19.7571C24.5129%2024.4174%2027.3406%2021.5896%2027.3406%2016.8467V10.2143C27.3406%209.9058%2027.6877%209.713%2027.9062%209.94436C28.7802%2010.8698%2029.2815%2012.2194%2029.2815%2014.0703Z'%20fill='%23F2DCA5'/%3e%3c/svg%3e"></img>
                                            ادفع الان
                                        </button>
                                        <button className='btn-purchases'>
                                            <img width="24" className="sm:w-8" alt="shopping cart" src="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.38562%202.60547H5.62213C7.01031%202.60547%208.10285%203.80084%207.98716%205.17616L6.92032%2017.9782C6.74038%2020.0733%208.39846%2021.8728%2010.5064%2021.8728H24.1954C26.0463%2021.8728%2027.6658%2020.3561%2027.8072%2018.5181L28.5013%208.87797C28.6555%206.74429%2027.036%205.00906%2024.8895%205.00906H8.29566'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M21.7018%2028.3125C22.5892%2028.3125%2023.3085%2027.5932%2023.3085%2026.7058C23.3085%2025.8185%2022.5892%2025.0991%2021.7018%2025.0991C20.8145%2025.0991%2020.0951%2025.8185%2020.0951%2026.7058C20.0951%2027.5932%2020.8145%2028.3125%2021.7018%2028.3125Z'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M11.419%2028.3125C12.3064%2028.3125%2013.0257%2027.5932%2013.0257%2026.7058C13.0257%2025.8185%2012.3064%2025.0991%2011.419%2025.0991C10.5317%2025.0991%209.81235%2025.8185%209.81235%2026.7058C9.81235%2027.5932%2010.5317%2028.3125%2011.419%2028.3125Z'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M12.383%2010.3174H27.8072'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                                        </button>
                                    </div>
                                </div>
                                <div className='statistics-detailsProjects'>
                                    <div className='head-statistics-detailsProjects'>
                                        <div className='visits-div'>
                                            <p className='pra-visit-title'>الزيارات</p>
                                            <div className='count-visit-div'>
                                                <span class="span-count-visit">197.1</span>
                                                <span class="span-text-visit">زيارة</span>
                                            </div>
                                        </div>
                                        <div className='donations-div'>
                                            <p className='pra-visit-title'>عمليات التبرع</p>
                                            <div className='count-visit-div'>
                                                <span class="span-count-visit">91.9</span>
                                                <span class="span-text-visit">عملية</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr-statistics-detailsProjects"></div>
                                    <div className='text-center w-full'>
                                        <p className="pra-target-text">عدد المستفيدين</p>
                                        <p className="pra-target">100</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 px-4'>
                        <div className='flex items-center justify-between'>
                            <div className='title-DetailsProjects-container'>
                                <div className='square-div'>
                                    <div className='square'></div>
                                </div>
                                فرص تبرع مماثلة
                            </div>
                        </div>
                        <div className='cardProject-div'>
                            {AllData
                                .filter(item => item.Id !== CurrentProject.Id) 
                                .slice(0, 3)                 
                                .map((item, index) => (
                                    <SamllProjectCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function BigProjectCard({ item }){
    let button;
    if (item.AllowZakat) {
        button = <button className='left-right-card-information-header-btn'>
                    <img alt="زكاة" className="img-left-right-card-information-header-btn" src="data:image/svg+xml,%3csvg%20width='22'%20height='26'%20viewBox='0%200%2022%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.6798%2021.2463L17.4344%2018.001C16.9305%2017.497%2016.2451%2017.2148%2015.5329%2017.2148H14.6325L13.2887%2017.8868H10.601C9.86193%2017.8868%209.25721%2018.4915%209.25721%2019.2306V20.5744'%20stroke='white'%20strokeWidth='0.84'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M16.6481%2025.2773L15.3042%2023.9335H7.24125L1.19401%2017.8863L2.24892%2017.6242C3.27695%2017.3689%204.37217%2017.6041%205.19863%2018.2693L7.91316%2020.5739H13.2885'%20stroke='white'%20strokeWidth='0.84'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M5.4971%209.80618C5.4971%2010.5229%206.0471%2011.1006%206.73043%2011.1006H8.12487C8.71932%2011.1006%209.20265%2010.5951%209.20265%209.97285C9.20265%209.29507%208.90821%209.05618%208.46932%208.90063L6.23043%208.12285C5.79154%207.9673%205.4971%207.72841%205.4971%207.05063C5.4971%206.42841%205.98043%205.92285%206.57487%205.92285H7.96932C8.65265%205.92285%209.20265%206.50063%209.20265%207.2173'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M7.34606%205.17773V11.8444'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M7.34606%2014.0672C10.4143%2014.0672%2012.9016%2011.5799%2012.9016%208.51161C12.9016%205.44336%2010.4143%202.95605%207.34606%202.95605C4.27781%202.95605%201.7905%205.44336%201.7905%208.51161C1.7905%2011.5799%204.27781%2014.0672%207.34606%2014.0672Z'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                    <span>تقبل الزكاة</span>
                </button>;
    }
    const collectTarget = item.ProjectWantedAmount - item.ProjectRemainingAmount
    const RatioTarget = (collectTarget / item.ProjectWantedAmount)*100
    return(
        <div className='cardBox'>
            <img className="absolute left-0" alt="wave background" src="data:image/svg+xml,%3csvg%20width='24'%20height='297'%20viewBox='0%200%2024%20297'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.233978%200.779297C0.233978%200.779297%2014.2853%2030.7055%2018.8852%2051.2887C24.3145%2075.5825%2024.4799%2091.545%2021.5342%20116.932C13.6046%20185.271%203.05636%20231.153%203.05636%20284.623C3.05636%20287.472%200.235233%20296.754%200.235233%20296.754L0.233978%200.779297Z'%20fill='url(%23paint0_linear_833_15377)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_833_15377'%20x1='11.2758'%20y1='0.779297'%20x2='11.2758'%20y2='296.754'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E7E7E7'/%3e%3cstop%20offset='1'%20stop-color='%23DBDBDB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>
            <img  className="img-cardBox" src={`https://framework.md-license.com:8093/ZakatImages/${item.ProjectPhotoName}.jpg`}></img>
            <div className='fristSection-cardBox'>
                <div className='right-fristSection-cardBox'>
                    <p className="pra-title-right-fristSection-cardBox">{item.ProjectName}</p>
                    <p className="pra-disc-right-fristSection-cardBox">{item.ProjectDesc}</p>
                </div>
                <div class="flex-shrink-0">
                    <img width="20" className="sm:w-6" alt="navigation" src="data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.8149%2015.0652L27.3548%204.52539'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M28.383%209.66674V3.49707H22.2133'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M14.2442%203.49707H11.6735C5.2468%203.49707%202.6761%206.06776%202.6761%2012.4945V20.2066C2.6761%2026.6333%205.2468%2029.204%2011.6735%2029.204H19.3856C25.8123%2029.204%2028.383%2026.6333%2028.383%2020.2066V17.6359'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                </div>
            </div>
            <div className='secondSection-cardBox'>
                <div className='collect-remain-div'>
                    <span>تم جمع {collectTarget.toFixed(5)}$</span>
                    <span>المتبقي {item.ProjectRemainingAmount.toFixed(5)}$</span>
                </div>
                <div className='lineRatioTarget-div'>
                    <div className='lineRatioTarget' style={{width:RatioTarget + "%"}}></div>
                </div>
                <span className='span-RatioTarget'>تم الوصول الى الهدف بنسبة {RatioTarget.toFixed(1) +'%'}</span>
            </div>
            <div className='thirdSection-cardBox'>
                <p className="pra-title-thirdSection-cardBox">المكتب</p>
                <p class="pra-officeName">{item.OfficeName}</p>
            </div>
        </div>
    )
} 
function SamllProjectCard({ item }){
    let button;
    if (item.AllowZakat) {
        button = <button className='left-right-card-information-header-btn'>
                    <img alt="زكاة" className="img-left-right-card-information-header-btn" src="data:image/svg+xml,%3csvg%20width='22'%20height='26'%20viewBox='0%200%2022%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.6798%2021.2463L17.4344%2018.001C16.9305%2017.497%2016.2451%2017.2148%2015.5329%2017.2148H14.6325L13.2887%2017.8868H10.601C9.86193%2017.8868%209.25721%2018.4915%209.25721%2019.2306V20.5744'%20stroke='white'%20strokeWidth='0.84'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M16.6481%2025.2773L15.3042%2023.9335H7.24125L1.19401%2017.8863L2.24892%2017.6242C3.27695%2017.3689%204.37217%2017.6041%205.19863%2018.2693L7.91316%2020.5739H13.2885'%20stroke='white'%20strokeWidth='0.84'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M5.4971%209.80618C5.4971%2010.5229%206.0471%2011.1006%206.73043%2011.1006H8.12487C8.71932%2011.1006%209.20265%2010.5951%209.20265%209.97285C9.20265%209.29507%208.90821%209.05618%208.46932%208.90063L6.23043%208.12285C5.79154%207.9673%205.4971%207.72841%205.4971%207.05063C5.4971%206.42841%205.98043%205.92285%206.57487%205.92285H7.96932C8.65265%205.92285%209.20265%206.50063%209.20265%207.2173'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M7.34606%205.17773V11.8444'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M7.34606%2014.0672C10.4143%2014.0672%2012.9016%2011.5799%2012.9016%208.51161C12.9016%205.44336%2010.4143%202.95605%207.34606%202.95605C4.27781%202.95605%201.7905%205.44336%201.7905%208.51161C1.7905%2011.5799%204.27781%2014.0672%207.34606%2014.0672Z'%20stroke='white'%20strokeWidth='0.833333'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                    <span>تقبل الزكاة</span>
                </button>;
    }
    const collectTarget = item.ProjectWantedAmount - item.ProjectRemainingAmount
    const RatioTarget = (collectTarget / item.ProjectWantedAmount)*100

    const navigate = useNavigate();
    const storedData = JSON.parse(localStorage.getItem("DataProject"));
    const handleClick = (e) => {
        const valuBtn = e.target.value
        localStorage.setItem("SubDataProject", JSON.stringify(storedData));
        localStorage.setItem("valuBtnProject", valuBtn);
        navigate("/project");
        window.location.reload()
    };
    return(
        <div className='card-section'>
            <div className='card-content'>
                <img className="img-card-content" src="data:image/svg+xml,%3csvg%20width='24'%20height='297'%20viewBox='0%200%2024%20297'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.233978%200.779297C0.233978%200.779297%2014.2853%2030.7055%2018.8852%2051.2887C24.3145%2075.5825%2024.4799%2091.545%2021.5342%20116.932C13.6046%20185.271%203.05636%20231.153%203.05636%20284.623C3.05636%20287.472%200.235233%20296.754%200.235233%20296.754L0.233978%200.779297Z'%20fill='url(%23paint0_linear_833_15377)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_833_15377'%20x1='11.2758'%20y1='0.779297'%20x2='11.2758'%20y2='296.754'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E7E7E7'/%3e%3cstop%20offset='1'%20stop-color='%23DBDBDB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>
                <div className='card-information'>
                    <div className='card-information-header'>
                        <div className='right-card-information-header'>
                            <img alt="مشروع مستوصف خيري" className="img-right-card-information-header" src={`https://framework.md-license.com:8093/ZakatImages/${item.ProjectPhotoName}.jpg`}></img>
                            <div className='left-right-card-information-header'>
                                <h2 className='h2-left-right-card-information-header'>{item.ProjectName}</h2>
                                <span className='span-left-right-card-information-header'>{item.ProjectDesc}</span>
                            </div>
                        </div>
                        <img width="25" src="data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.8149%2015.0652L27.3548%204.52539'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M28.383%209.66674V3.49707H22.2133'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M14.2442%203.49707H11.6735C5.2468%203.49707%202.6761%206.06776%202.6761%2012.4945V20.2066C2.6761%2026.6333%205.2468%2029.204%2011.6735%2029.204H19.3856C25.8123%2029.204%2028.383%2026.6333%2028.383%2020.2066V17.6359'%20stroke='%2316343A'%20strokeWidth='1.92802'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                    </div>
                    <hr className="hr-card-information"></hr>
                    <div className='main-card-information'>
                        <div className='header-main-card-information'>
                            <span>تم جمع {collectTarget.toFixed(0)}$</span>
                            <span>المتبقي {item.ProjectRemainingAmount.toFixed(0)}$</span>
                        </div>
                        <div className='middle-main-card-information'>
                            <div className='content-middle-main-card-information' style={{width:RatioTarget + "%"}}></div>
                        </div>
                        <span className='span-main-card-information'>تم الوصول الى الهدف بنسبة {RatioTarget.toFixed(1) +'%'}</span>
                    </div>
                    <div className="flex-1"></div>
                </div>
                <div className='card-btn-div'>
                    <button className='card-btn' onClick={handleClick} value={item.Id}>
                        <img width="30" src="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.2583%208.56936C24.7057%205.78016%2022.6362%204.55908%2019.7571%204.55908H8.47172C5.0784%204.55908%202.81619%206.25574%202.81619%2010.2146V16.8341C2.81619%2019.6876%203.98586%2021.3586%205.91388%2022.0784C6.19665%2022.1812%206.50514%2022.2712%206.82648%2022.3226C7.34061%2022.4383%207.89331%2022.4897%208.47172%2022.4897H19.7699C23.1632%2022.4897%2025.4254%2020.793%2025.4254%2016.8341V10.2146C25.4254%209.6105%2025.374%209.07065%2025.2583%208.56936ZM7.72622%2015.4588C7.72622%2015.9858%207.2892%2016.4228%206.76221%2016.4228C6.23522%2016.4228%205.7982%2015.9858%205.7982%2015.4588V11.6028C5.7982%2011.0758%206.23522%2010.6388%206.76221%2010.6388C7.2892%2010.6388%207.72622%2011.0758%207.72622%2011.6028V15.4588ZM14.1144%2016.9241C12.2378%2016.9241%2010.7211%2015.4074%2010.7211%2013.5308C10.7211%2011.6542%2012.2378%2010.1375%2014.1144%2010.1375C15.991%2010.1375%2017.5077%2011.6542%2017.5077%2013.5308C17.5077%2015.4074%2015.991%2016.9241%2014.1144%2016.9241ZM22.4177%2015.4588C22.4177%2015.9858%2021.9807%2016.4228%2021.4537%2016.4228C20.9267%2016.4228%2020.4897%2015.9858%2020.4897%2015.4588V11.6028C20.4897%2011.0758%2020.9267%2010.6388%2021.4537%2010.6388C21.9807%2010.6388%2022.4177%2011.0758%2022.4177%2011.6028V15.4588Z'%20fill='%23F2DCA5'/%3e%3cpath%20d='M29.2815%2014.0703V20.6899C29.2815%2024.6487%2027.0193%2026.3582%2023.6131%2026.3582H12.3278C11.3638%2026.3582%2010.5026%2026.2169%209.75708%2025.9341C9.15296%2025.7156%208.62597%2025.3942%208.20181%2024.9829C7.97044%2024.7644%208.15039%2024.4174%208.47173%2024.4174H19.7571C24.5129%2024.4174%2027.3406%2021.5896%2027.3406%2016.8467V10.2143C27.3406%209.9058%2027.6877%209.713%2027.9062%209.94436C28.7802%2010.8698%2029.2815%2012.2194%2029.2815%2014.0703Z'%20fill='%23F2DCA5'/%3e%3c/svg%3e"></img>
                        ادفع الان
                    </button>
                </div>
            </div>
        </div>
    )
} 