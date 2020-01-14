import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    const { pokemonsToRender } = this.props;

    return (
      <Card.Group itemsPerRow={6}>
        {pokemonsToRender.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemonToRender={pokemon} />
        ))}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
