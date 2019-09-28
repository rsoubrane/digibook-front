import React from "react";

//React Router
import { Route, Redirect } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Check if user needs to be redirected or if we can display the component
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
	<Route {...rest} render={props => (authenticated === true ? <Redirect to='/' /> : <Component {...props} />)} />
);

const mapStateToProps = state => ({
	authenticated: state.user.authenticated
});

AuthRoute.propTypes = {
	user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AuthRoute);
