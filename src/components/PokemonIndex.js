import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const API = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ pokemons: data }));
  }
  handleSeacrhChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  filterPokemon = (pokemons, string) => {
    if (string === "") {
      return pokemons;
    } else {
      return this.state.pokemons.filter(pokemon =>
        pokemon.name.includes(string)
      );
    }
  };
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
        this.setState({ pokemons: [pokemon, ...this.state.pokemons] })
      );
  };

  render() {
    const { pokemons, searchTerm } = this.state;

    const pokemonToRender = this.filterPokemon(pokemons, searchTerm);

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onSubmit={this.addNewPokemon} />
        <br />
        <Search
          searchTerm={searchTerm}
          onChange={event => this.handleSeacrhChange(event)}
        />
        <br />
        <PokemonCollection
          pokemons={pokemonToRender}
          searchTerm={this.state.searchTerm}
        />
      </Container>
    );
  }
}

export default PokemonPage;
