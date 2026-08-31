const slides = [];
slides.push(
{
      title:'Benvenuti', duration:'3 min',
      teacher:'Apri senza fare subito teoria. Chiedi: “Secondo voi questo corso serve a recuperare punti o a non perderne più?” Lascia 2–3 risposte. Poi chiarisci che oggi si parte dalla segnaletica che vediamo ogni giorno.',
      html:()=>`<div class="kicker">Giorno 1 · Ora 1 · Segnaletica stradale</div>
        <h1>Sei sicuro di conoscere ancora la strada?</h1>
        <p class="lead">Non rifacciamo l’esame della patente. Partiamo dalle situazioni che incontriamo ogni giorno e vediamo <span class="accent">cosa comanda davvero</span>.</p>
        <div class="pillrow"><span class="pill">🕒 60 minuti</span><span class="pill">💬 Discussione</span><span class="pill">👀 Casi visivi</span><span class="pill">✓ Soluzioni ragionate</span></div>
        <div class="callout"><strong>Regola della lezione</strong><p>Prima si decide. Poi si scopre la risposta. La spiegazione arriva per ultima.</p></div>`
    },
{
      title:'Perché siete qui?', duration:'4 min',
      teacher:'Sondaggio informale, non serve raccogliere dati personali. Clicca una volta per ogni partecipante che indica una categoria. Ti servirà più avanti per scegliere gli esempi del corso.',
      html:()=>`<div class="kicker">Partiamo dalla classe</div><h2>Quale comportamento vi ha portato qui?</h2>
        <p class="muted">Non servono dettagli personali: ci interessa soltanto capire quali situazioni vale la pena approfondire.</p>
        <div class="poll-grid">${Object.entries(state.poll).map(([k,v])=>`<button class="pollbtn" data-poll="${k}"><span class="poll-label">${k}</span><span class="count">${v}</span></button>`).join('')}</div>
        <div class="poll-summary">Totale indicazioni registrate: <strong style="color:#fff">${Object.values(state.poll).reduce((a,b)=>a+b,0)}</strong> · Clic destro su una voce per diminuire.</div>`
    },
{
      title:'Chi comanda?', duration:'5 min',
      teacher:'Questo è il MODELLO A — SCELTA GUIDATA. Usalo quando A e B sono entrambe plausibili e non anticipano troppo la soluzione. Fai votare A o B, lascia motivare una o due persone, poi premi “Mostra soluzione”. La risposta corretta viene evidenziata solo in quel momento. Regola da fissare: il semaforo prevale sul segnale verticale.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 1</span><span class="case-topic">La gerarchia dei segnali</span></div>
        <div class="case-question">Il semaforo è verde, ma sotto il semaforo c’è il segnale di STOP. Cosa fai?</div>
        <div class="case-instruction">Scegli una risposta. La soluzione la scopriamo dopo.</div>
        <div class="case-answers">
          <button class="case-answer ${state.caseSelection==='A'?'selected':''} ${state.revealed?'correct':''}" data-case-select="A"><span class="case-letter">A</span><span>Vado.</span></button>
          <button class="case-answer ${state.caseSelection==='B'?'selected':''} ${state.revealed&&state.caseSelection==='B'?'incorrect':''}" data-case-select="B"><span class="case-letter">B</span><span>Mi fermo.</span></button>
        </div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">Passo lo stesso.</div>
          <p class="case-solution-explain">Il semaforo prevale sul segnale verticale di STOP. Con il verde posso proseguire, naturalmente verificando che l’incrocio sia libero e sicuro.</p>
          <div class="case-rule"><span class="case-rule-chip">SEMAFORO VERDE</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">SEGNALE DI STOP</span></div>
          <div class="source teacher-hide">Riferimento normativo: art. 38, comma 2, e art. 41, comma 9, Codice della strada.</div>
        </div>
      </div>`
    },
{
      title:'Pedone in attesa', duration:'5 min',
      teacher:'Mantieni la stessa sequenza del Caso 1: fai scegliere A o B, chiedi il motivo, poi premi “Mostra soluzione”. Il caso è volutamente definito come attraversamento pedonale semaforizzato e veicolo che prosegue diritto, così non si crea la falsa regola “verde per me = sempre rosso per il pedone”. Ricorda che, nelle svolte o quando al pedone è data contemporaneamente via libera, il conducente deve dargli precedenza.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 2</span><span class="case-topic">Semaforo e attraversamento pedonale</span></div>
        <div class="case-question">Il semaforo è verde e proseguo diritto. In corrispondenza c’è un attraversamento pedonale semaforizzato e un pedone è fermo in attesa. Cosa fai?</div>
        <div class="case-instruction">Scegli una risposta. La soluzione la scopriamo dopo.</div>
        <div class="case-answers">
          <button class="case-answer ${state.caseSelection==='A'?'selected':''} ${state.revealed?'correct':''}" data-case-select="A"><span class="case-letter">A</span><span>Proseguo.</span></button>
          <button class="case-answer ${state.caseSelection==='B'?'selected':''} ${state.revealed&&state.caseSelection==='B'?'incorrect':''}" data-case-select="B"><span class="case-letter">B</span><span>Mi fermo e lo faccio attraversare.</span></button>
        </div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">Proseguo.</div>
          <p class="case-solution-explain">Nel caso rappresentato l’attraversamento è regolato da semaforo: io procedo diritto con luce verde, mentre il pedone è ancora fermo in attesa del proprio via libera. Posso quindi proseguire, mantenendo comunque la normale prudenza.</p>
          <div class="case-rule"><span class="case-rule-chip">VERDE PER LA MIA CORRENTE</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">PROSEGUO DIRITTO</span></div>
          <div class="case-note"><b>Attenzione:</b> non significa che “verde per me = sempre rosso per il pedone”. Se svolto o al pedone è data contemporaneamente via libera, devo dargli precedenza.</div>
          <div class="source teacher-hide">Riferimento normativo: art. 41, commi 5 e 9, e art. 191, comma 1, Codice della strada.</div>
        </div>
      </div>`
    },
{
      title:'Svolta a destra: chi passa?', duration:'5 min',
      teacher:'Metti questo caso subito in contrasto con il precedente. Specifica che anche il pedone ha via libera: solo così la domanda non è ambigua. Fai votare A o B, chiedi perché il verde del veicolo non basta a risolvere la situazione, poi mostra la soluzione. Regola da fissare: quando svolto devo controllare l’attraversamento della strada in cui mi immetto e dare precedenza al pedone che ha diritto di attraversare.',
      html:()=>`<div class="case-template">
        <div class="case-head"><span class="case-number">Caso 3</span><span class="case-topic">Svolta a destra e pedoni</span></div>
        <div class="case-question">Sono a un incrocio semaforico. Ho il verde e devo svoltare a destra. Sulla strada in cui mi immetto c’è un pedone in attesa sull’attraversamento e anche lui ha via libera. Di chi è la precedenza?</div>
        <div class="case-instruction">Scegli una risposta. La soluzione la scopriamo dopo.</div>
        <div class="case-answers">
          <button class="case-answer ${state.caseSelection==='A'?'selected':''} ${state.revealed&&state.caseSelection==='A'?'incorrect':''}" data-case-select="A"><span class="case-letter">A</span><span>La mia: ho il verde.</span></button>
          <button class="case-answer ${state.caseSelection==='B'?'selected':''} ${state.revealed?'correct':''}" data-case-select="B"><span class="case-letter">B</span><span>Del pedone.</span></button>
        </div>
        <div class="case-reveal-row"><button class="case-reveal-btn" data-case-reveal ${state.revealed?'disabled':''}><span class="case-reveal-icon">✓</span>${state.revealed?'Soluzione mostrata':'Mostra soluzione'}</button></div>
        <div class="case-solution ${state.revealed?'visible':''}" id="reveal">
          <div class="case-solution-label">Risposta esatta</div>
          <div class="case-solution-answer">Ha la precedenza il pedone.</div>
          <p class="case-solution-explain">Il verde mi consente di entrare nell’incrocio, ma non mi dà una precedenza assoluta. Se svolto a destra e il pedone ha contemporaneamente via libera sull’attraversamento che devo attraversare, devo rallentare e lasciarlo passare.</p>
          <div class="case-rule"><span class="case-rule-chip">SVOLTO A DESTRA</span><span class="case-rule-arrow">›</span><span class="case-rule-chip">DO PRECEDENZA AL PEDONE</span></div>
          <div class="case-note"><b>Da ricordare:</b> il semaforo verde autorizza il movimento, ma durante la svolta devo comunque rispettare le precedenze che interferiscono con la mia traiettoria.</div>
          <div class="source teacher-hide">Riferimento normativo: art. 41, comma 9, e art. 191, comma 1, Codice della strada.</div>
        </div>
      </div>`
    }
);
