"use client";

import { useEffect, useState } from "react";


function Counter({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: string;
}) {

  const [count, setCount] = useState(0);


  useEffect(() => {

    let start = 0;

    const duration = 1500;
    const increment = value / (duration / 30);


    const timer = setInterval(() => {

      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } 
      else {
        setCount(Math.floor(start));
      }

    }, 30);


    return () => clearInterval(timer);

  }, [value]);


  return (

    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      border
      border-gray-100
      hover:-translate-y-2
      transition
      "
    >

      <div className="text-3xl mb-3">
        {icon}
      </div>


      <h3
        className="
        text-4xl
        font-bold
        text-blue-600
        "
      >
        {count}+
      </h3>


      <p
        className="
        mt-2
        text-gray-600
        font-medium
        "
      >
        {label}
      </p>

    </div>

  );

}



export default function StatsCounter(){

return (

<section
className="
grid
grid-cols-1
sm:grid-cols-3
gap-6
mt-12
"
>


<Counter
value={7}
label="Research Publications"
icon="📄"
/>


<Counter
value={5}
label="Research Areas"
icon="🔬"
/>


<Counter
value={390}
label="CGPA Achievement (×100)"
icon="⭐"
/>


</section>

);

}