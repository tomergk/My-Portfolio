import simonGif from '../../assets/gifs/simon.gif';
import board from '../../assets/gifs/board.gif';
import music from '../../assets/gifs/music.gif';
import list from '../../assets/gifs/list.gif';
// import dataCombination from '../../assets/gifs/data-combination.gif';

const simon = 'https://simon-game-1lus.onrender.com/';
const Bulletin_Board = 'https://blog-rcwp.onrender.com/';
const List_Task = 'https://lists-tasks.onrender.com/';
const music_play_kit = 'https://music-play-kit.onrender.com/';
// const data_combination = 'https://data-combination.onrender.com/'

const data = [
    {
        id: 1,
        image: simonGif,
        title: 'Simon-Game',
        github: 'https://github.com/tomergk/Simon-Game',
        link: simon,
        content: 'A classic Simon game implementation, built with Node.js and MongoDB to provide a fun and interactive gaming experience. In this game, your memory and pattern recognition skills will be put to the test as you strive to remember and repeat increasingly complex color sequences.'
    },
    {
        id: 2,
        image: board,
        title: 'Bulletin Board',
        github: 'https://github.com/tomergk/Blog',
        link: Bulletin_Board,
        content: 'A simple and interactive bulletin board application where users can create posts with titles, content, and author information. These posts are then displayed alongside other contributions, allowing users to share their thoughts, ideas, and messages with the world.'
    },
    {
        id: 3,
        image: list,
        title: 'Tasks Organizer',
        github: 'https://github.com/tomergk/Lists-Tasks',
        link: List_Task,
        content: 'A web application that allows users to create and manage lists, each containing a set of tasks. Whether you want to organize your daily to-dos, keep track of your projects, or plan your activities, this application provides a flexible and user-friendly solution.'
    },
    {
        id: 4,
        image: music,
        title: 'Music Play Kit',
        github: 'https://github.com/tomergk/Music-play-kit',
        link: music_play_kit,
        content:  'A versatile web application that combines the joy of music with interactive instruments. Whether you want to enjoy cool songs or create your melodies, this application provides a fun and immersive musical experience.'
    },
    // {
    //     id: 5,
    //     image: dataCombination,
    //     title: 'Cross Source Information Fusion',
    //     github: 'https://github.com/tomergk/Data_Combination',
    //     link: data_combination,
    //     content:  'Unlock the full potential of your searches of information in a whole new light.'
    // }  
]

export default data