import{BrowserRouter,Routes,Route} from'react-router-dom';
// import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/" 
            element={<h2>home page</h2>}
          ></Route>
          <Route
            path="/testing"
            element={<div><h2>Teasting</h2></div>}
          >
          </Route>
          <Route
            path="/teasting2"
            element={<h2>testing-2</h2>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
