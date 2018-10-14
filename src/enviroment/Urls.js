export const GamesURL = () => {
    return 'https://www.speedrun.com/api/v1/games'
}

export const RecordsURL = (id) => {
    return 'https://www.speedrun.com/api/v1/games/' + id + '/records'
}