import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondsVisible: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    // executado sempre que o componente é inicializado
    this.interval = setInterval(() => {
      const { secondsVisible } = this.state;
      this.setState({
        secondsVisible: secondsVisible + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    // executado sempre que tem atualização no componente
    console.log('componentDidUpdate de Users.js');
  }
  componentWillUnmount() {
    // executado sempre que o componente é removido do DOM
    clearInterval(this.interval);
    console.log('componentWillUnmount de Users.js');
  }

  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;

    return (
      <div>
        <p>Componente Users visibel por {secondsVisible} segundos</p>

        <ul>
          {users.map((user) => {
            return (
              <li key={user.login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
