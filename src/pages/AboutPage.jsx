import React, { useEffect } from 'react';
import PageWithSidePanel from './PageWithSidePanel';
import { useUiStore } from '../stores/uiStore';
import "./AboutPage.scss";

const AboutPage = () => {
  const { openPanel } = useUiStore();

  useEffect(() => {
    openPanel("About_Hitbox"); // Key must match panelContent.json
  }, []);

  return (
    <>
      <PageWithSidePanel />
    </>
  );
};

export default AboutPage;