import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

//importing components to use for the conditional
import TeamAdminComponent from '../TeamAdminComponent/TeamAdminComponent';

//This page will run a conditional to see if the user requesting this page is a team owner or if they are just a team member.
//if they are an owner they will be shown the team admin page and if they are a team member they will see the standard "Team Page"
class TeamProfilePage extends Component {
    //Will reach out to server and check to see if a user is a team owner or just a team member
    checkTeamOwner = () =>{
        console.log('inside checkTeamOwner function')
        this.props.dispatch({type:'CHECK_TEAM_OWNER_SAGA'})
    }

    componentDidMount(){
        this.checkTeamOwner();
    }
    //Navigation functions to be passed down to the sub componennts. 
    changeToTeamEdit = () => {
        this.props.history.push('/createTeam');
    }

    changeToBuildTactic = () => {
        this.props.history.push('/buildTactic');
    }


    render() {
        const isTeamOwner = this.props.reduxState.teamOwnerReducer;
        let component;
        //if statement to determine what component gets rendered.
        if(isTeamOwner){
            console.log('inside of isTeamOwner condi')
            component = <TeamAdminComponent moveToCreateTeamPage={this.changeToTeamEdit} moveToBuildTacticPage={this.changeToBuildTactic} />
        }
        else{
            
        }
        return (
            <div> 
                {component}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles()(TeamProfilePage));