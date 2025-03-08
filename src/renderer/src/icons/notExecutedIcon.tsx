import React from 'react';
import { useUniqueId } from '../hooks/useUniqueIds';

const NotExecutedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {
    width = 24,
    height = 24,
    x = 0,
    y = 0,
    fill = '#E02F33',
    fillOpacity = 0.2,
    ...rest
  } = props;

  const clipPathId = useUniqueId('not-executed-clip');

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
          d="M17.625 6.375L6.375 17.625"
          stroke="#BB1A1E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.625 17.625L6.375 6.375"
          stroke="#BB1A1E"
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

export default NotExecutedIcon;
