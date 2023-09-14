import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers, getTeams } from '../../redux/actions';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Pagination from '../../components/Pagination/Pagination';
import FilterBar from '../../components/FilterBar/FilterBar';
import './home.css'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDrivers());
        dispatch(getTeams())
    }, [dispatch]);

    const teams = useSelector(state => state.teams);

    const allDrivers = useSelector((state) => state.drivers);
    const [page, setPage] = useState(1);

    // Número de tarjetas por página
    const cardsPerPage = 9;

    // Función para obtener las tarjetas en la página actual
    const getCurrentPageDrivers = () => {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`);
        return allDrivers.slice(startIndex, endIndex);
    };

    return (

        <div className="h-container">


            <FilterBar teams={teams}/>

            <CardsContainer drivers={getCurrentPageDrivers()} />
            <Pagination
                page={page}
                setPage={setPage}
                itemsPerPage={cardsPerPage}
                totalItems={allDrivers.length}
            />
         </div>
    
    );
}

export default Home;














// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDrivers } from '../../redux/actions';
// import CardsContainer from '../../components/CardsContainer/CardsContainer';
// import SearchBar from '../../components/SearchBar/SearchBar';
// import Pagination from '../../components/Pagination/Pagination';



// const Home = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getDrivers());
//     }, []);

//    const allDrivers = useSelector((state) => state.drivers);
//     const [page, setPage] = useState(1); // Página actual
//     const cardsPerPage = 9; // Tarjetas por página
//     const maximum = Math.ceil(allDrivers.length / cardsPerPage); // Número máximo de páginas

//     // Función para obtener las tarjetas en la página actual
//     const getCurrentPageDrivers = () => {
//         const startIndex = (page - 1) * cardsPerPage;
//         const endIndex = startIndex + cardsPerPage;
//         return allDrivers.slice(startIndex, endIndex);
//     };


//     return (
//         <>
//             <h1>Esta es la vista de Home</h1>
//             <SearchBar />
//             <CardsContainer drivers={getCurrentPageDrivers()} />
//             <Pagination page={page} setPage={setPage} maximum={maximum} />
//         </>
//     );
// }



// export default Home;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDrivers } from '../../redux/actions';
// import CardsContainer from '../../components/CardsContainer/CardsContainer';
// import SearchBar from '../../components/SearchBar/SearchBar';
// import Pagination from '../../components/Pagination/Pagination';

// const Home = () => {
//   const dispatch = useDispatch();
//   const allDrivers = useSelector((state) => state.drivers);
//   const [page, setPage] = useState(1);
//   const cardsPerPage = 9;

//   useEffect(() => {
//     dispatch(getDrivers());
//   }, [dispatch]);

//   // Calcular el número total de páginas
//   const totalPages = Math.ceil(allDrivers.length / cardsPerPage);

//   // Función para cambiar la página actual
//   const handlePageChange = (pageNumber) => {
//     setPage(pageNumber);
//   };

//   // Calcular las tarjetas a mostrar en la página actual
//   const startIndex = (page - 1) * cardsPerPage;
//   const endIndex = startIndex + cardsPerPage;
//   const currentCards = allDrivers.slice(startIndex, endIndex);

//   return (
//     <>
//       <h1>Esta es la vista de Home</h1>
//       <SearchBar />
//       <CardsContainer drivers={currentCards} />
//       <Pagination
//         totalPages={totalPages}
//         currentPage={page}
//         onPageChange={handlePageChange}
//       />
//     </>
//   );
// };

// export default Home;














// import CardsContainer from '../../components/CardsContainer/CardsContainer';
// import SearchBar from '../../components/SearchBar/SearchBar';
// import {useEffect, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {getDrivers} from'../../redux/actions';
// import Pagination from '../../components/Pagination/Pagination';

// const Home = () => {

//     const dispatch = useDispatch();
    
//  /*Aquí creo distintos estados locales para el paginado.*/
//     const allDrivers = useSelector((state) => state.drivers);
//     const [page, setPage] = useState(1); //página actual
//     const [cardsPerPage] = useState(9); //tarjetas por página

//   /*Esta variable indicará el índice del último país mostrado en cada página.*/ 
//     const endIndex = page * cardsPerPage;

//   /*Esta variable indicará el índice del primer país mostrado en cada página.*/    
//     const startIndex = endIndex - cardsPerPage;

//   /*Esta variable será un array con todos los países que se mostrarán en cada página.*/   
//     const currentCards = allDrivers.slice(startIndex, endIndex);

//   /*Esta función será la que establezca el paginado con sus numeros y páginas.*/    
//     const pagination = (pageNumber) => {
//         setPage(pageNumber);
//       };

// /*Este efecto permite actualizar todos los países cada vez que se actualiza o se monta este componente.*/
//     useEffect(() =>{
//     setPage(1);
//     dispatch(getDrivers());
//     },[]);
      
// //RENDERIZADO
//     return(
//         <>
//          <h1>Esta es la vista de Home</h1>
//          <SearchBar />
//          <CardsContainer drivers={currentCards} />
//          <Pagination cardsPerPage={cardsPerPage} allDrivers={allDrivers.length} pagination={pagination} />
//         </>
//     )
// }

// export default Home;




// const [page, setPage] = useState(1);
// const [cardsPerPage, setCardsPerPage] = useState(9);
// const maximun = drivers.length/cardsPerPage;

// drivers.slice(
//     (page - 1) * cardsPerPage,
//     (page - 1) * cardsPerPage + cardsPerPage
// )

