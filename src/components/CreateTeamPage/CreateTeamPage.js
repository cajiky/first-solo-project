import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';




class CreateTeamPage extends Component {
    
    render(){

        return(
            <Typography variant="h1" align="center">Create Team Page</Typography>
        )
    }
}


const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles()(CreateTeamPage))