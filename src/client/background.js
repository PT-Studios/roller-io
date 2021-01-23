import escape from 'lodash/escape';

const backgroundName = document.getElementById('background_name');
const backgroundText = document.getElementById('background_text');
const backgroundItems = document.getElementById('background_possessions');
const backgroundSkills = document.getElementById('background_skills');
const backgroundSource = document.getElementById('background_source');

export function updateBackground(data) {
  //Clear HTML
  backgroundItems.innerHTML = '';
  backgroundSkills.innerHTML = '';
  
  // Populate HTML
  backgroundName.innerHTML = `${data.name}`;
  backgroundText.innerHTML = `${data.text}`;
  for (let i = 0; i < data.possessions.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = `${data.possessions[i]}`;
    backgroundItems.appendChild(item);
  }
  for (let i = 0; i < data.skills.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = `${data.skills[i]}`;
    backgroundSkills.appendChild(item);
  }

  backgroundSource.innerHTML = `${data.source}`;
}
