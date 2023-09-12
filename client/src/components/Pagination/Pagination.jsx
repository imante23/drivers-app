import React, { useState } from 'react';
import './pagination.css';

const Pagination = ({ page, setPage, itemsPerPage, totalItems }) => {
    const [input, setInput] = useState(1);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPage(parseInt(page) + 1);
        console.log(page)
    }

    const previousPage = () => {
        setInput(input - 1);
        setPage(page - 1);
        console.log(page)
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setPage(parseInt(e.target.value));
            if (
                parseInt(e.target.value) < 1 ||
                parseInt(e.target.value) > totalPages ||
                isNaN(parseInt(e.target.value))
            ) {
                setPage(1);
                setInput(1);
            } else {
                setPage(e.target.value);
            }
        }
    }

    const onChange = e => {
        setInput(e.target.value)
    }

    return (
        <div className="paginationContainer">
            <button id="buttonP" disabled={page === 1 || page < 1} onClick={previousPage}>
            </button>
            <input
                id="inputPagination"
                onChange={e => onChange(e)}
                onKeyDown={e => onKeyDown(e)}
                name="page"
                autoComplete="off"
                value={input}
            />
            <p> of {totalPages}</p>
            <button id="buttonP" disabled={page === totalPages || page > totalPages} onClick={nextPage} > 
            </button>
        </div>
    )
}

export default Pagination;






// import React,{useState} from 'react';
// import './pagination.css';

// const Pagination = ({page, setPage, maximun}) => {
//     const [input, setInput] = useState (1)

//     const nextPage = () => {
//         setInput (parseInt(input) + 1);
//         setPage (parseInt(page) + 1);
//     }

//     const previousPage = () => {
//         setInput (input - 1);
//         setPage (page - 1) ;
//     };


//     const onKeyDown = e => {
//         if (e.keyCode == 13){
//             setPage (parseInt(e.target.value));
//             if(
//                 parseInt(e.target.value < 1) ||
//                 parseInt(e.target.value) > Math.ceil (maximun) ||
//                 isNaN (parseInt(e.target.value))
//             ){
//                 setPage (1);
//                 setInput(1);
//             } else {
//                 setPage(e.target.value);
//             }
//         }
//     }

//     const onChange = e => {
//         setInput(e.target.value)
//     }



//     return(
//         <div>
//         <button id="buttonP" disabled={page ===1 || page < 1} onClick={previousPage}>
//         </button>
//         <input 
//         id="inputPagination"
//         onChange={e => onChange (e)} 
//         onKeyDown={e => onKeyDown (e)} 
//         name="page" 
//         autoComplete="off" 
//         value={input} />
//         <p> de {maximun} </p>
//         <button disabled={page === Math.ceil(maximun) || page < Math.ceil(maximun)} onClick={nextPage}>
//         </button>
//         </div>
//     )

// }

// export default Pagination;










// const Pagination = ({ totalPages, currentPage, onPageChange }) => {
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <div className="pagination">
//       <ul>
//         {pageNumbers.map((number) => (
//           <li key={number}>
//             <button
//               onClick={() => onPageChange(number)}
//               className={number === currentPage ? 'active' : ''}
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;









// import React, { useState } from 'react';
// import './pagination.css';


// const Pagination = ({cardsPerPage, allDrivers, pagination}) => {
//     const pageNumbers=[]
    
//     for(let i=1; i<=Math.ceil(allDrivers.length / cardsPerPage); i++){
//         pageNumbers.push(i);
//     }

//     return(
//         <div>
//             <ul>
//                 {pageNumbers && pageNumbers.map((number) => (
//                     <li key={number}>
//                         <button onClick={() => pagination(number)}>{number}</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };


// export default Pagination;



//   const maximun = Math.ceil(allDrivers.length / cardsPerPage); //número máximo de páginas














//     const [input, setInput] = useState (1)

//     const nextPage = () => {
//         setInput (parseInt(input) + 1);
//         setPage (parseInt(page) + 1);
//     }

//     const previousPage = () => {
//         setInput (input - 1);
//         setPage (page - 1) ;
//     };


//     const onKeyDown = e => {
//         if (e.keyCode == 13){
//             setPage (parseInt(e.target.value));
//             if(
//                 parseInt(e.target.value < 1) ||
//                 parseInt(e.target.value) > Math.ceil (maximun) ||
//                 isNaN (parseInt(e.target.value))
//             ){
//                 setPage (1);
//                 setInput(1);
//             } else {
//                 setPage(e.target.value);
//             }
//         }
//     }

//     const onChange = e => {
//         setInput(e.target.value)
//     }



//     return(
//         <div>
//         <button id="buttonP" disabled={page ===1 || page < 1} onClick={previousPage}>
//         </button>
//         <input 
//         id="inputPagination"
//         onChange={e => onChange (e)} 
//         onKeyDown={e => onKeyDown (e)} 
//         name="page" 
//         autoComplete="off" 
//         value={input} />
//         <p> de {maximun} </p>
//         <button disabled={page === Math.ceil(maximun) || page < Math.ceil(maximun)} onClick={nextPage}>
//         </button>
//         </div>
//     )

// }

// export default Pagination;