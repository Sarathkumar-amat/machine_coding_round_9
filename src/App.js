import './App.css';
import { Home } from './pages/Home';
import {Routes,Route} from "react-router-dom";
import { ContentBox } from './components/ContentBox';
import { SingleCategory } from './pages/SingleCategory';
import { SingleVideo } from './pages/SingleVideo';
import { PlayListPage } from './pages/PlayListPage';
import { PlayListVideos } from './pages/PlayListVideos';
import { WatchLater } from './pages/WatchLater';
import { Explore } from './pages/Explore';

function App() {
  return (
    <div className="App">
      {/* <i class="fa-solid fa-user"></i> */}
      <Routes>
        <Route path="/" element= {<ContentBox><Home /></ContentBox>} />
        <Route path="/singleCategory/:categoryName" element= {<ContentBox><SingleCategory /></ContentBox>} />
        <Route path="/singleVideo/:videoId" element= {<ContentBox><SingleVideo /></ContentBox>} />
        <Route path="/playlists" element= {<ContentBox><PlayListPage /></ContentBox>} />
        <Route path="/playlistVideos/:listName" element= {<ContentBox><PlayListVideos /></ContentBox>} />
        <Route path="/watchlater" element= {<ContentBox><WatchLater /></ContentBox>} />
        <Route path="/explore" element= {<ContentBox><Explore /></ContentBox>} />
      </Routes>
    </div>
  );
}

export default App;
