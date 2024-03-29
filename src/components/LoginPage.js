import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p> <span className="alert-heading">Important!</span> This app is just for testing. It may change or be removed at any time.</p>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>    
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);