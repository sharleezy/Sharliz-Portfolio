import { create } from 'zustand';
import panelContent from "../data/panelContent.json";

export const useUiStore = create((set) => ({
  isPanelOpen: false,
  panelContent: null,
  currentHitboxKey: null,  // track current key

  openPanel: (hitboxKey) =>
    set({
        isPanelOpen: true,
        currentHitboxKey: hitboxKey,
        panelContent: panelContent[hitboxKey],
    }),
    
    closePanel: () =>
        set ({
            currentHitboxKey: null,
            isPanelOpen: false,
            panelContent: null,
        }),

    
}));