import escape from 'lodash/escape';

const rollresults = document.getElementById('roll-results');
const serverresults = document.getElementById('server-results');
const table = document.getElementById('serverrolls');
let rows = document.querySelectorAll('#server-results table tr');

export function updateRollResults(data) {
  if (!data.length == 0) {
    let index = data.length - 1;
    let result = data[index].result
    rollresults.innerText = `${result}`;
  }
}

export function updateServerRollResults(data) {
  let row = document.createElement("tr");
  

  for (let i = 0; i < data.length; i++) {
    let date = new Date(data[i].rollTime);
    rows[i + 1].innerHTML = `<td>${data[i].indexedResult || '0'} + ${data[i].modifiers || '0'}</td><td>${data[i].result || '0'}</td><td>${date.toDateString()}</td><td>${data[i].username || 'Anonymous'}</td>`;
  }

  for (let i = data.length; i < 5; i++) {
    rows[i + 1].innerHTML = '<td>-</td><td>-</td><td>-</td><td>-</td>';
  }

  table.append(row);
  rows = document.querySelectorAll('#server-results table tr');
}