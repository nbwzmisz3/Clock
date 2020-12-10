const zegar = document.querySelector('.clock');

const tick = () => {

  const now = new Date();

  const h = now.getHours();
  let min = now.getMinutes().toString();
  let sec = now.getSeconds().toString();

  if(min.length == 1) min = '0' + min;
  if(sec.length == 1) sec = '0' + sec;

  const html = `
  <span>${h}</span> : 
  <span>${min}</span> : 
  <span>${sec}</span>
  `;
  zegar.innerHTML = html;
}

setInterval(tick, 1000);