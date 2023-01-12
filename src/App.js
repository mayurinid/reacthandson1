import React from 'react';
import FunctionComponent  from './Components/FunctionComponent';
import ClassComponent  from './Components/ClassComponent';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <>
      <div className='App'>
                <h1> Styling Using Funtional and Class Component</h1>
                </div>
        <div class="btn12">
       <ClassComponent></ClassComponent>
      <FunctionComponent/>
     
      </div>
      </>
    )
  }
}

export default App;
