const views = document.querySelectorAll('.view');
const tabs = document.querySelectorAll('.tab');
let celebrated = false;

function goTo(index){
  views.forEach((v,i) => v.classList.toggle('active', i === index));
  tabs.forEach((t,i) => t.classList.toggle('active', i === index));
  if(index === 2 && !celebrated){
    celebrated = true;
    burst();
  }
}

function replay(){
  goTo(0);
  celebrated = false;
}

function burst(){
  const layer = document.getElementById('burstLayer');
  const colors = ['#9B5DE0', '#EE6FA6', '#F3C4E0', '#5E2E96'];
  for(let i=0;i<24;i++){
    const el = document.createElement('div');
    el.className = 'spark';
    el.style.left = Math.random()*100 + 'vw';
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDuration = (2.4 + Math.random()*2) + 's';
    el.style.animationDelay = (Math.random()*0.5) + 's';
    layer.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}