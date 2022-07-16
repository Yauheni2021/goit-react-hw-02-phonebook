import {ContactItem, ContactBtn} from './Contacts.styled'

export const ContactsListItem = ({ id, name, number, onClick }) => {
    return (
        <ContactItem>
            <p>{name}:</p>
            <p>{number}:</p>
            <ContactBtn id={id} onClick={() => onClick(id)}>Remove</ContactBtn>
        </ContactItem>
    );
};