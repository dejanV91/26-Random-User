const url = "https://randomuser.me/api/";

const getUser= async () => {
    const response = await fetch(url)
    const data = await response.json();
    const person = data.results[0];
    const {cell, email, phone} = person;
    const {age} = person.dob;
    const {first, last} = person.name;
    const {name: streetName, number: streetNumber}= person.location.street;
    const {large : image} = person.picture;
    const {password} = person.login;
    return {
        person,
        cell,
        email,
        phone,
        password,
        age,
        name:`${first} ${last}`,
        street: `${streetName} ${streetNumber}`,
        image
    }
}

export default getUser();