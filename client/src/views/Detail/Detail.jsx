
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDriverByID } from "../../redux/actions";
import './detail.css';

const defaultImage = "https://thumbs.dreamstime.com/b/car-racer-flat-icon-man-red-uniform-orange-background-79711583.jpg"



const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getDriverByID(id));
  }, [dispatch, id]);

  const driver = useSelector(state => state.driverById);

  const navigate = useNavigate();

  return (
    <div className="detail-container">

            <div className="detail-container-image">
             <img className='detail-img' src={driver.image || defaultImage} alt='img-driver' />
            </div>
      
        <div className="detail-container-2">
              <div className="detail-title">
              <h2>{`${driver.forename} ${driver.surname}`}</h2>
              </div>  

              <div className='detail-bajada'>
                <ul className="elements-list">
                 <li>ID: <b>{driver.id}</b></li>
                 <li>Nationality: <b>{driver.nationality}</b></li>
                 <li>Date of Birth: <b>{driver.dob}</b></li>
              </ul>
              </div>

                 <div className="teams-style">
                 <span>Teams: <span id="dark-blue">{Array.isArray(driver.teams) ? driver.teams.map(team => team.name).join(', ') : driver.teams}</span></span>
                 {/* <li>Teams: {driver.teams.map(team => team.name).join(', ')}</li> */}
                 </div>
        </div>

        <div className="detail-description">
           <span>{driver.description}</span>
        </div>
    </div>
);
}

export default Detail;





