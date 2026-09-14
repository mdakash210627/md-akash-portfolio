export default function AboutPage() {

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


        {/* Professional Profile */}

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
            About Me
          </h1>


          <p
            className="
            mt-6
            text-lg
            leading-relaxed
            text-gray-600
            "
          >

            I am Md. Akash Miya, a B.Sc. Engineering graduate in
            Information and Communication Engineering from Pabna
            University of Science and Technology (PUST).

          </p>


          <p
            className="
            mt-5
            text-lg
            leading-relaxed
            text-gray-600
            "
          >

            My research interests include Artificial Intelligence,
            Deep Learning, Computer Vision, Biomedical Imaging,
            Signal Processing, and Explainable AI. I have published
            research works in IEEE and Springer platforms.

          </p>


        </section>






        {/* Academic Background */}

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
            Academic Background
          </h2>


          <div
            className="
            mt-6
            space-y-4
            text-gray-700
            text-lg
            "
          >

            <p>
              🎓 <b>B.Sc. Engineering</b>
              <br/>
              Information and Communication Engineering
            </p>


            <p>
              🏛 <b>Pabna University of Science and Technology (PUST)</b>
            </p>


            <p>
              ⭐ <b>CGPA:</b> 3.47 / 4.00
            </p>


          </div>


        </section>








        {/* Research Profile */}

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
            Research Profile
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
                "Artificial Intelligence",
                "Deep Learning",
                "Computer Vision",
                "Biomedical Imaging",
                "Signal Processing",
                "Explainable AI"
              ].map((item,index)=>(

                <div
                  key={index}
                  className="
                  rounded-2xl
                  border
                  border-gray-100
                  p-5
                  text-blue-600
                  font-semibold
                  shadow-sm
                  "
                >

                  {item}

                </div>

              ))
            }


          </div>


        </section>








        {/* Thesis */}

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
            Undergraduate Thesis
          </h2>


          <p
            className="
            mt-6
            text-lg
            text-gray-600
            leading-relaxed
            "
          >

            Annotation Guided and Uncertainty Aware Explainable
            Multi Task Learning for Active Pulmonary Tuberculosis
            Detection and Lesion Localisation.

          </p>


        </section>








        {/* Professional Experience */}

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
            Professional Experience
          </h2>


          <p
            className="
            mt-6
            text-lg
            text-gray-600
            "
          >

            <b>ICT Instructor</b>
            <br/>
            Srizon Coaching Center, Pabna
            <br/>
            2023 – Present

          </p>


        </section>



      </div>


    </main>

  );

}