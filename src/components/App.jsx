import { Component } from "react";
import { Box } from "./Box";
import { ContactForm } from "./Phonebook/Phonebook";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = values => {
    this.setState(prevState => {
      if (
        prevState.contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
      ) {
        return alert(`${values.name} is already in contacts.`);
      } else {
        return { contacts: [...prevState.contacts, values] };
      }
    });
  };

  render() {
    return (
      <Box>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        </Box>
    )
  }
}
