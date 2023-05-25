
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Menu from "./components/Menu";
import Hall from "./components/Hall";
import Location from "./components/Location";
import BookingResquest from './Admin/BookingResquest';
import TableManagement from './Admin/TableManagement';
import TableA from "./components/table/tableA";
import TableB from "./components/table/tableB";
import TableC from "./components/table/tableC";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/hall" element={<Hall/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/admin/request" element={<BookingResquest/>} />
        <Route path='/admin/table' element={<TableManagement/>} />
        <Route path='/tableA' element={<TableA/>} />
        <Route path='/tableB' element={<TableB/>} />
        <Route path='/tableC' element={<TableC/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
