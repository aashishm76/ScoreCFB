import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardActions, Button } from '@material-ui/core';
import axios from 'axios';


class Scorecard extends Component {

    constructor() {
        super();

        // Assign default state 
        this.state = {
            total: '',
            scoreboards: [{}],
        };
    }

    componentWillMount() {

        // Axios call 
        var postBody = { Week: 1 };
        axios.post("http://68.183.28.230:3000/scores/getScoreboardsByWeek", postBody).then(res => {
            this.setState({
                total: res.data.total,
                scoreboards: res.data.scores,
            })
            // console.log(res.data);
            console.log("Right after fetching data", this.state);
        });
    }

    render() {
        
        return (
            <Card className="testcard">
                <CardContent>
                    <div className="scorecard-topbar">
                    </div>
                    <div className="scorecard-table">
                        <table>
                            <thead> 
                                <tr>
                                    <th>&nbsp;</th>
                                    <td>Q1</td>
                                    <td>Q2</td>
                                    <td>Q3</td>
                                    <td>Q4</td>
                                    <td>Final</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="team-nameA">{this.state.scoreboards[0].Team_NameA}</td>
                                    <td>{this.state.scoreboards[0].Q1A}</td>
                                    <td>{this.state.scoreboards[0].Q2A}</td>
                                    <td>{this.state.scoreboards[0].Q3A}</td>
                                    <td>{this.state.scoreboards[0].Q4A}</td>
                                    <td className="total-scoreA"></td>
                                </tr>
                                <tr>
                                    <td className="team-nameB">USF</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td className="total-scoreB">0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Test Button</Button>
                </CardActions>
            </Card>
        );
    }
}

export default (Scorecard);