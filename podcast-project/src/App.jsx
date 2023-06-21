import './App.css'
import Header from './components/header/Header'
import Podcast from './components/podcast/Podcast'
import Podcasts from './components/podcasts/Podcasts'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Podcasts />} />
          <Route path="/podcasts/:id" element={<Podcast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
