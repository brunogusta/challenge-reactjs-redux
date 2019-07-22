import React, { Component, Fragment } from 'react';

import { Container, Footer, Content } from './style';

import { Creators as addUserActions } from '../../store/duck/addUser';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Modal extends Component {
  state = {
    inputValue: ''
  };

  setInputValue = value => {
    this.setState({ ...this.state, inputValue: value });
  };

  addUser = e => {
    e.preventDefault();

    this.props.addInputRequest(this.state.inputValue);

    this.setState({ inputValue: '' });
    this.props.closeModal();
  };

  render() {
    if (!this.props.isShowing) {
      return null;
    }

    return (
      <Fragment>
        <Container>
          <Content onSubmit={this.addUser}>
            <strong>Adicionar novo usuário.</strong>
            <input
              onChange={e => this.setInputValue(e.target.value)}
              type="text"
              placeholder="Usuário do Github"
              value={this.state.inputValue}
            />
            <Footer>
              <button onClick={this.props.closeModal}>Cancelar</button>
              <button type="submit">Salvar</button>
            </Footer>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(addUserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Modal);
