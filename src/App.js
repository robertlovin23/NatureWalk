import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HikePage from './components/pages/HikePage'

class App extends React.Component{ 
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={HikePage}/>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
