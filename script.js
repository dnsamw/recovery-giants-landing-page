function imageSlider(any) {
  document.querySelector(".tow").src = any;
}

function changeBgColor(color) {
  console.log(color);
  const sec = document.querySelector(".sec");
  sec.style.background = color;
}

function menuToggle() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
