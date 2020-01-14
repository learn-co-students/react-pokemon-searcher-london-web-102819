import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  render() {
    const { pokemonToRender } = this.props;
    return (
      <Card>
        <div>
          <div className="image">
            <img src={pokemonToRender.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemonToRender.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {/* {pokemonToRender.stats} */}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
