import "./card.css";
import { useNavigate } from 'react-router-dom';

const Card = ({ id, image, name, teams}) => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate(`/detail/${id}`)
     }

    return (
        <div className="card" key={id} onClick={navigateHandler}>
        <img className="img" src={image} alt='img-driver' />
            
                <div className="card-title">
                <p>{name}</p>
                </div>
                <div className="card-team"> 
                    <p>Teams: {<span id="blue">{teams}</span>}</p>
                </div>
        
        </div>
    );
}

export default Card;
