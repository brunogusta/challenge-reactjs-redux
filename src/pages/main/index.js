import React, { Component, Fragment } from 'react';

import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { connect } from 'react-redux';

import Sidelist from '../../components/sideList';
import Modal from '../../components/modal/index';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.558878463404145,
      longitude: -46.62830606026929,
      zoom: 14
    },
    modal: {
      isShowing: false
    },
    input: {
      value: ''
    },
    coordenates: null
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillMount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = e => {
    e.preventDefault();

    const [longitude, latitude] = e.lngLat;

    const coordenates = {
      longitude,
      latitude
    };

    this.setState({
      ...this.state,
      coordenates
    });

    this.openModalHandler();
  };

  openModalHandler = () => {
    this.setState({
      ...this.state,
      modal: { isShowing: true }
    });
  };

  closeModalHandler = () => {
    this.setState({
      ...this.state,
      modal: { isShowing: false }
    });
  };

  render() {
    return (
      <Fragment>
        <Sidelist />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            'pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ'
          }
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.props.users.data.map(user => (
            <Marker
              key={user.id}
              latitude={user.latitude}
              longitude={user.longitude}
              onClick={this.handleMapClick}
              captureClick={true}
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48
                }}
                src={user.avatarURL}
                alt="avatar"
              />
            </Marker>
          ))}
        </MapGL>
        <Modal
          isShowing={this.state.modal.isShowing}
          closeModal={this.closeModalHandler}
          coordenates={this.state.coordenates}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userMarker
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Main);
