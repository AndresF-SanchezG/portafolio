let responsiveContainer = document.getElementById('responsiveContainer');
let certificationContainer = document.getElementById('certificationContainer');
let readLessCertification = document.getElementById('readLessCertification-container');

initialize()

async function initialize() {
    let certifications = [];

    try {
        let certificationsJson = await fetch('./certifications.json');
        certifications = await certificationsJson.json();
        console.log(certifications)
    }

    catch (error) {
        console.log(`Error fetching data:`, error);
    }

   crearTabla(certifications)

}

function crearTabla(certifications) {
    // let propiedades = Object.getOwnPropertyNames(certifications[0]);
    // let cantColumnas = 2;
    // console.log(propiedades)
    let table = document.createElement('table');
    responsiveContainer.appendChild(table); 
    let certificationsCount = certifications[0].certifications.length;
    console.log(certificationsCount);

    for(let i = 0; i<certificationsCount; i++) {
        let rowsTable = document.createElement('tr');
        table.appendChild(rowsTable);

          
           let td1 = document.createElement('td');
           td1.textContent = certifications[0].certifications[i].name; // Aquí puedes usar el nombre del campo que contenga el nombre de la certificación
           rowsTable.appendChild(td1);
   
          
           let td2 = document.createElement('td');
       
        rowsTable.appendChild(td2); 

        let ancle = document.createElement('a');
        ancle.textContent = 'Certification';
        ancle.setAttribute('href', certifications[0].certifications[i].url);
        td2.appendChild(ancle);

    }

    responsiveContainer.style.display = 'none'
}

readLessCertification.style.display='none';

certificationContainer.addEventListener('click', ()=>{
    responsiveContainer.style.display = 'block'
    readLessCertification.style.display='block';
 
    
})

readLessCertification.addEventListener('click', ()=>{
  
    responsiveContainer.style.display = 'none'
    readLessCertification.style.display='none';
})