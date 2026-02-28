import { useState } from "react";
import data from "../data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function toggleSelectionMode() {
    setEnableMultiSelection(prev => !prev);
    setSelected(null);
    setMultiSelected([]);
  }

  function singleSelection(id) {
    setSelected(prev => (prev === id ? null : id));
  }

  function multiSelection(id) {
    setMultiSelected(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  }

  function handleToggle(id) {
    if (enableMultiSelection) {
      multiSelection(id);
    } else {
      singleSelection(id);
    }
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        <button
          className={`btn ${enableMultiSelection ? "btn-active" : ""}`}
          onClick={toggleSelectionMode}
        >
          {enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>

        {data?.length ? (
          data.map(item => {
            const isOpen = enableMultiSelection
              ? multiSelected.includes(item.id)
              : selected === item.id;

            return (
              <div key={item.id} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => handleToggle(item.id)}
                >
                  {item.title}
                </div>

                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  {isOpen && <p>{item.content}</p>}
                </div>
              </div>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
