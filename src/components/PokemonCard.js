import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

state = {
  pokemonImg: true
}


  hp = this.props.pokemon.stats.find(p => p.name ==="hp");


flipImg = () => {
  this.setState({ pokemonImg: !this.state.pokemonImg})
}

  render() {
    return (
      <Card>
        <div onClick={() => this.flipImg()}>
          <div className="image"  >
            <img src={this.state.pokemonImg ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
