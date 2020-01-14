import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchInput: ''
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(pokemon => this.setState({ pokemon }))
   }


   handleSearchInput = event => {
     this.setState({ searchInput: event.target.value })
   } 

  addNewPokemon = (event, name, hp, frontUrl, backUrl) => {
    event.preventDefault();

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 1,
        name: name,
        stats: [
          {
            value: 80,
            name: "special-defense"
          },
          {
            value: 80,
            name: "special-attack"
          },
          {
            value: 63,
            name: "defense"
          },
          {
            value: 62,
            name: "attack"
          },
          {
            value: 60,
            name: "speed"
          },
          {
            value: hp,
            name: "hp"
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon =>
        this.setState({ pokemons: [pokemon, ...this.state.pokemon] })
      );
  };


  render() {

    const searchedPokemon = this.state.pokemon.filter(p =>
      p.name.includes(this.state.searchInput))
    const {  pokemonImg } = this.state

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addNewPokemon}/>
        <br />
        <Search onChange={this.handleSearchInput}/>
        <br />
        <PokemonCollection pokemon={searchedPokemon} 
        pokemonImg={pokemonImg} 
        
        />
      </Container>
    )
  }
}

export default PokemonPage
