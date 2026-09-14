import Image from "next/image";


export default function ProfileCard(){


return (

<div

className="
bg-white
rounded-3xl
shadow-xl
p-8
text-center
"

>


<div

className="
relative
mx-auto
w-52
h-52
rounded-full
overflow-hidden
border-4
border-blue-500
shadow-lg
"

>

<Image

src="/images/Profile.png"

alt="Md Akash Miya"

fill

className="
object-cover
object-top
"

/>

</div>





<h1

className="
mt-8
text-3xl
font-bold
text-gray-900
"

>

Md. Akash Miya

</h1>





<h2

className="
mt-3
text-lg
font-semibold
text-blue-600
"

>

AI Researcher | Deep Learning | Computer Vision

</h2>





<div

className="
mt-8
space-y-4
text-gray-600
text-left
"

>


<p>

🎓 <b>B.Sc. Engineering</b><br/>

Information and Communication Engineering

</p>



<p>

🏛 Pabna University of Science and Technology

</p>




<p>

⭐ <b>CGPA:</b> 3.47 / 4.00

</p>




<p>

🔬 <b>Research Focus:</b><br/>

Artificial Intelligence, Deep Learning,
Computer Vision, Biomedical Imaging,
Signal Processing, Explainable AI

</p>




<p>

📄 <b>Publications:</b><br/>

IEEE & Springer Indexed Research Works

</p>



</div>



<a
  href="documents/Md_Akash_CV.pdf"
  download="Md_Akash_CV.pdf"
  className="
  inline-flex
  items-center
  justify-center
  rounded-full
  bg-blue-600
  px-6
  py-3
  text-white
  font-medium
  hover:bg-blue-700
  transition
  "
>

Download CV

</a>



</div>


);


}