// Grafica approvata per la seconda slide introduttiva.
if (slides[3] && slides[3].title === 'La differenza è questa') {
  slides[3].html = () => `<div style="max-width:1260px;margin:0 auto;padding-top:2px">
    <div style="display:inline-flex;padding:8px 14px;border:1px solid #356b49;border-radius:14px;background:rgba(85,216,135,.08);font-weight:900;color:#baf5cc;margin-bottom:12px">2 di 3</div>
    <h1 style="font-size:clamp(44px,4.1vw,66px);line-height:1.02;margin:0 0 24px">La differenza è questa</h1>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:26px">
      <section style="border:1.5px solid #e4514b;border-radius:24px;background:linear-gradient(155deg,rgba(58,18,17,.34),rgba(11,14,13,.96) 55%);padding:20px 30px 24px;min-height:360px">
        <div style="font-size:27px;font-weight:950;color:#ff5a50;margin-bottom:18px">MUOVERE UN VEICOLO</div>
        <div style="display:grid;gap:14px;font-size:22px;line-height:1.25">${['partire','accelerare','frenare','sterzare','parcheggiare','arrivare dove serve'].map(t=>`<div>◉&nbsp; ${t}</div>`).join('')}</div>
      </section>
      <section style="border:1.5px solid #55d787;border-radius:24px;background:linear-gradient(155deg,rgba(16,55,30,.42),rgba(9,15,12,.96) 58%);padding:20px 30px 24px;min-height:360px">
        <div style="font-size:27px;font-weight:950;color:#69df8d;margin-bottom:18px">SAPER GUIDARE</div>
        <div style="display:grid;gap:14px;font-size:21px;line-height:1.3">${['conoscere le norme','leggere la strada e la situazione','prevedere i rischi e gli altri utenti','adattare il comportamento','guidare in sicurezza anche quando nessuno controlla'].map(t=>`<div>◉&nbsp; ${t}</div>`).join('')}</div>
      </section>
    </div>
    <div style="margin-top:24px;border:1.5px solid #62d884;border-radius:22px;background:linear-gradient(180deg,rgba(12,29,18,.92),rgba(7,16,11,.96));padding:18px 28px 20px;text-align:center;font-size:28px;line-height:1.3">Molti conducenti sanno spostare un veicolo.<br><strong style="color:var(--accent);font-size:36px">Non tutti sanno davvero guidare.</strong></div>
  </div>`;
}
