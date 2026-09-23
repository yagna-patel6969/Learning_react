import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout'


function App() {
  return (
                                  //Routes and Route

    // <BrowserRouter>

    //   <Routes>

    //     <Route
    //       path="/"
    //       element={<Home/>}
    //     ></Route>

    //     <Route
    //       path="/about"
    //       element={<About/>}
    //     ></Route>

    //     <Route
    //       path="/products"
    //       element={<Products/>}
    //     ></Route>

    //     <Route
    //       path="*"
    //       element={<Error/>}
    //     ></Route>

    //   </Routes>

    // </BrowserRouter>


                                      //nav and footer

    // <BrowserRouter>
    //   <nav>Navbar is here</nav>
    //   <Routes>

    //     <Route
    //       path="/"
    //       element={<Home/>}
    //     ></Route>

    //     <Route
    //       path="/about"
    //       element={<About/>}
    //     ></Route>

    //     <Route
    //       path="/products"
    //       element={<Products/>}
    //     ></Route>

    //     <Route
    //       path="*"
    //       element={<Error/>}
    //     ></Route>

    //   </Routes>

    //   <footer>footer is here</footer>

    // </BrowserRouter>


                                      //Nested Route

    // <BrowserRouter>
    //   <Routes>

    //     <Route path="/" element={<Home/>}>

    //       <Route path="about" element={<About/>}></Route>

    //       <Route path="products" element={<Products/>}></Route>

    //       <Route path="*" element={<Error/>}></Route>

    //     </Route>

    //   </Routes>

    // </BrowserRouter>


                                          //Index

    //   <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<SharedLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path='about' element={<About />} />
    //       <Route path='products' element={<Products />} />
    //       <Route path='*' element={<Error />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>


                            //nav component

    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
