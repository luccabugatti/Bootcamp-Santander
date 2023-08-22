const pokeApi = {}

//offset = 0 e limit = 10 é o default apenas
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
    //Fetch retorna uma promise
    //pegamos a resposta com o then caso for bem sucedido 
    //Promise vem como readableStream, usamos esse metodo pra transformar em Json
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.log(error))
}

//Promise.all([
//    fetch('https://pokeapi.co/api/v2/pokemon/1'),
//    fetch('https://pokeapi.co/api/v2/pokemon/2'),
//    fetch('https://pokeapi.co/api/v2/pokemon/3'),
//    fetch('https://pokeapi.co/api/v2/pokemon/4')
//]).then((results) => {
//    console.log(results)
//})