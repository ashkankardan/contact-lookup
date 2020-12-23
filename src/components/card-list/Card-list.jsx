import React from "react";
import { Card } from "../card/Card";

export const CardList = (props) => {
  return (
    <div className="card-list row">
      {props.contacts.map((contact) => (
        <Card key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
