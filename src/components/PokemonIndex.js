import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const POKEMON_URL = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: ""
  };

  componentDidMount() {
    fetch(POKEMON_URL)
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons }));
  }

  handleSearchChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  filteredPokemons = () => {
    return [...this.state.pokemons].filter(pokemon =>
      pokemon.name.includes(this.state.search)
    );
  };

  createAPokemon = pokemon => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createAPokemon={this.createAPokemon} />
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection pokemonsToRender={this.filteredPokemons()} />
      </Container>
    );
  }
}

export default PokemonPage;
