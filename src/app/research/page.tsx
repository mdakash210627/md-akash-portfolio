export default function ResearchPage() {

  const researchAreas = [
    {
      title: "Artificial Intelligence",
      description:
        "Developing intelligent computational systems using machine learning approaches for real-world applications."
    },

    {
      title: "Deep Learning",
      description:
        "Exploring deep neural network architectures for efficient learning, classification and prediction tasks."
    },

    {
      title: "Computer Vision",
      description:
        "Working with image-based AI applications including image analysis and visual understanding."
    },

    {
      title: "Biomedical Imaging",
      description:
        "Applying artificial intelligence techniques for medical image analysis and healthcare-related problems."
    },

    {
      title: "Signal Processing",
      description:
        "Analyzing and processing signals using computational methods and machine learning techniques."
    },

    {
      title: "Explainable AI",
      description:
        "Developing interpretable AI approaches to improve understanding and reliability of machine learning models."
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
        space-y-10
        "
      >



        {/* Research Introduction */}

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
            Research
          </h1>


          <p
            className="
            mt-6
            text-lg
            leading-relaxed
            text-gray-600
            "
          >

            My research interests focus on Artificial Intelligence
            and its applications in Deep Learning, Computer Vision,
            Biomedical Imaging, Signal Processing and Explainable AI.

          </p>


        </section>







        {/* Research Areas */}

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

            {
              researchAreas.map((item,index)=>(

                <div
                  key={index}
                  className="
                  rounded-2xl
                  border
                  border-gray-100
                  p-7
                  shadow-md
                  hover:-translate-y-2
                  transition
                  "
                >

                  <h3
                    className="
                    text-xl
                    font-bold
                    text-blue-600
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                    mt-3
                    text-gray-600
                    leading-relaxed
                    "
                  >
                    {item.description}
                  </p>


                </div>

              ))
            }


          </div>


        </section>






        {/* Research Capability */}

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
            "
          >
            Research Capability
          </h2>


          <div
            className="
            mt-6
            grid
            md:grid-cols-2
            gap-5
            "
          >

            {
              [
                "Dataset Preparation",
                "Image Annotation",
                "Model Training and Evaluation",
                "Literature Review",
                "Scientific Writing",
                "AI Model Development"
              ].map((skill,index)=>(

                <div
                  key={index}
                  className="
                  bg-blue-50
                  rounded-xl
                  p-5
                  text-gray-700
                  font-medium
                  "
                >

                  {skill}

                </div>

              ))
            }


          </div>


        </section>



      </div>


    </main>

  );

}