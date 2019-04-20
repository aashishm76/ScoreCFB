// Charts Component 
// Lists rankings for AP Top 25, CFP Polls

// React Imports
import React, { Component } from 'react';
import axios from 'axios';


// Material UI Imports
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import { EROFS } from 'constants';


class Rankings extends Component {

    constructor()
    {
        super();

        this.state = {

            // Poll Responses from API Call 
            ResponsePolls: [{}],

            // Array of MenuItems used in Dropdown select box
            DropDownArray: ['1', '2', '3', '4', '5', '6', '8', '9', '10', '11', '12', '13'],

            // Header data needed to access API
            week : "1",
            year: "2018",
        }
    }

    getPollData() 
    {
        // Temporary var data for right now
        var params = { "year" : "2018", "week" : "1", "seasonType" : 'regular'}
        var apiURL = "http://api.collegefootballdata.com/rankings?year=${this.state.year}&week=${this.state.week}&seasonType=regular"
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'

        // Fetch API Data
        fetch(`https://api.collegefootballdata.com/rankings?year=${this.state.year}&week=${this.state.week}`, 
        {
            method: 'get',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
        })
    }

    componentDidMount()
    {
        this.getPollData();
    }

    render() 
    {
        return (
            <div>
                <div>
                    <Typography variant="h2" gutterBottom>[RANKING ORG] [WEEK #] Rankings</Typography>
                </div>
                <div>
                    <form>
                        <FormControl variant="filled">
                            <Select value={this.state.Week} onChange={this.handleChange}>
                                {this.state.DropDownArray.map((week, index) =>
                                    <MenuItem key={index} value={week}>Week {week}</MenuItem> 
                                )}
                                <MenuItem>Bowls</MenuItem>
                                <MenuItem>Championship</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
            </div>

        );
    }
}

export default (Rankings);