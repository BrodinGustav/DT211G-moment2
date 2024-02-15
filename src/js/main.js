document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll("#courseTable th");
    const tbody = document.getElementById('tableBody');
  
    headers.forEach((header, index) => {
      header.addEventListener("click", function () {
        sortTable(index, tbody);
      });
    });

//Hämta API

fetchData();

async function fetchData() {
  try {
    const response = await fetch('https://webbutveckling.miun.se/files/ramschema_ht23.json');
    const data = await response.json();
    populateTable(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//Hämtar ID
function populateTable(data) {
    const tableBody = document.getElementById('tableBody');
  
    //Loopar igenom och skriver ut till tableBody
    data.forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td>`;
      tableBody.appendChild(row);
    });
  }

  //Funktion för sortering
  function sortTable(columnIndex, tbody) {
    const rows = Array.from(tbody.getElementsByTagName('tr'));
    
    rows.sort((a, b) => {
        //Hämtar text från <td>-element från klickad kolumn
        const textA = a.getElementsByTagName('td')[columnIndex].textContent;
        const textB = b.getElementsByTagName('td')[columnIndex].textContent;
        //Jämför text, sortera rader och ordna i stigande ordning
        return textA.localeCompare(textB);
      });
      
      //Skriv ut till HTML
      tbody.innerHTML = '';
      rows.forEach(row => tbody.appendChild(row));
    }
    
});
    //Filterfunktion för "searchbar"