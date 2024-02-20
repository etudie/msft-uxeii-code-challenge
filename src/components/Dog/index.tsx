import { useEffect, useState } from 'react';
import './styles.css';
import { fetchAPI } from '../../utils/utils';

const Dog = ({breed, ifShow, sub}:{breed:string, ifShow: boolean, sub?:string}) => {

    const [image, setImage] = useState("")
    useEffect(()=>{
        if(sub){
            fetchAPI(`https://dog.ceo/api/breed/${breed}/${sub}/images/random`).then((response)=>{
                setImage(response.message);
                });
        }else{
            fetchAPI(`https://dog.ceo/api/breed/${breed}/images/random`).then((response)=>{
                setImage(response.message);
                });
        }
        
    }, []);

    return (
        <div className="Dog-container" style={{display: ifShow? "block" : "none"}}>
            <div className="Dog-image" style={{backgroundImage: `url(${image})`}}></div>
            <h2 className="Dog-title">{`${sub||""} ${breed}`}</h2>
        </div>
    )
}

export default Dog;