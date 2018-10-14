import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getItemById } from '../actions/games';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';
import '../App.css';

class ListOfGames extends Component {

  getItem(id) {
    this.props.getItemById(id);
  }

  render() {
    return (
      <Grid>
        {
          this.props.games.map((game)=>{
            return(
              <Row bsStyle="show-grid" className="row-games" key={game.id}>
                <Col xs={4} md={4}>
                  <Image src={ game.assets.logo.uri} responsive/>
                </Col>
                <Col xs={8} md={4}>
                  <h3 className="game-name">{ game.names.international } </h3>
                </Col>
                <Col xs={12} md={4}>
                  <Link to={`/game/${game.id}`}>
                    <CustomButton text="See More" size="large" class="primary" disabled="" action={this.getItem.bind(this, game.id)}/>
                  </Link>
                </Col>
              </Row>
            )
          })
        }
      </Grid>
    );
  }
}


const mapStateToProps = (props) => {
  return {
    games: props.games.gamesData,
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getItemById: getItemById
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListOfGames);
