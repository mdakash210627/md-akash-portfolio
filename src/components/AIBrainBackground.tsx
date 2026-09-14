"use client";

export default function AIBrainBackground() {

  return (

    <div className="
      absolute
      inset-0
      overflow-hidden
      -z-10
    ">


      {/* Blue AI Glow */}

      <div
        className="
        absolute
        top-20
        left-20
        w-72
        h-72
        bg-blue-300
        rounded-full
        blur-3xl
        opacity-30
        animate-pulse
        "
      />


      {/* Purple AI Glow */}

      <div
        className="
        absolute
        bottom-20
        right-20
        w-96
        h-96
        bg-purple-300
        rounded-full
        blur-3xl
        opacity-30
        animate-pulse
        "
      />


      {/* Floating Nodes */}

      <div className="absolute top-32 left-1/3">

        <div className="
          w-4
          h-4
          bg-blue-500
          rounded-full
          animate-bounce
        "/>

      </div>



      <div className="absolute top-1/2 right-1/4">

        <div className="
          w-3
          h-3
          bg-purple-500
          rounded-full
          animate-ping
        "/>

      </div>



      <div className="absolute bottom-40 left-1/4">

        <div className="
          w-5
          h-5
          bg-cyan-400
          rounded-full
          animate-bounce
        "/>

      </div>


    </div>

  );
}