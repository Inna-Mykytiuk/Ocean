// Get all the buttons in the music box
const buttons = document.querySelectorAll('.music-box__btn');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the audio element inside the button
    const audio = button.querySelector('audio');

    if (audio.paused) {
      // If the audio is paused, play it
      audio.play();
    } else {
      // If the audio is playing, pause it
      audio.pause();
      // Reset the playback time to the beginning
      audio.currentTime = 0;
    }
  });
});

// // Get all the buttons in the music box
// const buttons = document.querySelectorAll('.music-box__btn');

// // Add a click event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Get the audio element inside the button
//     const audio = button.querySelector('audio');

//     // Play the audio
//     audio.play();
//   });
// });
