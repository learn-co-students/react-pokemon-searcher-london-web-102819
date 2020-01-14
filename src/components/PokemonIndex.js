import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const POKEMON_URL = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {

    state = {
        searchTerm: "",
        pokemon:[]
    }

    fetchPokemon = () => {
        fetch(POKEMON_URL)
            .then(data => data.json())
            .then(pokemon => this.setState({ pokemon }));
    }

    componentDidMount() {
        this.fetchPokemon();
    }

   filteredPokemon = () => {
       return this.state.pokemon.filter(p => p.name.includes(this.state.searchTerm));
   }

    submitPokemonData = pokemon => {
        const pokemonObj  = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: pokemon.name,
                sprites: {
                    front: pokemon.frontUrl,
                    back: pokemon.backUrl
                },
                stats: [0,0,0,0,0,{value: pokemon.hp, name: "hp"}]
            })
        } ;

        fetch(POKEMON_URL, pokemonObj)
            .then(resp => resp.json())
            .then(returnedPokemon => this.setState({
                pokemon : [...this.state.pokemon, returnedPokemon]
            }))

    }

    render() {
        
        return (
            <Container>
                <h1>Pokemon Searcher</h1>
                <br />
                <PokemonForm  submitPokemonData = {this.submitPokemonData}/>
                <br />
                <Search onChange={(e) => this.setState({ searchTerm: e.target.value })} />
                <br />
                <PokemonCollection pokemon = {this.filteredPokemon()}/>
            </Container>
        )
    }
}

export default PokemonPage
