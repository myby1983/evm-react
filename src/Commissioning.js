import { useEffect, useState } from "react";

function App() {
  const [pairing, setPairing] = useState({});

  const API_URL = "https://script.google.com/macros/s/AKfycbx3H57qB7uc5aeNKlLPC4yxn0P6JJnlDH9kZTno4A9Wpqj0_TnsqH9MnMQp_RgB82AA/exec";

  useEffect(() => {
    fetch(API_URL + "?type=pairing")
      .then(res => res.json())
      .then(data => {
        // group by PS_No
        let grouped = {};

        data.forEach(d => {
          if (!grouped[d.PS_No]) grouped[d.PS_No] = [];
          grouped[d.PS_No].push(d);
        });

        setPairing(grouped);
      });
  }, []);

  const handleCommission = (ps) => {
    alert("Commissioning " + ps);
    // next step: send to backend
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Commissioning</h1>

      {Object.keys(pairing).map(ps => (
        <div key={ps} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
          <h3>{ps}</h3>

          {pairing[ps].map((d, i) => (
            <div key={i}>
              {d.Device_ID} ({d.Box}-{d.S_No})
            </div>
          ))}

          {ps !== "Reserve" && (
            <button onClick={() => handleCommission(ps)}>
              COMMISSION
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;