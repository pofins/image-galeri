import React, {useState} from "react";
import images from "./images";
import './styles.css';


function App() {

    const [selectedImg , setSelectedImg] = useState(images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected"/>
      </div>
      <div className="imgContainer">
        {images.map((img,index)=>(
          <img key={index} src={img} alt="kegri-master" 
          onClick={()=> setSelectedImg(img)}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
