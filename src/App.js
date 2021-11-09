import logo from './logo.svg';
import './App.css'
import Nav from './containers/nav/index'
// import Header from './containers/container/header/index';
// import Content from './containers/container/content/index';
import Container from './containers/container/index'

function App() {
  return (
    <div className="main">
        <Nav />
        <Container />
    </div>
  );
}

export default App;
