import React, {useState} from 'react'
import { Card } from 'semantic-ui-react'

function PokemonCard(props) {

    const [isClicked, setIsClicked] = useState(false);

    const {name} = props.pokemon,
        hp  = props.pokemon.stats[5].value,
        {front, back} = props.pokemon.sprites;

    return (
        <Card>
            <div onClick = {() => setIsClicked(!isClicked)}>
                <div className="image">
                    <img alt="oh no!" src = {isClicked? back : front}/>
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


export default PokemonCard
