import { useState } from "react";
import DeviceRegister from "./DeviceRegister";
import Commissioning from "./Commissioning";

function App() {
  const [page, setPage] = useState("register");

  return (
    <div style={{ padding: 20 }}>
      <h1>EVM Management</h1>

      {/* Navigation */}
      <button onClick={() => setPage("register")}>Device Register</button>
      <button onClick={() => setPage("commission")}>Commissioning</button>

      <hr />

      {/* Pages */}
      {page === "register" && <DeviceRegister />}
      {page === "commission" && <Commissioning />}
    </div>
  );
}

export default App;