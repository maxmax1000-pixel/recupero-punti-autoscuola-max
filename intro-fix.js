// Override robusto della prima slide introduttiva: usa un file immagine binario verificato.
if (slides[2] && slides[2].title === 'Saper guidare o muovere un veicolo?') {
  slides[2].html = () => `<div style="position:relative;min-height:610px;overflow:hidden;border-radius:24px;background:#080d0b">
    <div style="position:absolute;inset:0;background-image:url('intro-driving-final.webp?v=0b32c2b7');background-size:cover;background-position:center center;background-repeat:no-repeat"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,10,8,.98) 0%,rgba(5,10,8,.94) 34%,rgba(5,10,8,.72) 52%,rgba(5,10,8,.26) 72%,rgba(5,10,8,.08) 100%),linear-gradient(0deg,rgba(5,10,8,.36),rgba(5,10,8,.04) 55%)"></div>
    <div style="position:relative;z-index:1;display:flex;flex-direction:column;justify-content:center;min-height:610px;width:min(760px,58%);padding:18px 16px 18px 18px">
      <div style="display:inline-flex;align-self:flex-start;padding:8px 14px;border:1px solid #356b49;border-radius:14px;background:rgba(85,216,135,.08);font-weight:900;color:#baf5cc;margin-bottom:20px">1 di 3</div>
      <h1 style="font-size:clamp(42px,4vw,68px);line-height:1.03;margin:0 0 22px">Saper guidare o saper soltanto <span class="accent">muovere</span> un veicolo da punto A a punto B</h1>
      <div style="height:3px;width:145px;background:var(--accent);border-radius:99px;margin:0 0 26px"></div>
      <div style="border:1px solid #34413c;background:rgba(7,13,10,.82);border-radius:20px;padding:22px 26px;font-size:24px;line-height:1.45;backdrop-filter:blur(2px)">
        Tra il saper guidare ed essere il classico <span class="accent" style="font-weight:900">portatore sano di veicoli</span>, c’è una grande differenza.<br><br><strong class="accent">Qual è secondo te?</strong>
      </div>
      <div style="display:flex;align-items:center;gap:16px;margin-top:24px;font-size:24px;font-weight:750"><span style="font-size:36px">💬</span><span>Dai pure liberamente la tua opinione.</span></div>
    </div>
  </div>`;
}
