import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/NewRound.scss';

function NewRoundCounterpart({ counterpart, recipients, handleRoundCounterparts, contacts }) {
  return (
    <div>
      {!Object.keys(recipients).includes(counterpart.counterpart_id.toString()) && (
        <div className="new-round-counterpart-container">
          <div className="user-container">
            <img
              className="user-container__avatar"
              src={
                contacts.filter((item) => item.contact_id === counterpart.counterpart_id).length
                  ? contacts.filter((item) => item.contact_id === counterpart.counterpart_id)[0]
                    .avatar === ''
                    ? `https://ui-avatars.com/api/rounded=true?name=${
                      counterpart.username
                    }&size=50&background=eaae60`
                    : contacts.filter((item) => item.contact_id === counterpart.counterpart_id)[0]
                      .avatar
                  : ''
              }
              alt=""
            />
            <h3 className="user-container__name">{counterpart.username}</h3>
          </div>

          <button
            className="new-round-add-remove-btn"
            type="button"
            onClick={() => handleRoundCounterparts(counterpart.counterpart_id)}
          >
            {!Object.keys(recipients).includes(counterpart.counterpart_id.toString()) ? (
              <i className="fas fa-plus-circle" />
            ) : (
              <i className="fas fa-minus-circle" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

NewRoundCounterpart.propTypes = {
  counterpart: PropTypes.object.isRequired,
  recipients: PropTypes.object.isRequired,
  handleRoundCounterparts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default NewRoundCounterpart;
