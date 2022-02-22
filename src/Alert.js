import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      background: this.background
    };
  }

  render() {
    return (
    <div className={this.props.className}>
        <p style={this.getStyle()}>{this.props.text}</p>
    </div>
    );
  }
}

class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'blue';
    }
  }
export { InfoAlert };

class ErrorAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'red';
    }
}
export { ErrorAlert };

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#856514';
    this.background = '#FFF9BA';
  }
}
export { WarningAlert };