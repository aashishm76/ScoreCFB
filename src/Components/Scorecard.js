import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Table  from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import axios from 'axios';

// THIS CLASS IS DEPRECATED
// ONLY FOR DEV TESTING
class Scorecard extends Component {

    // constructor() {
    //     super();

    //     // Assign default state 
    //     this.state = {
    //         total: '',
    //         scoreboards: [{}],
    //     };
    // }

    // componentWillMount() {

    //     // Axios call 
    //     var postBody = { Week: 1 };
    //     axios.post("http://68.183.28.230:3000/scores/getScoreboardsByWeek", postBody).then(res => {
    //         this.setState({
    //             total: res.data.total,
    //             scoreboards: res.data.scores,
    //         })
    //         // console.log(res.data);
    //         console.log("Right after fetching data", this.state);
    //     });
    // }

    render() {
        
        return (
            <Card className="testcard">
                <CardContent>
                    <Table>
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
                                <TableCell> UCF </TableCell>
                                <TableCell> 55 </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> USF </TableCell>
                                <TableCell> 0 </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        );
    }
}

export default (Scorecard);