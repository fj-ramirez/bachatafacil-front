import React, {useState, useEffect} from 'react';
import SongCard from '../components/SongCard';
import axios from 'axios';

function SongList(props) {
    const [chords, setChords] = useState([]);
  
    useEffect(function() {
        const fetchData = criteria => {
            axios.get(`http://10.0.0.8:5000/chords?search=${criteria}`)
            .then(res => {
              setChords(res.data);
            })
            .catch(ex => console.error(ex));
          }
        fetchData(props.filter);
    }, [props.filter]);

    return(chords.map(x => <SongCard key={x._id} {...x} />));
}

export default SongList;