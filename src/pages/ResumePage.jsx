import React, { useEffect } from 'react';
import PageWithSidePanel from './PageWithSidePanel';
import { useUiStore } from '../stores/uiStore';
import "./ResumePage.scss";

const ResumePage = () => {
  const { openPanel } = useUiStore();

  useEffect(() => {
    openPanel("Resume_Hitbox"); // Key must match panelContent.json
  }, []);

  return (
    <>
      <PageWithSidePanel />
    </>
  );
};

export default ResumePage;