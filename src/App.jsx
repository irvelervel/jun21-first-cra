import './App.css'
import Footer from './components/Footer'
import Content from './components/Content'

// D R Y
// don't repeat yourself!

// this is React Component
// a React Component can be as simple as a function returning some JSX
const App = () => {
  const school = 'Strive'
  console.log('mounting App component')

  return (
    // this syntax is called JSX
    <div className="App" id="strive-school">
      <header className="App-header">
        <h1>welcome to {school}</h1>
        {/* here I want the Content component */}
        <Content />
        {/* now I want to put the Footer component here! */}
        <Footer />
      </header>
    </div>
  )
}

export default App
