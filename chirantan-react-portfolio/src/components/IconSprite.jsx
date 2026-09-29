import { asset } from "../lib/asset.js";
export default function IconSprite() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute" }}
    >
      <defs>
        <symbol id="i-chart" viewBox="0 0 24 24">
          <path
            d="M4 19V5M4 19h16M7 15l3-4 3 2 5-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-target" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </symbol>
        <symbol id="i-search" viewBox="0 0 24 24">
          <circle
            cx="10.5"
            cy="10.5"
            r="6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m16 16 5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-data" viewBox="0 0 24 24">
          <rect
            x="4"
            y="4"
            width="6"
            height="6"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <rect
            x="14"
            y="4"
            width="6"
            height="6"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <rect
            x="4"
            y="14"
            width="6"
            height="6"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <rect
            x="14"
            y="14"
            width="6"
            height="6"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </symbol>
        <symbol id="i-users" viewBox="0 0 24 24">
          <circle
            cx="9"
            cy="8"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="17"
            cy="9"
            r="2.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M3.5 20c.5-3.3 2.3-5 5.5-5s5 1.7 5.5 5M14 15.5c3-.1 5.1 1.4 5.7 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-brain" viewBox="0 0 24 24">
          <path
            d="M9 4.5a3 3 0 0 0-3 3A3.5 3.5 0 0 0 5 14a3.5 3.5 0 0 0 4 5.2M15 4.5a3 3 0 0 1 3 3A3.5 3.5 0 0 1 19 14a3.5 3.5 0 0 1-4 5.2M9 4.5v15M15 4.5v15M9 9h3M15 12h-3M9 15h3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-cricket" viewBox="0 0 24 24">
          <path
            d="m7 4 11 11M5 6l13 13M7 4 5 6l2 2M18 15l-2 2 2 2 2-2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 20c3-3 6-3 9 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-bike" viewBox="0 0 24 24">
          <circle
            cx="6"
            cy="17"
            r="3.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="18"
            cy="17"
            r="3.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m6 17 4-7h4l4 7M9 14h6M10 10l-2-3h3M14 10l2-3h2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-camera" viewBox="0 0 24 24">
          <rect
            x="3.5"
            y="6.5"
            width="17"
            height="13"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 6.5 9.5 4h5L16 6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="13"
            r="3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </symbol>
        <symbol id="i-mail" viewBox="0 0 24 24">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m4 7 8 6 8-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path
            d="M7 3.5 10 5l-1.5 3.2a14.8 14.8 0 0 0 7.3 7.3L19 14l1.5 3-2 3c-.4.6-1.1.9-1.8.8C9.3 19.7 4.3 14.7 3.2 7.3c-.1-.7.2-1.4.8-1.8z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-linkedin" viewBox="0 0 24 24">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 10v7M8 7.2v.1M12 17v-4a3 3 0 0 1 6 0v4M12 10v7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path
            d="M12 21s6-6.2 6-11a6 6 0 1 0-12 0c0 4.8 6 11 6 11z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="10"
            r="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </symbol>
        <symbol id="i-megaphone" viewBox="0 0 24 24">
          <path
            d="M4 11v2h3l9 5V6l-9 5H4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M7 13l1.5 5h2L9 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-gem" viewBox="0 0 24 24">
          <path
            d="m3 8 4-5h10l4 5-9 12L3 8z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3 8h18M8 3l4 5 4-5M8 8l4 12 4-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </symbol>
        <symbol id="i-store" viewBox="0 0 24 24">
          <path
            d="M4 10v10h16V10M3 10l2-6h14l2 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3 10c1.2 2 3.8 2 5 0 1.2 2 3.8 2 5 0 1.2 2 3.8 2 5 0 1.2 2 3.8 5 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9 20v-5h6v5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </symbol>
        <symbol id="i-building" viewBox="0 0 24 24">
          <path
            d="M4 21V5l8-2v18M12 9h8v12M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-leaf" viewBox="0 0 24 24">
          <path
            d="M20 4C10 4 5 8 5 14c0 3 2 5 5 5 6 0 9-5 10-15z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M4 21c3-6 7-9 13-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-heart" viewBox="0 0 24 24">
          <path
            d="M20 8c0 5-8 11-8 11S4 13 4 8a4 4 0 0 1 7-2.5A4 4 0 0 1 20 8z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-basket" viewBox="0 0 24 24">
          <path
            d="M5 9h14l-1 11H6L5 9zM8 9l4-5 4 5M9 13v3M12 13v3M15 13v3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-layout" viewBox="0 0 24 24">
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M3 9h18M9 9v11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </symbol>
        <symbol id="i-certificate" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="9"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m9 14-1 7 4-2 4 2-1-7M9.5 9l1.6 1.5L14.5 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-analytics" viewBox="0 0 24 24">
          <path
            d="M5 19V9M12 19V5M19 19v-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3 19h18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-ad" viewBox="0 0 24 24">
          <path
            d="M5 6h14v12H5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 15l2-6 2 6M8.7 13h2.6M15 9h2M15 12h2M15 15h2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </symbol>
        <symbol id="i-sales" viewBox="0 0 24 24">
          <path
            d="M4 19V5M4 19h16M7 15l3-3 3 2 5-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="18"
            cy="6"
            r="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </symbol>
        <symbol id="i-visual" viewBox="0 0 24 24">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M7 16l3-4 2 2 4-6 2 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-price" viewBox="0 0 24 24">
          <path
            d="M4 5h8l8 7-8 7H4V5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="9" r="1.5" fill="currentColor" />
        </symbol>
        <symbol id="i-marketing" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 14l2-4 2 3 2-5 2 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path
            d="M5 12h13M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
      </defs>
    </svg>
  );
}
