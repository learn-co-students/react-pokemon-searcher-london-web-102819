import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    displayBack: false
  }

  handleImageClick = () => {
    this.setState({
      displayBack: !this.state.displayBack
    })
  }


  render() { 
    const hp = this.props.stats.find(stat => (
      stat.name === "hp"
    ))
    return (
      <Card>
        <div>
          <div onClick={this.handleImageClick} className="image">
            <img src={!this.state.displayBack? this.props.sprites.front :this.props.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
