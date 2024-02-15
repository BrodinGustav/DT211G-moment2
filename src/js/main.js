document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  try {
    const response = await fetch('https://webbutveckling.miun.se/files/ramschema_ht23.json');
    const data = await response.json();
    populateTable(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function populateTable(data) {
    const tableBody = document.getElementById('tableBody');
  
    data.forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td>`;
      tableBody.appendChild(row);
    });
  }