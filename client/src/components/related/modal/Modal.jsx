import React, { useState, useEffect, useContext, useRef } from 'react';
import './Modal.css';
import axios from 'axios';
import { API_KEY } from '../../../../../config/config.js';
import { AppContext } from '../../app.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

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
    <div className='modal'>
      <div className='modalContainer'>
        <button
          className='closeBtn'
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} className='closeXIcon' />
        </button>
        <div>
          <h3>COMPARING</h3>
          <div className='tableHeaders'>
            <p className='leftColumnx'>{currentItem.name}</p>
            <p className='rightColumnx'>{selectedItem.name}</p>
          </div>
          <table>
            <tbody className='tableBody'>
              {allFeats.map((item, index) => (
                <tr key={index} className='tableRow'>
                  <td className='leftColumn'>
                    {currentFeats.includes(item) ? (
                      <FontAwesomeIcon icon={faCheck} className='checkIcon' />
                    ) : (
                      ''
                    )}
                  </td>
                  <td className='middleColumn'>{item}</td>
                  <td className='rightColumn'>
                    {selectedFeats.includes(item) ? (
                      <FontAwesomeIcon icon={faCheck} className='checkIcon' />
                    ) : (
                      ''
                    )}
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
