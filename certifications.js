let certificationContainer = document.getElementById('certification-conteiner');
let javaScriptCertificationContainer = document.getElementById('javaScriptCertificationContainer');
let librariesCertificationContainer = document.getElementById('librariesCertificationContainer');
let dbCertificationContainer = document.getElementById('DBCertificationContainer');
let backendCertContainer = document.getElementById('backEndCertificationContainer');
let responsiveCertificationContainer = document.getElementById('responsiveCertificationContainer');
let responsiveContainer = document.getElementById('responsiveContainer');
let javaScriptContainer = document.getElementById('javaScriptContainer');
let librariesContainer = document.getElementById('librariesContainer');
let DBContainer = document.getElementById('dBContainer');
let BKContainer = document.getElementById('backendContainer');
let readLessCertification = document.getElementById('readLessCertification-container');
let readLessCertificationJS = document.getElementById('readLessCertificationJs-container');
let readLessCertificationRT = document.getElementById('readLessCertificationRT-container');
let readLessCertificationDB = document.getElementById('readLessCertificationDB-container');
let readLessCertificationBK = document.getElementById('readLessCertificationBackend-container');

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

    crearTablaResponsive(certifications);
    crearTablaJavaScript(certifications);
    crearTablaLibraries(certifications);
    crearTablaDataBase(certifications);
    crearTablaBackend(certifications);
}

function crearTablaResponsive(certifications) {
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
        ancle.setAttribute('class', 'ancle-certification');
        td2.appendChild(ancle);

    }

    responsiveContainer.style.display = 'none';
    readLessCertification.style.display = 'none';

}
function crearTablaJavaScript(certifications) {
    // let propiedades = Object.getOwnPropertyNames(certifications[0]);
    // let cantColumnas = 2;
    // console.log(propiedades)
    let tableJS = document.createElement('table');
    javaScriptContainer.appendChild(tableJS); 
    let certificationsCount = certifications[1].certifications.length;
    console.log(certificationsCount);
    

    for(let i = 0; i<certificationsCount; i++) {
        let rowsTable = document.createElement('tr');
        tableJS.appendChild(rowsTable);

          
            let td1 = document.createElement('td');
            td1.textContent = certifications[1].certifications[i].name; 
            rowsTable.appendChild(td1);
   
            let td2 = document.createElement('td');
            rowsTable.appendChild(td2); 

            let ancle = document.createElement('a');
            ancle.textContent = 'Certification';
            ancle.setAttribute('href', certifications[1].certifications[i].url);
            ancle.setAttribute('class', 'ancle-certification');
            td2.appendChild(ancle);
        }

    javaScriptContainer.style.display = 'none'
}

function crearTablaLibraries(certifications) {
    // let propiedades = Object.getOwnPropertyNames(certifications[0]);
    // let cantColumnas = 2;
    // console.log(propiedades)
    let tableRT = document.createElement('table');
    librariesContainer.appendChild(tableRT); 
    let certificationsCount = certifications[2].certifications.length;
    console.log(certificationsCount);
    

    for(let i = 0; i<certificationsCount; i++) {
        let rowsTable = document.createElement('tr');
        tableRT.appendChild(rowsTable);

          
           let td1 = document.createElement('td');
           td1.textContent = certifications[2].certifications[i].name; 
           rowsTable.appendChild(td1);
   
          
           let td2 = document.createElement('td');
       
        rowsTable.appendChild(td2); 

        let ancle = document.createElement('a');
        ancle.textContent = 'Certification';
        ancle.setAttribute('href', certifications[2].certifications[i].url);
        ancle.setAttribute('class', 'ancle-certification');
        td2.appendChild(ancle);
    }

    librariesContainer.style.display = 'none' 
}

function crearTablaDataBase(certifications) {
    // let propiedades = Object.getOwnPropertyNames(certifications[0]);
    // let cantColumnas = 2;
    // console.log(propiedades)
    let tableDB = document.createElement('table');
    DBContainer.appendChild(tableDB); 
    let certificationsCount = certifications[3].certifications.length;
    console.log(certificationsCount);
    

    for(let i = 0; i<certificationsCount; i++) {
        let rowsTable = document.createElement('tr');
        tableDB.appendChild(rowsTable);

          
           let td1 = document.createElement('td');
           td1.textContent = certifications[3].certifications[i].name; 
           rowsTable.appendChild(td1);
   
          
           let td2 = document.createElement('td');
       
        rowsTable.appendChild(td2); 

        let ancle = document.createElement('a');
        ancle.textContent = 'Certification';
        ancle.setAttribute('href', certifications[3].certifications[i].url);
        ancle.setAttribute('class', 'ancle-certification');
        td2.appendChild(ancle);
    }

    DBContainer.style.display = 'none' 
}

function crearTablaBackend(certifications) {
    // let propiedades = Object.getOwnPropertyNames(certifications[0]);
    // let cantColumnas = 2;
    // console.log(propiedades)
    let tableBK = document.createElement('table');
    BKContainer.appendChild(tableBK); 
    let certificationsCount = certifications[4].certifications.length;
    console.log(certificationsCount);
    

    for(let i = 0; i<certificationsCount; i++) {
        let rowsTable = document.createElement('tr');
        tableBK.appendChild(rowsTable);

          
           let td1 = document.createElement('td');
           td1.textContent = certifications[4].certifications[i].name; 
           rowsTable.appendChild(td1);
   
          
           let td2 = document.createElement('td');
       
        rowsTable.appendChild(td2); 

        let ancle = document.createElement('a');
        ancle.textContent = 'Certification';
        ancle.setAttribute('href', certifications[4].certifications[i].url);
        ancle.setAttribute('class', 'ancle-certification');
        td2.appendChild(ancle);
    }

    BKContainer.style.display = 'none' 
}

function toggleVisibility(element, readLessButton) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
        readLessButton.style.display = 'block';
    } else {
        element.style.display = 'none';
        readLessButton.style.display = 'none'; 
    }
}

responsiveCertificationContainer.addEventListener('click', () => {
    toggleVisibility(responsiveContainer, readLessCertification);
});

// Aquí definimos javaScriptCertificationContainer

javaScriptCertificationContainer.addEventListener('click', () => {
    toggleVisibility(javaScriptContainer, readLessCertificationJS); 
});

librariesCertificationContainer.addEventListener('click', () => {
    toggleVisibility(librariesContainer, readLessCertificationRT); 
});

dbCertificationContainer.addEventListener('click', () => {
    toggleVisibility(DBContainer, readLessCertificationDB); 
});

backendCertContainer.addEventListener('click', () => {
    toggleVisibility(BKContainer, readLessCertificationBK); 
});

readLessCertification.addEventListener('click', () => {
    toggleVisibility(responsiveContainer, readLessCertification);
});

readLessCertificationJS.addEventListener('click', () => {
    toggleVisibility(javaScriptContainer, readLessCertificationJS); 
});

readLessCertificationRT.addEventListener('click', () => {
    toggleVisibility(librariesContainer, readLessCertificationRT); 
});

readLessCertificationDB.addEventListener('click', () => {
    toggleVisibility(BKContainer, readLessCertificationDB); 
});

readLessCertificationBK.addEventListener('click', () => {
    toggleVisibility(BKContainer, readLessCertificationBK); 
});






