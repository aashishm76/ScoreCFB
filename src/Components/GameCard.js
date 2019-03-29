import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'



// This is the actual scorecard class
// Props passed in from DisplayScoresJumbotron which is the parent component
class GameCard extends Component {

    render() {
        return (
            <Card className="scorecard">
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
                                    <td className="team-nameA">{this.props.gameObject.Team_NameA}</td>
                                    <td>{this.props.gameObject.Q1A}</td>
                                    <td>{this.props.gameObject.Q2A}</td>
                                    <td>{this.props.gameObject.Q3A}</td>
                                    <td>{this.props.gameObject.Q4A}</td>
                                    <td className="total-scoreA">{Number(this.props.gameObject.Q1A) + Number(this.props.gameObject.Q2A) + Number(this.props.gameObject.Q3A) + Number(this.props.gameObject.Q4A)}</td>
                                </tr>
                                <tr>
                                    <td className="team-nameB">{this.props.gameObject.Team_NameB}</td>
                                    <td>{this.props.gameObject.Q1B}</td>
                                    <td>{this.props.gameObject.Q2B}</td>
                                    <td>{this.props.gameObject.Q3B}</td>
                                    <td>{this.props.gameObject.Q4B}</td>
                                    <td className="total-scoreB">{Number(this.props.gameObject.Q1B) + Number(this.props.gameObject.Q2B) + Number(this.props.gameObject.Q3B) + Number(this.props.gameObject.Q4B)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default (GameCard);