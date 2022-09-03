function imageSlider(any) {
  document.querySelector(".tow").src = any;
}

function changeBgColor(color) {
  const data = {
    tow: {
      title: "Roadside Assitance<br />& Towing Service",
      desc: "We provide a wide range of towing and roadside assistance services to our customers. These include emergency roadside assistance and maintenance. Nulla odio quos, nisi esse quae dicta dolorem commodi eveniet officiis autem cum et ciatis officiis doloribus molestias praesentium? Nulla odio quos, nisi animi architecto fugit veritatis aperiam quaerat",
    },
    troubleShoot: {
      title: "Engine troubles<br />& Fix issues",
      desc: "We also provide various other car related services such as engine repairs and maintenance. Our experienced technicians are able to handle all types of vehicle issues.Nulla odio quos, nisi esse quae dicta dolorem commodi eveniet officiis autem cum et ciatis officiis doloribus molestias praesentium? Nulla odio quos, nisi animi architecto fugit veritatis aperiam quaerat",
    },
    flatTyre: {
      title: "Flat tyre change<br />& wheel alignment",
      desc: "Flat tyre change and wheel alignment. emergency breakdown service. Our experienced technicians are able to handle all types of vehicle issues. Nulla odio quos, nisi esse quae dicta dolorem commodi eveniet officiis autem cum et ciatis officiis doloribus molestias praesentium? Nulla odio quos, nisi animi architecto fugit veritatis aperiam quaerat",
    },
  };
  const elTitle = document.querySelector("#title");
  const elDesc = document.querySelector("#description");

  if (color === "#12af87") {
    elTitle.innerHTML = data.tow.title;
    elDesc.innerHTML = data.tow.desc;
  }
  if (color === "#0062be") {
    elTitle.innerHTML = data.troubleShoot.title;
    elDesc.innerHTML = data.troubleShoot.desc;
  }

  if (color === "#1e1e1e") {
    elTitle.innerHTML = data.flatTyre.title;
    elDesc.innerHTML = data.flatTyre.desc;
  }

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
