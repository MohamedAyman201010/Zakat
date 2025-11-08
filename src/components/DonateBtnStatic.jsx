import '../css/DonateBtnStatic.css'

export default function DonateBtnStatic(){
    return(
        <button className="donate-btn">
            <span className="span-donate-btn">
            الدفع السريع
            </span>
            <div className="icon-donate-container">
                <div className='icon-donate-div'>
                    <img
                    alt="diamond-content"
                    className="img-donate"
                    src="https://zakat-ecru-gamma.vercel.app/assets/whiteplanet-DEVdaNLl.svg"
                    ></img>
                </div>
            </div>
        </button>
    )
}