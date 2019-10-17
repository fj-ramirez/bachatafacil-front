import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardContent, Typography} from '@material-ui/core';
import generalStyles from '../utils/generalStyles';
import profilePic from '../images/blank_profile.png'

function SongCard (props) {

    const imgSource = (false) ? props.image : profilePic;
    return(
        <Card style={generalStyles.box}>
            <CardContent>
                <div style={generalStyles.flexRow}>
                    <img style={{height: 128, width: 128}} src={imgSource} alt="Profile pic"/>
                    <div style={generalStyles.flexColumn}>
                        <Link to={`/viewer/${props._id}`}><Typography style={{fontWeight: 'bold'}}>{props.title}</Typography></Link>
                        <Typography>{props.artist}</Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


export default SongCard;