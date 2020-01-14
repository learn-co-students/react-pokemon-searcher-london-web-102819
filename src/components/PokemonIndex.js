import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchInput: ""
  }

  componentDidMount() {this.fetchPokemon()}

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(resp => this.setState({pokemons: resp}))
  }

  updateSearch = value => {this.setState({searchInput: value})}

  postPokemon = pokemon => {

    let formData = {
      name: pokemon.name,
      stats: [0, 0, 0, 0, 0, {value: pokemon.hp}],
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      }
    }

    let objConfig = {
      method: "POST", 
      headers: { 
        "Content-Type": "application/json", 
        "Accept": "application/json" 
      }, 
      body: JSON.stringify(formData)
    }

    fetch(`http://localhost:3000/pokemon`, objConfig)
      .then(resp => resp.json())
      .then(resp => this.setState({pokemons: resp}))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPokemon={p => this.postPokemon(p)}/>
        <br />
        <Search updateSearch={value => this.updateSearch(value)}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchInput={this.state.searchInput}/>
      </Container>
    )
  }
}

export default PokemonPage
