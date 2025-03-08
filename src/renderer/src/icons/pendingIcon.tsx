import React from 'react';
import { useUniqueId } from '../hooks/useUniqueIds';

const PendingIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {
    width = 24,
    height = 24,
    x = 0,
    y = 0,
    fill = '#FEBB33',
    fillOpacity = 0.2,
    ...rest
  } = props;

  const clipPathId = useUniqueId('pending-clip');

  return (
    <svg
      {...rest}
      width={width}
      height={height}
      x={x}
      y={y}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={fill} fillOpacity={fillOpacity} />
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z"
          stroke="#D36D0C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.625V12H16.375"
          stroke="#D36D0C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipPathId}>
          <rect width="20" height="20" fill="white" transform="translate(2 2)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PendingIcon;
