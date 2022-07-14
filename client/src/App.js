
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom' ;
import { Container } from '@material-ui/core' ;
import Navbar from './components/Navbar/Navbar';
import RandomQuote from './components/RandomQuote/RandomQuote';
import Quote from './components/Quote/Quote' ;
import Journal from './components/Journal/Journal';
import QuoteNew from './components/Quote/QuoteNew';
import QuoteUpdate from './components/Quote/QuoteUpdate';
import JournalNew from './components/Journal/JournalNew' ;
import JournalUpdate from './components/Journal/JournalUpdate' ;

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='lg' className='App' >
        <Navbar />
        <Routes>
          <Route path='/' element={ <> <RandomQuote /> <Quote /> </> } />
          <Route path='/journal' element={ <Journal />} />
          <Route path='/journal/:id' element={ <Journal />} />
          <Route path='/quote/add' element={ <QuoteNew />} />
          <Route path='/quote/update/:id' element={ <QuoteUpdate />} />
          <Route path='/journal/:id/add' element={ <JournalNew />} />
          <Route path='/journal/:id/update' element={ <JournalUpdate />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App ;
