import React from 'react';
import { useUniqueId } from '../hooks/useUniqueIds';

const UrgentIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {
    width = 24,
    height = 24,
    x = 0,
    y = 0,
    fill = '#E16326',
    fillOpacity = 0.2,
    ...rest
  } = props;

  const clipPathId = useUniqueId('urgent-clip');

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
          d="M13.1258 5.14219L19.9586 17.007C20.4375 17.843 19.8188 18.875 18.8328 18.875H5.1672C4.18127 18.875 3.56252 17.843 4.04142 17.007L10.8742 5.14219C11.3664 4.28594 12.6336 4.28594 13.1258 5.14219Z"
          stroke="#ED3C09"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13.25V10.125"
          stroke="#ED3C09"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17C12.5178 17 12.9375 16.5803 12.9375 16.0625C12.9375 15.5447 12.5178 15.125 12 15.125C11.4822 15.125 11.0625 15.5447 11.0625 16.0625C11.0625 16.5803 11.4822 17 12 17Z"
          fill="#ED3C09"
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

export default UrgentIcon;
