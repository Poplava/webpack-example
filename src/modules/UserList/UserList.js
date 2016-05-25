var React = require('react');
var UserListItem = require('../UserListItem/UserListItem').default;

var styles = require('./styles.css');

module.exports = React.createClass({
  displayName: 'UserList',

  render: function() {
    return (
      <ul className={styles.root}>
        {
          this.props.users.map(function(user) {
            return <UserListItem key={user.id} user={user} />;
          })
        }
      </ul>
    );
  }
});