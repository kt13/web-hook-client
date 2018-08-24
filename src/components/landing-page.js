import React from 'react';
import {Link} from 'react-router-dom';

import './landing-page.css';

export default class LandingPage extends React.Component {

  // console.log('qrawefwedfasdfs', this.props);
  render(){
    // console.log('qrawefwedfasdfs', this.props.foods);
    return (
      <div id="LandingPage" className="frontpage tabcontent">
        <div className='foodSearch'>

          <h2>Welcome Food Allergy Travelers!</h2>

          <p>This website is aimed at travelers who are sampling 
            new foods for the first time, particularly in a new country. 
            Those who are </p>

          <p>To get started, <Link to='/search/food'>click here</Link> to begin 
          a search query of our public, open-source database.</p>
          <span>For more information on food allergies, <a href=
            "https://acaai.org/allergies/types/food-allergy">go here</a>.</span>
         
        </div>
      </div>
    );
  }
}




