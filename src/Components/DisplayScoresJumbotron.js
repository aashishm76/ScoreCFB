import React, { Component } from 'react';
import axios from 'axios';

// Component and MaterialUI Imports
import GameCard from '../Components/GameCard';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { InputLabel, Typography } from '@material-ui/core';

// CSS in JS Styling
const styles = {
    DisplayScoresJumbotron: {
        margin: '5px',
    },
    WeekSelectContainer: {
        paddingTop: '25px',
        marginBottom: '15px',
    },
    GridListContainer: {
        marginTop: '45px',
    },
    GridList: {
        padding: '15px'
    },
    DropdownRoot: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    DropdownSelector: {
        width: '125px',
        heigh: '100px',
        backgroundColor: 'white',
        borderRadius: '2px',
        textAlign: 'center',
        marginLeft: '15px',
    },
    WeekName: {
        color: 'white',
        paddingTop: '25px',
    }
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

            // Week value that is used to determine what week to fetch data from
            Week: '1',
        }
    }

    // Run the fetch her to gather all the scorecards data
    getScorecards() 
    {
        var postBody= {Week: this.state.Week}
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

    // This function handles the changes made from the drop down select box. 
    // Each time an option is selected a callback function is used to change the state of Week 
    handleChange = event => {
        this.setState({ Week : event.target.value });
        console.log("Week:" + this.state.Week);

        // Make another fetch call so this time you use the updated Week 
        this.getScorecards()
    }


    render() 
    {
        return (

            <div className="DisplayScoresJumbotron">
                <Typography className={this.props.classes.WeekName} variant="h2" gutterBottom>College Football Week {this.state.Week} Scores</Typography>
                <div className={this.props.classes.WeekSelectContainer}>
                    <div>
                        <form className={this.props.classes.DropdownRoot}>
                            <FormControl variant="filled" className={this.props.classes.DropdownSelector}>
                                <InputLabel>{this.state.Week}</InputLabel>
                                <Select value={this.state.Week} onChange={this.handleChange} name="Week">
                                    <MenuItem value='2'> Week 1 </MenuItem>
                                    <MenuItem value='3'> Week 2 </MenuItem>
                                    <MenuItem value='4'> Week 3 </MenuItem>
                                    <MenuItem value='5'> Week 4 </MenuItem>
                                    <MenuItem value='6'> Week 5 </MenuItem> 
                                    <MenuItem value='7'> Week 6 </MenuItem>
                                    <MenuItem value='8'> Week 7 </MenuItem>
                                    <MenuItem value='9'> Week 8 </MenuItem>
                                    <MenuItem value='10'> Week 9 </MenuItem>
                                    <MenuItem value='11'> Week 10 </MenuItem>
                                    <MenuItem value='12'> Week 11 </MenuItem>
                                    <MenuItem value='13'> Week 12 </MenuItem>
                                    <MenuItem value='14'> Week 13 </MenuItem>
                                    <MenuItem value='15'> Week 14 </MenuItem>
                                    <MenuItem value='16'> Week 15 </MenuItem>
                                    <MenuItem value='Bowl'>Bowl Games </MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </div>
                </div>
                <div className={this.props.classes.GridListContainer}>
                    <Grid container spacing={16} className={this.props.classes.GridList}>
                        {this.state.ScorecardsArray.map((game) => 
                            <Grid item key={game._id} className={this.props.classes.GridItemGame} md={4} lg={3}>
                                <GameCard className="game" gameObject={game}></GameCard>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(DisplayScoresJumbotron);