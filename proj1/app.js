//Movement Animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Getting Items

const title = document.querySelector(".title");
const phone = document.querySelector(".phone img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");

//Animate In
card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
  
  //Popout
  title.style.transform = "translateZ(150px)";
  phone.style.transform = "translateZ(200px) rotateZ(-10deg)";
  description.style.transform = "translateX(125px)";
});
//Animate OutcEvent:

  card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title.style.transform = "translateZ(0px)";
  phone.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
});