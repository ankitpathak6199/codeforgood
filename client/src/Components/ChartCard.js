import React, {useState} from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chart from './Graphs/Chart';
import GamesChart from './Graphs/GamesChart';
const useStyles = makeStyles({
    resourceCards:{
        width: "75%",
        marginTop:"2.5%",
    },
    cardTitle: {
        color:"#d96f66",
        fontWeight:"bold",
        padding : "1% 0 1% 3%",
        letterSpacing: "1px",
	    fontSize: "2rem",
        fontFamily: "Montserrat",
        paddingLeft: "0",
        paddingBottom: "0.3%"
    },
  })

function ChartCard(props){
    const [state, setState] = useState({
        raised:false,
        shadow:1,
      }) 
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Card onMouseOver={()=>setState({ raised: true, shadow:3})} onMouseOut={()=>setState({ raised:false, shadow:1 })} className={useStyles().resourceCards} justify="center">
                {/* <Card className={useStyles().resourceCards} justify="center"> */}
                <CardContent>
                    <Chart charttype={props.data}/>
                    <GamesChart charttype={props.data}/>
                    {/* <Typography className={useStyles().cardTitle}>{props.title}</Typography>
                    <Typography>{props.description}</Typography>
                    <a style= {{color: "#d96f66"}} href="https://www.google.com/" target="_self"> Go to resource »</a> */}
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ChartCard;