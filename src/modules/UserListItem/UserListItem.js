import React, { PropTypes, Component } from 'react';
import appData from 'appData';

import styles from './styles.css';


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
      <li className={styles.root}>
        <img src={picture} />
        <h3 className={styles.name}>{'Name: '}{name}</h3>
        <h4 className={styles.email}>{email}</h4>
        <h4 className={styles.email}>{appData.join('; ')}</h4>
      </li>
    );
  }
}