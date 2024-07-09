import React from "react";
import fon from "../../assets/fon.png";

function Header() {
  return (
    <div className="mt-44 flex place-content-around">
      <div className="text-white text-ls content-center w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        necessitatibus sit magnam doloribus vitae odio dicta culpa nobis illum
        velit sint soluta aspernatur iste perferendis, quo cupiditate. Animi,
        officiis nemo.
      </div>
      <div>
        <img src={fon} className=" w-2/2 " alt="" />
      </div>
    </div>
  );
}

export default Header;
