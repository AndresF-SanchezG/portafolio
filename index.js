let divContainerText1 = document.getElementById('div-text-container-1');
let divContainerText2 = document.getElementById('div-text-container-2');
let divReadMore = null;
let divMyprojects = null;

function createMyProjectsButton() {
  if (!divMyprojects) {
    divMyprojects = document.createElement('div');
    divMyprojects.textContent = 'My projects';
    divMyprojects.classList.add('main-button2');
    divContainerText1.appendChild(divMyprojects); // Cambiamos insertAdjacentElement('afterend') por appendChild
  }
}

function removeMyProjectsButton() {
  if (divMyprojects) {
    divMyprojects.remove();
    divMyprojects = null;
  }
}

function toggleDivContainerText2() {
  if (window.innerWidth <= 900) {
    divContainerText2.style.display = 'none';

    createMyProjectsButton();

    if (!divReadMore) {
      divReadMore = document.createElement("div");
      let wordReadMore = document.createElement('p');
      wordReadMore.textContent = 'Read More...';
      divReadMore.appendChild(wordReadMore);
      divContainerText1.appendChild(divReadMore); // Cambiamos insertAdjacentElement('afterend') por appendChild
    }
  } else {
    divContainerText2.style.display = 'block';

    removeMyProjectsButton();

    if (divReadMore) {
      divReadMore.remove();
      divReadMore = null;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  toggleDivContainerText2();
});

window.addEventListener('resize', function () {
  toggleDivContainerText2();
});

