import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PageButtons from './components/PageButtons';
import SearchForm from './components/SearchForm';
import ThreadList from './components/ThreadList';

function App() {

  const searchURL = "https://hn.algolia.com/api/v1/search_by_date?query=";
  const defaultURL = "http://hn.algolia.com/api/v1/search?tags=front_page";  

  const [url, setURL] = useState(defaultURL);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getHits();
  }, [url, page]);

  async function getHits() {
    try {
      const response = await fetch(url + "&page=" + page);
      const data = await response.json();
      console.log(data)
      setHits(data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  function search (val) {
    if (val.length < 1) {
      setURL(defaultURL);
    }
    setPage(0);
    setURL(searchURL + val + "&tags=story"); 
  }

  function handlePage(val) {
    if (val === "prev") {
      if (page - 1 < 0) {
        setPage(hits.nbPages - 1);
      } else {
        setPage(page - 1);
      } 
    } else if (val === "next") {
      if (page + 1 === hits.nbPages) {
        setPage(0);
      } else {
        setPage(page + 1)
      }
    }
  }

  return (
    <>
      <Navbar/>
      <SearchForm search={search}/>
      <PageButtons handlePage={handlePage}/>
      <ThreadList hits={hits.hits || hits}/>
    </>
  );
}

export default App;
