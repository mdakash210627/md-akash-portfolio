import ProfileCard from "@/components/ProfileCard";
import ResearchPhilosophy from "@/components/ResearchPhilosophy";
import StatsCounter from "@/components/StatsCounter";


export default function Home() {


return (

<main
className="
min-h-screen
bg-gradient-to-br
from-blue-50
via-white
to-purple-50
"
>


<div
className="
max-w-7xl
mx-auto
grid
lg:grid-cols-[380px_1fr]
gap-10
px-6
pt-32
pb-16
"
>



{/* LEFT FIXED PROFILE */}

<aside
className="
hidden
lg:block
"
>

<div
className="
sticky
top-28
"
>

<ProfileCard />

</div>

</aside>






{/* RIGHT CONTENT */}

<section
className="
space-y-10
"
>



{/* Research Philosophy */}

<ResearchPhilosophy />





{/* Research Statistics */}

<div
className="
bg-white
rounded-3xl
shadow-xl
p-10
"
>


<h2
className="
text-3xl
font-bold
text-gray-900
mb-8
"
>

Research Overview

</h2>


<StatsCounter />


</div>






{/* Research Areas Summary */}

<section
className="
bg-white
rounded-3xl
shadow-xl
p-10
"
>


<h2
className="
text-3xl
font-bold
text-gray-900
mb-8
"
>

Research Areas

</h2>



<div
className="
grid
md:grid-cols-2
gap-6
"
>



<div
className="
p-6
rounded-2xl
border
border-gray-100
shadow-sm
"
>

<h3
className="
text-xl
font-bold
text-blue-600
"
>
Artificial Intelligence
</h3>


<p
className="
mt-3
text-gray-600
"
>

Machine Learning and Deep Learning approaches for intelligent systems and real-world applications.

</p>


</div>






<div
className="
p-6
rounded-2xl
border
border-gray-100
shadow-sm
"
>

<h3
className="
text-xl
font-bold
text-blue-600
"
>
Computer Vision
</h3>


<p
className="
mt-3
text-gray-600
"
>

Deep learning based image classification, detection and biomedical image analysis.

</p>


</div>






<div
className="
p-6
rounded-2xl
border
border-gray-100
shadow-sm
"
>

<h3
className="
text-xl
font-bold
text-blue-600
"
>
Biomedical Imaging
</h3>


<p
className="
mt-3
text-gray-600
"
>

AI-driven medical image analysis for disease detection and interpretation.

</p>


</div>






<div
className="
p-6
rounded-2xl
border
border-gray-100
shadow-sm
"
>

<h3
className="
text-xl
font-bold
text-blue-600
"
>
Explainable AI
</h3>


<p
className="
mt-3
text-gray-600
"
>

Developing transparent and interpretable AI models for trustworthy decision making.

</p>


</div>




</div>



</section>





</section>



</div>



</main>


);

}