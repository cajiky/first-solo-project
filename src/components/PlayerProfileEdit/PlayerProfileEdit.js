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

//import css
import './PlayerProfileEdit.css';


 //Material Styles for inputs
 const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
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
                <Grid item md={6}>
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
                <Grid item md={6}>
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