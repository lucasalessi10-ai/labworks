import React from "react";

export default function Home() {
  const patients = [
    { id: 1, name: "Lucas Alessi", labs: { LDL_P: 2157, TG: 239, VitD: 24 } },
    { id: 2, name: "Jane Doe", labs: { LDL_P: 1100, TG: 120, VitD: 35 } }
  ];

  const getFlag = (code: string, value: number) => {
    if (code === "LDL_P" && value > 1816) return "High";
    if (code === "TG" && value >= 150) return "High";
    if (code === "VitD" && value < 30) return "Low";
    return "Normal";
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Lab Report App</h1>
      {patients.map((p) => (
        <div key={p.id} style={{ marginBottom: "2rem" }}>
          <h2>{p.name}</h2>
          <ul>
            {Object.entries(p.labs).map(([code, value]) => (
              <li key={code}>
                {code}: {value} → {getFlag(code, value as number)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
