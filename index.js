let divContainerText1 = document.getElementById('div-text-container-1');
let divContainerText2 = document.getElementById('div-text-container-2');
let mainButton1 = document.getElementById('main-button1')
let readMore = document.getElementById('readMore-container');
let readLess = document.getElementById('readLess-container')
let divReadMore = null;
let divReadLess = null;
let wordReadLess;

function toggleDivContainerText2() {
    if(window.innerWidth <= 900) {
        createReadMore();
        
        divContainerText2.style.display = 'none';
        divReadMore.style.display = 'block';
        if (divReadLess) {
            divReadLess.remove();
            divReadLess=null;
        }
        
    } else {
        divContainerText2.style.display = 'block';
       
        if (divReadLess) {
            divReadMore.style.display = 'none'
        }
        
    }

}

document.addEventListener('DOMContentLoaded', function () {
  toggleDivContainerText2();
  
});

window.addEventListener('resize', function () {
  toggleDivContainerText2();
});




function createReadMore() {
    
    if(!divReadMore) {
        divReadMore = document.createElement("div");
        let wordReadMore = document.createElement('p');
        wordReadMore.textContent = 'Read More...';
        divReadMore.appendChild(wordReadMore);
        divContainerText1.appendChild(divReadMore); 
        wordReadMore.setAttribute('id', 'readMore-container');
        clickReadMore();
        createReadLess();
        
      
    }  
    
}

function clickReadMore() {
    divReadMore.addEventListener('click', ()=> {
        divContainerText2.style.display = 'block';
        divReadMore.style.display = 'none';
    })

}

function createReadLess() {
    let divReadLess = document.createElement('div');
    let wordReadLess = document.createElement('p');
    wordReadLess.textContent = 'Read Less';
    divReadLess.appendChild(wordReadLess);
    divContainerText2.appendChild(divReadLess);
    wordReadLess.setAttribute('id', 'readLess-container');

    wordReadLess.addEventListener('click', ()=> {
        divContainerText2.style.display = 'none';
        divReadMore.style.display = 'block';
       
    })
 
    clickReadMore();
}




  





         
// function toggleDivContainerText2() {
    
//     createReadMore(); 
//     if (window.innerWidth <= 900) {
//         divContainerText2.style.display = 'none';
//         divReadMore.style.display = 'block';
     
       
       
          
//     } else {
//         divContainerText2.style.display = 'block';
//         divReadMore.style.display = 'none';
//         if (divReadLess) {
//             divReadLess.remove();
//             divReadLess=null;
//         }
//     }  
    
  
// }

// function createReadMore() {
    
//     if(!divReadMore) {
//         divReadMore = document.createElement("div");
//         let wordReadMore = document.createElement('p');
//         wordReadMore.textContent = 'Read More...';
//         divReadMore.appendChild(wordReadMore);
//         divContainerText1.appendChild(divReadMore); 
//         wordReadMore.setAttribute('id', 'readMore-container');

      
       
//         wordReadMore.addEventListener('click', ()=> {
//             divContainerText2.style.display = 'block';
//             divReadMore.style.display = 'none'
//             createReadLess(); 
//         })
//     }

//     if (divReadLess) {
//         divReadLess.remove();
//         divReadLess=null;
//     }

  
// }


// function createReadLess() {
//     

//     wordReadLess.addEventListener('click', ()=>{
//         divContainerText2.style.display = 'none';
//         divReadMore.style.display = 'block';
//         divReadLess.style.display = 'none';
     
         
//     })

// }

// document.addEventListener('DOMContentLoaded', function () {
//   toggleDivContainerText2();
  
// });


// window.addEventListener('resize', function () {
//   toggleDivContainerText2();
// });



