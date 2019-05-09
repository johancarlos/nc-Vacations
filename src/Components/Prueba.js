import React, { Component } from 'react';
import { Form, Button, Segment, TextArea } from 'semantic-ui-react';
import axios from 'axios';

function NameContent(props) {
  if (props.isAuthenticated) {
    return(
        $'{props.user.displayName}');
  }
  return <p></p>;
}


class Prueba extends Component {

  constructor(props){
    super(props)
    this.state = {
      name:'',
      nameForm: NameContent(props),
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}



handleChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }


  render(){
    return(
      <div>
          <h2>Solicitud Vacacion</h2>

          <div>``
          {!this.state.complete ?

            <Form onSubmit={this.handleSubmit} style={{paddingTop:50}}>
              <Form.Field>

                <NameContent  isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.authButtonMethod}>
                  <Form.Input label='Nombre' name="name" value={this.state.name} onChange={this.handleChange}/>
                  </NameContent>

              </Form.Field>
                <Form.Field>
                    <Form.Input label='Nombre' name="name" value={this.state.name} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field control={TextArea} name="description" required={true} label='Descripcion' placeholder="Description"  value={this.state.description} onChange={this.handleChange}/>
              <Form.Button content='Submit'  />
            </Form>
          : null }
          </div>
      </div>
    );
  }
}
export default Prueba;
