import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper'


const styles = theme => ({
    Card:{
        padding: 20,
        alignItems: 'center'
    },
    portalCard:{
        padding: 20,
    },
})

class TeamAdminComponent extends Component {
    
    //Will reach out to the server and grab the team info data from the teams table
    getTeamInfo = () => {
        this.props.dispatch({type:'GET_TEAM_DATA_SAGA'});
        this.props.dispatch({type:'GET_ALL_PLAYERS_FOR_TEAM'});
    }

    componentDidMount() {
        this.getTeamInfo();
    }

    
    

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container 
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={16} style={{padding: 24}}>
                <Grid item xs={3}> 
                    <Card align="center" className={(classNames(classes.Card))}>
                        <img src={this.props.reduxState.teamReducer.img} height="200"  alt="ProfileImg"></img>
                        <Typography  variant="display1" align="center">
                            {this.props.reduxState.teamReducer.name}
                        </Typography>
                        <Typography variant="subheading" align="center">
                            Team ID: {this.props.reduxState.teamReducer.id}
                        </Typography>
                        <br />
                        <Button variant="raised" onClick={this.props.moveToCreateEventPage}>
                            Create Event
                        </Button>
                        <br />
                        <br />
                        <Button variant="raised" onClick={this.props.moveToBuildTacticPage}>
                            Build Tactic
                        </Button>
                        <br />
                        <br />
                        <Button variant="raised" onClick={this.props.moveToCreateTeamPage}>
                            Edit Team Profile
                        </Button>
                        <br />
                    </Card>
                </Grid>
                    <Grid item xs={9}>
                        <Paper className={(classNames(classes.portalCard))}>
                        <Grid container spacing={24} direction="row" justify="center" alignItems="flex-start" className={classes.cardContainer}>
                            {this.props.reduxState.teamPlayersReducer.map(player => (
                                <Grid item xs={4} key={player.id}>
                                <Card className={classes.standardCard}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={player.image_url}
                                        title={player.alias}
                                        />
                                        <CardContent>
                                            <Typography gutterButtom variant='h5'>
                                                {player.first_name}
                                            </Typography>
                                            <Typography component='h5'>
                                                {player.last_name}
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
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(withStyles(styles)(TeamAdminComponent));