import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

const PokemonCollection = ({ pokemon }) => {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
    </Card.Group>
  );
};

export default PokemonCollection;
