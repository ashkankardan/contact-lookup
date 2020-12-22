import React from 'react';
import './card.css'

export const Card = (props) => (
  <div className="card-container">
    <img alt={props.contact.name} src={`https://robohash.org/${props.contact.id}?set=set2&size=180x180`} />
    <h2>{props.contact.name}</h2>
    <h4>{props.contact.email}</h4>
  </div>
);
