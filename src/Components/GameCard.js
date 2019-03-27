import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';


class GameCard extends Component {

    render() {
    
        // Console log out the props to see data is working
        console.log("Component receives props", this.props);

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
                                    <td className="team-nameA">{this.props.gameObject.Team_NameA}</td>
                                    <td>{this.props.gameObject.Q1A}</td>
                                    <td>{this.props.gameObject.Q2A}</td>
                                    <td>{this.props.gameObject.Q3A}</td>
                                    <td>{this.props.gameObject.Q4A}</td>
                                    <td className="total-scoreA">0</td>
                                </tr>
                                <tr>
                                    <td className="team-nameB">{this.props.gameObject.Team_NameB}</td>
                                    <td>{this.props.gameObject.Q1B}</td>
                                    <td>{this.props.gameObject.Q2B}</td>
                                    <td>{this.props.gameObject.Q3B}</td>
                                    <td>{this.props.gameObject.Q4B}</td>
                                    <td className="total-scoreB">0</td>
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