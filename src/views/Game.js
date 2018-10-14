import React, { Component } from 'react';
import { getItemById } from '../actions/games';
import { Jumbotron } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameItem from '../components/GameItem';
import Header from '../components/Header';
import '../App.css';

class Home extends Component {

  componentDidMount(){
    const urlParameterId = this.props.location.pathname.split('/')[2];
    if (urlParameterId !== this.props.gameSelected.id) {
      this.props.getItemById(urlParameterId);
    }
  }

  render() {
    return (
      <div className="app">
        <Header title={this.props.gameSelected.names.international} class="app-logo" logo={this.props.gameSelected.assets.logo.uri} />
        <Jumbotron className="jumbo-grid">
          <GameItem />
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    gameSelected: props.games.gameSelected,
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getItemById: getItemById
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);