//STATE L BASIC
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name:'charbel', age:19},
      {name:'rafka', age:18},
      {name:'emile', age:17}
    ]
  }

  switchNameHandler = (NewName) => {
  //  console.log('was clicked'); 
   //DON'T DO THIS: this.state.persons[0].name='guy';
   this.setState({
    persons: [
      {name:NewName, age:19},
      {name:'rafka', age:18},
      {name:'emile', age:1227}
    ]
   })
}
nameChangeHandler = (event) => {
  this.setState({
    persons: [
      {name:'charbel', age:19},
      {name:event.target.value, age:18},
      {name:'emile', age:1227}
    ]
   })

}

  render() {
    const style /* heda l esem up to us*/ = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
       <h1>Hi im a react</h1>

       <button
       style={style}
       onClick={this.switchNameHandler.bind(this, 'bouli')}>Switch Name</button>
       
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}
       click={this.switchNameHandler.bind(this, 'suzanne')}>
       </Person>
       
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age} 
       click={this.switchNameHandler.bind(this, 'charboula')}
       changed= {this.nameChangeHandler} >My Hobbies: Racing</Person>
       
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age} />
      </div>
    );
  }
}



export default App;






// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {

//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       {name:'charbel', age:19},
//       {name:'rafka', age:18},
//       {name:'emile', age:17}
//     ]
//   });
//   const [otherState, setOtherState] = useState('some other value');
//   console.log(personsState, otherState)

//   const switchNameHandler = () => {
//     //  console.log('was clicked'); 
//      //DON'T DO THIS: this.state.persons[0].name='guy';
//      setPersonsState({
//       persons: [
//         {name:'farid', age:19},
//         {name:'rafka', age:18},
//         {name:'emile', age:1227}
//       ]
//      });
//   };

//   return (

//   <div className="App">
//   <h1>Hi im a react</h1>

//   <button onClick={switchNameHandler}>Switch Name</button>

//   <Person 
//     name={personsState.persons[0].name} 
//     age={personsState.persons[0].age}>he
//     </Person>
//   <Person 
//     name={personsState.persons[1].name} 
//     age={personsState.persons[1].age} >My Hobbies: Racing
//     </Person>
//   <Person 
//     name={personsState.persons[2].name} 
//     age={personsState.persons[2].age} 
//     />
//   </div>

//   );
// }