import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

//importing components to use for the conditional
import TeamAdminComponent from '../TeamAdminComponent/TeamAdminComponent';

//This page will run a conditional to see if the user requesting this page is a team owner or if they are just a team member.
//if they are an owner they will be shown the team admin page and if they are a team member they will see the standard "Team Page"
class TeamProfilePage extends Component {
    state = {
        isTeamOwner: true,
    }
    render() {
        const isTeamOwner = this.state.isTeamOwner;
        let component;
        //if statement to determine what component gets rendered.
        if(isTeamOwner){
            component = <TeamAdminComponent />
        }
        else{

        }
        return (
            <div> 
                <h1>Team Profile Page</h1>
                {component}
            </div>
        )
    }
}

export default TeamProfilePage;