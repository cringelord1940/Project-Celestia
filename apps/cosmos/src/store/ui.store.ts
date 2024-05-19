import { UiState, NAV, FOOTER, NAV_ACTION, INTERFACE } from './UiState'
import { create } from 'zustand'

export const useUiState = create<UiState>((set, get) => ({
  dark: true,
  setDark: (dark) => set({ dark: dark }),
  onToggleDark: () => set({ dark: !get().dark }),
  interface: INTERFACE.EXPERIENCE,
  setInterface: (i) => set({ interface: i }),
  cursor: undefined,
  setCursor: (cursor) => set({ cursor: cursor }),
  nav: NAV.DEFAULT,
  setNav: (nav) => set({ nav: nav }),
  navAction: undefined,
  // navAction: NAV_ACTION.USER,
  onToggleNavAction: (action) =>
    set({
      navAction: get().navAction === action ? undefined : action,
      modal: undefined,
    }),
  onClearNavAction: () => set({ navAction: undefined }),
  footer: undefined,
  setFooter: (footer) => set({ footer: footer }),
  modal: undefined,
  onToggleModal: (modal) =>
    set({
      modal: get().modal === modal ? undefined : modal,
      navAction: undefined,
    }),
  onClearModal: () => set({ modal: undefined }),
  audio: false,
  setAudio: (audio) => set({ audio: audio }),
  onToggleAudio: () => set({ audio: !get().audio }),
  scrollState: undefined,
  setScrollState: (state) => {},
}))
