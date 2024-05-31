'use client'

import { css } from '@emotion/css'

export const _postTag = css`
  ._post-tag {
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
        color: rgb(255 255 255 / 1);
        transition-duration: 200ms;
        --tw-translate-y: -0.25rem /* -4px */;
        --tw-translate-x: -0.25rem /* -4px */;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y));
        .dark {
          color: rgb(0 0 0 / 1);
        }
      }
    }
  }
`

export const CSS = css`
  blockquote {
    margin: 1.5rem 0 /* 24px */;
    border-left-color: hsl(var(--primary));
    border-radius: calc(var(--radius) - 2px);
    border-width: 4px;
    border-top-color: rgb(255 255 255 / 0);
    border-bottom-color: rgb(255 255 255 / 0);
    border-right-color: rgb(255 255 255 / 0);
    background-color: hsl(var(--foreground) / 0.07);
    padding: 1.5rem /* 24px */;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 300;
    @media (min-width: 992px) {
      margin-top: 3rem /* 48px */;
      margin-bottom: 3rem /* 48px */;
      font-size: 1.5rem /* 24px */;
      line-height: 2rem /* 32px */;
      line-height: 2.5rem /* 40px */;
    }
  }
  ${_postTag}
  // ._post-tag {
  //   margin-right: 0.5rem /* 8px */;
  //   margin-top: 0.5rem /* 8px */;
  //   border-radius: calc(var(--radius) - 2px);
  //   border-width: 1px;
  //   border-color: hsl(var(--foreground) / 0.4);
  //   padding-left: 0.5rem /* 8px */;
  //   padding-right: 0.5rem /* 8px */;
  //   padding-top: 0.25rem /* 4px */;
  //   padding-bottom: 0.25rem /* 4px */;
  //   text-transform: uppercase;
  //   transition-property: color, background-color, border-color,
  //     text-decoration-color, fill, stroke, opacity, box-shadow, transform,
  //     filter, backdrop-filter;
  //   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  //   transition-duration: 300ms;
  //   @media (min-width: 1200px) {
  //     &:hover {
  //       background-color: hsl(var(--primary));
  //       color: rgb(255 255 255 / 1);
  //       transition-duration: 200ms;
  //       --tw-translate-y: -0.25rem /* -4px */;
  //       --tw-translate-x: -0.25rem /* -4px */;
  //       transform: translate(var(--tw-translate-x), var(--tw-translate-y));
  //       .dark {
  //         color: rgb(0 0 0 / 1);
  //       }
  //     }
  //   }
  // }
  ._post-content {
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
    }
    h2 {
      padding-bottom: 1rem /* 16px */;
      padding-top: 4rem /* 64px */;
      font-size: 1.875rem /* 30px */;
      line-height: 2.25rem /* 36px */;
      @media (min-width: 992px) {
        padding-top: 6rem /* 96px */;
        font-size: 3rem /* 48px */;
        line-height: 1;
      }
    }
    h3 {
      padding-bottom: 1rem /* 16px */;
      padding-top: 4rem /* 64px */;
      font-size: 1.5rem /* 24px */;
      line-height: 2rem /* 32px */;
      @media (min-width: 992px) {
        padding-top: 6rem /* 96px */;
        font-size: 2.25rem /* 36px */;
        line-height: 2.5rem /* 40px */;
      }
    }
    h4 {
      padding-bottom: 1rem /* 16px */;
      padding-top: 4rem /* 64px */;
      font-size: 1.25rem /* 20px */;
      line-height: 1.75rem /* 28px */;
      @media (min-width: 992px) {
        padding-top: 6rem /* 96px */;
        font-size: 1.875rem /* 30px */;
        line-height: 2.25rem /* 36px */;
      }
    }
    h5 {
      padding-top: 1rem /* 16px */;
      padding-bottom: 1rem /* 16px */;
      padding-left: 1rem /* 16px */;
      font-size: 1.125rem /* 18px */;
      line-height: 1.75rem /* 28px */;
      @media (min-width: 992px) {
        padding-top: 2rem /* 32px */;
        padding-bottom: 2rem /* 32px */;
        padding-left: 2rem /* 32px */;
        font-size: 1.25rem /* 20px */;
        line-height: 1.75rem /* 28px */;
      }
    }
    h6 {
      padding-top: 2rem /* 32px */;
      padding-bottom: 2rem /* 32px */;
      padding-left: 2rem /* 32px */;
      @media (min-width: 992px) {
        font-size: 1.125rem /* 18px */;
        line-height: 1.75rem /* 28px */;
      }
    }
  }
  ._post-content-text {
    & strong {
      padding: 0 0.125rem;
      color: hsl(var(--primary));
      font-weight: 600;
    }
  }
  ._post-quote-rich {
    padding: 2rem 0 2rem 1.5rem;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 300;
    font-style: italic;
    @media (min-width: 992px) {
      padding: 4rem 0 4rem 3rem;
      font-size: 1.875rem /* 30px */;
      line-height: 2.25rem /* 36px */;
      line-height: 2.5rem; /* 40px */
    }
  }
  ._post-separator-dot {
    padding: 24px 0px;
    & > p {
      font-size: 4rem;
    }
  }
  ._post-separator-lineSm {
    height: 2px;
    width: 16px;
    border-radius: 99px;
    background-color: hsl(var(--primary));
  }
  ._post-separator-lineXl {
    height: 1px;
    width: 70%;
    padding-left: 15%;
    border-radius: 99px;
    background-color: hsl(var(--foreground) / 0.4);
  }
`
