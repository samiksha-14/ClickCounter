const count_num = document.getElementById("count");
const click_btn = document.querySelector('.btn');
const background_col = document.querySelector('.window');
const change_mode = document.querySelector('.togg');
//implementing count and change in background colour
const increment = () =>{
let count = count_num.textContent;
count++;
count_num.innerHTML = count;
const randomColor = getRandomColor();
background_col.style.backgroundColor = randomColor;
audio.play();
}
// Function to generate a random color (pastel colors)
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360); 
  const saturation = Math.floor(Math.random() * 20) + 80;
  const lightness = Math.floor(Math.random() * 20) + 70; 
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
//code to add dark mode
const toggleDarkMode = () =>{
      const body = document.body;
      body.classList.toggle("dark-mode");
}
//adding events
click_btn.addEventListener('click',increment);
change_mode.addEventListener('click',toggleDarkMode);