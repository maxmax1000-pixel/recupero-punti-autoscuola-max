slides.push(
{
      title:'Giallo lampeggiante: chi passa?', duration:'5 min',
      teacher:'Questo è il MODELLO B — RISPOSTA LIBERA. Usalo quando proporre A/B aiuterebbe troppo o trasformerebbe il ragionamento in un quiz. Lascia ragionare la classe liberamente e poi usa “Mostra soluzione”. Specifica che tutte le lanterne lampeggiano giallo e che nell’incrocio non ci sono segnali di precedenza. Il punto didattico è far capire che il giallo lampeggiante non assegna il diritto di passare: impone moderata velocità e particolare prudenza, e si applicano le normali regole di precedenza. Senza diversa segnalazione, si dà precedenza a chi proviene da destra.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 4</span><span class="case-topic">Giallo lampeggiante e precedenza</span></div>
        <div class="case-question">L’incrocio è regolato da semafori, ma tutte le lanterne lampeggiano giallo. Non ci sono segnali di precedenza. A chi do la precedenza?</div>
        <div class="case-instruction">Ragionate liberamente sul caso, poi premiamo il tasto per vedere la soluzione.</div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">Do la precedenza a chi proviene da destra.</div>
          <p class="case-solution-explain">Il giallo lampeggiante non dà via libera e non regola la precedenza. Posso procedere soltanto a moderata velocità e con particolare prudenza, rispettando le normali regole di precedenza. In questo caso, non essendoci segnali di precedenza, vale la precedenza a destra.</p>
          <div class="case-rule"><span class="case-rule-chip">GIALLO LAMPEGGIANTE</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">PRECEDENZA A DESTRA</span></div>
          <div class="case-note"><b>Da ricordare:</b> se nell’incrocio sono presenti STOP, DARE PRECEDENZA o altri segnali che regolano la precedenza, vanno rispettati. Il giallo lampeggiante non li annulla.</div>
          <div class="source teacher-hide">Riferimento normativo: art. 41, comma 17; art. 38, comma 2; art. 145, comma 2, Codice della strada.</div>
        </div>
      </div>`
    },
{
      title:'Pedone e giallo lampeggiante', duration:'5 min',
      teacher:'Questo è ancora MODELLO B — RISPOSTA LIBERA. Non proporre opzioni: lasciali ragionare. Specifica che il semaforo è giallo lampeggiante e che il pedone si trova in attesa in corrispondenza dell’attraversamento pedonale. Il punto da fissare è che il giallo lampeggiante non assegna precedenza al veicolo: si procede con particolare prudenza e si rispettano le normali regole. In presenza di un pedone che si trova sulle strisce o nelle immediate prossimità dell’attraversamento, devo rallentare e dargli precedenza.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 5</span><span class="case-topic">Giallo lampeggiante e attraversamento pedonale</span></div>
        <div class="case-question">L’incrocio è regolato da semaforo. Il semaforo è giallo lampeggiante e in corrispondenza dell’incrocio c’è un pedone in attesa di attraversare. Di chi è la precedenza?</div>
        <div class="case-instruction">Ragionate liberamente sul caso, poi premiamo il tasto per vedere la soluzione.</div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">Ha la precedenza il pedone.</div>
          <p class="case-solution-explain">Con il giallo lampeggiante il semaforo non assegna il diritto di passare: impone di procedere a moderata velocità e con particolare prudenza, rispettando le norme di precedenza. Se il pedone si trova sull’attraversamento o nelle sue immediate prossimità, devo rallentare e all’occorrenza fermarmi per lasciarlo passare.</p>
          <div class="case-rule"><span class="case-rule-chip">GIALLO LAMPEGGIANTE</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">PRECEDENZA AL PEDONE</span></div>
          <div class="case-note"><b>Da ricordare:</b> il giallo lampeggiante non è un “via libera”. Riporta il conducente a una lettura prudente dell’incrocio e degli utenti più vulnerabili.</div>
          <div class="source teacher-hide">Riferimento normativo: art. 41, comma 17, e art. 191, comma 1, Codice della strada.</div>
        </div>
      </div>`
    },
{
      title:'Incrocio regolato o no?', duration:'5 min',
      teacher:'MODELLO A — SCELTA GUIDATA. Specifica che i semafori funzionano normalmente con le fasi rosso-giallo-verde: questa precisazione evita di confondere il caso con il giallo lampeggiante. Fai scegliere REGOLATO o NON REGOLATO, chiedi il motivo e poi mostra la soluzione. Collega subito il risultato ai due casi precedenti: il giallo lampeggiante è l’eccezione, perché non attribuisce la precedenza.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 6</span><span class="case-topic">Incrocio regolato da semafori</span></div>
        <div class="case-question">L’incrocio è dotato di semafori che funzionano normalmente con le fasi rosso, giallo e verde. È da intendersi REGOLATO o NON REGOLATO?</div>
        <div class="case-instruction">Scegli una risposta. La soluzione la scopriamo dopo.</div>
        <div class="case-answers">
          <button class="case-answer ${state.caseSelection==='A'?'selected':''} ${state.revealed?'correct':''}" data-case-select="A"><span class="case-letter">A</span><span>REGOLATO</span></button>
          <button class="case-answer ${state.caseSelection==='B'?'selected':''} ${state.revealed&&state.caseSelection==='B'?'incorrect':''}" data-case-select="B"><span class="case-letter">B</span><span>NON REGOLATO</span></button>
        </div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">REGOLATO.</div>
          <p class="case-solution-explain">Quando i semafori funzionano normalmente, il traffico dell’intersezione è regolato dalle loro indicazioni. Rosso, giallo e verde stabiliscono rispettivamente arresto, preavviso di arresto e via libera secondo le regole previste dal Codice.</p>
          <div class="case-rule"><span class="case-rule-chip">SEMAFORI IN FUNZIONE</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">INCROCIO REGOLATO</span></div>
          <div class="case-note"><b>Attenzione:</b> non confondere questo caso con il giallo lampeggiante. Il giallo lampeggiante non attribuisce la precedenza: si procede con particolare prudenza rispettando le normali regole e la segnaletica presente.</div>
          <div class="source teacher-hide">Riferimento normativo: art. 41, commi 2 e 9-11, e art. 38, comma 2, Codice della strada.</div>
        </div>
      </div>`
    },
{
      title:'Cosa posso fare in un incrocio regolato?', duration:'5 min',
      teacher:'MODELLO B — RISPOSTA LIBERA. Non proporre alternative: vogliamo che emergano spontaneamente le due particolarità. Prima: in prossimità o in corrispondenza di un incrocio regolato il sorpasso può essere consentito, se ricorrono tutte le condizioni di sicurezza e non esistono altri divieti. Seconda: lungo il tratto che conduce a un’intersezione controllata da semafori o agenti è ammessa la marcia per file parallele e, al via libera, deve proseguire anche nell’area dell’intersezione. Per i due ruote evita la regola generica “sono esclusi”: biciclette e ciclomotori devono tenere la corsia di destra; i motocicli non possono passare tra le file affiancate e devono restare nella propria corsia.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 7</span><span class="case-topic">Incrocio regolato: cosa cambia?</span></div>
        <div class="case-question">Agli incroci REGOLATI, cosa posso fare che normalmente non posso fare in quelli NON REGOLATI?</div>
        <div class="case-instruction">Ragionate liberamente: ci sono due risposte importanti. Poi premiamo il tasto per vederle.</div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">Posso sorpassare e posso procedere per file parallele.</div>
          <p class="case-solution-explain"><b>1 · Sorpasso:</b> in prossimità o in corrispondenza delle intersezioni è normalmente vietato, ma può essere effettuato quando la circolazione è regolata da semafori o agenti del traffico, purché la manovra sia sicura e non ricorra un altro specifico divieto.<br><br><b>2 · File parallele:</b> sono ammesse lungo il tratto che conduce a un’intersezione controllata da semafori o agenti e, al segnale di via libera, devono continuare anche nell’area di manovra dell’intersezione.</p>
          <div class="case-rule"><span class="case-rule-chip">INCROCIO REGOLATO</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">SORPASSO*</span><span class="case-rule-arrow">+</span><span class="case-rule-chip">FILE PARALLELE</span></div>
          <div class="case-note"><b>*Attenzione:</b> “sorpasso consentito” non significa “sorpasso sempre possibile”: restano validi tutti gli altri divieti e le condizioni di sicurezza.<br><br><b>Due ruote:</b> non è corretto escluderli tutti dalla marcia per file parallele. Biciclette e ciclomotori devono tenere la corsia di destra e il margine destro; i motocicli devono rimanere nella propria corsia e non possono avanzare tra due file di veicoli affiancati.</div>
          <div class="source teacher-hide">Riferimenti normativi: art. 144, commi 1 e 2, e art. 148, commi 11 e 12, lettera d), Codice della strada; art. 346, commi 1 e 2, Regolamento di esecuzione.</div>
        </div>
      </div>`
    },
{
      title:'Lanterne dei passaggi a livello', duration:'4 min',
      teacher:'MODELLO B — RISPOSTA LIBERA con immagine. Mostra solo il dettaglio delle lanterne, senza contestualizzare. Chiedi dove si possono trovare e lascia emergere più risposte. La soluzione completa comprende: passaggi a livello con semibarriere; passaggi a livello senza barriere o semibarriere; accessi a ponti mobili; accessi ai pontili d’imbarco delle navi traghetto; strade dove il traffico deve essere arrestato per l’avvicinarsi di aeromobili in atterraggio o decollo. Il concetto da fissare è che sono lanterne semaforiche speciali, non esclusive dei passaggi a livello.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 8</span><span class="case-topic">Lanterne semaforiche speciali</span></div>
        <div class="case-question">Dove posso trovare queste lanterne semaforiche?</div>
        <div class="case-instruction">Osserva la foto, poi rispondi liberamente. Dopo premiamo il tasto per vedere la soluzione.</div>
        <div class="case-media"><img class="case-photo" src="${LANTERNE_IMG}" alt="Dettaglio di due lanterne semaforiche rosse lampeggianti"><div class="case-photo-caption">Dettaglio fotografico: osserva soltanto il dispositivo luminoso.</div></div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">In cinque situazioni principali.</div>
          <p class="case-solution-explain"><b>1 · Passaggi a livello con semibarriere.</b><br><b>2 · Passaggi a livello senza barriere o semibarriere</b>, dove il dispositivo può essere installato ed è obbligatorio quando la visibilità è insufficiente.<br><b>3 · Accessi ai ponti mobili.</b><br><b>4 · Accessi ai pontili di imbarco delle navi traghetto.</b><br><b>5 · Strade sulle quali è necessario arrestare il traffico all’avvicinarsi di aeromobili in fase di atterraggio o di decollo.</b></p>
          <div class="case-rule"><span class="case-rule-chip">DUE LUCI ROSSE ALTERNATE</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">PERICOLO / ARRESTO TEMPORANEO DEL TRAFFICO</span></div>
          <div class="case-note"><b>Da ricordare:</b> non sono quindi “le luci del passaggio a livello” in senso esclusivo. Sono <b>lanterne semaforiche speciali</b> utilizzate anche in altri punti nei quali il traffico deve essere arrestato temporaneamente per motivi di sicurezza.</div>
          <div class="source teacher-hide">Riferimenti normativi: art. 41, comma 1, lett. l), e art. 44, commi 2 e 2-bis, Codice della strada; art. 166, commi 1, lett. b), e 2, Regolamento di esecuzione.</div>
        </div>
      </div>`
    }
);
