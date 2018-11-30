import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typogrophy from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import red from '@material-ui/core/colors/red';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    Card:{
        padding: 50,
        width: '40%',
    },
    textField:{
        marginBottom: 30,
        width: 300,
    },
    containerPaper:{
        paddingLeft: '20%',
        paddingRight: '20%',
        padding: 20,
        colors: red,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    middleContainer: {
        marginBottom: 30,
    },
    descriptionField:{
        width: 600,
        marginBottom: 30,
    },
    urlTextField:{
        marginTop: 30,
        marginLeft: 70,
        width: 300,
        height: 60,
    },
    datePicker: {
        
    },
    timeSelect:{
        width: 150
    },
    bottomContainer:{
        marginBottom: 30,
        margin: 10,
    },
    button:{
        width: 150,
    }
})



class CreateEventPage extends Component{


    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    state={
        labelWidth: 40,
        eventName: '',
        eventDate: '',
    }

    render(){
        const { classes } = this.props;
            return(
                <div> 
                    <Typogrophy variant="h1" align="center">Build Event</Typogrophy>
                    <Grid container spacing={16} justify="center" alignItems="center">
                        <Paper elevation={12} className={classes.containerPaper}>
                            <form>
                                <Grid  container spacing={16} direction="column" justify="center" alignItems="center" className={classes.container}>
                                    <Grid item xs={9}>
                                        <TextField
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        value={this.state.eventName}
                                        name='eventName'
                                        label="Event Name"
                                        variant="outlined"
                                        required
                                        />
                                    </Grid>
                                    <Grid container spacing={16} direction="row" justify="center" alignItems="center" className={classes.middleContainer}>
                                        <Grid item xs={4}>
                                            <FormControl>
                                                <TextField
                                                    name="eventDate"
                                                    label="Date"
                                                    type="date"
                                                    value={this.state.eventDate}
                                                    onChange={this.handleChange}
                                                    className={classes.datePicker}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={4}></Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="time"
                                                label="Time Start"
                                                type="time"
                                                defaultValue="07:30"
                                                className={classes.timeSelect}
                                                onChange={this.handleChange}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                inputProps={{
                                                step: 300, // 5 min
                                                }}
                                            />
                                        </Grid>  
                                    </Grid>
                                    <Grid container spacing={16} direction="row" justify="center" alignItems="center" className={classes.bottomContainer}>
                                        <Grid item xs={4}>
                                        <FormControl variant="outlined">
                                                        <InputLabel ref={ref => {this.InputLabelRef = ref;}} htmlFor="typeSelect">Type</InputLabel>
                                                        <Select
                                                            style={{width: 100,}}
                                                            native
                                                            value={this.state.eventType}
                                                            onChange={this.handleChange}
                                                            input={
                                                            <OutlinedInput
                                                                name="map"
                                                                labelWidth={this.state.labelWidth}
                                                                id="mapSelect"
                                                            />}>
                                                            <option value='' />
                                                            {this.props.reduxState.mapsReducer.map(type => (
                                                                <option key={type.id} value={type.id}>{type.name}</option> 
                                                                ))} 
                                                        </Select>
                                                    </FormControl>
                                        </Grid>
                                        <Grid item xs={4}></Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="time"
                                                label="Time End"
                                                type="time"
                                                defaultValue="13:30"
                                                className={classes.timeSelect}
                                                onChange={this.handleChange}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                inputProps={{
                                                step: 300, // 5 min
                                                }}
                                            />
                                        </Grid>  
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            className={classes.descriptionField}
                                            onChange={this.handleChange}
                                            value={this.state.tacticDescription}
                                            name='eventDescription'
                                            multiline
                                            rows="5"
                                            variant="outlined"
                                            label="Event Description"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Button variant='extendedFab' color='primary' classname={classes.button} onClick={this.submitNewTactic} size="large">
                                            Submit Event
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </div>
            )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(CreateEventPage));