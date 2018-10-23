import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import Listagem from './components/Listagem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <img src="https://arapiracagardenshopping.com.br/wp-content/uploads/2016/05/mmartan.jpg" />
            </div>
            <div className="navbar-end">
              <form>
                <input type="text" placeholder="Pesquise Aqui" onSubmit={this.state.bind(this)}/>
              </form>
            </div>
          </nav>
        </div>

        <section className="section">
          <div className="container">
            <div id="titleTop">
              <h1>Lista de Contatos {this.state.text}</h1>
            </div>

            <section className="section">
              <Listagem />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
