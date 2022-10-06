import { saveToken } from 'services';
import { User } from 'utils/types';

function login(
  data: User,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
): void {
  setUser(data);
  saveToken(data.token);
}

export default login;