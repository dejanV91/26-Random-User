import getElement from "/utils/getElement.js"
import getUser from "/utils/getUser.js"

const imageDiv = getElement(".img-profil");
const labelDiv = getElement(".label");
const userNameDIv = getElement(".name-user");
const randomButton = getElement("#random-user");

const buttonsContent = [...document.querySelectorAll(".btn")];

// console.log(getUser);
const showUser =async () => {
    const person = await getUser;
    displayUser(person);
}

function displayUser(person){
   imageDiv.src = person.image;
   labelDiv.textContent = "My name is";
   userNameDIv.textContent = person.name; 
}

showUser();

