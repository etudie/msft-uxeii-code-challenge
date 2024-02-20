import { useEffect, useState } from 'react';
import { fetchAPI } from '../../utils/utils';
import './styles.css';
import Dog from '../Dog';

const Collection = ({searchTerm}:{searchTerm:string}) => {

    const [breeds, setBreeds] = useState<DogBreeds>({});
    const [filteredBreeds, setFilteredBreeds] = useState<DogBreeds>({});

    useEffect(()=>{
        fetchAPI('https://dog.ceo/api/breeds/list/all').then((response)=>{
        setBreeds(response.message);
        setFilteredBreeds(response.message);
        });
    }, []);

    useEffect(()=>{
      Object.entries(breeds).filter((breed)=>{return breed.includes(searchTerm)})

      let result = {}, key;
      for (key in breeds) {
        if(breeds[key].length === 0) {
          if(key.includes(searchTerm)){
            result[key] = breeds[key];
          }
        } else {
          const subbreeds = [];
          // Loop over subbreed
          breeds[key].forEach((subbreed)=>{
            if((subbreed+" "+key).includes(searchTerm)){
              subbreeds.push(subbreed);
            }
          })
          if(subbreeds.length > 0){
            result[key] = subbreeds;
          }
        }

    }

    setFilteredBreeds(result);

    }, [searchTerm])




    return (
        <>
      {Object.entries(filteredBreeds).map(([breed, subbreed]) => {
        if(subbreed.length === 0){
          return <Dog breed={breed} key={breed} />
        } else {
          return subbreed.map((sub)=>{
            return <Dog breed={breed} sub={sub} key={breed + sub}/>
          })
        }
      })}
      </>
    )
}

export default Collection;