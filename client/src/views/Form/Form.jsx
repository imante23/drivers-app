import './form.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import validation from "./validation";
import { getTeams } from "../../redux/actions";
import Car from "../../assets/auto_formula1.png";


const Form = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTeams());
    }, [dispatch]);

    const teams = useSelector((state) => state.teams)

  
    const [form, setForm]= useState({
        forename:"",
        surname:"",
        nationality:"",
        image:"",
        dob:"",
        description:"",
        teamsArr:[],        
    })

    const [errors, setErrors]= useState({
        forename:"",
        surname:"",
        nationality:"",
        image:"",
        dob:"",
        description:"", 
    })


  
    //Controla el formulario
    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        
        setForm ({...form, [property]:value})

        setErrors(validation({...form, [property]:value}))
    } 



    const allTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));


  function teamSelectHandler(event) {
  const selectedTeam = allTeams.find((team) => team.name === event.target.value);

  if (form.teamsArr.length >= 5) {
      alert("Only 5 teams can be selected for each driver");
      return;
  }
  if(form.teamsArr.includes(selectedTeam)) {
      return;
  } else {
      setForm((prevState) => ({
          ...prevState,
          teamsArr: [...prevState.teamsArr, selectedTeam]
      }));
  }}



  function deleteHandler(element) {
    const updatedTeamsArr = form.teamsArr.filter((team) => team !== element);

    setForm((prevState) => ({
        ...prevState,
        teamsArr: updatedTeamsArr
    }));
  }



    const resetForm = () =>{
        setForm({
          forename:"",
          surname:"",
          nationality:"",
          image:"",
          dob:"",
          description:"",
          teamsArr:[],    
        });
        setErrors({
          forename:"",
          surname:"",
          nationality:"",
          image:"",
          dob:"",
          description:"",
        });
      }


    const submitHandler = (event) => {
        event.preventDefault();

        // Extraer los nombres de los equipos y unirlos en un solo string separado por comas
        const teamNames = form.teamsArr.map((team) => team.name).join(', ');

        // Crear un nuevo objeto de datos que incluye los nombres de los equipos en lugar de form.teamsArr
        const formData = {
          ...form,
          teams: teamNames,
        };
        
        console.log(form);
        axios.post("http://localhost:3001/drivers", formData)
        .then(res=>{
          alert("Driver created sucessfully");
        })
        .then(()=> resetForm())
        .catch(err=>{
          alert("Error creating driver: " + err.message);
        });
      }




    return(
        <>
        <div className="form-cont">
         <form className="form-cont-2" onSubmit={submitHandler}>

         <div className='input-container'>
            <img className="landing-car" src={Car} alt="image-drivers"/>
          </div>            
          
          <div className='form-title'>
          <h1>Set up your driver</h1>
          </div>

          <div className='input-container'>
                <div className='label'>
                  <label>Name: </label>
                </div>
                  <input className='input-div' type="text" value={form.forename} onChange={changeHandler} name="forename" placeholder="Write a name..."/>            
            {errors.forename && <span className='errors'>{errors.forename}</span>} 
          </div>

            <div className='input-container'>
                <div className='label'>
                  <label>Surname: </label>
                </div>
                  <input className='input-div' type="text" value={form.surname} onChange={changeHandler} name="surname" placeholder="Write a surname..."/> 
              {errors.surname && <span className='errors'>{errors.surname}</span>}                  
            </div>

            <div className='input-container'>
                <div className='label'>
                  <label>Nationality: </label>
                </div>
                  <input className='input-div' type="text" value={form.nationality} onChange={changeHandler} name="nationality" placeholder="Write the nationality..."/>
              {errors.nationality && <span className='errors'>{errors.nationality}</span>}                     
            </div>

            <div className='input-container'>
                <div className='label'>
                  <label>Image: </label>
                </div>  
                  <input className='input-div' type="text" value={form.image} onChange={changeHandler} name="image" placeholder="Link here"/> 
              {errors.image && <span className='errors'>{errors.image}</span>}                    
            </div>

            <div className='input-container'>
                <div className='label'>
                  <label>Date of Birth: </label>
                </div>
                  <input className='input-div' type="text" value={form.dob} onChange={changeHandler} name="dob" placeholder="YYYY/MM/DD"/>
              {errors.dob && <span className='errors'>{errors.dob}</span>}                
            </div>

            <div className='input-container'>
                <div className='label'>
                  <label>Description: </label>
                </div>
                  <textarea className='form-description' type="text" value={form.description} onChange={changeHandler} name="description" placeholder="Have your driver won a championship? Which are their hobbies? Let us know."/>
              {errors.description && <span className='errors'>{errors.description}</span>}                
            </div>

            <div className='input-container'>
                <div className='label'>
                  <label>Team: </label>
                </div>      
                  <select className='select-div' onChange={(event) => teamSelectHandler(event)}>
                            {allTeams.map((element) => (
                                <option value={element.name} key={element.id}>
                                    {element.name}
                                </option>
                            ))}
                        </select>

                        {errors.teams && <span className='errors'>{errors.teams}</span>} 
              
            </div>

            <div className='input-container'>
            <button className='button-submit' type="submit">Create</button>
            </div>

            <div>
                    {form.teamsArr.map((element) => (
                        <div key={element.id}>
                            <p>{element.name}</p>
                            <button className='buttton-delete' onClick={() => deleteHandler(element)}>X</button>
                        </div>
                     ))}
              </div>

         </form>
         </div>
        </>
    )
}

export default Form;


//fijate de hacer un setTimeOut en el handleSubmit
// setTimeout(() => {
//   history.push("/home");
// }, 1500);



// {!newDriver.image && <img src={noImage} alt="No image" />} --> image por default




// REGULAR EXPRESIONS SON PARA CODIGOS, MAILS, HABRIA QUE VER IMAGENES.
    // const validate=(form) =>{
    //     if(^[a-zA-Z]+( [a-zA-Z]+)+$.test(form.forename)){
    //       setErrors({...errors, forename:""})

    //     } else{
    //       setErrors({...errors, forename:"El valor no es un nombre."})
    //     } if(form.forename ==="") setErrors({...errors, forename:"Not valid"})
    // }
