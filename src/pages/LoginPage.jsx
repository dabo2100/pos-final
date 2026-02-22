import { LuUser, LuLock, LuDelete } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { domain } from '../store';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function LoginStaff() {
  const [activeInput, setActiveInput] = useState('id');
  const [staffId, setStaffId] = useState('');
  const [pinId, setPinId] = useState('');
  const naviagte = useNavigate();

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'backspace', '0'];

  const handleClick = (key) => {
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

  const handleLogin = (event) => {
    event.preventDefault();
    let data = { identifier: staffId, password: pinId };
    let url = domain + '/api/auth/local';
    axios
      .post(url, data)
      .then((res) => {
        toast.success('Login success');

        let role = res.data.user.system_role;
        if (role == 'cashier') {
          naviagte('/');
        } else if (role == 'admin') {
          naviagte('/admin');
        } else {
          naviagte('/kitchen');
        }

        sessionStorage.setItem('jwt', res.data.jwt);
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error('Invalid Login');
        console.log(err);
      });
  };

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem('user')) || {};
    if (user.system_role == 'admin') {
      naviagte('/admin');
    } else if (user.system_role == 'cahsier') {
      naviagte('/');
    } else if (user.system_role == 'kitchen') {
      naviagte('/kitchen');
    }
  }, []);

  return (
    <div className="w-full h-dvh overflow-y-auto bg-[#F8FAFC] flex flex-col items-center p-6.5 gap-4">
      <form onSubmit={handleLogin} className="w-full max-w-112.5 bg-white rounded-3xl p-10 shadow-[0px_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4.75 items-center">
          <div className="w-16 h-16 bg-[#00BC7D] rounded-2xl flex items-center justify-center rotate-12">
            <span className="text-white text-3xl font-bold -rotate-12">G</span>
          </div>
          <div className="text-center">
            <h1 className="text-[#0F172B] text-[30px]">Staff Access</h1>
            <p className="text-[#94A3B8] text-[16px]">Welcome back, enter your credentials</p>
          </div>
        </div>
        <div className="w-full space-y-5 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-[#00BC7D] text-[12px] font-bold tracking-widest uppercase">Staff ID</label>
            <div className="relative">
              <input readOnly value={staffId} onFocus={() => setActiveInput('id')} onKeyDown={(event) => event.preventDefault()} name="staffId" type="text" placeholder="Enter ID" className={`${activeInput == 'id' && 'bg-green-300'} w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-4.5 px-5 outline-none shadow-inner `} />
              <LuUser className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-[#CAD5E2]" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#00BC7D] text-[12px] font-bold tracking-widest uppercase">Pin Code</label>
            <div className="relative">
              <div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex justify-center gap-3 shadow-inner">
                <input readOnly value={pinId} onFocus={() => setActiveInput('pin')} onKeyDown={(event) => event.preventDefault()} className={`${activeInput == 'pin' && 'bg-green-300'} w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-4.5 px-5 outline-none shadow-inner `} />
              </div>
              <LuLock className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-[#CBD5E1]" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full mb-10">
          {keys.map((key, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(key)}
              className="h-16 rounded-2xl flex items-center justify-center text-xl font-bold active:scale-95
              bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-[#d9dde052]"
            >
              {key === 'backspace' ? <LuDelete size={24} /> : key}
            </button>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <button type="submit" className="w-full bg-[#00BC7D] text-white font-bold py-5 rounded-2xl mb-6  cursor-pointer">
            Sign In
          </button>
          <button className="text-[#94A3B8] text-[13px] font-medium hover:text-[#45556C] transition-colors">Forgot PIN? Contact Admin </button>
        </div>
      </form>
      <div className="mt-8 flex items-center gap-2 text-[#94A3B8] text-[11px] font-bold tracking-widest uppercase">
        <span className="w-2 h-2 bg-[#00BC7D] rounded-full animate-pulse"></span>
        System Secure & Live
      </div>
    </div>
  );
}
