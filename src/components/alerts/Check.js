import React from 'react';


 function Check() { 
  return (
      <svg
        className="alert-svg alert-check"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="#000000"
        height="28px"
        width="28px">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
  );
}

export default Check