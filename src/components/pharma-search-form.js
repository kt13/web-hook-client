import React from 'react';
import zipcodes from 'zipcodes';
import { compose } from 'recompose';
import { 
  withScriptjs, 
  withGoogleMap, 
  GoogleMap, 
  Marker, 
  InfoWindow } from 'react-google-maps';
import '../css/pharma-search.css';
import {connect} from 'react-redux';
import {toggleMarkerInfo, fetchingPlaces} from '../actions/maps';
import {API_KEY} from '../config';


const MyMapComponent = compose(
  withScriptjs,
  withGoogleMap
)(props =>{
  // console.log(props);
  return (<GoogleMap
    defaultZoom={13}
    center={{lat: props.centerLat, lng: props.centerLng}}>
    
    {props.markers.map(marker => (
      <Marker
        aria-live='polite'
        key={marker.id}
        position={{ lat: marker.geometry.location.lat, lng: marker.geometry.location.lng }}
        onClick={() => {
          // console.log(marker);
          props.dispatch(toggleMarkerInfo(true, marker));}}>
        {marker.isMarkOpen && <InfoWindow 
          onCloseClick={() => props.dispatch(toggleMarkerInfo(false, marker))}>
          <div>{marker.name}
            <br/>
            {/* {`${(marker.opening_hours === true) ? 'Open now': 'Closed'}`} */}
            {marker.vicinity}
          </div>
        </InfoWindow>}
      </Marker>))}

  </GoogleMap>);
});

class PharmaSearch extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      zipErr: false,
    };
  }

  zipCodeLookup(zip){
    if(zipcodes.lookup(
      parseInt(zip.target.elements.zipSearch.value, 10))){
      this.props.dispatch(fetchingPlaces(
        zipcodes.lookup(
          parseInt(zip.target.elements.zipSearch.value, 10)).latitude,
        zipcodes.lookup(
          parseInt(zip.target.elements.zipSearch.value, 10)).longitude
      ));
    } else {
      this.setState({
        zipErr: true,
      });
    }
  }

  render() {
    const showErr = this.state.zipErr ? 'yesErr' : 'noErr';
    // console.log(this.props, '------------------------');
    const googleURL =`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=geometry,drawing,places`;
    return (
      <div id='PharmaSearch' className='tabcontent'>
        <div className='pharmaSearch'>

          <h2>Enter in a Zipcode to Search for a Pharmacy!</h2>
          <p>Click on any marker to view the address and the name.</p>
          <div className={`${showErr} errDesc`}>
            <p>This zipcode does not exist in the ZIP codes npm module as of now. 
        Note that only US ZIP codes are accepted right now.</p>
          </div>
          <form onSubmit={e =>  
          { e.preventDefault();
            this.setState({zipErr: false});
            this.zipCodeLookup(e); }}>
            <input 
              type="text"
              name="zipSearch"
              id="userSearch"
              className="text" 
              autoComplete="off"
              aria-labelledby="Zipcode Search"
              placeholder="E.g. 10001" 
              required 
            />
            <input type="submit" id="searchButton" className="pharmaButton" 
              name="submit" value="Search"/>
          </form>
          <div className='map'>
            <MyMapComponent
              googleMapURL={googleURL}
              loadingElement= {<div style={{ height: '100%' }} />}
              containerElement= {<div style={{ height: '46vw', width: '55vw', 
                marginLeft: 'auto', marginRight: 'auto'}} />}
              mapElement= {<div style={{ height: '100%' }} />}
              markers={this.props.markers}
              centerLat={this.props.centerLat}
              centerLng={this.props.centerLng}
              dispatch={this.props.dispatch}
            />
            <p className='footnote'>This is supported by the Google Maps API. For more information, <a 
              href="https://developers.google.com/places/web-service/search"
              target='_blank'
              rel='noopener noreferrer'>go here</a>.</p>
          </div>
          {/* empty object gives true value */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  markers: state.mapR.markers,
  centerLat: state.mapR.centerLat,
  centerLng: state.mapR.centerLng
});

export default connect(mapStateToProps)(PharmaSearch);
