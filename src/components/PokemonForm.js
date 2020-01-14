import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.postPokemon(this.state)
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={e => this.handleChange('name', e.target.value)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={e => this.handleChange('hp', e.target.value)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={e => this.handleChange('frontUrl', e.target.value)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={e => this.handleChange('backUrl', e.target.value)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
