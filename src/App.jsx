import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CashierLayout from './layouts/CashierLayout';
import AdminLayout from './layouts/AdminLayout';
import CategoryProducts from './pages/CategoryProducts';
import StaffLogin from './pages/StaffLogin';

export default function App() {
  return (
    <div className="w-full h-dvh overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CashierLayout />}>
            <Route index element={<h1 className="h-[200vh] bg-violet-500">Dashboard Of Cashier</h1>} />
            <Route path=":categoryName" element={<CategoryProducts />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<h1>Dashboard Page</h1>} />
            <Route path="staff" element={<StaffLogin />} />
            <Route path="menu" element={<h1>Menu Edit Page</h1>} />
            <Route path="sales" element={<h1>Sales Report Page</h1>} />
          </Route>

          <Route path="/orders" />
          <Route path="/kitchen" />

          <Route path="/login" />
          <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// 3 Layouts (Admin - Cashier - Login - 404)
