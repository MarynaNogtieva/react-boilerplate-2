// Higher order component - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <h1>Info Header</h1>
      <p>The info is: { props.info }</p>
    </div>
  );
};


const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p> }
      <WrappedComponent { ...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? <WrappedComponent { ...props} /> : <p>You have to be authenticated to view this info.</p> }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='test info' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='test info' />, document.getElementById('app'));