import React from 'react';
import SearchBar from '../hikes/SearchBar'
import HikeList from '../hikes/HikeList'
import HikeMap from '../hikes/HikeMap'
import colorado from '../../api/colorado'
import Geocode from "react-geocode";
import { Tabs, Tab, TabPanel, TabList} from 'react-tabs'
import '../../Hike.css'

const KEY = "200566329-ce601aaa09615d977868f22c3bbf9b73"
Geocode.setApiKey("AIzaSyBw74zIVpg0E4GzS1gb6voAidAf6pAxDZM")


class HikePage extends React.Component{ 
  constructor() {
    super()

  this.state={
    hikes: [],
    currentPage: 1,
    hikesPerPage: 10,
    lat: 0,
    lng: 0,
    pageChange: false,
    minLength: '0',
    minStars: '0',
    tabIndex: 0
    }
    this.onTermSubmit("Denver",'0','0')
 }
 handleClick = (event) =>{
   this.setState({
     currentPage: Number(event.target.id),
   })
 }
 componentDidMount = async(lat, lng, minLength,minStars,filter,maxDistance) => {
  const hikedata = await colorado.get(`/get-trails?`, {      
    params: {
            lat: lat,
            lon: lng,
            minLength: minLength,
            minStars: minStars,
            sort: filter,
            maxDistance: maxDistance,
            maxResults: 50,
            key: KEY
        }
     });
     this.setState({
         hikes: hikedata.data.trails,
         lat: hikedata.data.trails[0].latitude,
         lng: hikedata.data.trails[0].longitude
     })
 }
 onTermSubmit = (term, minLength,minStars,filter,maxDistance) => {
  Geocode.fromAddress(term).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      this.setState({
        lat: lat,
        lng: lng
      })
      this.componentDidMount(lat,lng,minLength, minStars,filter,maxDistance)
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
        {number}
      </div>
      );
    });
    return (
      <div>
        <div className="sixteen column row splashScreen">
          <div style={{paddingTop: "150px", paddingBottom: "150px"}}>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
          </div>
        </div>
        <Tabs className="ui container" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList style={{listStyle: 'none', display:"table", paddingLeft: "10px"}}>
              <Tab style={{display: "inline", paddingRight: "10px"}}>
                  <i className="big list icon"/>
              </Tab>
              <Tab style={{display: "inline"}}>
                  <i className="big map icon"/>
              </Tab>
          </TabList>
          <TabPanel>
            <HikeList hikes={this.state.hikes} currentPage={this.state.currentPage} hikesPerPage={this.state.hikesPerPage}/>
              <div className="ui container">
                <div id = "page-numbers" className="ui pagination menu">
                   <h3>{renderPageNumbers}</h3>
                </div>
              </div>
          </TabPanel>
          <TabPanel>
              <HikeMap hikes={this.state.hikes} lat={this.state.lat} lng={this.state.lng}/>
          </TabPanel>
        </Tabs>

      </div>

    )
  }
}

export default HikePage;
