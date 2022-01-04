import React, { useState, useEffect, useContext, useRef } from 'react';
import './Modal.css';
import axios from 'axios';
import { API_KEY } from '../../../../../config/config.js';
import { AppContext } from '../../app.jsx';

const Modal = ({ openModal, setOpenModal, selectedId }) => {
  const { currentItem, callAPI } = useContext(AppContext);
  const [selectedItem, setSelectedItem] = useState({
    id: 40345,
    campus: 'hr-rfp',
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description:
      "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
    features: [
      {
        feature: 'Lenses',
        value: 'Ultrasheen',
      },
      {
        feature: 'UV Protection',
        value: null,
      },
      {
        feature: 'Frames',
        value: 'LightCompose',
      },
    ],
  });

  useEffect(() => {
    callAPI(`products/${selectedId}`, (response) => {
      setSelectedItem(response.data);
    });
  }, [selectedId]);

  // var currentFeatures, selectedFeatures, AllFeatures;
  // if (selectedItem.features && currentItem.features) {
  //   currentFeatures = currentItem.features.map((eachFeat) => {
  //     return `${eachFeat.value || ''} ${eachFeat.feature || ''}`;
  //   });
  //   selectedFeatures = selectedItem.features.map((eachFeat) => {
  //     return `${eachFeat.value || ''} ${eachFeat.feature || ''}`;
  //   });
  // }
  // AllFeatures = currentFeatures.concat(selectedFeatures);
  // AllFeatures = new Set(AllFeatures);
  // AllFeatures = Array.from(AllFeatures);

  // console.log('Allfeatures, ', AllFeatures);

  return (
    <div className='modalBackground'>
      <div className='modalContaner'>
        <button
          className='closeBtn'
          onClick={() => {
            setOpenModal(false);
          }}
        >
          x
        </button>
        Modal
        {console.log('selectedItem updated:', selectedItem)}
      </div>
    </div>

    //   <div className='modalBackground'>
    //     <div className='modalContaner'>
    //       <button
    //         className='closeBtn'
    //         onClick={() => {
    //           setOpenModal(false);
    //         }}
    //       >
    //         x
    //       </button>
    //       <div>
    //         <h2>Comparing</h2>
    //         <div className='tableItemNames'>
    //           <p>{currentItem.name}</p>
    //           <p>{selectedItem.name}</p>
    //         </div>
    //         <table>
    //           <thead className='tableHeaders'>
    //             <tr>
    //               <th>{currentItem.name}</th>
    //               <th>{'...'}</th>
    //               <th>{selectedItem.name}</th>
    //             </tr>
    //           </thead>
    //           <tbody className='tableBody'>
    //             {AllFeatures.map((item, key) => (
    //               <tr key={key} className='tableRow'>
    //                 <td className='leftCheck'>
    //                   {currentFeatures.includes(item) ? 'Y' : ''}
    //                 </td>
    //                 <td>{item}</td>
    //                 <td className='rightCheck'>
    //                   {selectedFeatures.includes(item) ? 'Y' : ''}
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Modal;
