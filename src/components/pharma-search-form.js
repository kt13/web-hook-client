import React from 'react';
import {API_KEY} from '../config';
import zipcodes from 'zipcodes';
import { compose } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import './pharma-search.css';
import { FaAnchor } from 'react-icons/fa';
import {connect} from 'react-redux';
import {toggleMarkerInfo, fetchingPlaces} from '../actions/maps';

// const latLong = 
// {lat: zipcodes.lookup('10001').latitude, 
//   long: zipcodes.lookup('10001').longitude };
// console.log(latLong);
// console.log(zipcodes.lookup('10001'));
// console.log(API_KEY);
  
// constructor(props){
//   super(props);
//   this.state={
//     places: [],
//     center: {lat: 37.7735248, lng: -122.42122119999999},
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };
// this.onMarkerClick = this.onMarkerClick.bind(this);
// this.onMapClick = this.onMapClick.bind(this);
// this.onMapReady = this.onMapReady.bind(this);  

// let newCenter = {};
// console.log(newCenter);
// function reAlign(){
//   if(this.props.centerLat && this.props.centerLng){
//   // newCenter = {lat: this.props.center[0], lng: this.props.center[1]};
//     console.log(this.props.centerLat);
//     newCenter = {lat: parseInt(this.props.centerLat, 10), lng: parseInt(this.props.centerLng, 10)};
//     console.log(newCenter);
//     return newCenter;
//   }
// }

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
}
);


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
            <input type="text" name="zipSearch" id="userSearch"
              className="text" autoComplete="off"
              placeholder="E.g. 10001" required 
            /* ref={ele => (this.input = ele)} required */
            />
            <input type="submit" id="searchButton" className="pharmaButton" 
              name="submit" value="Search"/*  onClick={() => this.props.dispatch((false))} */ />
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


//   searchNearby(map, center){
//     const { google } = this.props;

//     const service = new google.maps.places.PlacesService(map);

//     // Specify location, radius and place types for your Places API search.
//     const request = {
//       location: center,
//       radius: '500',
//       type: ['pharmacy']
//     };
//     console.log(request, 'request');

//     service.nearbySearch(request, (results, status) => {
//       if (status === google.maps.places.PlacesServiceStatus.OK){
//         this.setState({ places: results });
//         // console.log(this.state.places, this.state.places[0].name);
//       }
//     });
//   }

//   onMapReady(mapProps, map){
//     console.log(mapProps, '---------------',map);
//     // console.log(map,'111111111111111111111111', map.center);
//     this.searchNearby(map, map.center);
//   }

//   onMarkerClick (props, marker, e){
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   // showing info window for marker, action and reducer
//   onMapClick (props){
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }

//   addMarkers(){
//     console.log('state of places', this.state.places);
//     this.state.places.map(item => {
//       console.log(item,'item', 
//         item.name, 
//         item.geometry.location.lat(), 
//         item.icon, 
//         item.geometry.location.lng());
//       const pos = {lat:item.geometry.location.lat(), lng: item.geometry.location.lng()};
//       console.log(pos, 'position');
//       return(
//         <Marker
//           position={{lat: 37.7745051, lng: -122.41438440000002}}
//           title={item.name}
//           name={item.name}
//           onClick = {console.log(item, 'this.props')}
//         />
//       // <div>
//       //   <Marker
//       //     title = { 'Changing Colors Garage' }
//       //     position = {{ lat: 39.648209, lng: -75.711185 }}
//       //     name = { 'Changing Colors Garage' }
//       //     // onClick = {this.onMarkerClick}
//       //     onClick = {console.log(this.state.places[0], 'this.props')}
//       //   /> 
//       // </div>
//       );
//     });
//   }

//   render() {
//     const {google} = this.props;
//     const style = {
//       width: '60vw',
//       height: '85vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     };
//     console.log('rendering');
//     // if (!this.props.loaded) return <div>Loading...</div>;
//     return (
//       <div id='PharmaSearch' className='tabcontent'>
//         <div className='pharma-form'>
//           <h2>Enter in a Zipcode to Search for a Pharmacy</h2>
//           <form onSubmit={e =>  
//           { e.preventDefault(); zipcodes stuff}}>
//             <input type="text" name="zipSearch" id="userSearch"
//               className="text" autoComplete="off"
//               placeholder="E.g. 10001" required 
//               /* ref={ele => (this.input = ele)} required */
//             />
//             <input type="submit" id="searchButton" className="button" 
//               name="submit" value="Search"/*  onClick={() => this.props.dispatch((false))} */ />
//           </form>
//           <Map
//             item
//             xs = { 12 }
//             style = {style}
//             google = { this.props.google }
//             onClick = { this.onMapClick }
//             zoom = { 14 }
//             center = {this.state.center}
//             onReady={this.onMapReady}>
//             {/* <Marker
//               title = { 'Changing Colors Garage' }
//               position = {{ lat: 39.648209, lng: -75.711185 }}
//               name = { 'Changing Colors Garage' }
//               // onClick = {this.onMarkerClick}
//               onClick = {console.log(this.state.places[0], 'this.props')}
//             /> */}
//             {this.addMarkers()}
//           </Map>
//           <InfoWindow>
//           </InfoWindow>
//           {/* {this.addMarkers} */}
//         </div>
//       </div>
//     );
//   }
// }
