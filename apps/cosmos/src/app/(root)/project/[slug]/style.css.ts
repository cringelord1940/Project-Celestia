'use client'

import { css } from '@emotion/css'

export const _projectTag = css`
  ._project-tag {
    margin-right: 0.5rem /* 8px */;
    margin-top: 0.5rem /* 8px */;
    border-radius: calc(var(--radius) - 2px);
    border-width: 1px;
    border-color: hsl(var(--foreground) / 0.4);
    padding-left: 0.5rem /* 8px */;
    padding-right: 0.5rem /* 8px */;
    padding-top: 0.25rem /* 4px */;
    padding-bottom: 0.25rem /* 4px */;
    text-transform: uppercase;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    @media (min-width: 1200px) {
      &:hover {
        background-color: hsl(var(--primary));
        color: hsl(var(--background));
        transition-duration: 200ms;
        --tw-translate-y: -0.25rem /* -4px */;
        --tw-translate-x: -0.25rem /* -4px */;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y));
      }
    }
  }
`

export const CSS = css`
  ${_projectTag}
  ._project-info-inlineGrid {
    margin: 6rem auto 0 auto /* 96px */;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem /* 16px */;
    & > div {
      border: 1px solid hsl(var(--primary));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background-deep) / 0.6);
      padding: 0.5rem 0 /* 8px */;
      h4 {
        color: hsl(var(--primary));
      }
      &:hover {
        background-color: hsl(var(--primary));
        color: hsl(var(--background));
        // cursor: pointer;
        h4 {
          color: hsl(var(--background));
        }
      }
    }
    @media (min-width: 768px) {
      margin: 12rem auto 6rem auto;
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 2rem /* 32px */;
      & > div {
        padding: 1rem 0 /* 16px */;
      }
    }
  }
  ._project-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8rem 0;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    h2 {
      font-size: 1rem /* 16px */;
      line-height: 1.5rem /* 24px */;
      font-weight: 600;
      text-transform: uppercase;
      & > span {
        padding-right: 0.5rem /* 8px */;
        font-size: 0.75rem /* 12px */;
        line-height: 1rem /* 16px */;
        color: hsl(var(--primary));
      }
    }
    h3 {
      font-size: 1.875rem /* 30px */;
      line-height: 2.25rem /* 36px */;
      font-weight: 600;
      &:not(:first-child) {
        padding-top: 4rem;
      }
    }
    p {
      margin-top: 1.5rem /* 24px */;
      font-weight: 300;
      opacity: 0.8;
      & + p:not(:first-child) {
        padding-top: 0rem;
      }
    }
    ul {
      margin-top: 1.5rem /* 24px */;
      & > li {
        font-weight: 300;
        color: hsl(var(--foreground) / 0.8);
        position: relative;
        strong {
          font-weight: 500;
          color: hsl(var(--foreground));
        }
        &:before {
          content: '';
          position: absolute;
          height: 6px;
          width: 6px;
          left: -14px;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 1.5px;
          background-color: hsl(var(--primary));
        }
      }
    }
  }
`
