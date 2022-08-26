let parallaxClass = document.getElementsByClassName("parralex-div");
let section = document.getElementsByClassName("section");

const bgColorArray = [
  { bgColor: "#873e23", color: "#ffffff" },
  { bgColor: "#abdbe3", color: "#000000" },
  { bgColor: "#154c79", color: "#ffffff" },
];

const main = () => {
  window.addEventListener("scroll", (e) => {
    let scrollY = window.scrollY;

    for (let index = 0; index < parallaxClass.length; index++) {
      const element = parallaxClass[index];

      let progress = window.innerHeight * index - scrollY;

      if (scrollY > 10) {
        section[index].style.color = `${
          bgColorArray[index % bgColorArray.length].color
        }`;

        section[index].style.backgroundColor = `${
          bgColorArray[index % bgColorArray.length].bgColor
        }`;
      } else {
        section[index].style.backgroundColor = `#F0F0F0`;
        section[index].style.color = `#000000`;
      }

      element.style.transform = `translateY(${progress / 10}px)`;

      if (window.innerWidth >= 1024) {
        element.style.transform = `translateY(${progress}px)`;
      }
    }
  });
};

main();
