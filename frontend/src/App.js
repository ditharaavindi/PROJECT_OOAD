import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import AdminLogin from "./Components/Admin/AdminLogin";
import ClientLogin from "./Components/Client/ClientLogin";
import EmployeeLogin from "./Components/Employee/EmployeeLogin";
import InventoryLogin from "./Components/Inventory/InventoryLogin";
import AdminDash from "./Components/Admin/AdminDash";
import CreateAccount from "./Components/Admin/CreateAccount";
import AddItem from "./Components/Inventory/AddItem";
import UpdateItem from "./Components/Inventory/UpdateItem";
import InventoryDash from "./Components/Inventory/InventoryDash";
import EmployeeDash from "./Components/Employee/EmployeeDash";
import AddEmployee from "./Components/Employee/AddEmployee";
import UpdateEmployee from "./Components/Employee/UpdateEmployee";
import AddPayRoll from "./Components/Employee/AddPayRoll";
import AddClient from "./Components/Client/AddClient";
import ClientDash from "./Components/Client/ClientDash";
import ClientProfile from "./Components/Client/ClientProfile";
import UpdateClient from "./Components/Client/UpdateClient";
import AddClientJob from "./Components/Client/AddClientJob";
import AODpage from "./Components/Admin/AODpage";
import LowStock from "./Components/Inventory/LowStock";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/clientLogin" element={<ClientLogin />} />
          <Route path="/employeeLogin" element={<EmployeeLogin />} />
          <Route path="/inventoryLogin" element={<InventoryLogin />} />
          <Route path="/adminDash" element={<AdminDash />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/updateItem/:id" element={<UpdateItem />} />
          <Route path="/inventoryDash" element={<InventoryDash />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
          <Route path="/addPayRoll/:id" element={<AddPayRoll />} />
          <Route path="/employeDash" element={<EmployeeDash />} />
          <Route path="/addclient" element={<AddClient />} />
          <Route path="/clientdash" element={<ClientDash />} />
          <Route path="/clientProfile" element={<ClientProfile />} />
          <Route path="/updateClient/:id" element={<UpdateClient />} />
          <Route path="/addjobClient" element={<AddClientJob />} />
          <Route path="/aodpage" element={<AODpage />} />
          <Route path="/lowstock" element={<LowStock />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
