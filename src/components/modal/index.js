import React, { Component, Fragment } from 'react';

import { Container, Footer, Content } from './style';

import { Creators as addUserActions } from '../../store/duck/addUser';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Modal extends Component {
  state = {
    inputValue: '',
    longitude: null,
    latitude: null
  };

  setInputValue = value => {
    this.setState({ ...this.state, inputValue: value });
  };

  addUser = async e => {
    e.preventDefault();

    const longitude = this.props.coordinates.longitude;
    const latitude = this.props.coordinates.latitude;

    await this.setState({
      ...this.state,
      longitude,
      latitude
    });

    this.props.addInputRequest(this.state);

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
              <button type="submit">Salvar</button>
              <button onClick={this.props.closeModal}>Cancelar</button>
            </Footer>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userMarker
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(addUserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
