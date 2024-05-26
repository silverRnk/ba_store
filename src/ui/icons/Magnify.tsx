import React from "react";

const Magnify = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" {...props}>
      <path
        d="M13.8542 4.375C16.3682 4.375 18.7793 5.37369 20.5569 7.15138C22.3346 8.92907 23.3333 11.3401 23.3333 13.8542C23.3333 16.2021 22.4729 18.3604 21.0583 20.0229L21.4521 20.4167H22.6042L29.8958 27.7083L27.7083 29.8958L20.4167 22.6042V21.4521L20.0229 21.0583C18.3604 22.4729 16.2021 23.3333 13.8542 23.3333C11.3401 23.3333 8.92907 22.3346 7.15138 20.5569C5.37369 18.7793 4.375 16.3682 4.375 13.8542C4.375 11.3401 5.37369 8.92907 7.15138 7.15138C8.92907 5.37369 11.3401 4.375 13.8542 4.375ZM13.8542 7.29167C10.2083 7.29167 7.29167 10.2083 7.29167 13.8542C7.29167 17.5 10.2083 20.4167 13.8542 20.4167C17.5 20.4167 20.4167 17.5 20.4167 13.8542C20.4167 10.2083 17.5 7.29167 13.8542 7.29167Z"
      />
    </svg>
  );
};

export default Magnify;