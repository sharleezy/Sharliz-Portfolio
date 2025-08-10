import React, { useEffect } from 'react';
import PageWithSidePanel from './PageWithSidePanel';
import { useUiStore } from '../stores/uiStore';
import "./DevWorkPage.scss";

const DevWorkPage = () => {
  const { openPanel } = useUiStore();

  useEffect(() => {
    openPanel("Dev_Work_Hitbox"); // Key must match panelContent.json
  }, []);

  return (
    <>
      <PageWithSidePanel />
    </>
  );
};

export default DevWorkPage; 
