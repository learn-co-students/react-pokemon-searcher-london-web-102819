import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons: pokemons }));
  }

  render() {
    const { pokemons } = this.state;
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log("🤔")} />
        <br />
        <PokemonCollection pokemonsToRender={pokemons} />
      </Container>
    );
  }
}

export default PokemonPage;
