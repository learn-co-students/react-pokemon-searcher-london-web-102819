import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'

function PokemonForm(props) {

    const [name, setName] = useState(''),
        [hp, sethp] = useState(''),
        [frontUrl, setFrontUrl] = useState(''),
        [backUrl, setBackUrl] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        props.submitPokemonData({name, hp, frontUrl, backUrl});
    }


    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group  widths="equal">
                    <Form.Input 
                        value = {name}  
                        onChange = {e => setName(e.target.value)}
                        fluid label="Name" placeholder="Name" name="name" 
                    />
                    <Form.Input 
                        value = {hp}  
                        onChange = {e => sethp(e.target.value)} 
                        fluid label="hp" placeholder="hp" name="hp" 
                    />
                    <Form.Input 
                        value = {frontUrl} 
                        onChange = {e => setFrontUrl(e.target.value)} 
                        fluid label="Front Image URL" placeholder="url" name="frontUrl" 
                    />
                    <Form.Input 
                        value = {backUrl}  
                        onChange = {e => setBackUrl(e.target.value)} 
                        fluid label="Back Image URL" placeholder="url" name="backUrl" 
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )

}

export default PokemonForm
