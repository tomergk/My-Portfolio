import React, { useState } from 'react'
import './AppPlayer.css'
import { audios } from './audioData'
import Player from './Player'
// import Drums from './Drums'


const AppPlayer = () => {

    const [songs, setSongs] = useState(audios);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const getSongData = (song, index) => {
        setCurrentIndex(index);
        setCurrentSong(song);
    }

    const nextSong = () => {
        if (currentIndex === audios.length - 1) {
            setCurrentIndex(0);
            setCurrentSong(audios[0]);
        }
        else {
            setCurrentIndex(currentIndex + 1);
            setCurrentSong(audios[currentIndex + 1]);
        }
    }

    const prevSong = () => {
        if (currentIndex === 0) {
            setCurrentIndex(0);
            setCurrentSong(audios[0]);
        }
        else {
            setCurrentIndex(currentIndex - 1);
            setCurrentSong(audios[currentIndex - 1]);
        }
    }

    return (
        <section id='music'>
            <div className='container app__player__container'>
                <Player
                    currentSong={currentSong}
                    currentIndex={currentIndex}
                    nextSong={nextSong}
                    prevSong={prevSong}
                />
            </div>
        </section>
    );
}

export default AppPlayer
