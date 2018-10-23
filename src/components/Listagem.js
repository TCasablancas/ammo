import React from 'react';
import { render } from 'react-dom';

class Listagem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('https://randomuser.me/api/?results=50&nat=br')
    .then(results => {
      return results.json();
    }).then(data => {
      let contacts = data.results.map((user) => {
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
      this.setState({contacts});
      console.log("state", this.state.contacts);
    })
  }

  render(){
    return(
      <div>
        <div id="contador">50 itens encontrados</div>
        <ul className="listagem">
            <li>{this.state.contacts}</li>
        </ul>
      </div>
    );
  }
}

export default Listagem;
