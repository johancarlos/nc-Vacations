import React, { Component } from 'react';


class Form extends Component {

  render(){
    return(
      <div>
          <h3>Solicitud Vacacion</h3>
          <div>
            <form>
              <div>
                <label>Nombre:</label>
                <input type="text"  />
              </div>
              <div>
                <label>Descripcion:</label>
                <input type="text"  />
              </div>
              <div>
                <label>Fecha Inicio: </label>
                <input type="text"  />
              </div>
              <div>
                <label>Fecha Fin: </label>
                <input type="text"  />
              </div>
              <button type="submit" name="button">Enviar</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Form;
