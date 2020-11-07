import './App.css'
import RouteExample from './components/routingEx/example'
import NestingExample from './components/routingEx/nestingEx'
import BookFacade from './bookFacade'

function App() {
  return(
    <div className="content">
      {/*<RouteExample/>*/}
      {<NestingExample/>}
    </div>
  )
}

export default App;