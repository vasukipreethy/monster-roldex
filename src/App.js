import React  from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.component.jsx'
import {SearchBox} from './Components/search-box/search-box.component.jsx'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
    
  }
  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response=> response.json())
    .then(users=> this.setState({monsters:users}))
  }
  render(){
    const { monsters, searchField} = this.state;
    const filtermonsters  = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return  (<div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="search monster" handleChange={this.handleChange}></SearchBox>
      <CardList monsters = {filtermonsters}> </CardList>
    </div>
    );
  }
}

export default App;
