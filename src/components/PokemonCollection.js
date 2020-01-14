import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemons = () => {
    if (this.props.pokemons.length > 0) {
      let filteredPokemons = this.props.pokemons.filter(p => p.name.includes(this.props.searchInput))
      return filteredPokemons.map(p => <PokemonCard {...p} key={p.id}/>)
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
