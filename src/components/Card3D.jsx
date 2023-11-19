import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowSmDownIcon } from '@heroicons/react/solid';

const Card3D = () => {
  return (
    <div className=" px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >

      <div style={{
        transform: "translateZ(75px)",
        transformStyle: "preserve-3d",
      }}
        className="shadow-lg w-48 px-2.5 lg:max-w-none ml-28 aspect-square rounded-2xl bg-gradient-to-br from-pink-900 to-purple-900">
        <img alt=""
          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 mx-auto text-4xl absolute inset-4 grid place-content-center shadow-lg"
          src="https://storage.cloud.google.com/arthub-bucket/toan.jpg"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        // className="mx-auto text-4xl"
        />
      </div>
      {/* <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <ArrowSmDownIcon
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HIRE ME
        </p>
      </div> */}
    </motion.div>
  );
};

export default Card3D;