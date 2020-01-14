import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state ={
    pokemon: [],
    search: undefined
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokemon => this.setState({pokemon}))
  }

  onSearchChange = e => {
    const search = e.target.value
    search === ""?
      this.setState({
        search: undefined
      })
    :
    this.setState({
      search
    })
  } 

  addPokemon = pokemon => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })
  }

  render() {
    const SearchedPokemon = 
    this.state.search !== undefined?
      this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.search))
    :
    this.state.pokemon
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onSearchChange} />
        <br />
        <PokemonCollection pokemon={SearchedPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
