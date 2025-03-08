export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#40434C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.25 3.125H3.75a.625.625 0 0 0-.625.625v12.5c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625V3.75a.625.625 0 0 0-.625-.625ZM13.75 1.875v2.5M6.25 1.875v2.5M3.125 6.875h13.75"
      />
      <path
        fill="#40434C"
        d="M10 11.25a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM13.438 11.25a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM6.563 14.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM10 14.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM13.438 14.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
