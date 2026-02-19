import { LuUser, LuLock, LuDelete } from 'react-icons/lu';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginStaff() {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'backspace', '0', 'check'];

  const formik = useFormik({
    initialValues: {
      staffId: '',
      pin: '',
    },
    validationSchema: Yup.object({
      staffId: Yup.string().required('Staff ID is required'),
      pin: Yup.string().length(4, 'PIN must be 4 digits').required('PIN is required'),
    }),
    onSubmit: (values) => {
      console.log('LOGIN DATA 👉', values);
    },
  });

  const handleKeypadClick = (key) => {
    if (key === 'backspace') {
      formik.setFieldValue('pin', formik.values.pin.slice(0, -1));
      return;
    }

    if (key === 'check') {
      formik.submitForm();
      return;
    }

    if (formik.values.pin.length < 4) {
      formik.setFieldValue('pin', formik.values.pin + key);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-[#F8FAFC] flex flex-col items-center p-6.5 gap-4">
      <form onSubmit={formik.handleSubmit} className="w-full max-w-112.5 bg-white rounded-3xl p-10 shadow-[0px_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center gap-8">
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
              <input name="staffId" type="text" placeholder="Enter ID" value={formik.values.staffId} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-4.5 px-5 outline-none shadow-inner" />
              <LuUser className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-[#CAD5E2]" />
            </div>
            {formik.touched.staffId && formik.errors.staffId && <span className="text-red-500 text-xs">{formik.errors.staffId}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#00BC7D] text-[12px] font-bold tracking-widest uppercase">Pin Code</label>
            <div className="relative">
              <div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-4.5 px-5 flex justify-center gap-3 shadow-inner">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="text-2xl">
                    {formik.values.pin[i] ? '•' : ''}
                  </span>
                ))}
              </div>
              <LuLock className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-[#CBD5E1]" />
            </div>
            {formik.touched.pin && formik.errors.pin && <span className="text-red-500 text-xs">{formik.errors.pin}</span>}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full mb-10">
          {keys.map((key, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleKeypadClick(key)}
              className="h-16 rounded-2xl flex items-center justify-center text-xl font-bold active:scale-95
              bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-[#d9dde052]"
            >
              {key === 'backspace' ? <LuDelete size={24} /> : key === 'check' ? <HiOutlineCheckCircle size={24} /> : key}
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
        {' '}
        <span className="w-2 h-2 bg-[#00BC7D] rounded-full animate-pulse"></span> System Secure & Live{' '}
      </div>
    </div>
  );
}
