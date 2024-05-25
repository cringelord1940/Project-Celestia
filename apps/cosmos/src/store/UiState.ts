import type { MotionValue } from 'framer-motion'

export enum INTERFACE {
  EXPERIENCE = 'experience',
  SIMPLE = 'simple',
}

export enum NAV {
  DEFAULT = 'default',
  TOP = 'top',
  DRAGGABLE = 'draggable',
}

export enum NAV_ACTION {
  NOTIFICATIONS = 'notifications',
  CART = 'cart',
  SETTINGS = 'settings',
  USER = 'user',
  WALLET = 'wallet',
  MENU_CANVAS = 'menu_canvas',
}

export enum FOOTER {
  DEFAULT = 'default',
  BLUR_BG = 'blur_bg',
}

export enum MODAL {
  APP_INFO = 'appInfo',
  SEARCH = 'search',
  SETTINGS = 'settings',
  USER = 'user',
}

export enum CURSOR {
  LOGO = 'logo',
  POINTER = 'pointer',
  GO = 'go',
  EXPANSE = 'expense',
  LENS = 'lens',
}

export type ScrollState = {
  scrollable: boolean
  pageHeight: number | undefined
  scrollProgress: number | undefined
  motionValue: MotionValue<string> | string | undefined
  scrollY: MotionValue<number> | undefined
}

type OnScrollFunctionProps = {
  pageHeight: number
  motionValue: MotionValue<string>
  scrollY: MotionValue<number>
}

export interface UiState {
  dark: boolean
  setDark: (dark: boolean) => void
  onToggleDark: () => void
  interface: INTERFACE
  setInterface: (i: INTERFACE) => void
  cursor: CURSOR | undefined
  setCursor: (cursor: CURSOR | undefined) => void
  nav: NAV | undefined
  setNav: (nav: NAV | undefined) => void
  navAction: NAV_ACTION | undefined
  onToggleNavAction: (action: NAV_ACTION) => void
  onClearNavAction: () => void
  footer: FOOTER | undefined
  setFooter: (footer: FOOTER | undefined) => void
  modal: MODAL | undefined
  onToggleModal: (modal: MODAL) => void
  onClearModal: () => void
  audio: boolean
  setAudio: (audio: boolean) => void
  onToggleAudio: () => void
  scroll: ScrollState | undefined
  setScroll: (state: ScrollState | undefined) => void
  onScroll: (value: OnScrollFunctionProps) => void
}
