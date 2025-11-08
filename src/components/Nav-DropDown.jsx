export default function NavDropDown({ items = [], isOpen, className, type }) {
  var keyItem = 1 
  return (
    <div
      className={`opportunities-dropdown ${isOpen ? className : ""}`}
      style={{ backgroundColor: "transparent" }} 
    >
      <div className="w-screen flex items-center justify-center gap-12 px-6 py-6">
        {items.map((item, i) => (
            <a key={i} className="link-opportunities-dropdown" href={item.href}>
              <div className="link-projects-div">
                <div    className={`img-projects-div ${type === "opportunities" ? "rotate-45" : ""}`}>
                  <img
                    src={item.imgSrc}
                    alt={item.label}
                  />
                </div>
                <span className="span-img-projects">{item.label}</span>
              </div>
            </a>
        ))}
      </div>
    </div>
  );
  {keyItem = keyItem + 1}
}
