const data = {
  characters: [
    {
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    }
  ]
};


const newElement = document.createElement("img");
newElement.src = data.characters[0].image;
document.querySelector("div").appendChild(newElement);

const newElement2 = document.createElement("p");
newElement2.innerHTML = "<strong>Name: </strong>" + data.characters[0].name;
document.querySelector("div").appendChild(newElement2);

const newElement3 = document.createElement("p");
newElement3.innerHTML = "<strong>Status: </strong>" + data.characters[0].status;
document.querySelector("div").appendChild(newElement3);

const newElement4 = document.createElement("p");
newElement4.innerHTML = "<strong>Species: </strong>" + data.characters[0].species;
document.querySelector("div").appendChild(newElement4);
