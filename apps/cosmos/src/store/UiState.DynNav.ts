import type { MotionValue } from 'framer-motion'

export enum NAV_DYN_TYPE {
  PROGRESS = 'progress',
  BACK = 'back',
  SHARE = 'share',
}

export type DynamicNavProgress = {
  type: NAV_DYN_TYPE.PROGRESS
  pageHeight: number
  motionValue: MotionValue<number>
  scrollY: MotionValue<number>
}

export type DynamicNavBack = {
  type: NAV_DYN_TYPE.BACK
  href: string
}

export enum DynamicNavShareSocial {
  facebook = 'facebook',
  twitter = 'twitter',
  pinterest = 'pinterest',
  line = 'line',
  weibo = 'weibo',
}

export type DynamicNavShare = {
  type: NAV_DYN_TYPE.SHARE
  title: string
  url: string
  img: string
  social: DynamicNavShareSocial[]
}

export type DynamicNavModule =
  | DynamicNavProgress
  | DynamicNavBack
  | DynamicNavShare
