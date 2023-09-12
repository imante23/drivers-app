
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
                 <li>ID: {driver.id}</li>
                 <li>Nationality: {driver.nationality}</li>
                 <li>Date of Birth: {driver.dob}</li>
              </ul>
              </div>

                 <div className="teams-style">
                 <span>Teams: {Array.isArray(driver.teams) ? driver.teams.map(team => team.name).join(', ') : driver.teams}</span>
                 {/* <li>Teams: {driver.teams.map(team => team.name).join(', ')}</li> */}
                 </div>
        </div>

        <div className="detail-description">
           <span>Description: {driver.description}</span>
        </div>
    </div>
);
}

export default Detail;





