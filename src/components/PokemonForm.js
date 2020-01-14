import React from "react";
import { Form } from "semantic-ui-react";

const POKEMON_URL = "http://localhost:3000/pokemon";

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
          value: this.state.hp,
          name: "hp"
        }
      ],

      sprites: { front: this.state.frontUrl, back: this.state.backUrl }
    };

    fetch(POKEMON_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemonObjTobePost)
    })
      .then(res => res.json())
      .then(pokemon => {
        this.props.createAPokemon(pokemon);
      })
      .then(() => {
        this.setState({
          name: "",
          hp: "",
          frontUrl: "",
          backUrl: ""
        });
      });
  };

  render() {
    const { name, hp, backUrl, frontUrl } = this.state;
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
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
