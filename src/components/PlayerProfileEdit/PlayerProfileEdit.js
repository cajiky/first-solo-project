import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
//import css
import './PlayerProfileEdit.css';


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
  });

class PlayerProfileEdit extends Component {

    //Initial State
    state = {
        alias: '',
        firstName: '',
        lastName: '',
        esea: '',
        cevo: '',
        faceit: '',
        dob: '',
        role: '',
        teamId: '',
        img: '',
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
//DISPATCH TO THE SAGAS TO GET THE ROLES TO MAP THEM TO THE DROP DOWN MENU
    getRoles = () => {
        this.props.dispatch({type:'GET_ROLES'})
    }

    componentDidMount(){
        this.getRoles()
    }

    render(){
        const { classes } = this.props;
        return(
        <div className="main-container">
            <Grid container spacing={24}> 
                <Grid item xs={6}>
                    <div className="left-col">
                    <form onSubmit={this.submitEdit}>
                    <FormControl className={classNames(classes.margin, classes.textField)}> 
                        <InputLabel htmlFor="alias">ALIAS (REQUIRED)</InputLabel>
                        <Input
                            type="text"
                            name="alias"
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
                </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="right-col">
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
                                    htmlFor="outlined-age-native-simple"
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
                                        id="outlined-role-native-simple"
                                    />
                                    }
                                >
                                    <option value='' />
                                    {this.props.reduxState.editPlayerReducer.map(role => (
                                        <option key={role.id} value={role.id}>{role.role}</option> 

                                    ))} 
                                </Select>
                            </FormControl>
                            <br />
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
                            <img src="https://fillmurray.com/100/100" />
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
                            <Button variant="extendedFab" type="submit" onClick={this.submitEdit}>Submit Changes</Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
        )
    }
}
const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(withStyles(styles)(PlayerProfileEdit))