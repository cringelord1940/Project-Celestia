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
