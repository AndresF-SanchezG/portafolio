let divContainerText1 = document.getElementById('div-text-container-1');
let divContainerText2 = document.getElementById('div-text-container-2');
let mainButton1 = document.getElementById('main-button1')
let readMore = document.getElementById('readMore-container');
let readLess = document.getElementById('readLess-container')
let divReadMore = null;
let divReadLess = null;
         
function toggleDivContainerText2() {
    if (window.innerWidth <= 900) {
        divContainerText2.style.display = 'none';
        createReadMore()
      
      
    }
    
    if(window.innerWidth >= 901) {
        divContainerText2.style.display = 'block';
        divReadMore = null;
        divReadLess = null;  
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
  
        if(window.innerWidth >= 901) {
            if(wordReadMore) {
                wordReadMore.remove();
                wordReadMore = null;
            }
        }    
    
        wordReadMore.addEventListener('click', ()=> {
            divContainerText2.style.display = 'block';
            if(divReadMore) {
                divReadMore.remove();
                divReadMore = null;
            }
            createReadLess()
            
        })

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
        if(divReadLess) {
            divReadLess.remove();
            divReadLess = null;
        }
        createReadMore();  
    })
}

document.addEventListener('DOMContentLoaded', function () {
  toggleDivContainerText2();

});


window.addEventListener('resize', function () {
  toggleDivContainerText2();
  
});



