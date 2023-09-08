import { Filter } from '../../components/Filter/Filter';
import { Form } from '../../components/Form/Form';
import { ContactsList } from '../..//components/ContactsList/ContactsList';
import { GlobalContainer } from '../../components/GlobalStyle';
import {
  FormWrapper,
  FormTitle,
  LineDiv,
  Wrapper,
  BookWrapper,
} from './Contacts.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';
import { Helmet } from 'react-helmet';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Wrapper>
        <GlobalContainer>
          <FormWrapper>
            <FormTitle>Phonebook</FormTitle>
            <Form />
          </FormWrapper>
        </GlobalContainer>
        <LineDiv />
        <GlobalContainer>
          <BookWrapper>
            <Filter />
            <ContactsList />
          </BookWrapper>
        </GlobalContainer>
      </Wrapper>
    </>
  );
}
