import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../data/userAuth';

export default function useLogin() {
  // custom hook
  const naviagte = useNavigate();

  const handleLogin = (event, staffId, pinId) => {
    event.preventDefault();
    let data = { identifier: staffId, password: pinId };
    authUser(data)
      .then((res) => {
        let role = res.data.user.system_role;
        if (role == 'cashier') {
          naviagte('/');
        } else if (role == 'admin') {
          naviagte('/admin');
        } else {
          naviagte('/kitchen');
        }
        toast.error('Login Success');
        sessionStorage.setItem('jwt', res.data.jwt);
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error('Invalid Login');
        console.log(err);
      });
  };

  const handleClick = (key, setStaffId, setPinId, staffId, pinId, activeInput) => {
    if (key == 'backspace') {
      if (activeInput == 'id') {
        const result = staffId.substring(0, staffId.length - 1);
        setStaffId(result);
      } else {
        const result = pinId.substring(0, pinId.length - 1);
        setPinId(result);
      }
    } else {
      if (activeInput == 'id') {
        setStaffId(staffId + key);
      } else {
        setPinId(pinId + key);
      }
    }
  };

  return { handleLogin, handleClick };
}
