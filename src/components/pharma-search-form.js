import React from 'react';
import {API_KEY} from '../config';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import './pharma-map.css';
import {connect} from 'react-redux';

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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showingInfoWindow: false,
  //     activeMarker: {},
  //     selectedPlace: {}
  //   };
  // }
  // binding this to event-handler functions
  // this.onMarkerClick = this.onMarkerClick.bind(this);
  // this.onMapClick = this.onMapClick.bind(this);
  // onMarkerClick (props, marker, e){
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });
  // }
  //showing info window for marker, action and reducer
  // onMapClick (props){
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // }
  render() {
    const style = {
      width: '60vw',
      height: '85vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    };
    return (
      <div id='PharmaSearch' className='tabcontent'>
        <div className='pharma-form'>
          <p>Enter in a Zipcode</p>
          <form /* onSubmit={e =>  
            { e.preventDefault(), /* console.log(this.input.value, '============')
            this.props.handleSubmit(this.input.value); }} */>
            <input type="number" name="userSearch" id="userSearch"
              className="text" autoComplete="off"
              placeholder="Eg. 10001" required 
            /* ref={ele => (this.input = ele)} required */
            />
            <input type="submit" id="searchButton" className="button" 
              name="submit" value="Search" /* onClick={() => this.props.dispatch(toggleFoodsList(false))} */ />
          </form>
        </div>
        <Map
          item
          xs = { 12 }
          style = {style}
          google = { this.props.google }
          // onClick = { this.onMapClick }
          zoom = { 14 }
          initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
        >
          <Marker
          // onClick = {this.props.onMarkerClick}
            title = { 'Changing Colors Garage' }
            position = {{ lat: 39.648209, lng: -75.711185 }}
            name = { 'Changing Colors Garage' }
          />
          <InfoWindow
          // marker = { this.state.activeMarker }
          // visible = { this.state.showingInfoWindow }
          >
            {/* <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            </Typography>
            <Typography
              component = 'p'
            >
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
        </Paper> */}
          </InfoWindow>
        </Map>
      </div>
    );
  }


}
const mapStateToProps = (state, props) => ({
  //showingInfoWindow: false,
  //     activeMarker: {},
  //     selectedPlace: {}
});
export default GoogleApiWrapper({
  apiKey: API_KEY
})(PharmaSearch);


