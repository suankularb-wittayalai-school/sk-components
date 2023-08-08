/**
 * Blurred blobs behind the Page Header. Contains both the mobile version and
 * the desktop version, with only the appropriate one being shown at a time.
 */
export default function BackgroundBlobs() {
  return (
    // prettier-ignore
    <>
      {/* Desktop version */}
      <svg
        viewBox="0 0 1194 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="skc-page-header__blobs skc-page-header__blobs--desktop"
      >
        <g filter="url(#filter)">
          <path d="M336.5 -76.75C336.5 -13.7895 113.011 103.75 50.0502 103.75C-12.9103 103.75 -91 -25.7895 -91 -88.75C-91 -151.71 121.54 -326 184.5 -326C247.46 -326 336.5 -139.71 336.5 -76.75Z" className="skc-page-header__blob-secondary"/>
          <path d="M1154 -90.75C1154 -27.7895 930.511 89.75 867.55 89.75C804.59 89.75 634 -27.7895 634 -90.75C634 -153.71 939.04 -340 1002 -340C1064.96 -340 1154 -153.71 1154 -90.75Z" className="skc-page-header__blob-secondary"/>
          <path d="M1182.6 140.656C1245.56 140.656 1315.1 141.906 1286.1 7.65555C1257.1 -126.594 982.102 -84.5944 917.101 7.65555C852.101 99.9055 1119.64 140.656 1182.6 140.656Z" className="skc-page-header__blob-primary"/>
          <path d="M655.25 -16C655.25 46.9605 307.71 70.25 244.75 70.25C181.79 70.25 123 -39.5395 123 -102.5C123 -165.46 238.04 -174 301 -174C363.96 -174 655.25 -78.9605 655.25 -16Z" className="skc-page-header__blob-primary"/>
        </g>
        <defs>
          <filter id="filter" x="-191" y="-440" width="1584" height="680" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="blur" />
          </filter>
        </defs>
      </svg>

      {/* Mobile version */}
      <svg
        viewBox="0 0 393 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="skc-page-header__blobs skc-page-header__blobs--mobile"
      >
        <g filter="url(#filter-blob)">
          <path d="M92.215 73.9492C92.215 97.6861 18.9131 142 -1.73719 142C-22.3875 142 -48 93.1619 -48 69.425C-48 45.6881 21.7105 -20.0212 42.3608 -20.0212C63.0111 -20.0212 92.215 50.2123 92.215 73.9492Z" className="skc-page-header__blob-secondary"/>
          <path d="M390.554 5.97042C390.554 29.7073 317.252 74.0212 296.602 74.0212C275.951 74.0212 220 29.7073 220 5.97042C220 -17.7665 320.049 -88 340.7 -88C361.35 -88 390.554 -17.7665 390.554 5.97042Z" className="skc-page-header__blob-secondary"/>
          <path d="M395.394 90.436C416.044 90.436 438.853 90.9072 429.341 40.2933C419.829 -10.3207 329.632 5.51383 308.313 40.2933C286.994 75.0727 374.744 90.436 395.394 90.436Z" className="skc-page-header__blob-primary"/>
          <path d="M219.572 28.0521C219.572 51.789 105.583 60.5695 84.9326 60.5695C64.2823 60.5695 45 19.1774 45 -4.55946C45 -28.2964 82.7316 -31.5159 103.382 -31.5159C124.032 -31.5159 219.572 4.31524 219.572 28.0521Z" className="skc-page-header__blob-primary"/>
        </g>
        <defs>
          <filter id="filter-blob" x="-148" y="-188" width="680" height="430" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="blur" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
