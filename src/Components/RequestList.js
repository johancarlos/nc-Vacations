import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import config from '../Config';
import { getEvents } from '../GraphService';

class RequestList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }
  render(){
    return(
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nombre</Table.HeaderCell>
              <Table.HeaderCell>Detalle</Table.HeaderCell>
              <Table.HeaderCell>Fecha</Table.HeaderCell>
              <Table.HeaderCell>estado</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default RequestList;
