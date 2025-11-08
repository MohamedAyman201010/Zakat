import '../css/into.css'
import imgWasl from '../photos/Wasl-C_87a9lg.svg'
import giveHand from '../photos/giveHand-BkPyDY2-.svg'
import takeHand from '../photos/takeHand-Dw1m9v9P.svg'
import donationRequest from '../photos/donationRequest-CE1KzT0o.svg'
import fastDonation from '../photos/fastDonation-BscQQ3ow.svg'
import Zakat from '../photos/Zakat-CciGBri_.svg'
import Salla from '../photos/Salla-DQv21VEu.svg'
import { useState, useEffect } from "react";

export default function Into(){ 
    return(
        <div className="into-div">
            <img className='img-center-into' src={imgWasl}></img>
            <div className='text-into-div'>
                <span className="frist-span-text-into-div">صندوق الزكاة الليبي</span>
                <span className="second-span-text-into-div">حلقــة الوصل بينك وبين الفقير</span>
            </div>
            <img className='img-right-into' src={giveHand}></img>
            <img className='img-left-into' src={takeHand}></img>
            <img className='img-help-btn' src={donationRequest}></img>
            <img className='img-quakily-donate-btn' src={fastDonation}></img>
            <img className='img-northwest' src={Zakat}></img>
            <div className='donation-basket-div'>
                <img alt="cart" className="basket" src="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20viewBox='0%200%2032%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.38562%202.60547H5.62213C7.01031%202.60547%208.10285%203.80084%207.98716%205.17616L6.92032%2017.9782C6.74038%2020.0733%208.39846%2021.8728%2010.5064%2021.8728H24.1954C26.0463%2021.8728%2027.6658%2020.3561%2027.8072%2018.5181L28.5013%208.87797C28.6555%206.74429%2027.036%205.00906%2024.8895%205.00906H8.29566'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M21.7018%2028.3125C22.5892%2028.3125%2023.3085%2027.5932%2023.3085%2026.7058C23.3085%2025.8185%2022.5892%2025.0991%2021.7018%2025.0991C20.8145%2025.0991%2020.0951%2025.8185%2020.0951%2026.7058C20.0951%2027.5932%2020.8145%2028.3125%2021.7018%2028.3125Z'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M11.419%2028.3125C12.3064%2028.3125%2013.0257%2027.5932%2013.0257%2026.7058C13.0257%2025.8185%2012.3064%2025.0991%2011.419%2025.0991C10.5317%2025.0991%209.81235%2025.8185%209.81235%2026.7058C9.81235%2027.5932%2010.5317%2028.3125%2011.419%2028.3125Z'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3cpath%20d='M12.383%2010.3174H27.8072'%20stroke='%2316343A'%20strokeWidth='1.92802'%20stroke-miterlimit='10'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e"></img>
                <img className='img-donation-basket' src={Salla}></img>
            </div> 
        </div>  
    )
}