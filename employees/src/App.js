import './App.css';
import Wrapper from './components/Wrapper'
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Content />
      </Wrapper>
    </div>
  );
}

export default App;