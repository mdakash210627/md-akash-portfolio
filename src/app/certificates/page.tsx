import Image from "next/image";


export default function CertificatesPage() {


const certificates = [


{
image:"/certificates/compas.jpg",
title:"IEEE COMPAS 2025",
category:"International Conference Presentation",
issuer:"IEEE Computer Society Bangladesh Chapter",
description:
"Presented the research paper titled 'Machine Learning-Based Prediction of Nightmares in Children: A Pediatric Psychological Integration' at IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS 2025). The work explores machine learning approaches for analyzing psychological patterns and predicting childhood nightmares using intelligent computational techniques."
},



{
image:"/certificates/peccii1.jpg",
title:"PECCII 2026",
category:"International Conference Presentation",
issuer:"Faculty of Engineering and Technology, Pabna University of Science and Technology",
description:
"Presented the research paper 'GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics' at PECCII 2026. The research focuses on graph-attention based deep learning models for improving deepfake detection and AI-based multimedia forensic analysis."
},




{
image:"/certificates/qpain.jpg",
title:"IEEE QPAIN 2026",
category:"IEEE Conference Presentation",
issuer:"IEEE Photonics Society Bangladesh Chapter",
description:
"Presented the research work titled 'A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images' at IEEE QPAIN 2026. The study integrates object detection and efficient deep learning architectures for accurate visual recognition."
},




{
image:"/certificates/peccii2.jpg",
title:"PECCII 2026",
category:"Deep Learning Research Presentation",
issuer:"Pabna University of Science and Technology (PUST)",
description:
"Presented research work titled 'Comparative Evaluation of Deep Learning Architectures for Deepfake Detection under Image Degradation' at PECCII 2026. This research investigates robust deep learning architectures for reliable deepfake detection under challenging image degradation conditions."
},




{
image:"/certificates/iccit.jpg",
title:"IEEE ICCIT 2025",
category:"International Conference Presentation",
issuer:"IEEE Bangladesh Section",
description:
"Presented the research paper titled 'Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices' at the 28th International Conference on Computer and Information Technology (ICCIT 2025). The research combines biomedical signal processing and machine learning for intelligent healthcare monitoring."
},




{
image:"/certificates/hepatitis.jpg",
title:"Machine Learning-Based Hepatitis C Detection",
category:"Research Contribution Recognition",
issuer:"International Conference on Big Data, IoT and Machine Learning",
description:
"Recognition for research contribution on 'Machine Learning-Based Hepatitis C Detection Using Ensemble Boosting'. The work applies machine learning algorithms for healthcare-oriented disease prediction and intelligent medical decision support."
},




{
image:"/certificates/Liz fashion.png",
title:"Academic Excellence Recognition",
category:"Academic Achievement",
issuer:"LIZ Fashion Industry Limited",
description:
"Recognition for outstanding academic performance in the Secondary School Certificate Examination (SSC)."
},




{
image:"/certificates/pustcec.jpg",
title:"Excellence Boot Camp Participation",
category:"Professional Development",
issuer:"PUST Career and Entrepreneurship Club",
description:
"Successfully participated in Excellence Boot Camp focused on professional development, leadership skills, communication and entrepreneurial mindset."
},




{
image:"/certificates/Runnerup.jpg",
title:"Programming Contest Achievement",
category:"Programming Competition",
issuer:"Department of Information and Communication Engineering, PUST",
description:
"Achieved 2nd Runner-Up position in Programming Contest 2025 organized by the Department of Information and Communication Engineering, PUST."
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
pb-20
"

>


<div className="max-w-7xl mx-auto">


<section

className="
bg-white
rounded-3xl
shadow-xl
p-8
md:p-10
"

>


{/* Statistics Header */}

<div

className="
grid
md:grid-cols-3
gap-6
mb-12
"

>


<div
className="
rounded-3xl
bg-blue-50
p-6
text-center
border
border-blue-100
hover:shadow-lg
transition
"
>

<h2 className="text-4xl font-bold text-blue-600">
8+
</h2>

<p className="mt-2 font-semibold text-gray-700">
Certificates
</p>

</div>




<div
className="
rounded-3xl
bg-purple-50
p-6
text-center
border
border-purple-100
hover:shadow-lg
transition
"
>

<h2 className="text-4xl font-bold text-purple-600">
6+
</h2>

<p className="mt-2 font-semibold text-gray-700">
Research Presentations
</p>

</div>





<div
className="
rounded-3xl
bg-indigo-50
p-6
text-center
border
border-indigo-100
hover:shadow-lg
transition
"
>

<h2 className="text-4xl font-bold text-indigo-600">
5+
</h2>

<p className="mt-2 font-semibold text-gray-700">
International Conferences
</p>

</div>



</div>





<h1

className="
text-4xl
md:text-5xl
font-bold
text-gray-900
"

>

Certificates & Achievements

</h1>




<p

className="
mt-5
max-w-3xl
text-lg
text-gray-600
leading-relaxed
"

>

A collection of research presentation certificates,
academic recognitions, professional development activities
and competitive achievements.

</p>






<div

className="
mt-12
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

certificates.map((cert,index)=>(


<div

key={index}

className="
group
rounded-3xl
overflow-hidden
bg-white
border
border-gray-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"

>


<div className="overflow-hidden">


<Image

src={cert.image}

alt={cert.title}

width={500}

height={350}

className="
w-full
h-60
object-cover
group-hover:scale-105
transition
duration-500
"

/>


</div>




<div className="p-6">


<span

className="
text-sm
font-semibold
text-blue-600
"

>

{cert.category}

</span>





<h2

className="
mt-3
text-xl
font-bold
text-gray-900
"

>

{cert.title}

</h2>





<p

className="
mt-2
font-medium
text-gray-700
"

>

{cert.issuer}

</p>





<p

className="
mt-4
text-sm
text-gray-600
leading-relaxed
"

>

{cert.description}

</p>






<a

href={cert.image}

target="_blank"

className="
inline-flex
mt-6
rounded-full
bg-blue-600
px-6
py-2.5
text-white
font-medium
hover:bg-blue-700
transition
"

>

View Certificate

</a>



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