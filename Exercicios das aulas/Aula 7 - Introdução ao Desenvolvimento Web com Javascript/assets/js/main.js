const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const abrirModalButton = document.getElementsByClassName('abrirModalButton')
const modal = document.querySelector("dialog") || document.createElement("dialog");
document.body.appendChild(modal);

const limit = 10
let offset = 0;
const maxRecords = 151

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {   
        pokemonList.innerHTML += pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                    <img src=${pokemon.photo} alt=${pokemon.name}>
            </div>

            <dialog> 
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                        <img src=${pokemon.photo} alt=${pokemon.name}>
                </div>
            </dialog>
            
            <button class="abrirModalButton">Abrir</button>
            </li>
        `).join('') 
    })  
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function (event) {
        const abrirModalButton = event.target.closest('.abrirModalButton');

        if (abrirModalButton) {
            const listItem = abrirModalButton.closest('.pokemon');
            const modal = listItem.querySelector('dialog');

            const pokemon = getPokemonDataFromListItem(listItem); // Adapte conforme necessário
            fillModalContent(modal, pokemon);

            modal.showModal();
        }  
    });
});

function fillModalContent(modal, pokemon) {
    if (modal && pokemon) {
        modal.innerHTML = `
        <div class="pokemon-details">
            <div class="types">
                <ol>
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            </div>
            <div class="info">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
            </div>
        </div>
        <div class="pokemon-photo">           
            <img src=${pokemon.photo} alt=${pokemon.name}>
        </div>
        `;

        modal.classList.add(pokemon.types[0].toLowerCase());
    }
}

function getPokemonDataFromListItem(listItem) {
    const numberElement = listItem.querySelector('.number');
    const nameElement = listItem.querySelector('.name');
    const typeElements = listItem.querySelectorAll('.type');
    const photoElement = listItem.querySelector('img');

    const uniqueTypes = Array.from(new Set(Array.from(typeElements).map(typeElement => typeElement.textContent)));

    return {
        number: numberElement ? numberElement.textContent : '',
        name: nameElement ? nameElement.textContent : '',
        types: uniqueTypes,
        photo: photoElement ? photoElement.src : '',
    };
}
