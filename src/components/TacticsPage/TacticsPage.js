import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    heading:{
        
    },
    containerPaper:{

    },
    cardContainer:{
        padding: 40,
    },
    expand:{
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
      },
    standardCard: {
        maxHeight: 400,
    }
})

class TacticsPage extends Component {

    state = { expanded: false };

    //Function incharge of calling out to db and grabbing all of the tactics for your particular team.
    getTeamsTactics = () => {
        // this.props.dispatch({type:'GET_TEAM_DATA_SAGA'});
        this.props.dispatch({type:'GET_TEAMS_TACTICS_SAGA'});
    }
    //Function in charge of getting propper user info
    getUserInfo = () => {
        
    }

    componentDidMount(){
        this.getTeamsTactics();
    }

    component

    render(){
        const { classes } = this.props;
            return(
            <React.Fragment>
                <Grid container spacing={16} direction="row" justify="center" style={{padding: 10,}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}>
                        <h2>Drop Down</h2>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h2' align="center">Tactics</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                <Grid container spacing={16} justify="center" alignItems="center" style={{padding: 30,}}>
                    <Grid item xs={9}>
                        <Paper elevation={12} className={classes.containerPaper}>
                            <Grid container spacing={24} direction="row" justify="center" alignItems="flex-start" className={classes.cardContainer}>
                                {this.props.reduxState.teamsTacticsReducer.map(tactic => (
                                    <Grid item xs={4}>
                                        <Card className={classes.standardCard}>
                                            <CardActionArea>
                                                <CardMedia
                                                component="img"
                                                className={classes.media}
                                                image={tactic.map_img}
                                                title='Tactic'
                                                />
                                                <CardContent>
                                                    <Typography gutterButtom variant='h5'>
                                                        {tactic.name}
                                                    </Typography>
                                                    <Typography component='p'>
                                                        {tactic.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card> 
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
            )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(TacticsPage));