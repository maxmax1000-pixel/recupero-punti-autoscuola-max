slides.push(
{
  title:'Come funziona il semaforo per corsie reversibili?', duration:'4 min',
  teacher:'MODELLO B — RISPOSTA LIBERA con scena reale approvata. Fai osservare che la corsia sotto la X rossa è utilizzata dal traffico proveniente dal senso opposto; la freccia gialla obliqua impone di abbandonare la corsia e spostarsi nella direzione indicata; la freccia verde consente di percorrere la corsia sottostante. Non anticipare la spiegazione: mostra la soluzione solo dopo la discussione.',
  html:()=>`<div class="case-template">
    <div class="case-head"><span class="case-number">Caso 10</span><span class="case-topic">Funzionamento corsie reversibili</span></div>
    <div class="case-question">Come funziona il semaforo per corsie reversibili?</div>
    <div class="case-instruction">Osserva la scena e rispondi liberamente. La soluzione compare solo dopo aver premuto il tasto.</div>
    <div class="case-media" style="display:flex;justify-content:center">
      <img src="reversibili-scene-approved.webp" alt="Funzionamento reale delle corsie reversibili con X rossa, freccia gialla obliqua verso destra e freccia verde" style="display:block;width:min(1180px,100%);height:auto;max-height:430px;object-fit:contain;border-radius:20px;box-shadow:0 16px 42px rgba(0,0,0,.22)">
    </div>
    <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
    <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
      <div class="case-solution-label">Risposta</div>
      <div class="case-solution-answer">Ogni lanterna vale per la corsia sottostante.</div>
      <p class="case-solution-explain"><b>X ROSSA:</b> vieta di percorrere la corsia sottostante; in una corsia reversibile quella corsia può essere assegnata al traffico proveniente dal senso opposto.<br><br><b>FRECCIA GIALLA OBLIQUA:</b> indica che devo abbandonare la corsia e spostarmi nella direzione indicata dalla freccia.<br><br><b>FRECCIA VERDE:</b> consente di percorrere la corsia sottostante.</p>
      <div class="case-rule"><span class="case-rule-chip">X ROSSA = NON ENTRO</span><span class="case-rule-arrow">·</span><span class="case-rule-chip">GIALLA = MI SPOSTO</span><span class="case-rule-arrow">·</span><span class="case-rule-chip">VERDE = POSSO TRANSITARE</span></div>
      <div class="source teacher-hide">Riferimenti normativi: art. 41, commi 7 e 16, Codice della strada; art. 164 Regolamento di esecuzione.</div>
    </div>
  </div>`
}
);
