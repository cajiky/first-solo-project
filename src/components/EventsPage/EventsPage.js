import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import moment from 'moment';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

//Stying
const styles = theme => ({
    cardContainer:{
        padding: 40,
    },
    paper:{
        minHeight: 400,
    },
    card:{
        padding: 20,
        marginBottom: 10,
    },
    descriptionSection:{
        margin: 20,
    }
})

class EventsPage extends Component{

    //in charge of getting events for users team
    getTeamsEvents = () => {
        this.props.dispatch({type:'GET_TEAMS_EVENTS_SAGA'});
    }

    componentDidMount(){
        this.getTeamsEvents();
    }

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment> 
                <MuiThemeProvider theme={theme}>
                <Grid container spacing={16} direction="row" justify="center" style={{padding: 10,}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={4}>
                            <Typography variant='h2' align="center">Events</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                <Grid container spacing={16} justify="center" alignItems="center" style={{padding: 30,}}>
                    <Grid item xs={9}>
                        <Paper elevation={12} className={classes.paper}>
                            <Grid container spacing={24} direction="row" justify="center" alignItems="flex-start" className={classes.cardContainer}>
                                <Grid item xs={12}>
                                    {this.props.reduxState.eventPageReducer.map(event => (
                                        <Card className={classes.card} key={event.id}>
                                            <Grid container direction="row" justify="space-between" alignItems="stretch"  className={classes.eventsContainer}>
                                                <Grid item xs={3}>
                                                    <Typography variant="h5">{event.name}</Typography> 
                                                </Grid>
                                                <Grid item xs={6} align="center">
                                                    <Typography variant="subheading">{moment(event.event_start, "HH:mm:ss").format('hh:mm A')} - {moment(event.event_end, "HH:mm:ss").format('hh:mm A')}</Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography variant="subheading">{moment(event.date).format('MMMM Do YYYY')}</Typography>
                                                </Grid>
                                                
                                                <Grid item xs={12} className={classes.descriptionSection}>
                                                    <Typography variant="caption">{event.description}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    ))}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                {/* <WithTheme /> */}
            </MuiThemeProvider>
            </React.Fragment>

        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(EventsPage));