import Image from "next/image";
import React from "react";

function AdvCard({ src, id }) {
  return (
    <div className="cursor-pointer ">
      <div className="relative items-center justify-center h-40 w-40 ">
        <Image
          width={200}
          height={150}
          alt=""
          objectFit="cover"
          src={src}
          layout="fill"
        />
      </div>
    </div>
  );
}

export default AdvCard;
