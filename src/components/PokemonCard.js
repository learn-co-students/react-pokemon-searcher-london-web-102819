import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontSprite: true
  }

  flipCard = () => {
    this.setState({frontSprite: !this.state.frontSprite})
  }

  render() {

    const {sprites, name, stats} = this.props
    return (
      <Card>
        <div onClick={() => this.flipCard()}>
          <div className="image">
            <img alt="oh no!" src={this.state.frontSprite ? sprites.front : sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
