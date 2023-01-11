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
        source="https://streams.ktinternet.net:8010/d"
        title="Peoples City Radio"
        artist="Live"
        artwork="https://picsum.photos/200"
      />
    </div>
  );
}
```
