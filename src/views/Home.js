import React, { Component } from 'react';
import { loadGames } from '../actions/games';
import { Jumbotron } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ListOfGames from '../components/ListOfGames'
import Header from '../components/Header'
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {

  componentDidMount() {
    this.props.loadGames();
  }

  render() {
    return (
      <div className="app">
        <Header title="List of Speedrun's" class="app-logo" logo={logo}/>
        <Jumbotron className="jumbo-grid">
          <ListOfGames />
          {this.props.error}
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    error: props.games.error
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadGames: loadGames
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);