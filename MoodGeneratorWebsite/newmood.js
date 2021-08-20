function generateMood() {
    const emojis = ['🙂', '😍', '😂', '😢', '😡', '🥴', '😈','🥵' ];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }

  const generateMoodButton = document.getElementById(
    'generate-mood-button'
  );
  const moodDiv = document.getElementById('mood-div');

  generateMoodButton.addEventListener('click', () => {
    moodDiv.innerHTML = generateMood();
  });