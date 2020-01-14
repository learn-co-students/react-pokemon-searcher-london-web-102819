import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    frontImage: true
  };

  handleFlipImage = () => {
    this.setState({
      frontImage: !this.state.frontImage
    });
  };

  render() {
    const { pokemonToRender } = this.props;
    const { frontImage } = this.state;
    return (
      <Card>
        <div>
          <div className="image">
            <img
              src={
                frontImage
                  ? pokemonToRender.sprites.front
                  : pokemonToRender.sprites.back
              }
              alt="oh no!"
              onClick={this.handleFlipImage}
            />
          </div>
          <div className="content">
            <div className="header">{pokemonToRender.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemonToRender.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
