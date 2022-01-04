import React, { useState, useEffect, useContext, useRef } from 'react';
import './Modal.css';
import axios from 'axios';
import { API_KEY } from '../../../../../config/config.js';
import { AppContext } from '../../app.jsx';

const Modal = ({ openModal, setOpenModal, selectedId, currentItem }) => {
  const { callAPI } = useContext(AppContext);
  const [allFeats, setAllFeats] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const getAllFeatures = () => {
    var currentFeatures = [];
    var selectedFeatures = [];
    var AllFeatures = [];
    if (selectedItem.features && currentItem.features) {
      currentFeatures = currentItem.features.map((eachFeat) => {
        return `${eachFeat.value || ''} ${eachFeat.feature || ''}`;
      });
      selectedFeatures = selectedItem.features.map((eachFeat) => {
        return `${eachFeat.value || ''} ${eachFeat.feature || ''}`;
      });
    }
    AllFeatures = Array.from(
      new Set([...currentFeatures, ...selectedFeatures])
    );
    return AllFeatures;
  };

  useEffect(() => {
    callAPI(`products/${selectedId}`, (response) => {
      setSelectedItem(response.data);
      getAllFeatures();
    });
  }, [selectedId]);

  useEffect(() => {
    setAllFeats(getAllFeatures());
  }, [selectedItem]);

  return (
    // <div className='modalBackground'>
    //   <div className='modalContaner'>
    //     <button
    //       className='closeBtn'
    //       onClick={() => {
    //         setOpenModal(false);
    //       }}
    //     >
    //       x
    //     </button>
    //     Modal
    //     {/* {console.log('selectedItem updated:', selectedItem)}
    //     {console.log('currentItem:', currentItem)} */}
    //     {console.log('allFeatures:', allFeats)}
    //   </div>
    // </div>
    ////////
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
        <div>
          <h2>Comparing</h2>
          <div className='tableItemNames'>
            <p>{currentItem.name}</p>
            <p>{selectedItem.name}</p>
          </div>
          {/* <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table> */}
          <table>
            <thead className='tableHeaders'>
              <tr>
                <th>{currentItem.name}</th>
                <th>{'...'}</th>
                <th>{selectedItem.name}</th>
              </tr>
            </thead>
            {/* <tbody className='tableBody'>
              {allFeats.map((item, key) => (
                <tr key={key} className='tableRow'>
                  <td className='leftCheck'>
                    {currentItem.includes(item) ? 'Y' : ''}
                  </td>
                  <td>{item}</td>
                  <td className='rightCheck'>
                    {selectedItem.includes(item) ? 'Y' : ''}
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;
