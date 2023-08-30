import simonGif from '../../assets/gifs/simon.gif';
import blogIMG from '../../assets/images/blog.png';
import ListsAndTasks from '../../assets/images/ListsAndTasks.png';
import music_play_kitIMG from '../../assets/images/music_play_kit.png';
const simon = 'https://simon-game-1lus.onrender.com/';
const Bulletin_Board = 'https://blog-rcwp.onrender.com/';
const List_Task = 'https://lists-tasks.onrender.com/';
const music_play_kit = 'https://music-play-kit.onrender.com/';

const data = [
    {
        id: 1,
        image: simonGif,
        title: 'Simon-Game',
        github: 'https://github.com/tomergk/Simon-Game',
        link: simon
    },
    {
        id: 2,
        image: blogIMG,
        title: 'Bulletin Board',
        github: 'https://github.com/tomergk/Blog',
        link: Bulletin_Board
    },
    {
        id: 3,
        image: ListsAndTasks,
        title: 'Lists & Tasks',
        github: 'https://github.com/tomergk/Lists-Tasks',
        link: List_Task
    },
    {
        id: 4,
        image: music_play_kitIMG,
        title: 'Music Play Kit',
        github: 'https://github.com/tomergk/Music-play-kit',
        link: music_play_kit
    }
]

export default data