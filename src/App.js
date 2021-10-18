import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News';


function App() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=b50b2f2510054034a523f96a50fdc178')
    .then(res => res.json())
    .then(data =>setNews(data.articles))
  }, [])

  return (
    <div className="App">
      { news.length === 0 ? 
        <Spinner animation="border"/>
       :
        <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News news={nw}/>)
        }
      </Row>
       }

    </div>
  );
}

export default App;
