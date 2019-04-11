import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

// Imports for table components
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


// CSS in JS styling 
const styles = {
    GamecardDiv: {

    },
    GameCard: {

    },
    ScoreTable: {
        tableLayout: 'fixed',
        width: '100%',
    }
}

// This is the actual scorecard class
// Props passed in from DisplayScoresJumbotron which is the parent component
class GameCard extends Component {

    render() {
        return (
            <div className={this.props.classes.GamecardDiv}>
                <Card className={this.props.classes.GameCard}>
                        <Table className={this.props.classes.ScoreTable}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell> Q1 </TableCell>
                                    <TableCell> Q2 </TableCell>
                                    <TableCell> Q3 </TableCell>
                                    <TableCell> Q4 </TableCell>
                                    <TableCell> Final </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow> 
                                    <TableCell align='left'> {this.props.gameObject.Team_NameA} </TableCell>
                                    <TableCell align='right'> {this.props.gameObject.Q1A} </TableCell>
                                    <TableCell align='right'> {this.props.gameObject.Q2A} </TableCell>
                                    <TableCell align='right'> {this.props.gameObject.Q3A} </TableCell>
                                    <TableCell align='right'> {this.props.gameObject.Q4A} </TableCell>
                                    <TableCell align='right'> {Number(this.props.gameObject.Q1A) + Number(this.props.gameObject.Q2A) + Number(this.props.gameObject.Q3A) + Number(this.props.gameObject.Q4A)} </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"> {this.props.gameObject.Team_NameB} </TableCell>
                                    <TableCell align="right"> {this.props.gameObject.Q1B} </TableCell>
                                    <TableCell align="right"> {this.props.gameObject.Q2B} </TableCell>
                                    <TableCell align="right"> {this.props.gameObject.Q3B} </TableCell>
                                    <TableCell align="right"> {this.props.gameObject.Q4B} </TableCell>
                                    <TableCell align="right"> {Number(this.props.gameObject.Q1B) + Number(this.props.gameObject.Q2B) + Number(this.props.gameObject.Q3B) + Number(this.props.gameObject.Q4B)} </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                </Card>
            </div>

        );
    }
}

export default withStyles(styles)(GameCard);