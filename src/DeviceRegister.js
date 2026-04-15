import { useEffect, useState } from "react";

function DeviceRegister() {
  const [devices, setDevices] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const API_URL = "https://script.google.com/macros/s/AKfycbx3H57qB7uc5aeNKlLPC4yxn0P6JJnlDH9kZTno4A9Wpqj0_TnsqH9MnMQp_RgB82AA/exec";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setDevices(data));
  }, []);

  const filtered = devices.filter(d => {
    return (
      (typeFilter === "" || d.D_Type === typeFilter) &&
      (d.Device_ID.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div>
      <h2>Device Register</h2>

      <input
        placeholder="Search Device ID"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select onChange={e => setTypeFilter(e.target.value)}>
        <option value="">All</option>
        <option value="CU">CU</option>
        <option value="BU">BU</option>
        <option value="VVPAT">VVPAT</option>
      </select>

      <table border="1">
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Type</th>
            <th>Box</th>
            <th>S_No</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((d, i) => (
            <tr key={i}>
              <td>{d.Device_ID}</td>
              <td>{d.D_Type}</td>
              <td>{d.Box}</td>
              <td>{d.S_No}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeviceRegister;