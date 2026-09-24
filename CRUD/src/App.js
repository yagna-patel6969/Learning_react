
import './App.css';
import AddStudent from './components/AddStudent';
import { Student } from './components/Student';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { UpdateStudent } from './components/UpdateStudent';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Student/>}/>
          <Route path='/add' element={<AddStudent/>}/>
          <Route path='/update/:id' element={<UpdateStudent/>}/>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
