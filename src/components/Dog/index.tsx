import './styles.css';

const Dog = ({image, title}) => {
    return (
        <div className="Dog-container">
            <div className="Dog-image" style={{backgroundImage: `url(${image})`}}></div>
            <h2 className="Dog-title">{title}</h2>
        </div>
    )
}

export default Dog;