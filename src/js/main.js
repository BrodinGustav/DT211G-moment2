document.addEventListener("DOMContentLoaded", fetchData);

//Hämta API
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
  function sortTable(columnIndex) {
    
    //Hämta in table som ska sorteras
    const table = document.getElementById('courseTable');
    
    //Hämtar in <tbody>-element
    const tbody = table.getElementsByTagName('tbody'); 
    
    //Hämtar in <tr>-element, konventerar till array för sort-metod
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
    