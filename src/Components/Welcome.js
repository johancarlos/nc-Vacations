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
        <h3 style={{paddingTop:40}}>Welcome {props.user.displayName}!</h3>
        <h2>Solicitud Vacacion</h2>
      </div>
    );
  }
  // Not authenticated, present a sign in button
  return (
    <div>
      <h1 style={{paddingTop:40}}>NearshoreCode Vacations Form</h1>
      <div>
        <h4 style={{paddingBottom:20}}>Please login to continue:</h4>
        <Button color="primary" onClick={props.authButtonMethod}>Click here to sign in</Button>
      </div>
    </div>
  );
}

function NameContent(props) {
  if (props.isAuthenticated) {
    return (
      <div>
      <label>Nombre:</label>
        <input defaultValue={props.user.displayName} readOnly="readOnly" />
      </div>
    );
  }
  return  <p ></p>;
}

function DescriptionContent(props) {
  if (props.isAuthenticated) {
    return (
      <div>
      <Form.Input required={true} label='Descripcion' placeholder="Desc" />
      </div>
    );
  }
  return  <p ></p>;
}

function FormSubmit(props) {
  if (props.isAuthenticated) {
    return (
        <Form.Button content='Submit'
        basic color='green'
         />

    );
  }
  return  <p ></p>;
}

function CalendarContent(props) {
  if (props.isAuthenticated) {
    return (
      <div>
        <label>Seleccionar Fecha: </label>
        <Calendar/>
      </div>
    );
  }
  return  <p></p>;
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
        <WelcomeContent
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
          authButtonMethod={this.props.authButtonMethod} />
          <div>
          <br/>
            {!this.state.complete ?
              <Form error={this.state.formError}>
                <Form.Field>
                  <NameContent isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.authButtonMethod}/>
                </Form.Field>
                <Form.Field>
                  <DescriptionContent isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.authButtonMethod}/>
                </Form.Field>
                <Form.Field required>
                  <CalendarContent isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.authButtonMethod}/>
                </Form.Field>
                {!this.state.complete ?
                  <FormSubmit isAuthenticated={this.props.isAuthenticated}
                  user={this.props.user}
                  authButtonMethod={this.props.authButtonMethod} onClick={this.submitVacationForm}/>
                : null }
              </Form>
              :
              <div >
                <p>Thanks for your response </p>.
                <NameText isAuthenticated={this.props.isAuthenticated}
                user={this.props.user}
                authButtonMethod={this.props.authButtonMethod}/>
                <p> We've received your request</p>
              </div>
            }
            </div>
      </Jumbotron>
    );

  }
}
export default Welcome;
