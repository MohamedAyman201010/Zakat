import '../css/FristSection.css'
import CardFristSection from '../components/CardFristSection'
import ayahImg from '../photos/Aya-DC9w-LaJ.svg'
import { motion } from "framer-motion";

export default function FristSection() {
  
  return (
    <motion.div 
    className='ayah-section'
    initial={{ opacity: 0, y: 100 }}          
    whileInView={{ opacity: 1, y: 0 }}     
    transition={{ duration: 1.1, ease: "easeOut" }} 
    viewport={{ once: false, amount: 0.3 }}
    >
      <div className="ayah-container">
        <div className="ayah-text">
          <img src={ayahImg}></img>
        </div>
 
        <div className="cards-grid">
          <CardFristSection text="أخرج زكاتك" type="زكاه"/>
          <CardFristSection text="الصدقات" type="صدقات"/>
          <CardFristSection text="الكفارات والفدية والنذور" type="كفارات"/>
          <CardFristSection text="المشاريع" type="مشاريع"/>
        </div>
      </div>
    </motion.div>
  ); 
}
