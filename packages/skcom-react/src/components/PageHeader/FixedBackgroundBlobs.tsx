/**
 * Blurred blobs behind the Fixed Menu Toggle
 */
export default function FixedBackgroundBlobs() {
  return (
    // prettier-ignore
    <svg
      width="393"
      height="260"
      viewBox="0 0 393 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="skc-page-header__blobs"
    >
      <g filter="url(#filter-fixed-blobs)">
        <path
          d="M62 36.6783C62 58.068 -31.0552 98 -57.2703 98C-83.4855 98 -116 53.9912 -116 32.6015C-116 11.2118 -27.504 -48 -1.28889 -48C24.9262 -48 62 15.2886 62 36.6783Z"
          className="skc-page-header__blob-secondary"
        />
        <path
          d="M187.572 -7.43199C187.572 16.3049 73.5829 25.0854 52.9326 25.0854C32.2823 25.0854 13 -16.3067 13 -40.0436C13 -63.7805 50.7316 -67 71.3819 -67C92.0322 -67 187.572 -31.1689 187.572 -7.43199Z"
          className="skc-page-header__blob-primary"
        />
      </g>
      <defs>
        <filter id="filter-fixed-blobs" x="-91" y="-81.5" width="368" height="274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="25" result="blur" />
        </filter>
      </defs>
    </svg>
  );
}
