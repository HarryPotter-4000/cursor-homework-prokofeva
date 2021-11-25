import React from "react";
import Card from "../card/Card";
import stylesContacts from '../contacts/Contacts.module.css'
import styles from '../card/Card.module.css'

const contacts = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319522",
        gender: "male"
  }];

const Contacts = () => {
  const [query, updateQuery] = React.useState('');
  const [filtered, updateFiltered] = React.useState(contacts);

  const handleKeyUp = event => {
    const { value } = event.target;
    updateQuery(value);
    updateFiltered(
      contacts.filter(
        contact => contact.lastName.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  return (
    <div className={stylesContacts.container}>
      <h1>Contacts</h1>
      <div className="search">
        <input type="text" placeholder="search" name="new-todo" value={query} onChange={ handleKeyUp } />
      </div>
      <div className="listOfContacts">
        {filtered.map(contact => (
          <Card
            key={contact.phone}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            gender={contact.gender} />
        ))}
      </div>
    </div>
  )
}

export default Contacts;