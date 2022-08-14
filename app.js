import getElement from "/utils/getElement.js"
import getUser from "/utils/getUser.js"

const imageDiv = getElement(".img-profil");
const labelDiv = getElement(".label");
const userNameDIv = getElement(".name-user");
const personIcon = document.getElementById("home");
const randomButton = getElement("#random-user");

const buttonsContent = [...document.querySelectorAll(".btn")];

const showUser =async () => {
    const person = await getUser();
    displayUser(person);
}
//FUNCTION get random user
function displayUser(person){  
    personIcon.classList.add("active");  
   imageDiv.src = person.image;
   labelDiv.textContent = "My name is";
   userNameDIv.textContent = person.name; 
   //Nav fetures
   buttonsContent.forEach((item) => {
        item.addEventListener("click", () => {
            let active = document.querySelector(".active");
            active.classList.remove("active");
            personIcon.classList.remove("active");
            item.children[0].classList.add("active");
            const label1 = item.dataset.label;
            labelDiv.textContent = `My ${label1} is`;
            userNameDIv.textContent = person[label1];
        });
   });
}
// Event RANDOM GET USER
window.addEventListener("DOMContentLoaded", showUser);
randomButton.addEventListener("click", ()=>{
    let active = document.querySelector(".active");
    active.classList.remove("active");
    showUser();
});

