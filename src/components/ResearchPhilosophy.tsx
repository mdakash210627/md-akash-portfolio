export default function ResearchPhilosophy() {

  return (

    <div className="space-y-10">


      {/* Research Philosophy */}

      <section
        className="
        bg-white
        rounded-3xl
        shadow-xl
        p-10
        scroll-mt-32
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          text-gray-900
          "
        >
          Research Philosophy
        </h1>


        <p
          className="
          mt-6
          text-lg
          leading-relaxed
          text-gray-600
          "
        >

          My research focuses on developing intelligent and
          explainable Artificial Intelligence systems by integrating
          Deep Learning, Computer Vision, Biomedical Imaging and
          Signal Processing techniques.

        </p>



        <p
          className="
          mt-5
          text-lg
          leading-relaxed
          text-gray-600
          "
        >

          I am interested in designing reliable and interpretable
          machine learning models that can address real-world
          challenges through advanced computational approaches.

        </p>



        <p
          className="
          mt-5
          text-lg
          leading-relaxed
          text-gray-600
          "
        >

          My research work explores deep learning architectures,
          medical image analysis, and Explainable AI methods to
          improve the transparency and practical usability of
          intelligent systems.

        </p>


      </section>






      {/* Research Highlights */}


      <section>


        <h2
          className="
          text-3xl
          font-bold
          text-gray-900
          mb-6
          "
        >
          Research Highlights
        </h2>




        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >



          <ResearchCard

            icon="🤖"

            title="Artificial Intelligence"

            description="
            Machine learning and deep learning approaches
            for developing intelligent prediction and
            classification systems.
            "

          />




          <ResearchCard

            icon="👁️"

            title="Computer Vision"

            description="
            Deep learning based image classification,
            detection and visual understanding techniques.
            "

          />




          <ResearchCard

            icon="🩺"

            title="Biomedical Imaging"

            description="
            AI-driven analysis of medical images for
            disease detection and healthcare applications.
            "

          />





          <ResearchCard

            icon="🧠"

            title="Explainable AI"

            description="
            Developing interpretable AI models to understand
            decision-making processes of deep learning systems.
            "

          />



        </div>


      </section>


    </div>

  );

}






function ResearchCard({

  title,

  description,

  icon

}:{

  title:string;

  description:string;

  icon:string;

}){


return (

<div

className="
bg-white
rounded-2xl
shadow-lg
p-7
border
border-gray-100
hover:-translate-y-2
transition-all
duration-300
"

>


<div
className="
text-4xl
"
>
{icon}
</div>



<h3

className="
mt-5
text-xl
font-bold
text-blue-600
"

>

{title}

</h3>




<p

className="
mt-3
text-gray-600
leading-relaxed
"

>

{description}

</p>


</div>


);


}