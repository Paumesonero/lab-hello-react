import './App.css';
import Header from './components/Header';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import ImageFour from './components/ImageFour';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <div className='logo-container'>
        <ImageOne />
        <ImageTwo />
        <ImageThree />
        <ImageFour />
      </div>
    </div>
  );
}

export default App;
