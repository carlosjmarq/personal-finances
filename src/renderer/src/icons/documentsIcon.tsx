export const DocumentsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#40434C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M15.625 17.5H4.375a.625.625 0 0 1-.625-.625V3.125a.625.625 0 0 1 .625-.625h7.5l4.375 4.375v10a.624.624 0 0 1-.625.625Z" />
      <path d="M11.875 2.5v4.375h4.375M7.5 10.625h5M7.5 13.125h5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
