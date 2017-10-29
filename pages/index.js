import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import Head from 'next/head';
import store, { expense, income } from 'redux/store';
import { Expenses, Incomes } from 'components';
import screenfull from 'screenfull';
import Push from 'push.js';

class Main extends Component {
  fullScreen = () => {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  sayHello = () => {
    Push.create('Hellow world');
  }

  render() {
    const { expenses, incomes } = this.props;
    return (
      <div>
        <Head>
          <title>Fiinance</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Expenses data={expenses} />
        <Incomes data={incomes} />
        <button onClick={this.fullScreen}>Full screen mode</button>
        <button onClick={this.sayHello}>Say Hello</button>
      </div>
    );
  }
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({ expense, income }, dispatch);

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Main);

