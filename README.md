# React Audio Player

Simple React Audio Player with Artwork option.

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
