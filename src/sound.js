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

//Music off when another button play

// // Get all the buttons in the music box
// const buttons = document.querySelectorAll('.music-box__btn');

// // Add a click event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Get the audio element inside the button
//     const audio = button.querySelector('audio');

//     // Check if the audio is playing
//     const isPlaying = !audio.paused;

//     // Stop all other audio playback and remove highlighting
//     buttons.forEach(otherButton => {
//       const otherAudio = otherButton.querySelector('audio');
//       if (otherAudio !== audio) {
//         otherAudio.pause();
//         otherAudio.currentTime = 0;
//         otherButton.classList.remove('playing');
//       }
//     });

//     if (isPlaying) {
//       // If the audio is playing, pause it and remove highlighting
//       audio.pause();
//       audio.currentTime = 0;
//       button.classList.remove('playing');
//     } else {
//       // If the audio is paused, play it and highlight the button
//       audio.play();
//       button.classList.add('playing');
//     }
//   });
// });
