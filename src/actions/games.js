import * as axios from 'axios';
import { GamesURL, RecordsURL } from '../enviroment/Urls'

export function loadGames() {
  return async dispatch => {
    axios.get(GamesURL(), {}).then(gamesData => {
        let data = gamesData.data.data;
        data.map((item) => {
          axios.get(RecordsURL(item.id), {}).then(gameData => {
            let runsData = gameData.data.data[0].runs[0];
            if (runsData) {
              item.recordTime = runsData.run.times.realtime.split("PT");
              item.recordVideo = runsData.run.videos.links[0].uri;
              item.videoDisabled = false;
              let bestRunnerData = runsData.run.players[0];
              axios.get(bestRunnerData.uri, {}).then(runnerData => {
                item.recordUserName = runnerData.data.data.names.international;
              })
            }
            else {
              item.recordVideo = "Not Apply";
              item.recordTime = "Not Apply";
              item.recordUserName = "Not Apply";
              item.videoDisabled = true;
            }
          })
        })
        dispatch({
          type: 'LOAD_GAMES_SUCCESS',
          payload: gamesData.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: 'LOAD_GAMES_FAIL',
          error: err.toString() + " :( "
        });
      });
  };
}

export function getItemById(id){
  return async dispatch => {
    dispatch({
      type: 'GET_ITEM_BY_ID',
      payload: id
    });
  }
}

export default {
  loadGames,
  getItemById
}