import React, { Component } from 'react';
import axios from 'axios';
import GameCard from '../Components/GameCard';
import Grid from '@material-ui/core/Grid';


// Parent component that holds all the scorecard components as children
class DisplayScoresJumbotron extends Component {

    constructor() {
        super();

        // Assign the default state
        this.state = {
            // Number of scorecards
            numOfScorecards: '',

            // Array of Scorecard objects
            ScorecardsArray: [{}],
        }
    }

    // Run the fetch her to gather all the scorecards data
    getScorecards() {
        var postBody = { Week: 1}
        var apiURL = "http://68.183.28.230:3000/scores/getScoreboardsByWeek"
        axios.post(apiURL, postBody).then(res => {
            // Set the state here 
            this.setState({
                numOfScorecards: res.data.total,
                ScorecardsArray: res.data.scores,
            })

            // Console Log testing
            console.log("After fetching data", this.state);
        })
    }

    componentWillMount() {
        this.getScorecards();
    }

    render() {
        return (
            // // Return the Scorecards
            // <div className="scoresContainer">
            //     {this.state.ScorecardsArray.map((game) => 
            //     <GameCard gameObject={game}></GameCard>)}
            // </div>

            <Grid container spacing={35}>
                {this.state.ScorecardsArray.map((game) => 
                    <Grid item key={game._id} sm={6} md={4} lg={3}>
                        <GameCard gameObject={game}></GameCard>
                    </Grid>
                )}
            </Grid>
        )
    }

}

export default (DisplayScoresJumbotron);