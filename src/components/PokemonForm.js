import React from "react";
import { Form } from "semantic-ui-react";

const POKEMON_API = "http://localhost:3000/pokemon";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const pokemonObjTobePost = {
      name: this.state.name,
      stats: [
        {
          value: 80,
          name: "special-defense"
        },
        {
          value: 80,
          name: "special-attack"
        },
        {
          value: 63,
          name: "defense"
        },
        {
          value: 62,
          name: "attack"
        },
        {
          value: 60,
          name: "speed"
        },
        {
          value: this.state.hp,
          name: "hp"
        }
      ],

      sprites: { front: this.state.frontUrl, back: this.state.backUrl }
    };

    fetch(POKEMON_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemonObjTobePost)
    })
      .then(res => res.json())
      .then(pokemon => {
        this.props.createAPokemon(pokemon);
      });
  };

  render() {
    const { name, hp, frontUrl, backUrl } = this.state;
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form
          onSubmit={event => {
            this.handleSubmit;
          }}
          onChange={this.handleChange}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={hp}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={frontUrl}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
