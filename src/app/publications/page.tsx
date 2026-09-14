export default function PublicationsPage() {


const publications = [

{
title:
"Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",

venue:
"2025 28th International Conference on Computer and Information Technology (ICCIT), IEEE",

tag:
"IEEE Conference | First Author"
},


{
title:
"Machine Learning-Based Hepatitis C Detection Using Ensemble Boosting",

venue:
"Lecture Notes in Networks and Systems (LNNS), Springer Nature",

tag:
"Springer Publication"
},


{
title:
"Machine Learning-Based Prediction of Nightmares in Children: A Pediatric Psychological Integration",

venue:
"2025 IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS)",

tag:
"IEEE Conference"
},


{
title:
"GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",

venue:
"2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE",

tag:
"IEEE Conference"
},


{
title:
"A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",

venue:
"2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE",

tag:
"IEEE Conference"
},


{
title:
"Comparative Evaluation of CNN Backbones with Explainable AI for Multi-Class Chest X-Ray Classification",

venue:
"2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",

tag:
"IEEE Conference"
},


{
title:
"A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",

venue:
"2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",

tag:
"IEEE Conference"
}

];



return (

<main
className="
min-h-screen
bg-gradient-to-br
from-blue-50
via-white
to-purple-50
px-6
pt-32
pb-16
"
>


<div
className="
max-w-5xl
mx-auto
"
>


<section
className="
bg-white
rounded-3xl
shadow-xl
p-10
"
>


<h1
className="
text-4xl
font-bold
text-gray-900
"
>
Publications
</h1>



<p
className="
mt-5
text-lg
text-gray-600
"
>

Research contributions in Artificial Intelligence,
Machine Learning, Computer Vision and Biomedical Imaging.

</p>




<div
className="
mt-10
space-y-6
"
>


{
publications.map((paper,index)=>(


<div
key={index}
className="
rounded-2xl
border
border-gray-100
p-7
shadow-md
hover:-translate-y-1
transition
"
>


<div
className="
flex
items-start
gap-4
"
>


<div
className="
text-3xl
"
>
📄
</div>



<div>

<h2
className="
text-xl
font-bold
text-blue-600
"
>

{paper.title}

</h2>



<p
className="
mt-3
text-gray-700
"
>

{paper.venue}

</p>



<span
className="
inline-block
mt-4
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-medium
text-blue-700
"
>

{paper.tag}

</span>


</div>


</div>


</div>


))
}


</div>



</section>


</div>


</main>


);

}