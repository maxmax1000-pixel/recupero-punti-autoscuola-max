  const isAudience = location.hash === '#aula';
  const app = document.getElementById('app');
  if(isAudience){ document.body.classList.add('audience'); document.getElementById('modeBadge').textContent='Schermo aula'; }

  const state = {
    screen:'home',
    slideIndex:0,
    revealed:false,
    caseSelection:null,
    poll:{'Velocità':0,'Telefono':0,'Semaforo / precedenza':0,'Cinture':0,'Alcol':0,'Altro':0},
    sceneOpen:false,
    quick:{},
  };
