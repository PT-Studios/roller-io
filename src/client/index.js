// Learn more about this file at:
// https://victorzhou.com/blog/build-an-io-game-part-1/#3-client-entrypoints
import { connect, play, roll, randBackground } from './networking';
import { startRendering, stopRendering } from './render';
import { startCapturingInput, stopCapturingInput } from './input';
import { downloadAssets } from './assets';
import { initState } from './state';
//import { setLeaderboardHidden } from './leaderboard';
import { setPlayerlistHidden } from './playerlist';

// I'm using a tiny subset of Bootstrap here for convenience - there's some wasted CSS,
// but not much. In general, you should be careful using Bootstrap because it makes it
// easy to unnecessarily bloat your site.
import './css/bootstrap-reboot.css';
import 'normalize.css/normalize.css';
import './style/style.scss';

const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');
const usernameInput = document.getElementById('username-input');
const gameBoard = document.getElementById('game-board');

const diceNumberField = document.getElementById('dice_number');
const diceModField = document.getElementById('dice_mod');

const rollButton = document.getElementById('button-roll');
const randBackgroundButton = document.getElementById('button-random-background');

Promise.all([
  connect(onGameOver),
  downloadAssets(),
]).then(() => {
  playMenu.classList.remove('hidden');
  usernameInput.focus();
  playButton.onclick = () => {
    // Play!
    play(usernameInput.value);
    playMenu.classList.add('hidden');
    gameBoard.classList.remove('hidden');
    initState();
    startCapturingInput();
    //startRendering();
    //setLeaderboardHidden(false);
    setPlayerlistHidden(false);
  };
  rollButton.onclick = () => {
    let dummyDie = {
      faces: 6,
      qty: diceNumberField.value,
      mod: diceModField.value
    };

    roll(dummyDie);
    console.log(dummyDie.qty)
  }
  randBackgroundButton.onclick = () => {
    randBackground(usernameInput.value);
  }
}).catch(console.error);

function onGameOver() {
  stopCapturingInput();
  //stopRendering();
  playMenu.classList.remove('hidden');
  gameBoard.classList.add('hidden');
  //setLeaderboardHidden(true);
  setPlayerlistHidden(true);
}
