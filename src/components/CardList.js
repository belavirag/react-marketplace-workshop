import React from "react";

const CardList = ({ children }) => {
  return (
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {children}
    </div>
  );
};

export default CardList;
