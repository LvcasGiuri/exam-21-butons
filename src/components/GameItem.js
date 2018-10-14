import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { getItemById } from '../actions/games';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';
import '../App.css';

class GameItem extends Component {

  openVideo() {
    window.open(this.props.gameSelected.recordVideo);
  }

  render() {
    return (
      <Grid>
        <Row bsStyle="show-grid" key={this.props.gameSelected.id} className="row-games">
          <Col xs={3} md={3}>
            Game
          </Col>
          <Col xs={3} md={3}>
            User
          </Col>
          <Col xs={3} md={3}>
            Time
          </Col>
          <Col xs={3} md={3}>
            Video
          </Col>
          <Col xs={3} md={3}>
            <h3 className="game-name"> {this.props.gameSelected.names.international } </h3>
          </Col>
          <Col xs={3} md={3}>
            <h3 className="game-name"> {this.props.gameSelected.recordUserName } </h3>
          </Col>
          <Col xs={3} md={3}>
            <h3 className="game-name">{ this.props.gameSelected.recordTime } </h3>
          </Col>
          <Col xs={12} md={3}>
            <CustomButton text="See Video" size="large" class="primary" disabled={this.props.gameSelected.videoDisabled} action={this.openVideo.bind(this)}/>
          </Col>
        </Row>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameItem);