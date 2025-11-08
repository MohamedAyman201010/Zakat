

export default function CardFristSection({ text , type}) {
  let link = ""; 

  if (type === "زكاه") {
    link = "/services/zakat";
  } else if (type === "كفارات") {
    link = "/services/Kafarat";
  } else if (type === "صدقات") {
    link = "/services/Sadaqa";
  } else if (type === "مشاريع") {
    link = "/services/Projects";
  } 
  return (
    <div className="service-card hidden-card">
      <div className="card-icon-container">
        <div className="card-icon-wrapper">
          <div className="card-icon">
            <img
              alt="diamond-content"
              src="https://zakat-ecru-gamma.vercel.app/assets/coins-BwyWlNbP.webp"
            />
          </div>
        </div>
      </div>
      <h3 className="card-title" dir="rtl">{text}</h3>
      <a href={link}>
        <button className="donate-btn-fristSec" dir="rtl" tabIndex="0">
            ادفع الان
        </button>
      </a>
    </div>
  );
}
