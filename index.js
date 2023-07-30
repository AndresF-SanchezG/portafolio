let divContainerText1 = document.getElementById('div-text-container-1');
let divContainerText2 = document.getElementById('div-text-container-2');
let mainButton1 = document.getElementById('main-button1')
let readMore = document.getElementById('readMore-container');
let readLess = document.getElementById('readLess-container')
let divReadMore = null;
let divReadLess = null;
let wordReadLess;

createReadMore(); 
  
         
function toggleDivContainerText2() {
    
  
    if (window.innerWidth <= 900) {
        divContainerText2.style.display = 'none';
        divReadMore.style.display = 'block';
       
          
    } else {
        divContainerText2.style.display = 'block';
        divReadMore.style.display = 'none';
      
    }      
}

function createReadMore() {
    
    if(!divReadMore) {
        divReadMore = document.createElement("div");
        let wordReadMore = document.createElement('p');
        wordReadMore.textContent = 'Read More...';
        divReadMore.appendChild(wordReadMore);
        divContainerText1.appendChild(divReadMore); 
        wordReadMore.setAttribute('id', 'readMore-container');
       
        wordReadMore.addEventListener('click', ()=> {
            divContainerText2.style.display = 'block';
            divReadMore.style.display = 'none'
            createReadLess(); 
        })
    }

    if (divReadLess) {
        divReadLess.remove();
    }
}


function createReadLess() {
    let divReadLess = document.createElement('div');
    let wordReadLess = document.createElement('p');
    wordReadLess.textContent = 'Read Less';
    divReadLess.appendChild(wordReadLess);
    divContainerText2.appendChild(divReadLess);
    wordReadLess.setAttribute('id', 'readLess-container');


    wordReadLess.addEventListener('click', ()=>{
        divContainerText2.style.display = 'none';
        divReadMore.style.display = 'block';
        divReadLess.style.display = 'none';
       
         
    })
}

document.addEventListener('DOMContentLoaded', function () {
  toggleDivContainerText2();
  
});


window.addEventListener('resize', function () {
  toggleDivContainerText2();
});



