import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    const { pokemonsToRender } = this.props;

    const pokemons = pokemonsToRender.map(pokemon => {
      return <PokemonCard pokemonToRender={pokemon} />;
    });
    return <Card.Group itemsPerRow={6}>{pokemons}</Card.Group>;
  }
}

export default PokemonCollection;
