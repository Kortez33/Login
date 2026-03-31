import React, { useState } from "react";
import "../css/CardGrid.css";

const cardData = [
  {
    id: 1,
    title: "Előadás",
    description: "60 perces interaktív előadás gyakorlati tippekkel hulladékcsökkentés és fenntartható fogyasztás témájában.",
    hasOfferButton: true,
    buttonText: "Ajánlatot kérek",
    imageUrl: "eloadas.png",
    imageAlt: "Interaktív előadás",
  },
  {
    id: 2,
    title: "Pucolj ki!",
    description: "A Humusz egyedi tervezésű szabadulószobája: csapatépítő és szemléletformáló játék egyben.",
    hasOfferButton: true,
    buttonText: "Ajánlatot kérek",
    imageUrl: "pucolj-ki.png",
    imageAlt: "Pucolj ki! szabadulószoba",
  },
  {
    id: 3,
    title: 'LogiQka',
    description: 'A titkokat rejtő kuka felfedezésre vár! Csapatban teljesíthető inverz szabadulószoba',
    hasOfferButton: true,
    buttonText: 'Ajánlatot kérek',
    imageUrl: 'logiqka.png',
    imageAlt: 'LogiQka játék'
  },
  {
    id: 4,
    title: "Vállalati zöld tréning",
    description: "Élménypedagógia, tapasztalati tanulás, facilitált beszélgetések – egynapos, több alkalomra is bontható környezetvédelmi gyorstalpaló.",
    hasOfferButton: true,
    buttonText: "AJÁNLATOT KÉREK",
    imageUrl: "zold-trening.png",
    imageAlt: "Vállalati zöld tréning",
  },
  {
    id: 5,
    title: "Standolás rendezvényen, irodában",
    description: "Felkészült kollégák és egyedi tervezésű játékok várják a dolgozókat és családjaikat.",
    hasOfferButton: true,
    buttonText: "AJÁNLATOT KÉREK",
    imageUrl: "standolas.png",
    imageAlt: "Standolás rendezvényen, irodában",
  },
  {
    id: 6,
    title: "Nulla Hulladék Tanösvény",
    description: "Vezetett tanösvénytúra a hulladékkezelés és -megelőzés témájában.",
    hasOfferButton: true,
    buttonText: "CSOPORT BEJELENTKEZÉS",
    imageUrl: "nulla-hulladek.png",
    imageAlt: "Nulla Hulladék Tanösvény",
  }
];

const CardGrid = () => {
  const [cards] = useState(cardData);

  const handleOfferRequest = (cardId) => {
    alert(`Ajánlat kérés a ${cardId} kártyához`);
  };

  const renderCard = (card) => {

    const imagePath = card.imageUrl.startsWith('/') ? card.imageUrl : `/images/${card.imageUrl.replace(/^.*[\\/]/, '')}`;

    return (
      <div key={card.id} className="card">
        {card.imageUrl && (
          <div className="card-image-container">
            <img
              src={imagePath}
              alt={card.imageAlt || card.title}
              className="card-image"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        )}
        <div className="card-content">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
          {card.hasOfferButton && (
            <button
              className="offer-button"
              onClick={() => handleOfferRequest(card.id)}
            >
              {card.buttonText || 'Ajánlatot kérek'}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <section>
      <h1 className="cardgrid-title">PROGRAMKÍNÁLATUNK CÉGEKNEK</h1>
      <div className="card-grid">
        {cards.map(renderCard)}
      </div>
    </section>
  );
};

export default CardGrid;