// Charts Component 
// Lists rankings for AP Top 25, CFP Polls

// React Imports
import React, { Component } from 'react';
import axios from 'axios';


// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import { Table, TableHead, TableRow, TableCell, TableBody, CardHeader } from '@material-ui/core';

// Styling
const styles = {
    RankingsContainer: {
        backgroundColor: '#282c34',
    },
    headerDiv: {
        display: 'inline-block',
    },
    header: {
        color: 'white',
        paddingTop: '25px',
        marginLeft: '15px',
    },
    WeekSelectContainer: {
        display: 'inline-block',
        float: 'right',
        marginTop: '50px',
        marginRight: '15px',
    },
    DropDownSelector: {
        width: '125px',
        heigh: '180px',
        backgroundColor: 'white',
        borderRadius: '2px',
        textAlign: 'center',
        marginLeft: '15px',
    },
    DropDownRoot: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    TableContainer: {

        display: 'inline-block',
        margin: '15px',
    },
    Card: {
        maxWidth: '500px'
    },
    RakingsTable: {
        width: 'auto',
        height: 'auto'
    },
    BothTables: {
        textAlign: 'center'
    }
}


class Rankings extends Component {

    constructor()
    {
        super();

        this.state = {

            // Poll Responses from API Call 
            ResponsePolls: [{}],

            // Sorted rankings
            sortedAPRankings: [{}],

            // Sorted Coaches Poll Rankings

            // Array of MenuItems used in Dropdown select box
            DropDownArray: ['1', '2', '3', '4', '5', '6', '8', '9', '10', '11', '12', '13'],

            // Header data needed to access API
            Week: '1',

        }
    }

    getPollData() 
    {
        var postBody =  { week: this.state.Week }
        var apiURL = 'http://68.183.28.230:3000/ranks/getRankingsByWeek'

        // Axios call
        axios.post(apiURL, postBody).then(res => {

            // Fetched API data includes data from both AP Top25 and Coaches Poll data
            // We set the state here to hold onto both data 
            // Results 1-25 are AP Top25 poll and 26-50 are Coaches Poll
            this.setState({
                ResponsePolls: res.data.ranks,
            })
        })

    }

    handleChange = event => {

        this.setState({ Week : event.target.value });
        console.log("Week:" + this.state.Week);

        this.getPollData();
    }


    componentDidMount()
    {
        // Fetch the data from backend
        this.getPollData();
    }

    render() 
    {
        return (
            <div className={this.props.classes.RankingsContainer}>
                <div className={this.props.classes.headerDiv}>
                    <Typography className={this.props.classes.header} variant="h2" gutterBottom>Rankings Week: {this.state.Week} </Typography>
                </div>
                <div className={this.props.classes.WeekSelectContainer}>
                    <form className={this.props.classes.DropDownRoot}>
                        <FormControl variant="filled" className={this.props.classes.DropDownSelector}>
                            <Select value={this.state.Week} onChange={this.handleChange}>
                                {this.state.DropDownArray.map((week, index) => 
                                    <MenuItem key={index} value={week}> Week {week} </MenuItem>
                                )}
                                <MenuItem></MenuItem>
                                <MenuItem></MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
                <div className={this.props.classes.BothTables}>
                    <div className={this.props.classes.TableContainer}>
                        <Card className={this.props.classes.Card}>
                            <CardHeader title='AP Top 25' />
                            <Table className={this.props.classes.RankingsTable}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Rank</TableCell>
                                        <TableCell>Team</TableCell>
                                        <TableCell>Conference</TableCell>
                                        <TableCell>Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { this.state.ResponsePolls.slice(0,24).sort((a,b) => {
                                        return a.rank - b.rank
                                    }).map((team, index) =>
                                        <TableRow key={index}>
                                            <TableCell>{team.rank}</TableCell>
                                            <TableCell>{team.school}</TableCell>
                                            <TableCell>{team.conference}</TableCell>
                                            <TableCell>{team.points}</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                    <div className={this.props.classes.TableContainer}>
                        <Card className={this.props.classes.Card}>
                            <CardHeader title='Coaches Poll' />
                            <Table className={this.props.classes.RankingsTable}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Rank</TableCell>
                                        <TableCell>Team</TableCell>
                                        <TableCell>Conference</TableCell>
                                        <TableCell>Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { this.state.ResponsePolls.slice(25,49).sort((a,b) => {
                                        return a.rank - b.rank
                                    }).map((team, index) =>
                                        <TableRow key={index}>
                                            <TableCell>{team.rank}</TableCell>
                                            <TableCell>{team.school}</TableCell>
                                            <TableCell>{team.conference}</TableCell>
                                            <TableCell>{team.points}</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </div>

        );
    }
}

export default withStyles(styles)(Rankings);