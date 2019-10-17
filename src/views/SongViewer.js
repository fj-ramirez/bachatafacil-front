import React, {useState , useEffect} from 'react';

import {useParams} from 'react-router-dom';
import axios from 'axios'


function SongViewer(){
    const [song, setSong] = useState("");
    let { id } = useParams();
    
    useEffect(function () {
        
        axios.get(`http://10.0.0.8:5000/chords/${id}`)
        .then(res => setSong(res.data))
        .catch(err => console.error(err));
    }, [id]);
    
    return(
        <pre>
            <h2>{song.title}</h2>
            <h3>{song.artist}</h3>
            <div style={{margin: 10, fontFamily: "Roboto Mono"}}>
                {song && song.content.split("@").map(line => <p>{line}</p>)}
            </div>
        </pre>
        
    );
}

export default SongViewer;
