import React from 'react';
import {Link} from 'react-router-dom';

import '../css/landing-page.css';

export default class LandingPage extends React.Component {

  // console.log('qrawefwedfasdfs', this.props);
  render(){
    // console.log('qrawefwedfasdfs', this.props.foods);
    return (
      <div id="LandingPage" className="frontpage tabcontent">
        <div className='foodSearch'>

          <h2>Welcome!</h2>

          <p>This website is designed for people who are curious about the ingredients
            in the foods they consume. Each food-item search queries our user-contributed 
            database and <b>shows ingredients, allergen warnings, and user-submitted comments</b>. 
          </p>
          <p>
            It is also uniquely designed toward people who deal 
            with the frustrations of the unknown that is day-to-day food 
            consumption at establishments as food allergy sufferers. 
            Those who suffer from food allergies don’t know when another 
            reaction might occur at any meal and live in fear that each 
            meal - each bite - might have the potential to cause pain and 
            anguish. This website aims to aid in lifting the veil 
            between server and customer.
          </p>
          <p>
            An additional implemented feature is that of a nearby search 
            functionality for <b>pharmacies via zip code</b> for those who 
            discover that they have ingested a food allergen and seek 
            medicinal care.   
          </p>

          <p>To get started, <Link to='/search/food'>click here</Link> to begin 
          a search query of our public, open-source database.</p>

          <p className='landing-notes'>For more information on food allergies, 
          click here: </p>
          <p className='landing-notes'>
            <a 
              href="https://acaai.org/allergies/types/food-allergy"
              target='_blank'
              rel='noopener noreferrer'> American College of 
            Allergy, Asthma, and Immunology (ACAAI)</a>.</p>
          <p className='landing-notes'>
            <a 
              href="https://www.foodallergy.org/life-with-food-allergies/food-allergy-101/facts-and-statistics"
              target='_blank'
              rel='noopener noreferrer'>
              Food Allergy Research and Education (FARE)</a> </p>
         
        </div>
      </div>
    );
  }
}




