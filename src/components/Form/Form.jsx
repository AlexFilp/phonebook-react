import { useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/Contacts/selectors';
import { ErrorMessage, Formik } from 'formik';
import { ContactsSchema } from 'schemas/yupschemas';
import {
  Label,
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from 'components/RegisterForm/RegisterForm.styled';
import { Btn } from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = async (values, actions) => {
    if (allContacts.find(contact => contact.name === values.name)) {
      return toast.error(`${values.name} is already in contacts!`);
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          const isValid = field =>
            touched[field] && errors[field] ? 'is-invalid' : 'is-valid';
          const nameValid = isValid('name');
          const numberValid = isValid('number');

          return (
            <StyledForm autoComplete="on">
              <Label>
                Name
                <StyledField
                  type="text"
                  name="name"
                  isvalid={nameValid}
                  placeholder="Enter name"
                />
                <ErrorMessage name="name" component={StyledErrorMessage} />
              </Label>
              <Label>
                Number
                <StyledField
                  type="text"
                  name="number"
                  autoComplete="off"
                  placeholder="+38 ..."
                  isvalid={numberValid}
                />
                <ErrorMessage name="number" component={StyledErrorMessage} />
              </Label>

              <Btn type="submit">Add contact</Btn>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};
