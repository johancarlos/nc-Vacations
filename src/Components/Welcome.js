import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import Calendar from './Form/Calendar';
import {
  Button,
  Jumbotron } from 'reactstrap';


function WelcomeContent(props) {
  // If authenticated, greet the user
  if (props.isAuthenticated) {
    return (
      <div>
        <h3>Welcome {props.user.displayName}!</h3>
      </div>
    );
  }
  // Not authenticated, present a sign in button
  return <Button color="primary" onClick={props.authButtonMethod}>Click here to sign in</Button>;
}

function NameContent(props) {
  if (props.isAuthenticated) {
    return (
      <div>
        <input defaultValue={props.user.displayName} readOnly="readOnly" />
      </div>
    );
  }
  return <input defaultValue={props.user.displayName}/>;
}

function NameText(props) {
  if (props.isAuthenticated) {
    return (
      <div>
        <p>{props.user.displayName}</p>
      </div>
    );
  }
  return <p>{props.user.displayName}</p>;
}

class Welcome extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      description:'',
      from:undefined,
      to:undefined,
      descriptionError: false,
      dateInitError: false,
      dateEndError: false,
      formError: false,
      errorMessage: 'Please complete all required fields.'
  }
  this.submitVacationForm = this.submitVacationForm.bind(this);
  this.successCallback = this.successCallback.bind(this);
  }

  successCallback() {
    this.setState({
      complete: true
    })
    setTimeout( () => {this.setState({modalOpen: false})}, 5000);
    this.props.hideLoading();
  }

  handleClose = () => this.setState({ modalOpen: false })
  handleOpen = () => this.setState({ modalOpen: true })

  submitVacationForm(){
    let error = false;

    if (this.state.description === '') {
      this.setState({descriptionError:true})
      error = true
    }else{
      this.setState({descriptionError:false})
      error = false
    }

    if (this.state.from === '') {
      this.setState({dateInitError:true})
      error = true
    }else{
      this.setState({dateInitError:false})
      error = false
    }

    if (this.state.to === '') {
      this.setState({dateEndError:true})
      error = true
    }else{
      this.setState({dateEndError:false})
      error = false
    }


    if (error) {
      this.setState({formError:true})
      return
    }else{
      this.setState({formError:false})
    }

    console.log(this.state);

  }


  render() {
    return (
      <Jumbotron>
        <h1>NearshoreCode Vacations Form</h1>
        <WelcomeContent
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
          authButtonMethod={this.props.authButtonMethod} />
          <div>
          <br/>
            <h2>Solicitud Vacacion</h2>
            {!this.state.complete ?
              <Form error={this.state.formError}>
                <Form.Field>
                  <label>Nombre:</label>
                  <NameContent isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.authButtonMethod}/>
                </Form.Field>
                <Form.Field>
                  <Form.Input required={true} onChange={(e) => this.setState({description: e.target.value})} label='Descripcion' placeholder="Desc" error={this.state.descriptionError}/>
                </Form.Field>
                <Form.Field required>
                  <label>Seleccionar Fecha: </label>
                  <Calendar />


                </Form.Field>
                {!this.state.complete ?
                  <Form.Button content='Submit'
                  basic color='green'
                  onClick={this.submitVacationForm} />
                : null }
              </Form>
              :
              <div >
                <p>Thanks for your response </p>.
                <NameText isAuthenticated={this.props.isAuthenticated}
                user={this.props.user}
                authButtonMethod={this.props.authButtonMethod}/>
                <p> We've received your information and we'll be in touch shortly.</p>
              </div>
            }
            </div>
      </Jumbotron>
    );
  }
}
export default Welcome;