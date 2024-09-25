import React from 'react';
import style from './Tuote.module.css';

function Tuote({ tuote, hinta, onAdddKassaClick }) {
  return (
    <div>
      <div className={`container text-center ${style.tuote}`}>
        <div className="row">
          <div className="col">
            {tuote}
          </div>
          <div className="col">
            {hinta}€
          </div>
          <div className="col">
            <button type="button" className="btn btn-primary" onClick={() => onAdddKassaClick(tuote)}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tuote;
