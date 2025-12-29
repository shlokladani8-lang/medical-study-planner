import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/syllabus")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>Medical Study Planner</h1>
      {data.map((subject) => (
        <div key={subject.id}>
          <h2>{subject.name}</h2>
          {subject.chapters.map((ch) => (
            <div key={ch.id} style={{ marginLeft: 12 }}>
              <h3>{ch.name}</h3>
              <ul>
                {ch.topics.map((t) => (
                  <li key={t.id}>
                    {t.name} ({t.importance})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
