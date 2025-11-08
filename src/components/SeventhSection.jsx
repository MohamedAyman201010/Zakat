import '../css/SeventhSection.css'
import { motion } from "framer-motion";

export default function SeventhSection(){

    var card1 = new statisticsCard(1,'عدد المستفدين','213.7 ألف مستفيد')
    var card2 = new statisticsCard(2,'عدد المستفدين','213.7 ألف مستفيد')
    var card3 = new statisticsCard(3,'عدد المستفدين','213.7 ألف مستفيد')

    return(
        <motion.div className='statistics-div'
            initial={{ opacity: 0, y: 100 }}           
            whileInView={{ opacity: 1, y: 0 }}        
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className='statistics-div-header'>
                <div className='statistics-div-header-content'>
                    <div className='square-statistics-div'>
                        <div className='square'></div>
                    </div>
                    احسانكم لعام 2025
                </div>
            </div>

            <div className='statistics-div-main'>
                {card1.statisticsCardFun()}
                {card2.statisticsCardFun()}
                {card3.statisticsCardFun()}
            </div>

            <div className='statistics-btn-div'>
                <button className='statistics-btn'>
                    <img src="data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.69%200.533203H6.31C2.67%200.533203%200.5%202.7032%200.5%206.3432V14.7132C0.5%2018.3632%202.67%2020.5332%206.31%2020.5332H14.68C18.32%2020.5332%2020.49%2018.3632%2020.49%2014.7232V6.3432C20.5%202.7032%2018.33%200.533203%2014.69%200.533203ZM6.13%2016.6832C6.13%2017.0932%205.79%2017.4332%205.38%2017.4332C4.97%2017.4332%204.63%2017.0932%204.63%2016.6832V14.6132C4.63%2014.2032%204.97%2013.8632%205.38%2013.8632C5.79%2013.8632%206.13%2014.2032%206.13%2014.6132V16.6832ZM11.25%2016.6832C11.25%2017.0932%2010.91%2017.4332%2010.5%2017.4332C10.09%2017.4332%209.75%2017.0932%209.75%2016.6832V12.5332C9.75%2012.1232%2010.09%2011.7832%2010.5%2011.7832C10.91%2011.7832%2011.25%2012.1232%2011.25%2012.5332V16.6832ZM16.37%2016.6832C16.37%2017.0932%2016.03%2017.4332%2015.62%2017.4332C15.21%2017.4332%2014.87%2017.0932%2014.87%2016.6832V10.4632C14.87%2010.0532%2015.21%209.7132%2015.62%209.7132C16.03%209.7132%2016.37%2010.0532%2016.37%2010.4632V16.6832ZM16.37%207.3032C16.37%207.7132%2016.03%208.0532%2015.62%208.0532C15.21%208.0532%2014.87%207.7132%2014.87%207.3032V6.3332C12.32%208.9532%209.13%2010.8032%205.56%2011.6932C5.5%2011.7132%205.44%2011.7132%205.38%2011.7132C5.04%2011.7132%204.74%2011.4832%204.65%2011.1432C4.55%2010.7432%204.79%2010.3332%205.2%2010.2332C8.57%209.3932%2011.57%207.6232%2013.95%205.1232H12.7C12.29%205.1232%2011.95%204.7832%2011.95%204.3732C11.95%203.9632%2012.29%203.6232%2012.7%203.6232H15.63C15.67%203.6232%2015.7%203.6432%2015.74%203.6432C15.79%203.6532%2015.84%203.6532%2015.89%203.6732C15.94%203.6932%2015.98%203.7232%2016.03%203.7532C16.06%203.7732%2016.09%203.7832%2016.12%203.8032C16.13%203.8132%2016.13%203.8232%2016.14%203.8232C16.18%203.8632%2016.21%203.9032%2016.24%203.9432C16.27%203.9832%2016.3%204.0132%2016.31%204.0532C16.33%204.0932%2016.33%204.1332%2016.34%204.1832C16.35%204.2332%2016.37%204.2832%2016.37%204.3432C16.37%204.3532%2016.38%204.3632%2016.38%204.3732V7.3032H16.37Z'%20fill='white'/%3e%3c/svg%3e"></img>
                    عرض الاحصائيات
                </button>
            </div>

        </motion.div>
    )
}
class statisticsCard{
    constructor(id,titleCard,contentCard){
        this.id = id
        this.titleCard = titleCard
        this.contentCard = contentCard
    }
    statisticsCardFun(){
        return(
            <div>
                <div className='statisticsCard'>
                    <div className='statisticsCard-content'>
                        <p className="praTitle-statisticsCard-content">{this.titleCard}</p>
                        <p className="praContent-statisticsCard-content">{this.contentCard}</p>
                    </div>
                    <img className="img-statisticsCard" src="https://zakat-ecru-gamma.vercel.app/assets/Union%20white-BApVSMxH.png"></img>
                </div>
            </div>
        )
    }
}