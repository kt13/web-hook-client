import React from 'react';
import {API_KEY} from '../config';
import { GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import zipcodes from 'zipcodes';
import * as nameFromGoogle from 'google-maps-react';
import './pharma-map.css';
import {connect} from 'react-redux';
import {fetchPharmacy} from '../actions/maps';
// console.log(nameFromGoogle);
// zipcodes.lookup('10001');
// const latLong = 
// {lat: zipcodes.lookup('10001').latitude, 
//   long: zipcodes.lookup('10001').longitude };
// console.log(latLong);
// console.log(zipcodes.lookup('10001'));
// let srcLink = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
// console.log(API_KEY);
class PharmaSearch extends React.Component{

//   return(
//     <div id='PharmaSearch' className='tabcontent'>
//       <p>Enter in your zipcode</p>
//       <form /* onSubmit={e =>  
//       { e.preventDefault(), /* console.log(this.input.value, '============')
//         this.props.handleSubmit(this.input.value); }} */>
//         <input type="number" name="userSearch" id="userSearch"
//           className="text" autoComplete="off"
//           placeholder="Enter the Zipcode" required 
//           /* ref={ele => (this.input = ele)} required */
//         />
//         <input type="submit" id="searchButton" className="button" 
//           name="submit" value="Search" /* onClick={() => this.props.dispatch(toggleFoodsList(false))} */ />
//       </form>
//     </div>

//   );
// }
  
  constructor(props){
    super(props);
    this.state={
      places: [],
      center: {lat: 37.7735248, lng: -122.42122119999999},
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.onMapReady = this.onMapReady.bind(this);
  }

  componentDidUpdate(){

  }

  searchNearby(map, center){
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: '500',
      type: ['pharmacy']
    };
    console.log(request, 'request');

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK){
        this.setState({ places: results });
        // console.log(this.state.places, this.state.places[0].name);
      }
    });
  }

  onMapReady(mapProps, map){
    console.log(mapProps, '---------------',map);
    // console.log(map,'111111111111111111111111', map.center);
    this.searchNearby(map, map.center);
  }

  onMarkerClick (props, marker, e){
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  // showing info window for marker, action and reducer
  onMapClick (props){
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  addMarkers(){
    console.log('state of places', this.state.places);
    this.state.places.map(item => {
      console.log(item,'item', 
        item.name, 
        item.geometry.location.lat(), 
        item.icon, 
        item.geometry.location.lng());
      const pos = {lat:item.geometry.location.lat(), lng: item.geometry.location.lng()};
      console.log(pos, 'position');
      return(
        <Marker
          position={{lat: 37.7745051, lng: -122.41438440000002}}
          title={item.name}
          name={item.name}
          onClick = {console.log(item, 'this.props')}
        />
      // <div>
      //   <Marker
      //     title = { 'Changing Colors Garage' }
      //     position = {{ lat: 39.648209, lng: -75.711185 }}
      //     name = { 'Changing Colors Garage' }
      //     // onClick = {this.onMarkerClick}
      //     onClick = {console.log(this.state.places[0], 'this.props')}
      //   /> 
      // </div>
      );
    });
  }

  render() {
    const {google} = this.props;
    const style = {
      width: '60vw',
      height: '85vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    };
    console.log('rendering');
    // if (!this.props.loaded) return <div>Loading...</div>;
    return (
      <div id='PharmaSearch' className='tabcontent'>
        <div className='pharma-form'>
          <h2>Enter in a Zipcode to Search for a Pharmacy</h2>
          <form onSubmit={e =>  
          { e.preventDefault(); 
            console.log(parseInt(e.target.elements.zipSearch.value, 10));
            this.props.google.maps.places.findPlaceFromQuery(
              zipcodes.lookup(parseInt(e.target.elements.zipSearch.value, 10)).latitude,
              zipcodes.lookup(parseInt(e.target.elements.zipSearch.value, 10)).longitude ); }}>
            <input type="text" name="zipSearch" id="userSearch"
              className="text" autoComplete="off"
              placeholder="E.g. 10001" required 
              /* ref={ele => (this.input = ele)} required */
            />
            <input type="submit" id="searchButton" className="button" 
              name="submit" value="Search"/*  onClick={() => this.props.dispatch((false))} */ />
          </form>
          <Map
            item
            xs = { 12 }
            style = {style}
            google = { this.props.google }
            onClick = { this.onMapClick }
            zoom = { 14 }
            center = {this.state.center}
            onReady={this.onMapReady}>
            {/* <Marker
              title = { 'Changing Colors Garage' }
              position = {{ lat: 39.648209, lng: -75.711185 }}
              name = { 'Changing Colors Garage' }
              // onClick = {this.onMarkerClick}
              onClick = {console.log(this.state.places[0], 'this.props')}
            /> */}
            {this.addMarkers()}
          </Map>
          <InfoWindow>
          </InfoWindow>
          {/* {this.addMarkers} */}
        </div>
      </div>
    );
  }
}
//   render() {
//     console.log(this.props.google);
//     const {google} = this.props;
//     const style = {
//       width: '60vw',
//       height: '85vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     };
//     return (
//       <div id='PharmaSearch' className='tabcontent'>
//         <div className='pharma-form'>
//           <h2>Enter in a Zipcode to Search for a Pharmacy</h2>
//           <form onSubmit={e =>  
//           { e.preventDefault(); 
//             console.log(parseInt(e.target.elements.zipSearch.value, 10));
//             this.props.google.maps.places.findPlaceFromQuery(
//               zipcodes.lookup(parseInt(e.target.elements.zipSearch.value, 10)).latitude,
//               zipcodes.lookup(parseInt(e.target.elements.zipSearch.value, 10)).longitude ); }}>
//             <input type="text" name="zipSearch" id="userSearch"
//               className="text" autoComplete="off"
//               placeholder="E.g. 10001" required 
//             /* ref={ele => (this.input = ele)} required */
//             />
//             <input type="submit" id="searchButton" className="button" 
//               name="submit" value="Search"/*  onClick={() => this.props.dispatch((false))} */ />
//           </form>
//         </div>
//         <div> {this.initMap}</div>
//         <Map
//           item
//           xs = { 12 }
//           style = {style}
//           google = { this.props.google }
//           // onClick = { this.onMapClick }
//           zoom = { 14 }
//           initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
//         >
//           <Marker
//             // onClick = {this.props.onMarkerClick}
//             title = { 'Changing Colors Garage' }
//             position = {{ lat: 39.648209, lng: -75.711185 }}
//             name = { 'Changing Colors Garage' }
//           />
//           <InfoWindow
//             // marker = { this.state.activeMarker }
//           // visible = { this.state.showingInfoWindow }
//           > 
//             {/*  <Paper>
//               <Typography
//                 variant = 'headline'
//                 component = 'h4'
//               >
//               Changing Colors Garage
//               </Typography>
//               <Typography
//                 component = 'p'
//               >
//               98G Albe Dr Newark, DE 19702 <br />
//               302-293-8627
//               </Typography>
//             </Paper> */}
//           </InfoWindow>
//         </Map>
//       </div>
//     );
//   }


// }
// const mapStateToProps = (state, props) => ({
//   showingInfoWindow: this.state.zipR.showingInfoWindow,
//   activeMarker: this.state.zipR.activeMarker,
//   selectedPlace: this.state.zipR.selectedPlace
// });
export default GoogleApiWrapper({
  apiKey: API_KEY
})(PharmaSearch);


