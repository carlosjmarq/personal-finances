export const NeoLogo: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6_182)">
        <path d="M0.833313 8.34998L4.49998 13.6666V19.1666H0.833313V8.34998Z" fill="black" />
        <path d="M0.833313 0.833313H4.49998V9.99998L0.833313 4.49998V0.833313Z" fill="black" />
        <path d="M6.33331 2.66663L13.6666 9.99996V17.3333L6.33331 9.99996V2.66663Z" fill="black" />
        <path d="M15.5 13.6666L19.1667 10.0916V19.1666H15.5V13.6666Z" fill="black" />
        <path d="M15.5 0.833313H19.1667V6.33331L15.5 10.0916V0.833313Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_6_182">
          <rect
            width="18.3333"
            height="18.3333"
            fill="white"
            transform="translate(0.833313 0.833313)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
