import React from 'react';

import { Container, List, Border } from './styles';
import { connect } from 'react-redux';

// import { Container } from './styles';

const SideList = props => (
  <Container>
    {props.users.data.map(user => (
      <List key={user.id}>
        <ul>
          <li>
            <img src={user.avatarURL} alt="avatar" />
            <p>
              <span>{user.name}</span>
              <span>{user.login}</span>
            </p>
            <button>
              <i className="fas fa-times-circle" />
            </button>
            <button>
              <i className="fas fa-chevron-right" />
            </button>
          </li>
        </ul>
        <Border />
      </List>
    ))}
  </Container>
);

const mapStateToProps = state => ({
  users: state.userMarker
});

export default connect(mapStateToProps)(SideList);
