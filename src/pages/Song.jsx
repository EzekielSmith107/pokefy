import { React, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Song = () => {
  const location = useLocation();
  let pokemon = location.state;

  const [track, setTrack] = useState([]);

  function createAttributeString(pokeObj) {
    let color = pokeObj.data.color.name;
    let name = pokeObj.data.name;
    let eggGroup = pokeObj.data.egg_groups[0].name;

    let attributeArray = [color, name, eggGroup];

    return attributeArray[Math.floor(Math.random() * attributeArray.length)];
  }

  function arraySetupForMappingSong(songObj) {
    let setupArray = [];
    let resultArray = songObj.data.data;
    let randomSong =
      resultArray[Math.floor(Math.random() * resultArray.length)];

    setupArray.push(randomSong.title);
    setupArray.push(randomSong.album.cover);
    setupArray.push(randomSong.preview);

    return setupArray;
  }

  const getSong = useCallback(async () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
      .then((response) => {
        let characteristic = createAttributeString(response);
        axios
          .get(`https://api.deezer.com/search?q=track:"${characteristic}"`)
          .then((response) => {
            let songInfoArray = arraySetupForMappingSong(response);
            setTrack(songInfoArray);
          });
      });
  }, [pokemon]);

  useEffect(() => {
    getSong();
  }, [getSong]);

  return (
    <div>
      <h1>Song</h1>
      <h3>{track[0]}</h3>
      <img src={track[1]} alt="album cover"></img>
      <audio controls src={track[2]} typeof="audio/mp3">
        Browser does not support audio.
      </audio>
    </div>
  );
};

export default Song;
