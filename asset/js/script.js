const navbar = document.querySelector('.navbar');
const btnSmall = document.querySelector('.navbar #small');
const photo = document.querySelector('.photo');

btnSmall.onclick = ()=>{
  navbar.classList.toggle('active');
}

for (let i = 0; i < foto.length; i++) {
  photo.innerHTML += `<div class="list"><img src="asset/img/${foto[i].source}" /></div>`;
}