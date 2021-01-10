import React from 'react'

function InfoCircle()  {
  return (
    <svg
      className="alert-svg alert-info-circle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="#000000"
      height="28px"
      width="28px">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default InfoCircle;