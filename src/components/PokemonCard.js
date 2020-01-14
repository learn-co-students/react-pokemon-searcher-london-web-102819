import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    spriteDisplay: "front"
  };

  toggleSprite = () => {
    if (this.state.spriteDisplay === "front") {
      this.setState({
        spriteDisplay: "back"
      });
    } else if (this.state.spriteDisplay === "back") {
      this.setState({
        spriteDisplay: "front"
      });
    }
  };

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img
              src={
                this.state.spriteDisplay === "front"
                  ? this.props.pokemon.sprites.front
                  : this.props.pokemon.sprites.back
              }
              alt="oh no!"
              onClick={() => this.toggleSprite()}
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
