import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import OutlinedInput from '@material-ui/core/OutlinedInput';
//import css
import './PlayerProfileEdit.css';
import CssBaseline from '@material-ui/core/CssBaseline';




 //Material Styles for inputs
 const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
      grow: 1,
    },
    margin: {
      margin: theme.spacing.unit,
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 3,
    },
    textField: {
      flexBasis: 200,
    },
    bigCards: {
        marginTop: theme.spacing.unit *5,
        maxWidth: 400,
    }
  });

class PlayerProfileEdit extends Component {

    //Initial State
    state = {
        alias: this.props.reduxState.userPlayerReducer.alias,
        firstName: this.props.reduxState.userPlayerReducer.first_name,
        lastName: this.props.reduxState.userPlayerReducer.last_name,
        esea: this.props.reduxState.userPlayerReducer.esea,
        cevo: this.props.reduxState.userPlayerReducer.cevo,
        faceit: this.props.reduxState.userPlayerReducer.faceit,
        dob: this.props.reduxState.userPlayerReducer.dob,
        role: this.props.reduxState.userPlayerReducer.role,
        teamId: this.props.reduxState.userPlayerReducer.team,
        img: this.props.reduxState.userPlayerReducer.image_url,
    };

    //Will handle change whenever an imput is changed
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    //Will run as soon as the submit changes button is pressed. going to send our new edited info to the db
    submitEdit = (event) =>{
        event.preventDefault();
        this.props.dispatch({type:'SUBMIT_NEW_EDIT_SAGA', payload: this.state});
    }

    printState = () => {
        console.log(this.state);
    }
    //Dispatch TO GET THE INTIAL STATE OF A PLAYERS PROFILE
    getInitState = () => {
        this.props.dispatch({type:'GET_INIT_STATE'})
        console.log(this.state);
    }
    //DISPATCH TO THE SAGAS TO GET THE ROLES TO MAP THEM TO THE DROP DOWN MENU
    getRoles = () => {
        this.props.dispatch({type:'GET_ROLES'})
    }

    //Going to bring the user back to the profile page on the button click
    b2Profile = () => {
        this.props.history.push('/profile');
    }


    componentDidMount(){
        this.getRoles()
        this.getInitState()
    }

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment> 
            <CssBaseline />
        <div className="main-container">
            <Grid container spacing={8} direction="row" alignItems="center" justify="space-evenly" className={classes.root} > 
                <Grid item xs={6}>
                <Card className={classNames(classes.bigCards)}>
                    <form onSubmit={this.submitEdit}>
                    <FormControl className={classNames(classes.margin, classes.textField)}> 
                        <InputLabel htmlFor="alias">ALIAS (REQUIRED)</InputLabel>
                        <Input
                            type="text"
                            name="alias"
                            label="alias"
                            value={this.state.alias}
                            onChange={this.handleChange}
                            required
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.margin, classes.textField)}> 
                        <InputLabel htmlFor="firstName">FIRST NAME</InputLabel>
                        <Input
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.margin, classes.textField)}> 
                        <InputLabel htmlFor="lastName">LAST NAME</InputLabel>
                        <Input
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.margin, classes.textField)}> 
                        <InputLabel htmlFor="esea">ESEA</InputLabel>
                        <Input
                            type="text"
                            name="esea"
                            value={this.state.esea}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.margin, classes.textField)}> 
                        <InputLabel htmlFor="cevo">CEVO</InputLabel>
                        <Input
                            type="text"
                            name="cevo"
                            value={this.state.cevo}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.margin, classes.textField)}> 
                        <InputLabel htmlFor="faceit">FACEIT</InputLabel>
                        <Input
                            type="text"
                            name="faceit"
                            value={this.state.faceit}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    </form>
                </Card>
                </Grid>
                <Grid item xs={6}>
                <Card className={classNames(classes.bigCards)}> 
                        <form>
                            <FormControl className={classNames(classes.margin, classes.textField)}>
                                <TextField 
                                name="dob"
                                label="Birthday"
                                type="date"
                                onChange={this.handleChange}
                                value={this.state.dob}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                                </FormControl>
                                <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel
                                    ref={ref => {
                                    this.InputLabelRef = ref;
                                    }}
                                    htmlFor="roleSelect"
                                >
                                    Role
                                </InputLabel>
                                <Select
                                    native
                                    value={this.state.role}
                                    onChange={this.handleChange}
                                    input={
                                    <OutlinedInput
                                        name="role"
                                        labelWidth={this.state.labelWidth}
                                        id="roleSelect"
                                    />
                                    }
                                >
                                    <option value='' />
                                    {this.props.reduxState.setRolesReducer.map(role => (
                                        <option key={role.id} value={role.id}>{role.role}</option> 
                                        ))} 
                                </Select>
                            </FormControl>
                            <FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="teamId">Team ID</InputLabel>
                        <Input
                            type="text"
                            name="teamId"
                            value={this.state.teamId}
                            onChange={this.handleChange}
                        />
                            </FormControl>
                            <br />
                            <img src={this.props.reduxState.userPlayerReducer.image_url} height="100px" width="100px" />
                            <br />
                            <FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="img">Profile Image URL</InputLabel>
                        <Input
                            type="text"
                            name="img"
                            value={this.state.img}
                            onChange={this.handleChange}
                        />
                            </FormControl>
                            <br />
                            <Button style={{marginRight: 10,}} variant="extendedFab" type="submit" onClick={this.submitEdit}>Save Changes</Button>
                            <Button variant="extendedFab" type="submit" onClick={this.b2Profile}>Profile</Button>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
        </React.Fragment>
        )
    }
}
const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(withStyles(styles)(PlayerProfileEdit))