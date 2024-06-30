import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Paragraph from './components/Paragraph/Paragraph';
import Image from './components/Image/Image';
import Url from './components/Url/Url';
import Math from './components/Math/Math';
import Colours from './components/Colours/Colours';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Paragraph />
    <Image />
    <Url />
    <Math />
    <Colours />
  </React.StrictMode>
);

