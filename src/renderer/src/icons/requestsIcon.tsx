export const RequestsIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      <path d="M7.5 15a2.5 2.5 0 0 0 5 0M4.375 8.125a5.625 5.625 0 0 1 11.25 0c0 2.798.649 5.047 1.164 5.938a.625.625 0 0 1-.539.937H3.75a.626.626 0 0 1-.537-.938c.514-.89 1.162-3.14 1.162-5.937Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
