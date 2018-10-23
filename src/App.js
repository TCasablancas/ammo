import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      texto: "Lista de Contatos",
    };
  }

  clicked(){
    this.setState({ texto: this.refs.textBox.value });
  }

  state = {
    current: 3,
  };
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('https://randomuser.me/api/?results=50&nat=br')
    .then(results => {
      return results.json();
    }).then(data => {
      let contacts =
        data.results.map((user) => {
        return(
          <div key={user.results} className="item">
            <div className="pics">
              <span><img src={ user.picture.medium }/></span>
              <span><img src={ user.picture.medium }/></span>
              <span><img src={ user.picture.medium }/></span>
            </div>
            <dl className="nome">
              <dt><strong>{user.name.first} {user.name.last}</strong></dt>
              <dd><small>{user.login.username}</small></dd>
            </dl>
            <div className="local">
              <span id="cidade"><small>Cidade</small>{user.location.city}</span>
              <span id="estado"><small>Estado</small>{user.location.state}</span>
            </div>
          </div>
        )
      })
      this.setState({ contacts });
      console.log("state", this.state.contacts);
    })
  }

  render() {

    <Pagination onChange={this.onChange} current={this.state.current} total={25} />;
    return (
      <div>
        <div className="container">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <img src="https://arapiracagardenshopping.com.br/wp-content/uploads/2016/05/mmartan.jpg" />
            </div>
            <div className="navbar-end">
                <input type="text" ref="textBox" placeholder="Pesquise Aqui" />
                <button onClick={ (e) => {this.clicked();} }>Buscar</button>
            </div>
          </nav>
        </div>

        <section className="section">
          <div className="container">
            <div id="titleTop">
              <h1>{this.state.texto}</h1>
            </div>

            <section className="section">
              <div id="contador">50 itens encontrados</div>
              <ul className="listagem">
                  <li>{this.state.contacts}</li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
