import { React, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Song = () => {
  const location = useLocation();
  let pokemon = location.state;
  const navigate = useNavigate();

  const [track, setTrack] = useState([]);

  function createAttributeString(pokeObj) {
    let color = pokeObj.data.color.name;
    let attributeArray = [color];

    // Gardevoir error handling and filtering out audio books
    if (pokeObj.data.egg_groups[0].name !== "humanshape") {
      let eggGroup = pokeObj.data.egg_groups[0].name.replace(/\d+/g, "");
      attributeArray.push(eggGroup);
    }

    // Lucario error handling
    if (pokeObj.data.egg_groups[1]) {
      if (pokeObj.data.egg_groups[1].name !== "humanshape") {
        let eggGroupTwo = pokeObj.data.egg_groups[1].name.replace(/\d+/g, "");
        attributeArray.push(eggGroupTwo);
      }
    }

    return attributeArray[Math.floor(Math.random() * attributeArray.length)];
  }

  function arraySetupForMappingSong(songObj) {
    let setupArray = [];
    let resultArray = songObj.data.data;
    let randomSong =
      resultArray[Math.floor(Math.random() * resultArray.length)];

    // Filter out lullabies and explicit_lyrics
    while (
      randomSong.title.toLowerCase().includes("noise") ||
      randomSong.explicit_lyrics === true
    ) {
      randomSong = resultArray[Math.floor(Math.random() * resultArray.length)];
    }

    setupArray.push(randomSong.title);
    setupArray.push(randomSong.album.cover);
    setupArray.push(randomSong.preview);
    setupArray.push(randomSong.link);

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
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  }, [pokemon]);

  useEffect(() => {
    getSong();
  }, [getSong]);

  return (
    <div className="max-w-[1240px] h-screen mx-auto py-4 px-4 flex flex-col items-center justify-center">
      <h1 className="py-4">Song</h1>
      <h3>{track[0]}</h3>
      <div className="py-4">
        <img className="w-auto h-auto" src={track[1]} alt="album cover"></img>
      </div>
      <div>
        <audio controls src={track[2]} typeof="audio/mp3">
          Browser does not support audio.
        </audio>
      </div>

      <div className="flex space-x-2 py-4">
        <button
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => navigate("/")}
        >
          Choose another pokemon!
        </button>
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          <a href={track[3]} target="blank">
            See full song here!
          </a>
        </button>
      </div>
    </div>
  );
};

export default Song;
