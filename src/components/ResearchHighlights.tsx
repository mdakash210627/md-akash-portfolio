const researchAreas = [
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    description:
      "Machine Learning and Deep Learning approaches for developing intelligent prediction and classification systems."
  },
  {
    title: "Computer Vision",
    icon: "👁️",
    description:
      "Deep learning based image classification, object detection and biomedical image analysis techniques."
  },
  {
    title: "Biomedical Imaging",
    icon: "🩺",
    description:
      "AI-driven medical image analysis focusing on disease detection and localization."
  },
  {
    title: "Explainable AI",
    icon: "🧠",
    description:
      "Developing interpretable AI models to improve transparency and trust."
  },
  {
    title: "Signal Processing",
    icon: "📡",
    description:
      "Signal processing and computational techniques for intelligent systems."
  },
  {
    title: "Deep Learning",
    icon: "🔥",
    description:
      "Advanced neural network architectures for reliable AI applications."
  }
];


export default function ResearchHighlights() {

  return (

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
        text-4xl
        font-bold
        text-gray-900
        mb-8
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

        {
          researchAreas.map((item,index)=>(

            <div
              key={index}
              className="
              border
              border-gray-100
              rounded-2xl
              p-7
              shadow-md
              hover:-translate-y-2
              transition
              "
            >

              <div className="text-4xl">
                {item.icon}
              </div>


              <h3
                className="
                mt-4
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

  );

}