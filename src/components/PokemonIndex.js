import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const POKEMON_ENDPOINT = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchStr: ""
  };

  fetchPokemon = () => {
    fetch(POKEMON_ENDPOINT)
      .then(resp => resp.json())
      .then(pokemon => this.setState({ pokemon: pokemon }));
  };

  componentDidMount = () => {
    this.fetchPokemon();
  };

  handleSearchChange = event => {
    this.setState({
      searchStr: event.target.value
    });
  };

  filterPokemon = (pokemon, string) => {
    if (string === "") {
      return pokemon;
    } else {
      return this.state.pokemon.filter(pokemon =>
        pokemon.name.includes(string)
      );
    }
  };

  addNewPokemon = (event, name, hp, frontUrl, backUrl) => {
    event.preventDefault();

    fetch(POKEMON_ENDPOINT, {
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
        this.setState({ pokemon: [pokemon, ...this.state.pokemon] })
      );
  };

  render() {
    const { pokemon, searchStr } = this.state;

    const pokemonToRender = this.filterPokemon(pokemon, searchStr);

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.addNewPokemon} />
        <br />
        <Search
          searchStr={searchStr}
          onChange={event => this.handleSearchChange(event)}
        />
        <br />
        <PokemonCollection pokemon={pokemonToRender} />
      </Container>
    );
  }
}

export default PokemonPage;
