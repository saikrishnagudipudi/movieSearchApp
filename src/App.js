import { Switch ,Route } from 'react-router-dom';
import SearchBar from './searchBar'
import MovieDetails from './movieDetails'
import './App.css'

const App = () => (
    
        <Switch>
          <Route exact path='/' component={SearchBar} />
          <Route exact path="/movie/:imdbID" component={MovieDetails} />
        </Switch>
      
    )


export default App
