import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';

const styles = {

}

class WeekDropDown extends Component {

    render() {
        return (
            <FormControl variant="filled">
                <InputLabel>Week 12</InputLabel>
                <Select>
                    <MenuItem> Week 1 </MenuItem>
                    <MenuItem> Week 2 </MenuItem>
                </Select>
          </FormControl>
        );
    }
}

export default withStyles(styles)(WeekDropDown);