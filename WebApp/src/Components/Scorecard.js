import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardActions, Button } from '@material-ui/core';

function Scorecard() {
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
                                <td className="team-name">UCF</td>
                                <td className="scores">7</td>
                                <td className="scores">7</td>
                                <td className="scores">7</td>
                                <td className="scores">7</td>
                                <td className="total-score">28</td>
                            </tr>
                            <tr>
                                <td className="team-name">USF</td>
                                <td className="scores">0</td>
                                <td className="scores">0</td>
                                <td className="scores">0</td>
                                <td className="scores">0</td>
                                <td className="total-score">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Learn more</Button>
            </CardActions>
        </Card>
     );
 }

 export default Scorecard;