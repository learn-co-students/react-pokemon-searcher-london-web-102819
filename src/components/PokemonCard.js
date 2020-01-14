import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    spriteToDisplay: "front"
  };

  toggleImage = () => {
    this.setState({
      spriteToDisplay: this.state.spriteToDisplay === "front" ? "back" : "front"
    });
  };

  getPokemonStat = name => {
    const stat = this.props.pokemonToRender.stats.find(
      stat => stat.name === name
    );
    return stat ? stat.value : undefined;
  };

  render() {
    const { pokemonToRender } = this.props;
    const { spriteToDisplay } = this.state;
    return (
      <Card>
        <div>
          <div className="image">
            <img
              onClick={this.toggleImage}
              src={pokemonToRender.sprites[spriteToDisplay]}
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{pokemonToRender.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getPokemonStat("hp")}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
