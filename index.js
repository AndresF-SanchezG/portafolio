let divContainerText1 = document.getElementById('div-text-container-1');
let divContainerText2 = document.getElementById('div-text-container-2');
let mainButton1 = document.getElementById('main-button1')
let readMore = document.getElementById('readMore-container')
let divReadMore = null;
         
function toggleDivContainerText2() {
  if (window.innerWidth <= 900) {
    divContainerText2.style.display = 'none';

    if (!divReadMore) {
        divReadMore = document.createElement("div");
        let wordReadMore = document.createElement('p');
        wordReadMore.textContent = 'Read More...';
        divReadMore.appendChild(wordReadMore);
        divContainerText1.appendChild(divReadMore); 
        wordReadMore.setAttribute('id', 'readMore-container')
        wordReadMore.addEventListener('click', ()=> {
        divContainerText2.style.display = 'block';
        divReadMore.remove();
        createReadLess();
        
    })
    
    }
  } else {
    divContainerText2.style.display = 'block';

    if (divReadMore) {
      divReadMore.remove();
      divReadMore = null;
    }

  

   
  }

}
function createReadLess() {
    let divReadLess = document.createElement('div');
    let wordReadLess = document.createElement('p');
    wordReadLess.textContent = 'Read Less';
    divReadLess.appendChild(wordReadLess);
    divContainerText2.appendChild(divReadLess);
   
}
document.addEventListener('DOMContentLoaded', function () {
  toggleDivContainerText2();
  
});

window.addEventListener('resize', function () {
  toggleDivContainerText2();
  
  
 
});



