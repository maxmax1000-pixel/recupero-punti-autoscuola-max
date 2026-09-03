# Autoscuola Max — Standard grafico e impaginazione

QUESTE REGOLE SONO APPROVATE E PERMANENTI SALVO MODIFICA ESPLICITA DELL'UTENTE.

Devono essere applicate automaticamente anche alle future slide.

## 1. Identita visiva
Slide di riferimento principale:

`Saper guidare o saper soltanto muovere un veicolo da punto A a punto B`

Stile generale:
- moderno;
- pulito;
- professionale;
- forte leggibilita a distanza;
- pensato per proiezione in aula;
- formato 16:9;
- sfondo scuro;
- testo prevalentemente bianco;
- verde come colore principale;
- rosso per opposizioni, errori o contrasti funzionali;
- riquadri con bordi arrotondati;
- grafica coerente tra le varie slide.

## 2. Sfondo stradale
Lo sfondo stradale e parte integrante dello stile del blocco introduttivo.

Deve essere presente e percepibile.

Non deve essere cancellato completamente da overlay neri.

Deve risultare:
- scuro;
- elegante;
- non invasivo;
- leggibile dietro ai contenuti;
- sufficientemente visibile da dare profondita alla slide.

La leggibilita del testo rimane prioritaria.

Questa regola deve essere applicata automaticamente anche alle future slide introduttive.

## 3. Titoli
I titoli devono essere:
- grandi;
- leggibili da lontano;
- centrati o visivamente centrati.

Questo non significa centrare automaticamente tutti i testi della slide.

I testi narrativi lunghi devono usare l'allineamento piu leggibile.

Regola permanente:

tra titolo e inizio del contenuto deve esserci uno spazio di respiro chiaramente percepibile.

Il titolo non deve sembrare attaccato al sottotitolo o al primo riquadro.

Allo stesso tempo non devono esserci enormi zone vuote inutili.

Obiettivo:

titolo chiaramente distinto e contenuto ben distribuito.

## 4. Utilizzo dello spazio
Ogni slide deve sfruttare bene l'intera superficie disponibile.

Evitare:
- contenuti tutti raggruppati nella parte alta;
- enormi spazi vuoti sotto;
- contenuti troppo compressi;
- riquadri piccoli in mezzo a molto spazio inutilizzato;
- scritte inutilmente piccole;
- grandi distanze casuali tra gli elementi.

Quando c'e spazio disponibile:
- aumentare la leggibilita;
- aumentare il respiro dei riquadri;
- aumentare padding;
- migliorare interlinea;
- distribuire gli elementi verticalmente;
- utilizzare meglio altezza e larghezza.

Regola fondamentale:

il criterio di successo non e soltanto "tutto entra nello schermo".

La slide deve risultare anche visivamente ben impaginata.

## 5. Modalita aula / allievi
La modalita `Apri schermo aula` e la visualizzazione destinata agli allievi.

Le slide devono essere realmente centrate.

Regole permanenti:
- margine sinistro e destro visivamente equivalenti;
- nessuno spostamento sistematico verso destra;
- nessuno spostamento sistematico verso sinistra;
- utilizzo corretto della larghezza;
- utilizzo corretto dell'altezza;
- nessun ridimensionamento eccessivo quando esiste spazio disponibile;
- nessun overflow;
- nessun taglio;
- nessuno scroll indesiderato.

Una nuova slide futura deve beneficiare automaticamente di questo comportamento senza correzioni manuali.

## 6. Modalita docente
La modalita docente deve sfruttare bene lo spazio disponibile.

Non deve:
- raggruppare tutti i contenuti nella parte alta;
- lasciare enormi zone inutilizzate sotto;
- rendere inutilmente piccoli i testi.

Deve:
- distribuire bene i contenuti verticalmente;
- mantenere alta leggibilita;
- adattarsi allo schermo;
- mantenere tutte le protezioni contro overflow, tagli e sovrapposizioni;
- evitare scroll indesiderato.

Preservare la robustezza del sistema di adattamento esistente.

## 7. Famiglie di slide e template
Preferire template generici e riutilizzabili.

Famiglie minime:
1. apertura / hero;
2. confronto;
3. blocchi / elenchi / riflessione;
4. domanda / risposta / soluzione;
5. progressive reveal;
6. altri template realmente presenti nel progetto.

Template realmente presenti nella V2:
- `DiscussionSlide`;
- `ComparisonSlide`;
- `ABCaseSlide`;
- `FreeResponseSlide`;
- `SolutionSlide`;
- `ClickableStatementsSlide`;
- `RevealQuestionSlide`;
- `ObservationSlide`;
- `DoubleStandardSlide`;
- `MessageCardsSlide`;
- `ProgressiveRevealSlide`;
- `ImageTextSlide`.

Non risolvere problemi generali con CSS fragile legato all'ID di una singola slide quando e possibile correggere il template comune.

## 8. Test visivi
Per modifiche importanti all'impaginazione verificare almeno:

V2 audience:
- 1600x900;
- 1920x1080.

Programma completo aula:
- 1600x900;
- 1920x1080.

Programma completo docente:
- 1600x900;
- 1366x768.

Viewport compatto:
- 1024x600 quando previsto.

Controllare:
- centratura;
- leggibilita;
- distribuzione verticale;
- overflow;
- tagli;
- sovrapposizioni;
- scroll.

Regola permanente:

un test automatico PASS non e sufficiente per approvare l'estetica.

Gli screenshot devono essere controllati anche visivamente prima della pubblicazione quando il lavoro riguarda layout o grafica.

## 9. Testi approvati
Non modificare testi approvati per risolvere un problema grafico.

Prima intervenire su:
- template;
- spazi;
- dimensioni;
- padding;
- distribuzione;
- struttura visiva.

Cambiare un testo soltanto su richiesta esplicita dell'utente.

## 10. Applicazione alle future slide
Ogni nuova slide introduttiva deve partire da questi standard.

Prima di creare soluzioni speciali, verificare se il problema riguarda:
- il template;
- `SlideFrame`;
- la modalita aula;
- la modalita docente;
- il pacchetto legacy comune.

Le eccezioni devono essere motivate e autorizzate quando hanno impatto ampio.
