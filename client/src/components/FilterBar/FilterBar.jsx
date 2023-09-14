import { useDispatch, useSelector } from 'react-redux';
import { filterByTeam, filterByOrigin, orderByName, orderByBirth, clearAll } from '../../redux/actions';
import React, { useState } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import './filterBar.css';

const FilterBar = ({ teams }) => {
    const dispatch = useDispatch();

    const [selectedTeam, setSelectedTeam] = useState(""); // Estado local para el equipo seleccionado
    const [selectedOrigin, setSelectedOrigin] = useState("");
    const [selectedName, setSelectedName] = useState("");
    const [selectedBirth, setSelectedBirth] = useState("");


    // Ordenar los equipos alfabéticamente
    const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));



    function handleFilterTeam(e) {
        const selectedValue = e.target.value;
        setSelectedTeam(selectedValue); // Actualiza el estado local
        dispatch(filterByTeam(selectedValue)); // Despacha la acción para filtrar por equipo
    }

    function handleFilterOrigin(e){
        const selectedValue=e.target.value;
        setSelectedOrigin(selectedValue);
        dispatch(filterByOrigin(selectedValue))
    }

    function handleOrderName(e){
        const selectedValue = e.target.value;
        setSelectedName(selectedValue);
        dispatch(orderByName(selectedValue))
    }

    function handleOrderBirth(e){
        const selectedValue = e.target.value;
        setSelectedBirth(selectedValue);
        dispatch(orderByBirth(selectedValue));
    }

    function handleResetFilters(){
        // setSelectedTeam("")  //restablecer el estado local
        dispatch(clearAll()) //restablecer todos los filtros
        setSelectedTeam("Filter by team");
        setSelectedOrigin("Order by Origin");
        setSelectedName("Order by Name");
        setSelectedBirth("Order by Birth");
    }



    return (
        <div className="filterBar-Container">
            <select className="filter-teams" value={selectedTeam} onChange={handleFilterTeam}>
                <option className="italic" value="" disabled>Filter by team</option>
                <option value="Todos">All Teams</option>
                {sortedTeams.map((team) => (
                    <option key={team.id} value={team.name}>
                        {team.name}
                    </option>
                ))}
            </select>

            <select className="other-filters" value={selectedOrigin} onChange={handleFilterOrigin}>
                <option className="italic" value="Todos">Order by Origin</option>
                 <option value="Created">Database</option>
                 <option value="API">API</option>
            </select>
             
             
            <select className="other-filters" value={selectedName} onChange={handleOrderName}>
                <option className="italic" value="Todos">Order by Name</option>
                <option value="asc">A-Z | Ascendent</option>
                <option value="des">Z-A | Descendent</option>
            </select>

            <select className="other-filters" value={selectedBirth} onChange={handleOrderBirth}>
                <option className="italic" value="Todos">Order by Birth</option>
                <option value="asc">From olders to youngers</option>
                <option value="des">From youngers to olders</option>
            </select>

           <SearchBar />

            <button className="reset-button" onClick={handleResetFilters}>Reset</button>

        </div>
    );
};

export default FilterBar;

