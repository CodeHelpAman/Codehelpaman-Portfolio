// script.js
const texts = [
  "Web Developer",
  "Java Full Stack Developer",
  "Content Creator",
  "Python Full Stack Developer",
  "MERN Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
];
let i = 0,
  j = 0;
const speed = 100;
let element = document.getElementById("typewriter");

function typeWriter() {
  if (j < texts[i].length) {
    element.innerHTML += texts[i].charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      element.innerHTML = "";
      i = (i + 1) % texts.length;
      j = 0;
      typeWriter();
    }, 1500);
  }
}

window.onload = typeWriter;
