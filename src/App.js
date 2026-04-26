// filepath: src/App.js
import React from 'react';
import Gallery from './components/Gallery';
import './App.css';

// Image data array - add new objects here to reflect in UI
const imageData = [
  {
    id: 1,
    url: 'https://picsum.photos/id/1015/400/300',
    title: 'Mountain Landscape',
    description: 'A breathtaking view of majestic mountains with crystal clear waters.'
  },
  {
    id: 2,
    url: 'https://picsum.photos/id/1016/400/300',
    title: 'Coastal Sunset',
    description: 'Golden sunset illuminating the beautiful coastal cliffs.'
  },
  {
    id: 3,
    url: 'https://picsum.photos/id/1018/400/300',
    title: 'Misty Forest',
    description: 'A serene morning in the forest with misty atmosphere.'
  },
  {
    id: 4,
    url: 'https://picsum.photos/id/1019/400/300',
    title: 'Ocean Waves',
    description: 'Powerful waves crashing against the rocky shore.'
  },
  {
    id: 5,
    url: 'https://picsum.photos/id/1020/400/300',
    title: 'Autumn Valley',
    description: 'Vibrant autumn colors painting the beautiful valley.'
  },
  {
    id: 6,
    url: 'https://picsum.photos/id/1021/400/300',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon under clear sky.'
  },
  {
    id: 7,
    url: 'https://picsum.photos/id/1022/400/300',
    title: 'Snowy Peaks',
    description: 'Snow-capped mountains glistening in winter sunlight.'
  },
  {
    id: 8,
    url: 'https://picsum.photos/id/1024/400/300',
    title: 'Tropical Beach',
    description: 'Pristine white sand beach with turquoise waters.'
  },
 
];

function App() {
  return (
    <React.Fragment>
      <Gallery images={imageData} />
    </React.Fragment>
  );
}

export default App;