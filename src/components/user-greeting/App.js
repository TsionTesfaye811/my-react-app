import React from 'react';
import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="text-3xl font-bold text-green-600 bg-green-100 p-4 rounded shadow">
      Welcome back, {props.username}! 💚
    </h2>
  );

  const loginMessage = (
    <h2 className="text-3xl font-bold text-red-600 bg-red-100 p-4 rounded shadow">
      Please log in first, {props.username}. 🔒
    </h2>
  );

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      {props.isLoggedIn ? welcomeMessage : loginMessage}
    </div>
  );
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: 'Guest',
};

export default UserGreeting;
