import React, { Component } from 'react';

class Incomes extends Component {
  render() {
    return (
      <div>
        <h1>Ingresos</h1>
        {this.props.data.map((entry, index) =>
          <div key={index}>
            <span>{entry.category}</span>
            <span> ${entry.amount}</span>
          </div>
        )}
      </div>
    );
  }
};

export default Incomes;
