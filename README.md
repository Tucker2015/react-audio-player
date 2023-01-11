# React Audio Player

Simple React Audio Player with Artwork option.

[![npm version](https://badge.fury.io/js/@kevtucker%2Freact-audio-player.svg)](https://badge.fury.io/js/@kevtucker%2Freact-audio-player)
[![GitHub version](https://badge.fury.io/gh/Tucker2015%2Freact-audio-player.svg)](https://badge.fury.io/gh/Tucker2015%2Freact-audio-player)
![npm](https://img.shields.io/npm/dw/@kevtucker/react-audio-player)

## Installation with NPM

```bash
npm install @kevtucker/react-audio-player --save
```

## Installation with Yarn

```bash
yarn add @kevtucker/react-audio-player
```

## Usage

```javascript
import { Player } from "@kevtucker/react-audio-player";

function App() {
  return (
    <div className="App">
      <Player
        src="https://streams.ktinternet.net:8010/d"
        title="Peoples City Radio"
        artist="Live"
        artwork="https://picsum.photos/200"
      />
    </div>
  );
}
```

## Props

| Prop     | Type    | Default  | Description                |
| -------- | ------- | -------- | -------------------------- |
| src      | string  | ""       | The audio source           |
| title    | string  | ""       | The title of the audio     |
| artist   | string  | ""       | The artist of the audio    |
| artwork  | string  | ""       | The artwork of the audio   |
| position | string  | "bottom" | The position of the player |
| hidden   | boolean | false    | Hide the player until used |

## Screenshots

![Screenshot](/img/screenshot.png?raw=true "Screenshot")

## License

[MIT](https://choosealicense.com/licenses/mit/)
