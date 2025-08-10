import React, { useEffect } from 'react';
import "./HomePage.scss";
import { useUiStore } from "../stores/uiStore";

const HomePage = () => {
    const { closePanel } = useUiStore();

    useEffect (() => {
        closePanel();
    }, [closePanel]);

  return (
    <div className="home-page">
      <h1 className="home-header">
        Tap into the desk.
      </h1>
    </div>
  );
};

export default HomePage
