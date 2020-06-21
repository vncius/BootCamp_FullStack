import React, { Component } from 'react';

export default class Toggle extends Component {
  handleChange = (event) => {
    const { onToggle } = this.props;
    onToggle(event.target.checked);
  };

  render() {
    const { enabled, description } = this.props;

    return (
      <div className="switch">
        <label>
          {description}
          <input
            checked={enabled}
            type="checkbox"
            onChange={this.handleChange}
          />
          <span className="lever"></span>
        </label>
      </div>
    );
  }
}
