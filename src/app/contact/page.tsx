export default function ContactPage() {


const contacts = [

{
icon:"📧",
title:"Email",
value:"your-email@example.com",
link:"mailto:your-email@example.com"
},


{
icon:"💻",
title:"GitHub",
value:"GitHub Profile",
link:"#"
},


{
icon:"🔗",
title:"LinkedIn",
value:"LinkedIn Profile",
link:"#"
},


{
icon:"🎓",
title:"Google Scholar",
value:"Research Profile",
link:"#"
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


<div className="max-w-5xl mx-auto">


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

Contact Me

</h1>



<p

className="
mt-5
text-lg
text-gray-600
leading-relaxed
"

>

I am open to research collaborations, academic discussions,
AI projects, and opportunities related to Artificial Intelligence,
Deep Learning, Computer Vision and Biomedical Imaging.

</p>






<div

className="
mt-10
grid
md:grid-cols-2
gap-6
"

>


{

contacts.map((item,index)=>(


<a

key={index}

href={item.link}

target="_blank"

className="
group
rounded-3xl
border
border-gray-100
p-6
shadow-md
hover:shadow-xl
hover:-translate-y-2
transition
"

>


<div className="text-4xl">

{item.icon}

</div>




<h2

className="
mt-4
text-xl
font-bold
text-gray-900
"

>

{item.title}

</h2>




<p

className="
mt-2
text-blue-600
font-medium
"

>

{item.value}

</p>



</a>


))

}



</div>







<section

className="
mt-12
rounded-3xl
bg-blue-50
p-8
"

>


<h2

className="
text-2xl
font-bold
text-gray-900
"

>

Research Collaboration

</h2>



<p

className="
mt-4
text-gray-700
leading-relaxed
"

>

Interested in collaborating on AI research,
deep learning models, computer vision applications,
biomedical imaging, or explainable artificial intelligence.

I welcome discussions with researchers, academics,
and industry professionals.

</p>



</section>





</section>



</div>



</main>


);


}