import escape from 'lodash/escape';

const playerlist = document.getElementById('playerlist');
const rows = document.querySelectorAll('#playerlist table tr');

export function updatePlayerlist(data) {
  // This is a bit of a hacky way to do this and can get dangerous if you don't escape usernames
  // properly. You would probably use something like React instead if this were a bigger project.
  for (let i = 0; i < data.length; i++) {
    rows[i + 1].innerHTML = `<td>${escape(data[i].username.slice(0, 15)) || 'Anonymous'}</td><td>${data[i].bg.name || 'Unknown'}</td>`;
  }
  for (let i = data.length; i < 5; i++) {
    rows[i + 1].innerHTML = '<td>-</td><td>-</td>';
  }
}

export function setPlayerlistHidden(hidden) {
  if (hidden) {
    playerlist.classList.add('hidden');
  } else {
    playerlist.classList.remove('hidden');
  }
}
