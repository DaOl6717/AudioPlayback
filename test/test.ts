import {playAudioFile} from 'audic';
import Audic from 'audic';

//playAudioFile('audio.mp3');

const audic = new Audic('Spring In My Step.mp3');
await audic.play();
