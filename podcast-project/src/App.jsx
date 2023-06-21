import './App.css'
import Header from './components/header/Header'
import Podcast from './components/podcast/Podcast'
import PodcastEpisode from './components/podcastEpisode/PodcastEpisode'
import Podcasts from './components/podcasts/Podcasts'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Podcasts />} />
          <Route path="/podcast/:podcastId" element={<Podcast />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<PodcastEpisode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
