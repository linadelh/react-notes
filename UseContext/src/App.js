

import './App.css';
import { useState } from 'react';
import { places } from './Data.js';
import { getImageUrl } from './utils.js';
import { SizeImage , placeContex } from './contexts/SizeContex.js';
import { useContext } from 'react';





// "Props dealing," or 
// prop drilling, is a programming problem in 
// React where you have to pass
//  data through
//  multiple levels of nested components that don't actually need the data

function App() {

  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

   return (
    <SizeImage.Provider value = {imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      {/* <List imageSize={imageSize} /> */}  
      {/* ce nest pas la peine de passer imageSize comme props , elle est passee automatiquement avec le provider il faut juste lutiliser ou on veut exact avec une constante qui est determiner par usecontext */}
      {/* dont on fait comme sa  */}

      <List />

    </SizeImage.Provider>
  )
}


//imageSize here .. we need to create a contex for it 

//Place it is used here so we will do the provider here 

function List() {
  const listItems = places.map(place =>
    <placeContex.Provider key={place.id} value={place}>
      <li>
        <Place />
      </li>
    </placeContex.Provider>
  );
  return <ul>{listItems}</ul>;
}


function Place() {
  const placecontex = useContext(placeContex);
  return (
    <>
      <PlaceImage
        place={placecontex}
      />
      <p>
        <b>{placecontex.name}</b>
        {': ' + placecontex.description}
      </p>
    </>
  );
}


// c la ou on utilise Image size 
function PlaceImage() {

  const Size = useContext(SizeImage) ;
  const placecontex = useContext(placeContex);
  return (
    <img
      src={getImageUrl(placecontex)}
      alt={placecontex.name}
      width={Size}
      height={Size}
    />
  );
}


export default App;
