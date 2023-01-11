import React from 'react'
import { AudioProps } from './Player.types'
import './Player.css'

const Player = ({ title, artist, src, artwork, bg, position, hidden }: AudioProps) => {

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
            style={{
                background: bg ? bg : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)"
            }}
            className={`player ${position === "bottom" ? "player__bottom" : "player"
                } ${hidden ? "hidden" : ""}`}
        >
            <audio ref={audioEl}
                src={src}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />
            <button className="player__button" onClick={() => { togglePlay() }}>
                {playing ?
                    <img
                        src="https://img.icons8.com/ios/50/000000/pause.png" alt="pause" />
                    : <img
                        src="https://img.icons8.com/ios/50/000000/play.png" alt="play" />}
            </button>
            <div className="player__details">
                <img className="player__artwork" src={artwork ? artwork : "https://picsum.photos/200"} alt="artwork" />
            </div>
            <div className="player__meta">
                <h1 className="player__title">{loading ? "Loading..." : title}</h1>
                <h1 className="player__artist">{artist ? artist : "Artist"}</h1>
            </div>
            <div className="player__volume">
                <input
                    defaultValue={100}
                    onChange={(e) => volumeSlider(parseFloat(e.target.value))}
                    className="h-2 bg-gray-300 rounded-full w-28 "
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