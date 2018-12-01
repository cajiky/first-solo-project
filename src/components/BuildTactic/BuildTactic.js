import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typogrophy from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

 

const styles = theme => ({
    Card:{
        padding: 50,
        width: '50%',
    },
    textField:{
        marginBottom: 30,
        width: 300,
    },
    containerPaper:{
        paddingLeft: '20%',
        paddingRight: '20%',
        padding: 20,
        
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    descriptionField:{
        width: 400,
    },
    urlTextField:{
        marginTop: 30,
        marginLeft: 70,
        width: 300,
        height: 60,
    },
    button: {
    
    }
})


class BuildTactic extends Component {
    state={
        labelWidth: 30,
        tacticName: '',
        tacticDescription: '',
        map: '',
        teamId: this.props.reduxState.teamReducer.id,
    }

    //Function that will compile all the data on the form and dispatch it to the db
    submitNewTactic = (event) => {
        event.preventDefault();
        this.props.dispatch({type:'SUBMIT_NEW_TACTIC_SAGA', payload: this.state});
        this.props.history.push('/teamProfile');
    }
    
    //Function in charge of the change inside of the inputs
    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    // Function in charge of getting the maps from the db and store them in the redux state for us to map in the drop down.
    getMaps = () => {
        this.props.dispatch({type:'GET_MAPS_SAGA'});
    }
    

    componentDidMount(){
        this.getMaps();
    }

    render(){
      const { classes } = this.props;
        return(
            <div> 
                <Typogrophy variant="h1" align="center">Build Tactic</Typogrophy>
                    <Grid container spacing={16} justify="center" alignItems="center" >
                        <Grid item xs={6}>

                            <Paper elevation={12} className={classes.containerPaper}>
                                <form> 
                                    <Grid
                                        spacing={16}
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                        >
                                        <Grid item xs={9}>
                                            <TextField
                                            className={classes.textField}
                                            onChange={this.handleChange}
                                            value={this.state.tacticName}
                                            name='tacticName'
                                            label="Tactic Name"
                                            required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            className={classes.descriptionField}
                                            onChange={this.handleChange}
                                            value={this.state.tacticDescription}
                                            name='tacticDescription'
                                            multiline
                                            rows="4"
                                            variant="outlined"
                                            label="Tactic Description"
                                            required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container spacing={40} direction="row" justify="space-around" alignItems="flex-end">
                                                <Grid item xs={12}>
                                                    <FormControl variant="outlined">
                                                        <InputLabel ref={ref => {this.InputLabelRef = ref;}} htmlFor="mapSelect">Map</InputLabel>
                                                        <Select
                                                            style={{width: 100,}}
                                                            native
                                                            value={this.state.map}
                                                            onChange={this.handleChange}
                                                            input={
                                                            <OutlinedInput
                                                                name="map"
                                                                labelWidth={this.state.labelWidth}
                                                                id="mapSelect"
                                                            />}>
                                                            <option value='' />
                                                            {this.props.reduxState.mapsReducer.map(map => (
                                                                <option key={map.id} value={map.id}>{map.maps}</option> 
                                                                ))} 
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                {/* <Grid item xs={9}>
                                                    <TextField
                                                    className={classes.urlTextField}
                                                    onChange={this.handleChange}
                                                    value={this.state.imgUrl}
                                                    name='imgUrl'
                                                    label="Image URL"
                                                    />
                                                </Grid> */}
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant='extendedFab' color='primary' classname={classes.button} onClick={this.submitNewTactic}>
                                                Submit Tactic
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(BuildTactic));