import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typogrophy from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';


const styles = theme => ({
    Card:{
        padding: 50,
        alignItems: 'center',
    },
    textField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        
    },
})

class BuildTactic extends Component {



    render(){
      const { classes } = this.props;
        return(
            <div> 
            <Typogrophy variant="h1" align="center">Build Tactic</Typogrophy>
            <Card className={(classNames(classes.Card))}>
                <TextField
                className={(classNames(classes.textField))}
                 fullWidth
                 label="name"
                 />
            </Card>
        </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(BuildTactic));