import { Item, Name, DeleteBtn, PhoneNumber } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import { MdDeleteForever } from 'react-icons/md';

export const ContactsItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <div>
        <Name>{name}</Name>
        <PhoneNumber href={'tel:' + phone}>{phone}</PhoneNumber>
      </div>
      <DeleteBtn onClick={handleDelete}>
        <MdDeleteForever />
      </DeleteBtn>
    </Item>
  );
};
