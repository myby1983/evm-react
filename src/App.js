import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const API_URL = "https://script.google.com/macros/s/AKfycbx3H57qB7uc5aeNKlLPC4yxn0P6JJnlDH9kZTno4A9Wpqj0_TnsqH9MnMQp_RgB82AA/exec";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <div>
      <h1>EVM Devices</h1>
      <table border="1">
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;