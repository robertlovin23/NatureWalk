import React from 'react';
import SearchBar from './components/SearchBar'
import HikeList from './components/HikeList';
import colorado from './api/colorado'
import Geocode from "react-geocode";
import './Hike.css'

const KEY = "200566329-ce601aaa09615d977868f22c3bbf9b73"
Geocode.setApiKey("AIzaSyBw74zIVpg0E4GzS1gb6voAidAf6pAxDZM")


class App extends React.Component{ 
  constructor() {
    super()

this.state={
    hikes: [],
    currentPage: 1,
    hikesPerPage: 10,
    lat: 0,
    lng: 0,
    pageChange: false
    }
    this.onTermSubmit("Denver")
 }
 handleClick = (event) =>{
   this.setState({
     currentPage: Number(event.target.id),
   })
 }
 onSearchSubmit = async(lat, lng) => {
  const hikedata = await colorado.get(`/get-trails?`, {      
    params: {
            lat: lat,
            lon: lng,
            maxDistance: 200,
            maxResults: 50,
            key: KEY
        }
     });
     this.setState({
         hikes: hikedata.data.trails
     })
 }
 onTermSubmit = (term) => {
  Geocode.fromAddress(term).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      this.setState({
        lat: lat,
        lng: lng
      })
      this.onSearchSubmit(lat,lng)
    },
    error => {
      console.log(error);
    }
  )    
 }
  render() {
    const page = this.state.pageChange ? 'active item' : 'item';
    const { hikes, hikesPerPage} = this.state;
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(hikes.length / hikesPerPage); i++){
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div
        key={number}
        id={number}
        onClick={this.handleClick}
        style={{ display:"inline-block"}}
        className="item"
      >
        <div>{number}</div>
      </div>
      );
    });
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <HikeList hikes={this.state.hikes} currentPage={this.state.currentPage} hikesPerPage={this.state.hikesPerPage}/>
        <div id = "page-numbers" className="ui pagination menu">
          <h3>{renderPageNumbers}</h3>
        </div>
      </div>
    )
  }
}

export default App;
