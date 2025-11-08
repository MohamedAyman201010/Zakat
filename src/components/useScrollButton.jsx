
import { useRef, useState } from "react";
let Counter = 0;
export default function useScrollButtons(totalCards,TypeCards) {
  const containerRef = useRef(null);
  const [opacityLeftBtn, setOpacityLeftBtn] = useState(true);
  const [opacityRightBtn, setOpacityRightBtn] = useState(false);


  const scroll = (direction) => {
    const el = containerRef.current;
    let cardContainer;
    let scrollAmount;
    if(TypeCards == 'donate'){
       cardContainer = el.querySelector(".card-section") || el;
       scrollAmount = cardContainer.clientWidth + 24;
    }else if(TypeCards == 'library'){
       cardContainer = el.querySelector(".libraryCard-section") || el;
       scrollAmount = cardContainer.clientWidth + 24;
    }else if(TypeCards == 'news'){
      cardContainer = el.querySelector(".newsCard-section") || el;
       scrollAmount = cardContainer.clientWidth + 24;
    }else if(TypeCards == 'tabOffice'){
      cardContainer = el.querySelector(".spanTabOffice") || el;
      scrollAmount = cardContainer.clientWidth + 24;
    }
    const newScroll =
      direction === "left"
        ? el.scrollLeft - scrollAmount
        : el.scrollLeft + scrollAmount;

    el.scrollTo({ left: newScroll, behavior: "smooth" });
    console.log('clientWidth:', el.clientWidth);
    console.log('scrollWidth:', el.scrollWidth);

    setTimeout(() => {
      const AllCardsWidth = totalCards * scrollAmount;
      const ViewWidth = el.clientWidth + 256;

      if (direction === "left") {
        Counter += 1;
      } else {
        Counter -= 1;
      }

      const HiddenWidth = Counter * scrollAmount;
      const RemainWidth = AllCardsWidth - HiddenWidth;

      if (direction === "left") {
        if (RemainWidth >= ViewWidth) {
          setOpacityRightBtn(true);
        } else {
          setOpacityLeftBtn(false);
        }
      } else {
        if (HiddenWidth <= 0) {
          setOpacityRightBtn(false);
        } else {
          setOpacityLeftBtn(true);
        }
      }
    }, 100);
  };

  return {
    containerRef,
    opacityLeftBtn,
    opacityRightBtn,
    scroll,
  };
}