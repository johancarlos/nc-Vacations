import React, { Component } from 'react';
import { Form, Button, Segment, TextArea } from 'semantic-ui-react'

function NameContent(props) {
  if (props.isAuthenticated) {
    return (
      <div>
      <label>Nombre:</label>
        <Form.Input defaultValue={props.user.displayName} disabled  />
         <div class="ui label">{props.user.displayName}</div>
      </div>
    );
  }
  return  <p ></p>;
}

class RequestForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({description: event.target.description});
  }

handleSubmit(event) {
   //alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
   console.log(this.state.description);
 }

  render(){
    return(
      <div>
          <h2>Solicitud Vacacion</h2>

          <div>
          {!this.state.complete ?

            <Form onSubmit={this.handleSubmit} style={{paddingTop:50}}>
                <Form.Field>
                    <NameContent isAuthenticated={this.props.isAuthenticated}
                    user={this.props.user}
                    authButtonMethod={this.props.authButtonMethod}/>
                </Form.Field>
                <Form.Field control={TextArea} required={true} label='Descripcion' placeholder="Description" />

                <Form.Field>
                <h4>Seleccionar Fecha: </h4>
                </Form.Field>
              <Form.Button content='Submit'  />
            </Form>
          : null }
          </div>
      </div>
    );
  }
}
export default RequestForm;
