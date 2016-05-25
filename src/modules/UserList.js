var React = require('react');
var UserListItem = require('./UserListItem').default;

module.exports = React.createClass({
  displayName: 'UserList',

  render: function() {
    return (
      <ul>
        {
          this.props.users.map(function(user) {
            return <UserListItem key={user.id} user={user} />;
          })
        }
      </ul>
    );
  }
});