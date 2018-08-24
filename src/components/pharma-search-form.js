import React from 'react';
import {API_KEY} from '../config';
import zipcodes from 'zipcodes';
import { compose } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import './pharma-search.css';
import {connect} from 'react-redux';
import {toggleMarkerInfo, fetchingPlaces} from '../actions/maps';

const MyMapComponent = compose(
  withScriptjs,
  withGoogleMap
)(props =>{
  console.log(props);
  return (<GoogleMap
    defaultZoom={13}
    center={{lat: props.centerLat, lng: props.centerLng}/* {lat: 39.648209, lng: -75.711185} */}>
    
    {props.markers.map(marker => (
      <Marker
        key={marker.id}
        position={{ lat: marker.geometry.location.lat, lng: marker.geometry.location.lng }}
        onClick={() => {
          console.log(marker);
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

  render() {
    console.log(this.props, '------------------------');
    const googleURL =`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=geometry,drawing,places`;
    return (
      <div id='PharmaSearch' className='tabcontent'>
        <div className='pharmaSearch'>

          <h2>Enter in a Zipcode to Search for a Pharmacy!</h2>
          <p>Click on any marker to view the address and the name.</p>

          <form onSubmit={e =>  
          { e.preventDefault(); 
            console.log(parseInt(e.target.elements.zipSearch.value, 10));
            const latLng = 
          {lat: zipcodes.lookup(parseInt(e.target.elements.zipSearch.value, 10)).latitude, 
            lng: zipcodes.lookup(parseInt(e.target.elements.zipSearch.value, 10)).longitude };
            this.props.dispatch(fetchingPlaces(latLng)); }}>
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
              containerElement= {<div style={{ height: '400px', width: '600px', 
                marginLeft: 'auto', marginRight: 'auto'}} />}
              mapElement= {<div style={{ height: '100%' }} />}
              markers={this.props.markers}
              centerLat={this.props.centerLat}
              centerLng={this.props.centerLng}
              dispatch={this.props.dispatch}
            />
            <p className='footnote'>This is supported by the Google Maps API. For more information, <a href="https://developers.google.com/places/web-service/search">go here</a>.</p>
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
