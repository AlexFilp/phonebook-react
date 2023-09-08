import { Wrapper, Text, Btn } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/Auth/operations';
import { selectUser } from '../../redux/Auth/selectors';
import { MdLogout } from 'react-icons/md';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user.email);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <Text>Hello, {user.name}!</Text>
      <Btn type="button" onClick={handleLogOut}>
        <MdLogout />
      </Btn>
    </Wrapper>
  );
};
