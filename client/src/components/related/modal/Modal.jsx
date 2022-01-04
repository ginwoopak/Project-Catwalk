import React, { useState, useEffect, useContext, useRef } from 'react';
import './Modal.css';
import axios from 'axios';
import { API_KEY } from '../../../../../config/config.js';
import { AppContext } from '../../app.jsx';

const Modal = ({ openModal, setOpenModal, selectedId, currentItem }) => {
  const { callAPI } = useContext(AppContext);
  const [allFeats, setAllFeats] = useState([]);
  const [currentFeats, setCurrentFeats] = useState([]);
  const [selectedFeats, setSelectedFeats] = useState([]);
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
    return [currentFeatures, selectedFeatures, AllFeatures];
  };

  useEffect(() => {
    callAPI(`products/${selectedId}`, (response) => {
      setSelectedItem(response.data);
      getAllFeatures();
    });
  }, [selectedId]);

  useEffect(() => {
    setCurrentFeats(getAllFeatures()[0]);
    setSelectedFeats(getAllFeatures()[1]);
    setAllFeats(getAllFeatures()[2]);
  }, [selectedItem]);

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
        {console.log('allFeatures:::', allFeats)}
        {console.log('curr:::', currentFeats)}
        {console.log('select:::', selectedFeats)}
        <div>
          <h2>Comparing</h2>
          <table>
            <thead className='tableHeaders'>
              <tr>
                <th>{currentItem.name}</th>
                <th>{''}</th>
                <th>{selectedItem.name}</th>
              </tr>
            </thead>
            <tbody className='tableBody'>
              {allFeats.map((item, index) => (
                <tr key={index} className='tableRow'>
                  <td className='leftCheck'>
                    {currentFeats.includes(item) ? 'Y' : ''}
                  </td>
                  <td>{item}</td>
                  <td className='rightCheck'>
                    {selectedFeats.includes(item) ? 'Y' : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;
