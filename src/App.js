import React, { useState } from 'react';
import './App.css';

function App() {
  const [urlImg, setUrlImg] = useState('');

  const fetchImage = () => {
    // Create a new XMLHttpRequest object to make an HTTP request
    const request = new XMLHttpRequest();

    // Define the URL to fetch a random cat image with a limit of 1 result
    const url = "https://api.thecatapi.com/v1/images/search?limit=1";

    // Open a GET request to the specified URL, using a synchronous (blocking) request
    request.open("GET", url, false);

    // Define a callback function to execute when the request loads
    request.onload = function () {
      // Parse the response text as JSON
      const image = JSON.parse(this.responseText);

      // Extract the URL of the cat image from the JSON response
      const imageUrl = image[0].url;
      setUrlImg(imageUrl);
    };

    // Send the HTTP request
    request.send();
  };

  return (
    <div className="App">
      <button onClick={fetchImage}>Change</button>
      <div className="img">
        <img src={urlImg} alt="" />
      </div>
    </div>
  );
}

export default App;
