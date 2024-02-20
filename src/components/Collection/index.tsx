import { useEffect, useState } from 'react';
import { fetchAPI } from '../../utils/utils';
import './styles.css';
import Dog from '../Dog';

const Collection = ({searchTerm}:{searchTerm:string}) => {

    const [breeds, setBreeds] = useState<DogBreeds>({});

    useEffect(()=>{
        fetchAPI('https://dog.ceo/api/breeds/list/all').then((response)=>{
        setBreeds(response.message);
        });
    }, []);

    const shouldShow = (breed, subbreed) => {
      return (subbreed.toLowerCase() + " " + breed.toLowerCase()).includes(searchTerm.toLowerCase());
    }

    return (
        <>
      {Object.entries(breeds).map(([breed, subbreed]) => {
        if(subbreed.length === 0){
          return <Dog breed={breed} key={breed} ifShow={shouldShow(breed, "")}/>
        } else {
          return subbreed.map((sub)=>{
            return <Dog breed={breed} sub={sub} key={breed + sub} ifShow={shouldShow(breed, sub)}/>
          })
        }
      })}
      </>
    )
}

export default Collection;