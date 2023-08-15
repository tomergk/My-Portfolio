import React, { useState, useRef, useEffect } from 'react'
import { BiSkipPreviousCircle, BiSkipNextCircle, BiPlayCircle, BiPauseCircle } from 'react-icons/bi'
import sound_img from '../../assets/logos/sound.png';
import './Player.css'
import gif from "../../assets/gifs/music.gif";


const Player = ({ currentSong, currentIndex, nextSong, prevSong }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentIndex])

    return (
        <div className='player__container'>
            <audio ref={audioRef} src={currentSong.music}></audio>

            <div className='sound__img'>
                <img src={sound_img} alt="" />
            </div>

            <div className='image__container'>
                <img src={gif} alt="music_image" className='music__image' />
            </div>


            <div>


                {currentSong ?
                    (
                        <div>
                            <div>
                                <h2 className='song__name'>{currentSong.name}</h2>
                            </div>
                            <div className='artist__name__container'>
                                <h5 className='artist__name'>{currentSong.artist}</h5>
                            </div>
                        </div>
                    )
                    :
                    (
                        ""
                    )}


                <div className='control__icons'>
                    <BiSkipPreviousCircle
                        size='40' color='#8c9eff'
                        className='side_icons'
                        onClick={prevSong} />
                    {isPlaying ? (
                        <BiPauseCircle
                            size='60'
                            color='#3f51b5'
                            className='general_icons'
                            onClick={togglePlay} />

                    ) : (
                        <BiPlayCircle
                            size='60'
                            color='#3f51b5'
                            className='general_icons'
                            onClick={togglePlay} />

                    )}
                    <BiSkipNextCircle
                        size='40' color='#8c9eff'
                        className='side_icons'
                        onClick={nextSong} />

                </div>

            </div>
        </div>


    )
}

export default Player
