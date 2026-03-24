import React from 'react';
import '../css/ValueSection.css';

const ValueSection = () => (
  <>
    <section className="value-section">
      <div className="value-text">
        <h2>Értéket teremtünk – csatlakozz!</h2>
        <p>
          Az értékteremtés, a tudásátadás számunkra misszió. Hisszük, hogy a környezetvédelemről, a „zero waste” koncepciójáról, a komposztálásról és a szelektív hulladékgyűjtésről szórakozva is lehet tanulni. Interaktív előadásainkon, tréningjeinken, csapatépítő programjainkon és kitelepüléseinken a résztvevőkkel együtt keressük a választ napjaink globális problémáira. Arra, hogyan szállhatunk szembe egyénileg és rendszerszinten korunk nyomasztó ökológiai kihívásaival: a klímaváltozással, az élőhelyek eltűnésével, a társadalmi egyenlőtlenségek növekedésével. A cselekvő remény útját javasoljuk mindenkinek, amelyen járva te magad is utat mutathatsz kollégáidnak, családtagjaidnak!
        </p>
        <button className="value-button">Lapozható kiadványunk</button>
      </div>

      <div className="value-image">
        <img src="/images/value-section.png" alt="Kiadvány bemutató" />
      </div>
    </section>

    <section className="quotes-section">
      <h2>Rólunk mondták</h2>
      <p className="quote q1">„A jövőnk miatt mindenkinek el kellene juttatni!”</p>
      <p className="quote q2">„Kisebb csapatépítőnek is tökéletes a mellett, hogy rávilágít a hulladékgazdálkodás gondjaira”</p>
      <p className="quote q3">„Szórakoztató, elgondolkodtató közösségépítő”</p>
      <p className="quote q4">„Nagyon jó a tartalom, gondolatébresztő, segítő ötleteket hallottam. Megindította a beszélgetést, nem is kellett ösztökélni a résztvevőket”</p>
      <p className="quote q5">„Borzasztó érdekes program, rájön az ember, hogy milyen egyszerű módon, apró dolgokkal is már tehetünk a környezetünkért”</p>
      <p className="quote q6">„Segít elindulni azon az úton hogy kevesebb szemetet termeljünk egyéni szinten”</p>
      <p className="quote q7">„Nagyon felkészült és nagy tudású szakember, jó volt őt hallgatni.”</p>
      <p className="quote q8">„Szemléletformáló, figyelemfelkeltő, érdekes és aktuális”</p>
      <p className="quote q9">„Azért ajánlanám másoknak is a programot, hogy jobban megértsék a szelektív hulladékgyűjtés fontosságát, az újrahasznosítás lehetőségét, és hogy odafigyeléssel csökkenteni tudjuk a káros anyagok bejutását a földbe, vízbe, levegőbe.”</p>
    </section>
  </>
);

export default ValueSection;