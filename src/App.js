import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './Components/Navigation/NavBar';
import ErrorMessage from './Components/MicrosoftGraph/ErrorMessage';
import Welcome from './Components/Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import config from './Components/MicrosoftGraph/Config';
import { UserAgentApplication } from 'msal';
import { getUserDetails } from './Components/MicrosoftGraph/GraphService';
import RequestList from './Components/RequestList';
import Footer from './Components/Footer/Footer';



class App extends Component {
  constructor(props) {
  super(props);

  this.userAgentApplication = new UserAgentApplication(config.appId, null, null);

  var user = this.userAgentApplication.getUser();

  this.state = {
    isAuthenticated: (user !== null),
    user: {},
    error: null
  };

  if (user) {
    // Enhance user object with data from Graph
    this.getUserProfile();
  }
}

async login() {
  try {
    await this.userAgentApplication.loginPopup(config.scopes);
    await this.getUserProfile();
  }
  catch(err) {
    var errParts = err.split('|');
    this.setState({
      isAuthenticated: false,
      user: {},
      error: { message: errParts[1], debug: errParts[0] }
    });
  }
}

logout() {
  this.userAgentApplication.logout();
}

async getUserProfile() {
  try {
    // Get the access token silently
    // If the cache contains a non-expired token, this function
    // will just return the cached token. Otherwise, it will
    // make a request to the Azure OAuth endpoint to get a token

    var accessToken = await this.userAgentApplication.acquireTokenSilent(config.scopes);

    if (accessToken) {
      // Get the user's profile from Graph
      var user = await getUserDetails(accessToken);
      this.setState({
        isAuthenticated: true,
        user: {
          displayName: user.displayName,
          email: user.mail || user.userPrincipalName
        },
        error: null
      });
    }
  }
  catch(err) {
    var error = {};
    if (typeof(err) === 'string') {
      var errParts = err.split('|');
      error = errParts.length > 1 ?
        { message: errParts[1], debug: errParts[0] } :
        { message: err };
    } else {
      error = {
        message: err.message,
        debug: JSON.stringify(err)
      };
    }

    this.setState({
      isAuthenticated: false,
      user: {},
      error: error
    });
  }
}

  render() {
    let error = null;
    if (this.state.error) {
      error = <ErrorMessage message={this.state.error.message} debug={this.state.error.debug} />;
    }
    return (
      <Router>
        <div>
        <NavBar
isAuthenticated={this.state.isAuthenticated}
authButtonMethod={this.state.isAuthenticated ? this.logout.bind(this) : this.login.bind(this)}
user={this.state.user}/>
          <Container>
            {error}
            <Route exact path="/"
              render={(props) =>
                <Welcome {...props}
                isAuthenticated={this.state.isAuthenticated}
                user={this.state.user}
                authButtonMethod={this.login.bind(this)} />
                            } />

            <Route exact path="/list"
                render={(props) =>
                  <RequestList
                  isAuthenticated={this.state.isAuthenticated}
                  user={this.state.user}/>
                }/>
                <Route
                        exact
                        path="/list"
                        render={() =><RequestList/>}
                      />
          </Container>
          <Footer/>
        </div>
      </Router>
    );
  }
  setErrorMessage(message, debug) {
    this.setState({
      error: {message: message, debug: debug}
    });
  }
}

export default App;
