import React, { Component } from "react";
import './Footer.css';
import { Grid, Segment, Button, Image, List } from 'semantic-ui-react';
import logoFb from '../../Images/logoFb.png';
import logoTw from '../../Images/logoTw.png';
import logoLn from '../../Images/logoLn.png';

class Footer extends Component {
  render() {
    return (
      <div style={{paddingTop:50}}>
        <Grid columns={2} divided >
            <Grid.Row stretched color={"black"} >
              <Grid.Column width={12} style={{paddingLeft:50}}>
                <Segment inverted>
                <Button href="https://www.nearshorecode.com/" secondary >
                  NEARSHORECODE WEBSITE
                </Button>
                </Segment>
                <Segment inverted>
                  <p>Nearshore Code is a software development company located in South America, that delivers high quality solutions. We operate without any restriction of time, distance, culture or language. </p>
                  <p>We have the expertise and commitment to meet our customer’s needs, no matter the complexity of the challenge or technology required. </p>
                </Segment>
                <Segment inverded style={{background:0}}>
                  <List horizontal>
                    <List.Item>
                    <a href="https://www.facebook.com/nearshorecode">
                    <Image src={logoFb} width={40} alt="My logo" /></a>
                    </List.Item>
                    <List.Item>
                    <a href="https://twitter.com/nearshorecode">
                    <Image src={logoTw} width={40} alt="My logo" /></a>
                    </List.Item>
                    <List.Item>
                    <a href="https://www.linkedin.com/company/nearshore-code">
                    <Image src={logoLn} width={40} alt="My logo" /></a>
                    </List.Item>
                  </List>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} style={{paddingTop:25}} >
                <h3>CONTACTANOS</h3>
                  <span  >Phone: 591-79328832 | 591-44025483</span>
                  <span>Email: hello@nearshorecode.com</span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid class="grid-footer">
            <Grid.Row color='black' textAlign='center'>
              <Grid.Column>
                <Segment inverted>
                  <span class="span-footer">Nearshore Code © All rights reserved. 2019 </span>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}
export default Footer;
