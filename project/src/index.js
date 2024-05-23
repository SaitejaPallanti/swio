import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SleeveComponent from './components/sleevecomponent';
import BodyComponent from './components/BodyComponent';
import CustomizationSection from './components/CustomizationSection';
import Form from './components/Form';
import ArtworkComponent from './components/ArtworkComponent';
import TypographyComponent from './components/TypographyComponent';
import InterfaceComponent from './components/InterfaceComponent';
import SettingComponent from './components/SettingComponent';
import HeadingComponent from './components/HeadingComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SleeveComponent/>
    <BodyComponent/>
    <CustomizationSection/>
    <Form/>
    <ArtworkComponent/>
    <TypographyComponent/>
    <InterfaceComponent/>
    <SettingComponent/>
    <HeadingComponent/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
