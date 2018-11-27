import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';



class TacticsPage extends Component {
    render(){
        return(
            <h1>TacticsPage</h1>

        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles()(TacticsPage));