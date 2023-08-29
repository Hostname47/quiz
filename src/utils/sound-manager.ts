import Sound from 'react-native-sound';

interface SoundLibrary {
  [soundName: string]: Sound;
}

const sounds: SoundLibrary = {};

export function loadSound(soundName: string, loop: boolean) {
  if (!sounds[soundName]) {
    sounds[soundName] = new Sound(
      `${soundName}.mp3`,
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          return;
        }

        if (loop) {
          sounds[soundName].setNumberOfLoops(-1);
        }

        sounds[soundName].play();
      },
    );
  } else {
    if (loop) {
      sounds[soundName].setNumberOfLoops(-1);
    }
    sounds[soundName].play();
  }
}

export function playSound(soundName: string, loop: boolean = false) {
  loadSound(soundName, loop);
  // sounds[soundName].play();
}

export function stopSound(soundName: string) {
  if (sounds[soundName] && sounds[soundName].isPlaying()) {
    sounds[soundName].stop();
  }
}

export function releaseSound(soundName: string) {
  if (sounds[soundName]) {
    sounds[soundName].release();
    delete sounds[soundName];
  }
}
