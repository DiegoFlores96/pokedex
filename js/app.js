// pega o nome do pokemon enviado pelo usuario
let pokemonName = document.querySelector('.pokemon_name')
let pokemonNumber = document.querySelector('.pokemon_number')
let pokemonImage = document.querySelector('.pokemon__image')
let pokemonSearch = document.querySelector('.form')
let pokemonInputSearch = document.querySelector('.input__search')
let pokemonPrev = document.querySelector('.btn_prev')
let pokemonNext = document.querySelector('.btn_next')
let btnSearchPokemon=1;
const fecthPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status == 200) {
        const data = await APIResponse.json()
        //  console.log(data);
        return data;
    }


}
const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Carregando....'
    pokemonNumber.innerHTML = ''
    const data = await fecthPokemon(pokemon);
    //console.log(data);
    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        //acessa a  animação das imagens
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonInputSearch.value = '';
        btnSearchPokemon=data.id
    } else {
        pokemonImage.style.display='none'
        pokemonNumber.innerHTML = '';
        pokemonName.innerHTML = 'Pokemon  Não Encontrado';
    }

}
pokemonSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(pokemonInputSearch.value.toLowerCase());

})
pokemonPrev.addEventListener('click', (event) => {
    if(btnSearchPokemon>1){
        btnSearchPokemon -=1
        renderPokemon(btnSearchPokemon)
    }
   

})
pokemonNext.addEventListener('click', (event) => {
btnSearchPokemon +=1
renderPokemon(btnSearchPokemon)

})
renderPokemon('1')