require('normalize.css');
require('styles/App.css');
import Dashboard from './DashboardComponent';
import TextWidget from './widgets/TextWidgetComponent';
import React from 'react';

let yeomanImage = require('../images/yeoman.png');
var data = [
  {id: 1, component: "Pete Hunt", about: "That's me"},
  {id: 2, name: "Jordan Walke", about: "I am an excellent person"},
   {id: 1, name: "Pete Hunt", about: "That's me"},
    {id: 2, name: "Jordan Walke", about: "I am an excellent person"},
     {id: 1, name: "Pete Hunt", about: "That's me"},
      {id: 2, name: "Jordan Walke", about: "I am an excellent person"}
];
//
var widgets = [
    (<TextWidget text={"aaa"}/>),
    (<TextWidget text={"bbb"}/>)
];
class AppComponent extends React.Component {
  render() {
    return (
        <Dashboard widgets={widgets} width={2}/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
