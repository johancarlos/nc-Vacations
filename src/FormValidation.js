import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import Calendar from './Calendar';

class RequestForm extends Component {
  constructor(props){

  }
  state={
      description:'',
      date:false
  }

  render(){
    return(
      <div>
          <h2>Solicitud Vacacion</h2>
          <div>
          <Form>
            <Form.Field>
              <h4>Nombre:</h4>
              <input type="text"  />
              </Form.Field>
            <Form.Field required>
              <h4>Descripcion:</h4>
              <input type="text"  />
            </Form.Field>
            <Form.Field>
              <h4>Seleccionar Fecha: </h4>
              <Calendar/>
            </Form.Field>

            <Form.Input
              label="descripcion"
              name="descripcion"
              value={this.state.description}
              onchange={this.onInputChange}
              error={this.state.emailError}
              />




            <Form.Button content='Submit'
            fluid
            color="blue"
            type="submit"
            disable={!this.state.description
            || !this.state.date
          }/>
          </Form>
          </div>
      </div>
    );
  }
}
export default RequestForm;
