import { useEffect, useState } from 'react';
import './styles.css';
import { fetchAPI } from '../../utils/utils';

const Menu = ({setBreed}) => {
    const [breedList, setBreedList] = useState({});
    useEffect(()=>{
        fetchAPI(`https://dog.ceo/api/breeds/list/all`).then((response)=>{
                setBreedList(response.message);
                });
    }, [])

    const breeds = Object.keys(breedList);
    return (
        <div className="Menu-container">
            <select name="breeds" className="Menu-select" onChange={(e) => setBreed(e.target.value)}>
            <option value="">Explore Subbreeds!</option>
                {breeds.map((breed)=>{return <option value={breed} key={breed}>{breed}</option>})}
            </select>
        </div>
    )
}

export default Menu;