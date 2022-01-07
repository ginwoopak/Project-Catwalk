import React, { useState, useEffect, useContext } from 'react';
import './QA.css';
import { AppContext } from '../app.jsx';

const ModalQuestion = () => {
  const { currentItem, callAPI } = useContext(AppContext);

  return (
    <div>
      <form>
        <div>
          <h2>Ask Your Question</h2>
          <div>
            <h3>About the {currentItem.name}</h3>
          </div>
        </div>
        <div>
          Question:
          <div>
            <textarea
              rows='3'
              cols='25'
              placeholder='Example: Why did the chicken cross the road?'
              maxLength='1000'
            ></textarea>
          </div>
        </div>
        <div>
          Nickname:
          <input type='text' size='30' placeholder='Example:'/>
        </div>
      </form>
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       <button
  //         className='closeBtn'
  //         onClick={() => {
  //           setOpenModal(false);
  //         }}
  //       >
  //         <FontAwesomeIcon icon={faXmark} className='closeXIcon' />
  //       </button>
  //       <div>
  //         <h3>COMPARING</h3>
  //         <div className='tableHeaders'>
  //           <p className='leftColumnx'>{currentItem.name}</p>
  //           <p className='rightColumnx'>{selectedItem.name}</p>
  //         </div>
  //         <table>
  //           <tbody className='tableBody'>
  //             {allFeats.map((item, index) => (
  //               <tr key={index} className='tableRow'>
  //                 <td className='leftColumn'>
  //                   {currentFeats.includes(item) ? (
  //                     <FontAwesomeIcon icon={faCheck} className='checkIcon' />
  //                   ) : (
  //                     ''
  //                   )}
  //                 </td>
  //                 <td className='middleColumn'>{item}</td>
  //                 <td className='rightColumn'>
  //                   {selectedFeats.includes(item) ? (
  //                     <FontAwesomeIcon icon={faCheck} className='checkIcon' />
  //                   ) : (
  //                     ''
  //                   )}
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ModalQuestion;
