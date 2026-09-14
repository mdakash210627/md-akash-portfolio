export default function BlogPage() {


const blogs = [

{
title:
"Explainable AI: Making Deep Learning Models Trustworthy",

category:
"Explainable Artificial Intelligence",

description:
"Exploring how Explainable AI techniques improve transparency and interpretability of deep learning models, especially in healthcare and medical image analysis."
},


{
title:
"Deep Learning Applications in Biomedical Imaging",

category:
"Biomedical AI",

description:
"An overview of how convolutional neural networks and advanced deep learning architectures are transforming medical image analysis and disease detection."
},


{
title:
"Deepfake Detection Using Modern AI Approaches",

category:
"Computer Vision",

description:
"Discussing recent deep learning approaches including CNN, Transformer and graph-based methods for detecting manipulated multimedia content."
},


{
title:
"Machine Learning for Healthcare Monitoring Systems",

category:
"Healthcare AI",

description:
"Understanding how machine learning and signal processing techniques can enable intelligent remote health monitoring solutions."
},


{
title:
"From Data to Intelligent Systems: A Research Journey",

category:
"Research & AI",

description:
"Sharing insights about developing AI systems, experimental methodology, model evaluation and scientific research practices."
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


<div className="max-w-6xl mx-auto">


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

Blog & Articles

</h1>



<p

className="
mt-5
text-lg
text-gray-600
max-w-3xl
leading-relaxed
"

>

Sharing knowledge, research insights and technical discussions
on Artificial Intelligence, Deep Learning, Computer Vision
and Biomedical Imaging.

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

blogs.map((blog,index)=>(


<div

key={index}

className="
rounded-3xl
border
border-gray-100
p-8
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition
"

>


<div

className="
text-4xl
"

>
📝
</div>




<span

className="
inline-block
mt-5
text-sm
font-semibold
text-blue-600
"

>

{blog.category}

</span>





<h2

className="
mt-3
text-2xl
font-bold
text-gray-900
"

>

{blog.title}

</h2>




<p

className="
mt-4
text-gray-600
leading-relaxed
"

>

{blog.description}

</p>




<button

className="
mt-6
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

Read More

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