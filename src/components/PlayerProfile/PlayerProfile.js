import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'

const styles = theme => ({

})



class PlayerProfile extends Component {
    
    //Getting inital redux state for this component to use

    getReduxState = () => {
        this.props.dispatch({type:'GET_INIT_STATE'})
    }

    moveToEditProfile = () => {
        this.props.history.push('/playerEdit');
        console.log('click');
    }

    componentDidMount(){
        this.getReduxState()
    }

    render(){
        
        return(
            <div> 
                <img src={this.props.reduxState.userPlayerReducer.image_url} height="120" width="120" alt="ProfileImg"></img>
                <h1>{this.props.reduxState.userPlayerReducer.alias}</h1>
                <p>{this.props.reduxState.userPlayerReducer.first_name} {this.props.reduxState.userPlayerReducer.last_name}</p>
                <br />
                <a href={this.props.reduxState.userPlayerReducer.esea}>ESEA</a>
                <br />
                <a href={this.props.reduxState.userPlayerReducer.cevo}>CEVO</a>
                <br />
                <a href={this.props.reduxState.userPlayerReducer.faceit}>FaceIt</a>
                <br />
                <Button variant="raised">Create Team</Button>
                <Button onClick={this.props.moveToEditProfile} variant="raised">Edit Profile</Button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(PlayerProfile))