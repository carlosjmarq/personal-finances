export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
        d="M8.125 16.875v-5h3.75v5h5v-7.5a.624.624 0 0 0-.183-.442l-6.25-6.25a.626.626 0 0 0-.884 0l-6.25 6.25a.625.625 0 0 0-.183.442v7.5h5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
