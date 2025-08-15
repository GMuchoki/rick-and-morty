const charactersContainer = document.getElementById("characters-container");

fetch("https://rickandmortyapi.com/api/character")
.then(results => results.json())
.then(data => {
  data.results.forEach(function(item){
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
});

