import React, { Component } from 'react';
import css from './input.module.css';

export default class InputForm extends Component {
  changeInput = (event) => {
    const { id } = event.target;

    if (id === '1') {
      const { changeSalarioBruto } = this.props;
      changeSalarioBruto(event.target.value);
    }
  };

  render() {
    const { value, description, disable, type, id, isAttr } = this.props;

    return (
      <div className={css.component}>
        <span className={css.description} style={isAttr ? this.props.attr : {}}>
          {description}
        </span>
        <input
          id={id}
          min="0"
          value={value}
          disabled={disable}
          style={isAttr ? this.props.attr : {}}
          type={type === null || type === undefined ? 'text' : type}
          onChange={this.changeInput}
        ></input>
      </div>
    );
  }
}
