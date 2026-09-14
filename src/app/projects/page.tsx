export default function ProjectsPage() {


const projects = [


{
title:"Explainable AI Based Pulmonary Tuberculosis Detection",

category:"Biomedical Imaging | Deep Learning | Explainable AI",

description:
"Developed an AI-based framework for pulmonary tuberculosis detection and lesion localisation using deep learning techniques. The research focuses on improving model reliability through explainability methods.",

technologies:[
"Deep Learning",
"CNN",
"Explainable AI",
"Medical Imaging",
"Grad-CAM"
]

},




{
title:"Deepfake Detection Framework",

category:"Computer Vision | AI Forensics",

description:
"Designed deep learning approaches for detecting manipulated media and improving the robustness of deepfake forensic systems under challenging image conditions.",

technologies:[
"Computer Vision",
"CNN",
"Transformer",
"Graph Attention Network"
]

},





{
title:"Remote Health Monitoring Using PPG Signal Processing",

category:"Healthcare AI | Signal Processing",

description:
"Developed a machine learning based approach for remote health monitoring using PPG signal processing techniques and intelligent computational models.",

technologies:[
"Signal Processing",
"Machine Learning",
"PPG Analysis",
"Healthcare AI"
]

},





{
title:"Hepatitis C Detection Using Ensemble Learning",

category:"Machine Learning | Medical Diagnosis",

description:
"Implemented machine learning based disease prediction approaches using ensemble boosting techniques for healthcare applications.",

technologies:[
"Machine Learning",
"Ensemble Learning",
"Healthcare Data Analysis"
]

},





{
title:"YOLO-EfficientNet Based Object Recognition",

category:"Computer Vision | Object Detection",

description:
"Developed a hybrid deep learning framework combining object detection and efficient neural network architectures for accurate image recognition.",

technologies:[
"YOLO",
"EfficientNet",
"Object Detection",
"Deep Learning"
]

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
p-10
"

>


<h1

className="
text-4xl
md:text-5xl
font-bold
text-gray-900
"

>

Projects & Research Works

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

Selected AI research projects and implementations
covering Artificial Intelligence, Deep Learning,
Computer Vision, Biomedical Imaging and Machine Learning.

</p>






<div

className="
mt-12
grid
md:grid-cols-2
gap-8
"

>


{

projects.map((project,index)=>(



<div

key={index}

className="
group
rounded-3xl
border
border-gray-100
bg-white
p-8
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"

>



<div

className="
w-14
h-14
rounded-2xl
bg-blue-50
flex
items-center
justify-center
text-3xl
"

>

🤖

</div>





<h2

className="
mt-6
text-2xl
font-bold
text-gray-900
"

>

{project.title}

</h2>





<p

className="
mt-3
text-sm
font-semibold
text-blue-600
"

>

{project.category}

</p>





<p

className="
mt-5
text-gray-600
leading-relaxed
"

>

{project.description}

</p>






<div

className="
mt-6
flex
flex-wrap
gap-3
"

>


{

project.technologies.map((tech,i)=>(


<span

key={i}

className="
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-medium
text-blue-700
"

>

{tech}

</span>


))

}


</div>






<button

className="
mt-8
rounded-full
border
border-blue-600
px-6
py-2.5
text-blue-600
font-medium
hover:bg-blue-600
hover:text-white
transition
"

>

View Details

</button>





</div>



))

}



</div>



</section>



</div>



</main>


);


}