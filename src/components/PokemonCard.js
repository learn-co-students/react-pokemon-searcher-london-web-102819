import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    toggle: false
  };
  hp = this.props.pokemon.stats.find(p => p.name === "hp");

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img
              alt="oh no!"
              src={
                this.state.toggle
                  ? this.props.pokemon.sprites.back
                  : this.props.pokemon.sprites.front
              }
              onClick={this.handleToggle}
            />
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
    );
  }
}

export default PokemonCard;
