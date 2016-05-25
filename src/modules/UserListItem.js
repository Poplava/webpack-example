import React, { PropTypes, Component } from 'react';

export default class UserListItem extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const {
      email,
      name,
      picture
    } = this.props.user;

    return (
      <li>
        <img src={picture} />
        <h3>{'Name: '}{name}</h3>
        <h4>{email}</h4>
      </li>
    );
  }
}