import React, { useState, useRef, useEffect } from "react";
import "./CollapsibleSection.scss";

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="collapsible-section">
      <button 
        className="collapsible-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      <div 
        className={`collapsible-content ${isOpen ? "open" : ""}`} 
        ref={contentRef} 
        style={{ height: height }}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;
