import React, {useEffect, useState} from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const POKEMON_URL = "http://localhost:3000/pokemon";

function PokemonPage(props) {

    const [searchTerm, setSearchTerm] = useState("");
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(POKEMON_URL)
            .then(data => data.json())
            .then(pokemon => setPokemon(pokemon));
    }, [])


    const filteredPokemon = pokemon.filter(p => p.name.includes(searchTerm));

    function submitPokemonData(newPokemon) {

        const pokemonObj  = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: newPokemon.name,
                sprites: {
                    front: newPokemon.frontUrl,
                    back: newPokemon.backUrl
                },
                stats: [0,0,0,0,0,{value: newPokemon.hp, name: "hp"}]
            })
        } ;

        fetch(POKEMON_URL, pokemonObj)
            .then(resp => resp.json())
            .then(returnedPokemon => setPokemon([returnedPokemon, ...pokemon]))

    }

    return (
        <Container>
            <h1>Pokemon Searcher</h1>
            <br />
            <PokemonForm  submitPokemonData = {submitPokemonData}/>
            <br />
            <Search onChange={e => setSearchTerm(e.target.value)} />
            <br />
            <PokemonCollection pokemon = {filteredPokemon}/>
        </Container>
    )

}

export default PokemonPage
