import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=Fk3Y4ZpqAAfgNkivYJwvRDA6JudRg51jEEYmozgyk0g&orientation=squarish&count=30`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setResults(data.results); 
    })
    .catch(error => console.error('Error fetching images:', error));
  };

  return (
    <>
      <div className="app">
        <div className="mydiv">
          <span>search</span>

          <input style={{width: "30%"}} type='text' value={value} onChange={(e) => setValue(e.target.value)}/>

          <button onClick={() => fetchImages()}>send</button>
        </div>

        <div className="gallery">
            {
              results.map((item) => {
                return <img className='item' src={item.urls.full} alt={item.alt_description} key={item.id}/>
              })
            }
        </div>
      </div>
    </>
  );
}

export default App;

