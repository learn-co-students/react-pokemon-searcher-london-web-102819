import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'



function PokemonCollection(props) {
        return (
            <Card.Group itemsPerRow={6}>
                {props.pokemon.map(p => <PokemonCard pokemon = {p} key = {p.id} />)}
            </Card.Group>
        )
}

export default PokemonCollection
