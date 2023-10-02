// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import header, content, and footer component to include its contents
// in app.js which will be shown in localhost:3000
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
// import container, nav, and navbar to use navbag function
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import browserrouter, routes, and route to use react functions
// this includes the <routes></routes> and <route path='/'></route>
// functions
import { BrowserRouter, Routes, Route } from 'react-router-dom';

{/* To make a comment in js file use ctrl k + ctrl c */}
function App() {
  return (
    // The browser router
    <BrowserRouter>
      <div className="App">
        {/* Start of navbar function */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* The command /read changes the name of the
              url by adding on the "/read" at the end of localhost:3000 */}
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Header></Header>}></Route>
          <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
