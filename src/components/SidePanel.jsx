import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import "./SidePanel.scss";
import { useUiStore } from "../stores/uiStore";
import gsap from "gsap";
import { useResponsiveStore } from '../stores/useResponsiveStore';
import { useNavigate } from "react-router-dom"; // ✅ make sure it's from react-router-dom
import CollapsibleSection from './CollapsibleSection';

const SidePanel = () => {
  const { isPanelOpen, panelContent, closePanel, currentHitboxKey } = useUiStore();
  const { isMobile } = useResponsiveStore();
  const panelRef = useRef(null);
  const navigate = useNavigate();

  const [shouldRedirectOnClose, setShouldRedirectOnClose] = useState(false);

  // Set initial position off-screen
  useLayoutEffect(() => {
    if (!panelRef.current) return;

    if (isMobile) {
      gsap.set(panelRef.current, { y: "100%" });
    } else {
      gsap.set(panelRef.current, { x: "100%" });
    }
  }, []);

  // Animate open/close
  useEffect(() => {
    if (!panelRef.current) return;

    const onComplete = () => {
      if (shouldRedirectOnClose) {
        navigate("/"); // ✅ redirect only if requested
        setShouldRedirectOnClose(false);
      }
    };

    if (isPanelOpen) {
        gsap.to(".panel-header", { opacity: 1, y: 0, duration: 0.5, delay: 0.2 });
        gsap.to(panelRef.current, {
            x: isMobile ? 0 : 0,
            y: isMobile ? 0 : undefined,
            duration: 0.5,
        });
        gsap.to(".panel-content-description", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.6
    });
    } else {
        gsap.to(".panel-header", {
            opacity: 0,
            duration: 0.3
        });
        gsap.to(".panel-content-description", {
            opacity: 0,
            duration: 0.3
        });
      gsap.to(panelRef.current, {
        x: isMobile ? 0 : "100%",
        y: isMobile ? "100%" : undefined,
        duration: 0.5,
        onComplete,
      });
    }
  }, [isPanelOpen, isMobile, shouldRedirectOnClose, panelContent]);

  // 👇 Exit button click handler
  const handleExit = () => {
    setShouldRedirectOnClose(true); // mark that we want to redirect
    closePanel(); // trigger animation
  };

  const renderDevWorkCollapsibleSections = () => (
    <div className="dev-work-collapsible-sections">
      <CollapsibleSection title="LOCCOL Camera">
        <h3>Virtual Scouting Camera Tool</h3>
        <p>UI/UX Design | Level Streaming | Widget communication | Guassian Splats | EXE deployment</p>
        <video src="/Sharliz-Portfolio/videos/LOCCOL/Camera/Lcldemosample1 Render.mp4" loop muted autoPlay playsInline />
        <p>UI Menu - 3 second hold to select animation</p>
        <video src="/Sharliz-Portfolio/videos/LOCCOL/Camera/Lclcamerasample3 Render.mp4" loop muted autoPlay playsInline />
        <p>Place Camera Tool - Storyboarding</p>
        <video src="/Sharliz-Portfolio/videos/LOCCOL/Camera/Lcldrawsample2 Render.mp4" loop muted autoPlay playsInline />
        <p>Markup Tool - for Director's notes, etc.</p>
        <video src="/Sharliz-Portfolio/videos/LOCCOL/Camera/Lcluisample4 Render.mp4" loop muted autoPlay playsInline />
        <p>Widget interaction - Adjust Camera settings</p>
      </CollapsibleSection>

      <CollapsibleSection title="LOCCOL Set Dress">
        <h3>Virtual Scouting Set Dress Tool</h3>
        <p>Store Object Reference | Transform Adjustments | Input Mapping to Motion Controls</p>
        <video src="/Sharliz-Portfolio/videos/LOCCOL/SetDress/Lclsetdresssample2 Render.mp4" loop muted autoPlay playsInline />
        <p>Transform on XYZ + Rotate Object</p>
        <video src="/videos/LOCCOL/SetDress/Lclsetdresssample3 Render.mp4" loop muted autoPlay playsInline />
        <p>Place Multiple Objects - stores a reference to object</p>
        <video src="/Sharliz-Portfolio/videos/LOCCOL/SetDress/Lclsetdresssample4 Render.mp4" loop muted autoPlay playsInline />
        <p>Delete - Highlighted mesh represents selected object</p>
      </CollapsibleSection>

      <CollapsibleSection title="XR Interactive Demo">
        <h3>Mixed Reality Voyre Reel</h3>
        <p>VR/AR/MR | Hand Tracking | Gesture Recognition | Performance Optimization | APK deployment</p>
        <video src="/Sharliz-Portfolio/videos/XR/Demo Sample 1-2.mp4" loop muted autoPlay playsInline />
        <p>Mixed Reality - follows HMD Tracking</p>
        <video src="/Sharliz-Portfolio/videos/XR/Demo Sample 1.mp4" loop muted autoPlay playsInline />
        <p>XR interaction - Touching glasses start the demo</p>
        <video src="/Sharliz-Portfolio/videos/XR/Demo Sample 2.mp4" loop muted autoPlay playsInline />
        <p>Gesture recognition - closed fist to grab objects</p>
        <video src="/Sharliz-Portfolio/videos/XR/Demo Sample 3.mp4" loop muted autoPlay playsInline />
        <p>Level Design - Dollhouse performance optimization</p>
      </CollapsibleSection>
      <CollapsibleSection title="Meteor Studio">
        <h3>Hurricane Heroes (2024)</h3>
        <p>3D Modeling | Texture Baking | UX/UI Design | Graphic Design | Lighting</p>
        <video src="/Sharliz-Portfolio/videos/MeteorStudio/Planescene.mp4" loop muted autoPlay playsInline />
        <p>3D modeling and design</p>
        <video src="/Sharliz-Portfolio/videos/MeteorStudio/Newsroomscene2.mp4" loop muted autoPlay playsInline />
        <p>Graphic Design</p>
        <video src="/Sharliz-Portfolio/videos/MeteorStudio/Hurricaneheroesuiclip.mp4" loop muted autoPlay playsInline />
        <p>UI/UX Design + Motion Graphics</p>
        
      </CollapsibleSection>
    </div>
  );

  return (
  <>
    <div className="overlay"></div>

    <div ref={panelRef} className="side-panel">
      <div className="side-panel-wrapper">

        <button onClick={handleExit} className="side-panel-close-button">&#x2715;</button>

        <div className="side-panel-content-wrapper">
          {panelContent && (
            <>
            {panelContent.image && (
        <img
          src={panelContent.image}
          alt={panelContent.title}
          className="panel-header-image"
        />
      )}
              <h1 className="panel-header">{panelContent.title}</h1>
              <p className="panel-content-description">{panelContent.content}</p>

               {panelContent.experience && (
        <section className="panel-experience-section">
          {panelContent.experience.map((job, index) => (
            <div key={index} className="experience-item">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-duration">{job.duration}</p>
              <ul className="job-responsibilities">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
            </>
          )}

          {currentHitboxKey === "Dev_Work_Hitbox" && renderDevWorkCollapsibleSections()}
        </div>
      </div>
    </div>
  </>
);
};

export default SidePanel;