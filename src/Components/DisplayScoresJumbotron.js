import React, { Component } from 'react';
import axios from 'axios';
import GameCard from '../Components/GameCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import WeekDropdown from '../Components/WeekDropdown';

// CSS in JS Styling
const styles = {
    DisplayScoresJumbotron: {
        margin: '5px',
    },
    GridList: {
        padding: '15px'
    },
}

// Parent component that holds all the scorecard components as children
class DisplayScoresJumbotron extends Component {

    constructor() 
    {
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
    getScorecards() 
    {
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

    componentWillMount() 
    {
        this.getScorecards();
    }

    render() 
    {
        return (

            // Week Dropdown menu picker
            <div className="DisplayScoresJumbotron">
                <Grid container spacing={16} className={this.props.classes.GridList}>
                    {this.state.ScorecardsArray.map((game) => 
                        <Grid item key={game._id} className={this.props.classes.GridItemGame} md={4} lg={3}>
                            <GameCard className="game" gameObject={game}></GameCard>
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(DisplayScoresJumbotron);