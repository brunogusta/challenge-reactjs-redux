import React, { Component, Fragment } from 'react';

import { Container, List, Border } from './styles';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Creators as RemoveUser } from '../../store/duck/addUser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SideList extends Component {
  removeAvatar = _id => {
    const newData = this.props.users.data.filter(user => user.id !== _id);

    this.props.removeAvatar(newData);
  };

  notifyError = () => {
    toast.error('Erro ao adicionar usuário');
  };
  notifySuccess = () => {
    toast.success('Usuário cadastrado com sucesso!');
  };
  render() {
    return (
      <Fragment>
        {this.props.users.error ? this.notifyError() : ''}
        {this.props.users.success ? this.notifySuccess() : ''}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Container>
          {this.props.users.data.map(user => (
            <List key={user.id}>
              <ul>
                <li>
                  <img src={user.avatarURL} alt="avatar" />
                  <p>
                    <span>{user.name}</span>
                    <span>{user.login}</span>
                  </p>
                  <button onClick={() => this.removeAvatar(user.id)}>
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
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userMarker
});

const mapDispatchToProps = dispatch => bindActionCreators(RemoveUser, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideList);
