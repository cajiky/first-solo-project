import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { TextField, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

//import css
import CssBaseline from '@material-ui/core/CssBaseline';

//styles for material ui
const styles = theme => ({
    Card:{
        padding: 20,
        margin: 10
    },
    Inputs:{
        width: 100,
    }
})



class CreateTeamPage extends Component {
    
    //Setting inital state for the form fields
    state = {
        teamName: '',
        eseaLink: '',
        cevoLink: '',
        faceitLink: '',
        calLink: '',
        teamPhotoURL: '',
    }

    // this will update our state as soon as we change the content inside of our input feild.
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    // function that will run on the submit the information filled out in the form to the db
    sumbitTeamInfo = () => {
        this.props.dispatch({type:'SUBMIT_TEAM_SAGA', payload: this.state});
    }
    render(){
        const { classes } = this.props;
        return(
            <div> 
                <Typography variant="h1" align="center">Create Team Page</Typography>
                    <Grid container spacing={16}>
                        <Grid item xs={6}>
                            <Card className={(classNames(classes.Card))}>
                                <Grid container spacing={16}>
                                    <form >
                                        <Grid item xs={12}>
                                            <FormControl> 
                                                <InputLabel htmlFor="teamName">Team Name (Required)</InputLabel>
                                                <Input
                                                    // style={(classNames(classes.Inputs))}
                                                    type="text"
                                                    name="teamName"
                                                    value={this.state.teamName}
                                                    onChange={this.handleChange}
                                                    margin="normal"
                                                    fullWidth="true"
                                                    required
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl>
                                                <InputLabel htmlFor="eseaLink">ESEA Link</InputLabel>
                                                <Input
                                                    type="text"
                                                    name="eseaLink"
                                                    value={this.state.eseaLink}
                                                    onChange={this.handleChange}
                                                    margin="normal"
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl> 
                                                <InputLabel htmlFor="cevoLink">CEVO Link</InputLabel>
                                                <Input
                                                    // style={(classNames(classes.Inputs))}
                                                    type="text"
                                                    name="cevoLink"
                                                    value={this.state.cevoLink}
                                                    onChange={this.handleChange}
                                                    margin="normal"
                                                    
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl> 
                                                <InputLabel htmlFor="faceitLink">FaceIt Link</InputLabel>
                                                <Input
                                                    // style={(classNames(classes.Inputs))}
                                                    type="text"
                                                    name="faceitLink"
                                                    value={this.state.faceitLink}
                                                    onChange={this.handleChange}
                                                    margin="normal"
                                                    
                                                />
                                            </FormControl>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Card>
                        </Grid>  
                        <Grid item xs={6}>
                        <Card className={(classNames(classes.Card))}>
                                <Grid container spacing={16}>
                                    <form onSubmit={this.sumbitTeamInfo}>
                                        <Grid item xs={12} justifyContent="center" >
                                            <img src="https://fillmurray.com/200/200" alt="team image" align="center" />
                                        </Grid>
                                        <Grid item xs={6}>
                                        <FormControl> 
                                                <InputLabel htmlFor="teamPhotoURL">Team Image Link</InputLabel>
                                                <Input
                                                    // style={(classNames(classes.Inputs))}
                                                    type="text"
                                                    name="teamPhotoURL"
                                                    value={this.state.teamPhotoURL}
                                                    onChange={this.handleChange}
                                                    margin="normal"
                                                />
                                            </FormControl>
                                            <Grid item xs={6}>
                                                <Button variant="extendedFab" type="submit" onClick={this.submitEdit}>Submit Changes</Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Card>
                        </Grid> 
                    </Grid>
                
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(CreateTeamPage))