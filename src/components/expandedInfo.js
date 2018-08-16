import React from 'react';
import './expandedInfo.css';

export default class expandedInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      allergenList1: {
        eggs: ['egg'],
        milk: ['milk', 'yogurt'],
        peanuts: ['peanut'],
        rice: ['rice'],
        sesame: ['sesame'],
        soy: ['soy'],
        sulfite: ['sulfite'],
        garlic: ['garlic'],
        oats: ['oat'],
        wheat: ['wheat'],
        fish: ['fish'],
        meat: ['beef', 'pork', 'lamb'],

        shellfish: ['shrimp', 'crab','lobster','clam','mussel','oyster','scallop'],
  
        fruit: ['mango', 'strawberry', 'apple', 'avocado', 'banana', 
          'cherry', 'orange', 'grapefruit', 'clementine', 'kiwi', 'melon', 
          'nectarine', 'peach', 'pear', 'pineapple', 'plum', 'tomato'],
  
        'hot peppers': ['jalapeno', 'habanero', 'serrano pepper', 'tabasco pepper', 
          'chili pepper', 'carolina reaper', 'pimiento'],
  
        'tree nuts': ['almond', 'brazil nut', 'cashew', 'chestnut', 
          'cobnut', 'filbert nut', 'hazelnut', 'filbert', 'macadamia nut', 
          'pecan', 'pistachio', 'pine nut', 'shea nut', 'walnut']
      }
    };
  
  }

  expandFood(){
    this.setState({expanded: !this.state.expanded});
    // setTimeout(() => {
    //   console.log('after', this.state.expanded);
    // }, 500);
  }

  allergenInfo1(){
    console.log(this.props.ingredients);
    const allergy = this.state.allergenList1;
    console.log(Object.keys(allergy));

    // for(const key in this.state.allergenList1){
    //   const val = this.state.allergenList1[key];
    //   return Object.keys(this.state.allergenList, this.props.ingredients.map(item => item === val));
    // console.log(Object.keys(allergy).forEach(function(key){
    //   this.props.ingredients.match(allergy[key]);
    // })
    //   .map(key => allergy[key] === 
    //   this.props.ingredients.includes(function(){
    //     for(const key in allergy){
    //       return allergy[key];
    //     }
    //   })
    //   ));
    
  }

  render(){
    const expandedTern = this.state.expanded ? 'expanded' : 'hidden'; 
    return(
      <div id='SearchResult'>
        {this.allergenInfo1()}
        <li
          onClick={() => 
            this.expandFood()}>
          <h2>{this.props.name}</h2> <span className={`${!(this.state.expanded)}`}>{
            this.props.ingredients.length <= 4 ? this.props.ingredients.join(', ') : 
              this.props.ingredients.slice(0,4).join(', ').concat('...')}</span>
          <div id='ExpandedInformation' className={`${expandedTern}`}>
            {(this.props.ingredients.join(', ')/*, item.etc */)}
            {/*  <p><b>Allergy Warning</b>: Contains {}</p> */}
          </div>
        </li>
      </div>
    );
  }
}
