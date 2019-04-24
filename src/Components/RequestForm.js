import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react'
import Calendar from './Calendar';

class RequestForm extends Component {
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
            <Form.Button content='Submit' />
          </Form>
          </div>
      </div>
    );
  }
}
export default RequestForm;
