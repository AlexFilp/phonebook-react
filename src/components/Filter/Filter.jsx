import { ContactsTitle, Container, Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterInput } from 'redux/Contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    const filterValue = evt.target.value;
    dispatch(filterInput(filterValue));
  };

  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <Container>
        <Label>
          Find contacts by name
          <Input type="text" onChange={handleFilterChange} />
        </Label>
      </Container>
    </>
  );
};
