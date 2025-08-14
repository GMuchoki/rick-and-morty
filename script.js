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


const charactersContainer = document.getElementById("characters-container");

data.characters.forEach(function(item){
  let newElement = document.createElement("div");
  newElement.setAttribute('class', 'card');
  charactersContainer.appendChild(newElement);
  newElement.innerHTML = `
  <img src=${item.image} alt=${item.name} class="character-image"> 
  <p class="character-detail"><span class="attribute">Name:</span> ${item.name}</p>
  <p class="character-detail"><span class="attribute">Status:</span> ${item.status}</p> 
  <p class="character-detail"><span class="attribute">Species:</span> ${item.species}</p>
  `;
});