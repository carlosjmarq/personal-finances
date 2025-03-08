import React from 'react';
import { useUniqueId } from '../hooks/useUniqueIds';

const ExecutedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {
    width = 24,
    height = 24,
    x = 0,
    y = 0,
    fill = '#3BA46B',
    fillOpacity = 0.2,
    ...rest
  } = props;

  const clipPathId = useUniqueId('executed-clip');

  return (
    <svg
      {...rest}
      width={width}
      height={height}
      x={x}
      y={y}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={fill} fillOpacity={fillOpacity} />
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M5.125 13.25L9.5 17.625L19.5 7.625"
          stroke="#25764C"
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

export default ExecutedIcon;
