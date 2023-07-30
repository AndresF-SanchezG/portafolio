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

    if(!divReadMore) {
        divReadMore = document.createElement("div");
        let wordReadMore = document.createElement('p');
        wordReadMore.textContent = 'Read More...';
        divReadMore.appendChild(wordReadMore);
        divContainerText1.appendChild(divReadMore); 
        wordReadMore.setAttribute('id', 'readMore-container');
        
        wordReadMore.addEventListener('click', ()=> {
            divContainerText2.style.display = 'block';
            createReadLess()
            divReadMore.remove();
        })

     

        

    } 
}
    
    if(window.innerWidth >= 901) {
        divContainerText2.style.display = 'block';
        
        
        
     
        if(divReadMore) {
            divReadMore.remove();
            divReadMore = null;
        }


      
        
       
        }

    }




//     wordReadMore.addEventListener('click', ()=> {
//     divContainerText2.style.display = 'block';
//     divReadMore.remove(); 
//     if(divReadMore) {
//         divReadMore.remove();
//         divReadMore = null;

//     }       
//     })
    
//     } else {
//     divContainerText2.style.display = 'block';
//     divReadMore.remove();
//     divReadMore = null; 
//     wordReadLess.remove();
//     wordReadLess = null;
 
//   }
  



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
            wordReadLess = null;
        }
    })
 
}

document.addEventListener('DOMContentLoaded', function () {
  toggleDivContainerText2();

});


window.addEventListener('resize', function () {
  toggleDivContainerText2();
  
});



