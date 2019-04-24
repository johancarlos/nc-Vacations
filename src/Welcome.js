import React from 'react';
import RequestForm from './Components/RequestForm';
import { Form, Input } from 'semantic-ui-react'
import Calendar from './Components/Calendar';
import {
  Button,
  Jumbotron } from 'reactstrap';


function WelcomeContent(props) {
  // If authenticated, greet the user
  if (props.isAuthenticated) {
    return (
      <div>
        <h4>Welcome {props.user.displayName}!</h4>
      </div>
    );
  }

  // Not authenticated, present a sign in button
  return <Button color="primary" onClick={props.authButtonMethod}>Click here to sign in</Button>;
}

function FormContent(props) {
  if (props.isAuthenticated) {
    return (
      <div>
        <input defaultValue={props.user.displayName}/>
      </div>
    );
  }
  return <input defaultValue={props.user.displayName}/>;
}


export default class Welcome extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>NearshoreCode Vacations Request</h1>
        <WelcomeContent
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
          authButtonMethod={this.props.authButtonMethod} />
          <Form>
            <Form.Field>
              <h4>Nombre:</h4>
              </Form.Field>
              <FormContent isAuthenticated={this.props.isAuthenticated}
              user={this.props.user}
              authButtonMethod={this.props.authButtonMethod}/>
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
          <RequestForm/>
      </Jumbotron>
    );
  }
}
