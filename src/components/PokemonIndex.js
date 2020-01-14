import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const POKEMON_API = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchText: ""
  };

  componentDidMount() {
    fetch(POKEMON_API)
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons: pokemons }));
  }

  createAPokemon = pokemon => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    });
  };

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };

  filterPokemon = (pokemons, searchString) => {
    return pokemons.filter(p => p.name.includes(searchString));
  };

  render() {
    const { pokemons, searchText } = this.state;
    const filteredPokemons = this.filterPokemon(pokemons, searchText);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createAPokemon={this.createANewPokemon} />
        <br />
        <Search onChange={this.handleChange} searchString={searchText} />
        <br />
        <PokemonCollection pokemonsToRender={filteredPokemons} />
      </Container>
    );
  }
}

export default PokemonPage;
