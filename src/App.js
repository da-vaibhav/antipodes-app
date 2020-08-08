import React, { useEffect, useRef  } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {

  const map_from = useRef(null);
  const map_to = useRef(null);
  const classes = useStyles();

  useEffect(() => {
     new mapboxgl.Map({
      container: map_from.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5, 34],
      zoom: 2,
    });

    new mapboxgl.Map({
      container: map_to.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5, 34],
      zoom: 2,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">Show Antipode of locations</header>
      <form className={classes.root} noValidate autoComplete="off">
        <div ref={map_from} className="map_from"></div>
        <div ref={map_to} className="map_to"></div>
    </form>
    </div>
  );
}

export default App;
