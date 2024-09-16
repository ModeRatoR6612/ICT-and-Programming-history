import events from './events.js';
const cont = document.querySelector('.line');

events.sort((a, b) => a.year - b.year);
for (let i = 0; i < events.length; i++) {
  if (events[i].img == "") {
    cont.innerHTML += `
    <div class="el d-flex">
      <button class="button"></button>
      <div class="hr-top"></div>
      <div class="card invis">
        <a target="_blank" href="${events[i].img}"><img src="${events[i].img}" alt="" class="card-img invis"></a>
        <p>${events[i].info} <a target="_blank" href="${events[i].href}">Википедия...</a></p>
      </div>
      <div class="hr-bottom"></div>
      <p class="fs-5">${events[i].event}</p>
      <p class="fs-2">${events[i].year}</p>
    </div>
    `
  } else{
    cont.innerHTML += `
    <div class="el d-flex">
      <button class="button"></button>
      <div class="hr-top"></div>
      <div class="card invis">
        <a target="_blank" href="${events[i].img}"><img src="${events[i].img}" alt="" class="card-img"></a>
        <p>${events[i].info} <a target="_blank" href="${events[i].href}">Википедия...</a></p>
      </div>
      <div class="hr-bottom"></div>
      <p class="fs-5">${events[i].event}</p>
      <p class="fs-2">${events[i].year}</p>
    </div>
    `
  }
}

const btn = document.querySelectorAll('.button')
btn.forEach(btn => {
  btn.addEventListener('click', ()=>{
    const parent = btn.closest('.el');
    const card = parent.querySelector('.card');
    card.classList.toggle('invis');
  });
});

console.log(events);