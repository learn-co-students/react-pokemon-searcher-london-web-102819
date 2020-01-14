import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

    state = {
        isClicked: false 
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        });
    }
    render() {

        const {name} = this.props.pokemon,
            hp  = this.props.pokemon.stats[5].value,
        {front, back} = this.props.pokemon.sprites;

        return (
            <Card>
                <div onClick = {this.handleClick}>
                    <div className="image">
                        <img alt="oh no!" src = {this.state.isClicked? back : front}/>
                    </div>
                    <div className="content">
                        <div className="header">{name}</div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="icon heartbeat red" />
                            {hp} hp
                        </span>
                    </div>
                </div>
            </Card>
        )
    }
}

export default PokemonCard
