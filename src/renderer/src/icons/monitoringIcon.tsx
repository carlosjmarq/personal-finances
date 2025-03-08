export const MonitoringIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      <path d="M3.75 15h12.5c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v8.75c0 .69.56 1.25 1.25 1.25ZM12.5 17.5h-5M2.5 11.875h15M10 15v2.5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
