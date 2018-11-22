import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import 'typeface-roboto';

const styles = theme => ({
    Card:{
        padding: 20,
    },
    portalCard:{
        padding: 20,
        height: 800
    },
    // portalCard:{
    //     display: 
    // }
})



class PlayerProfile extends Component {
    
    //Getting inital redux state for this component to use

    getReduxState = () => {
        this.props.dispatch({type:'GET_INIT_STATE'})
    }
    //Function to route to the PlayerProfileEdit Page coming from the button
    moveToEditProfile = () => {
        this.props.history.push('/playerEdit');
        console.log('click');
    }
    //Function to route the user to the create team page on the button click
    moveToCreateTeam = () => {
        this.props.history.push('/createTeam');
    }

    //getting our redux state for this particular user as soon as our component mounts.
    componentDidMount(){
        this.getReduxState()
    }

    render(){
        const { classes } = this.props;
        return(
            <div> 
                <Grid container 
                direction="row"
                justify="center"
                alignItems="stretch"
                spaceing={16} style={{padding: 24}}>
                    <Grid item sm={3} spacing={16}>
                        <Card className={(classNames(classes.Card))}>
                            <img src={this.props.reduxState.userPlayerReducer.image_url} height="300" width="300" alt="ProfileImg"></img>
                            <Typography  variant="display1" align="center">
                            {this.props.reduxState.userPlayerReducer.alias}
                                <Typography variant="caption">
                                {this.props.reduxState.userPlayerReducer.first_name} {this.props.reduxState.userPlayerReducer.last_name}
                                </Typography>
                            </Typography>
                            <Typography variant="button"> <a href={this.props.reduxState.userPlayerReducer.esea}>ESEA</a></Typography>
                            <Typography variant="button"><a href={this.props.reduxState.userPlayerReducer.cevo}>CEVO</a></Typography>
                            <Typography variant="button"><a href={this.props.reduxState.userPlayerReducer.faceit}>FaceIt</a></Typography>
                            <br />
                            <Button onClick={this.moveToCreateTeam} variant="raised">Create Team</Button>
                            <br />
                            <br />
                            <Button onClick={this.moveToEditProfile} variant="raised">Edit Profile</Button>
                        </Card> 
                    </Grid>
                    <Grid item xs={9} spacing={16}>
                        <Card className={classNames(classes.portalCard)} >
                            <Typography component="h2" variant="headline" align="center">
                                Team Portal
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(PlayerProfile))