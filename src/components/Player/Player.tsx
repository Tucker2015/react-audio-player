import React from 'react'
import { AudioProps } from './Player.types'

const Player = ({
    title,
    artist,
    src,
    artwork,
    bg,
    position,
    hidden
}: AudioProps) => {

    const [playing, setPlaying] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const audioEl = React.useRef((null as unknown) as HTMLAudioElement);

    const togglePlay = () => {
        if (playing) {
            audioEl.current.pause();
            setPlaying(false);
        } else {
            audioEl.current.play();
            setPlaying(true);
        }
    };

    const volumeSlider = (value: number) => {
        audioEl.current.volume = value;
    }

    return (
        <div
            className={`player ${position === "bottom" ? "fixed bottom-0 left-0  flex items-center w-full p-4 rounded-lg bg-gray-100 h-28 drop-shadow-lg;" :
                "fixed top-0 left-0  flex items-center w-full p-4 rounded-lg bg-gray-100 h-28 drop-shadow-lg;"
                } ${hidden ? "hidden" : ""}`}
        >
            <audio ref={audioEl}
                src={src}
                onLoadStart={() => setLoading(true)}
                onLoadedData={() => setLoading(false)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />
            <button className="flex items-center justify-center w-10 h-10 text-white rounded-full shadow-lg md:w-16 md:h-16 bg-gray-300" onClick={() => { togglePlay() }}>
                {playing ?
                    <img
                        className='w-7 h-7 md:w-12 md:h-12'
                        src="https://img.icons8.com/ios/50/000000/pause.png" alt="pause" />
                    : <img
                        className='w-7 h-7 md:w-12 md:h-12'
                        src="https://img.icons8.com/ios/50/000000/play.png" alt="play" />}
            </button>
            <img className="w-24 h-24 ml-4 shadow-lg"
                src={artwork ? artwork : "https://picsum.photos/200"} alt="artwork" />
            <div className="player__meta">
                <h1 className="ml-4 text-sm font-bold truncate text-gray-700 drop-shadow-md md:text-2xl">{loading ? "Loading..." : title}</h1>
                <h1 className="ml-4 text-sm truncate text-gray-700 drop-shadow-md md:text-xl">{artist ? artist : "Artist"}</h1>
            </div>
            <div className="items-center justify-center hidden ml-auto md:flex">
                <input
                    defaultValue={100}
                    onChange={(e) => volumeSlider(parseFloat(e.target.value))}
                    className="h-2 bg-gray-200 rounded-full w-28 "
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                />
            </div>
        </div>
    )
}

export default Player