import Image from "next/image";


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

      <div className="max-w-5xl mx-auto space-y-10">


        {/* Professional Profile */}

        <section className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-4xl font-bold text-gray-900">
            About Me
          </h1>


          <p className="mt-6 text-lg leading-relaxed text-gray-600">

            I am Md. Akash Miya, a B.Sc. Engineering graduate in
            Information and Communication Engineering from Pabna
            University of Science and Technology (PUST) with a CGPA of
            3.47/4.00.

          </p>


          <p className="mt-5 text-lg leading-relaxed text-gray-600">

            My research focuses on developing intelligent and
            explainable Artificial Intelligence systems by integrating
            Deep Learning, Computer Vision, Biomedical Imaging,
            Signal Processing, and Machine Learning approaches.

          </p>


          <p className="mt-5 text-lg leading-relaxed text-gray-600">

            I have contributed to IEEE and Springer-indexed research
            publications covering medical image analysis, health
            monitoring, deepfake detection, machine learning
            applications, and computer vision.

          </p>


        </section>





        {/* Academic Background */}

        <section className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-gray-900">
            Academic Background
          </h2>


          <div className="mt-6 space-y-4 text-lg text-gray-700">

            <p>
              🎓 <b>Bachelor of Science in Engineering</b>
              <br/>
              Information and Communication Engineering
            </p>


            <p>
              🏛 <b>Pabna University of Science and Technology (PUST)</b>
              <br/>
              2026
            </p>


            <p>
              ⭐ <b>CGPA:</b> 3.47 / 4.00
            </p>


          </div>


        </section>





        {/* Award Recognition */}

        <section className="bg-white rounded-3xl shadow-xl p-10">


          <h2 className="text-3xl font-bold text-gray-900">
            Award & Recognition
          </h2>


          <div
            className="
            mt-8
            grid
            md:grid-cols-2
            gap-8
            items-center
            "
          >


            <div
              className="
              relative
              w-full
              h-[320px]
              rounded-2xl
              overflow-hidden
              shadow-lg
              "
            >

              <Image

                src="/images/about-photo.png"

                alt="Receiving award at ICE Graduation Farewell and Cultural Night 2026"

                fill

                className="object-cover"

              />

            </div>




            <div className="space-y-5">


              <p className="text-lg leading-relaxed text-gray-600">

                I was honored to receive an award at the
                <b> ICE Graduation Farewell & Cultural Night 2026 </b>
                organized by the Department of Information and
                Communication Engineering, Pabna University of Science
                and Technology.

              </p>



              <p className="text-lg leading-relaxed text-gray-600">

                I received this recognition from
                <b> Prof. Dr. Abul Hasnat Md. Shamim</b>,
                Vice Chancellor of Pabna University of Science and
                Technology.

              </p>




              <p className="text-lg leading-relaxed text-gray-600">

                The award ceremony was also attended by
                <b> Professor Dr. Md. Anwar Hossain</b>,
                Chairman of Information and Communication Engineering
                and Dean of the Faculty of Engineering and Technology.

              </p>


            </div>


          </div>


        </section>







        {/* Research Profile */}

        <section className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-gray-900">
            Research Profile
          </h2>


          <div className="mt-6 grid md:grid-cols-2 gap-5">


            {
              [

                "Artificial Intelligence",
                "Deep Learning",
                "Computer Vision",
                "Biomedical Imaging",
                "Signal Processing",
                "Explainable AI",
                "Machine Learning",
                "Medical Image Analysis"

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







{/* Undergraduate Thesis */}

<section className="bg-white rounded-3xl shadow-xl p-10">


  <h2 className="text-3xl font-bold text-gray-900">
    Undergraduate Thesis
  </h2>



  <div className="mt-6 space-y-6">


    <h3
      className="
      text-xl
      md:text-2xl
      font-bold
      text-blue-700
      leading-relaxed
      "
    >

      Annotation Guided and Uncertainty Aware Explainable 
      Multi-Task Learning for Active Pulmonary Tuberculosis 
      Detection and Lesion Localisation

    </h3>




    <p
      className="
      text-lg
      leading-relaxed
      text-gray-600
      "
    >

      This research proposes an explainable and uncertainty-aware
      multi-task deep learning framework for active pulmonary
      tuberculosis analysis using chest radiographs. The study
      integrates disease classification, lesion localisation,
      attention learning, explainable AI, and uncertainty estimation
      to improve the reliability of AI-assisted TB screening.

    </p>




    <div
      className="
      grid
      md:grid-cols-2
      gap-5
      mt-8
      "
    >



      <div
        className="
        rounded-2xl
        bg-blue-50
        border
        border-blue-100
        p-5
        "
      >

        <h4 className="font-bold text-gray-900 text-lg">
          🧠 Deep Learning Framework
        </h4>


        <p className="mt-3 text-gray-600">

          Developed a ConvNeXt-Tiny based multi-task architecture
          combining classification, TB lesion localisation and
          Active-TB attention learning.

        </p>


      </div>






      <div
        className="
        rounded-2xl
        bg-purple-50
        border
        border-purple-100
        p-5
        "
      >

        <h4 className="font-bold text-gray-900 text-lg">
          🔍 Explainable AI
        </h4>


        <p className="mt-3 text-gray-600">

          Evaluated model interpretability using Grad-CAM,
          Grad-CAM++, Integrated Gradients and quantitative
          explanation analysis.

        </p>


      </div>







      <div
        className="
        rounded-2xl
        bg-green-50
        border
        border-green-100
        p-5
        "
      >

        <h4 className="font-bold text-gray-900 text-lg">
          📊 Dataset & Validation
        </h4>


        <p className="mt-3 text-gray-600">

          Conducted multi-centre evaluation using TBX11K,
          Shenzhen and Montgomery chest X-ray datasets with
          leakage-controlled experimental design.

        </p>


      </div>







      <div
        className="
        rounded-2xl
        bg-orange-50
        border
        border-orange-100
        p-5
        "
      >

        <h4 className="font-bold text-gray-900 text-lg">
          ⚡ Research Contribution
        </h4>


        <p className="mt-3 text-gray-600">

          Integrated uncertainty estimation, Monte Carlo dropout,
          calibration analysis and selective prediction for
          trustworthy medical AI systems.

        </p>


      </div>




    </div>






    <div
      className="
      mt-8
      rounded-2xl
      bg-gray-900
      p-6
      text-white
      "
    >

      <h4 className="text-xl font-bold">
        Research Outcome
      </h4>


      <p className="mt-3 leading-relaxed text-gray-200">

        The proposed framework achieved strong internal
        classification performance while improving lesion-oriented
        explanation capability. The study also demonstrated the
        importance of uncertainty awareness and external validation
        for developing reliable medical artificial intelligence
        systems.

      </p>


    </div>






    <div
      className="
      mt-5
      text-gray-600
      "
    >

      <p>
        <b>Supervisor:</b> Prof. Dr. Md. Anwar Hossain
      </p>


      <p>
        <b>Department:</b> Information and Communication Engineering,
        Pabna University of Science and Technology
      </p>


    </div>



  </div>



</section>




        {/* Professional Experience */}

        <section className="bg-white rounded-3xl shadow-xl p-10">


          <h2 className="text-3xl font-bold text-gray-900">
            Professional Experience
          </h2>


          <p className="mt-6 text-lg text-gray-600">


            <b>ICT Instructor</b>

            <br/>

            Srizon Coaching Center, Pabna

            <br/>

            2023 – Present


          </p>



          <p className="mt-5 text-lg text-gray-600">

            Teaching ICT courses, preparing learning materials,
            conducting assessments, and guiding students in developing
            programming and problem-solving skills.

          </p>


        </section>






{/* Leadership & Activities */}

<section className="bg-white rounded-3xl shadow-xl p-10">

  <h2 className="text-3xl font-bold text-gray-900">
    Leadership & Activities
  </h2>

  <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">


    {/* Main Team Photo */}

    <div
      className="
      relative
      w-full
      h-[320px]
      md:h-[440px]
      rounded-2xl
      overflow-hidden
      shadow-lg
      "
    >
      <Image
        src="/images/pustcec-team.jpg"
        alt="PUST Career and Entrepreneurship Club team"
        fill
        className="object-cover"
      />
    </div>



    {/* Leadership Content */}

    <div className="space-y-5">

      <p className="text-lg leading-relaxed text-gray-600">
        Beyond academics and research, I have actively contributed to
        student leadership, organizational development, and
        entrepreneurship initiatives at Pabna University of Science and
        Technology through my involvement with the PUST Career and
        Entrepreneurship Club (PUSTCEC).
      </p>

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
        <h3 className="text-xl font-bold text-blue-700">
          PUST Career and Entrepreneurship Club (PUSTCEC)
        </h3>

        <p className="mt-2 font-semibold text-gray-800">
          Founding Member
        </p>

        <p className="mt-3 text-gray-600 leading-relaxed">
          As a founding member of PUSTCEC, I contributed to the early
          development of the club and supported initiatives focused on
          student leadership, career development, entrepreneurship, and
          teamwork.
        </p>
      </div>

      <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5 shadow-sm">
        <h3 className="text-xl font-bold text-purple-700">
          First Committee
        </h3>

        <p className="mt-2 font-semibold text-gray-800">
          Office Secretary
        </p>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Before serving as Joint General Secretary, I worked as the
          Office Secretary in the first committee of PUSTCEC. I handled
          official office-related responsibilities, including
          documentation, communication, coordination, and administrative
          tasks necessary for the smooth operation of the organization.
        </p>
      </div>

      <div className="rounded-2xl border border-green-100 bg-green-50 p-5 shadow-sm">
        <h3 className="text-xl font-bold text-green-700">
          PUST Career and Entrepreneurship Club
        </h3>

        <p className="mt-2 font-semibold text-gray-800">
          Joint General Secretary
        </p>

        <p className="mt-1 text-gray-600">
          2025 – 2026
        </p>

        <p className="mt-3 text-gray-600 leading-relaxed">
          In this leadership role, I contributed to club coordination,
          event management, member communication, and activities that
          promoted professional growth, collaboration, and
          entrepreneurship among students.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
        <h3 className="text-xl font-bold text-amber-700">
          Solver Green, PUST
        </h3>

        <p className="mt-2 font-semibold text-gray-800">
          Assistant Research and Course Development Secretary
        </p>

        <p className="mt-1 text-gray-600">
          2024 – 2025
        </p>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Assisted in research-related initiatives, academic content
          development, and organizational activities that supported
          student learning, research engagement, and innovation.
        </p>
      </div>

    </div>

  </div>



  {/* Team Note */}

  <div className="mt-8 rounded-2xl bg-gray-900 p-6 text-white">
    <h3 className="text-xl font-bold">
      Team & Leadership Journey
    </h3>

    <p className="mt-3 leading-relaxed text-gray-200">
      The photograph captures a memorable moment with members of
      PUSTCEC, including Internal Advisors, External Advisors,
      Founding President, and fellow members. My journey in the club
      reflects a progressive path from founding member to Office
      Secretary and later Joint General Secretary.
    </p>
  </div>



{/* Additional Pictures */}

<div className="mt-10">

  <h3 className="text-2xl font-bold text-gray-900">
    Professional Connections & Recognition
  </h3>


  <div className="mt-6 grid md:grid-cols-2 gap-8">


    {/* Tarikh M. Khan */}

    <div
      className="
      bg-gray-50
      rounded-3xl
      shadow-md
      overflow-hidden
      border
      border-gray-100
      "
    >

      <div
        className="
        relative
        w-full
        h-[420px]
        bg-gray-100
        "
      >

        <Image

          src="/images/tarikh-m-khan.jpg"

          alt="Md. Akash Miya with Tarikh M. Khan"

          fill

          className="object-contain"

        />

      </div>



      <div className="p-6">

        <h4 className="text-xl font-bold text-gray-900">
          Tarikh M. Khan
        </h4>


        <p
          className="
          mt-2
          text-sm
          font-medium
          text-blue-600
          "
        >
          Head of Comms (AGM), DIVC & Independent Advisor of PUSTCEC
        </p>


        <p className="mt-4 text-gray-600 leading-relaxed">

          This interaction reflects my engagement with industry
          professionals connected with PUSTCEC. Tarikh M. Khan has
          contributed as an Independent Advisor of the club and has
          supported professional networking and organizational growth.

        </p>


      </div>

    </div>








    {/* Z.H.M. Khairul Basar */}


    <div
      className="
      bg-gray-50
      rounded-3xl
      shadow-md
      overflow-hidden
      border
      border-gray-100
      "
    >


      <div
        className="
        relative
        w-full
        h-[420px]
        bg-gray-100
        "
      >

        <Image

          src="/images/khairul-basar.jpeg"

          alt="Md. Akash Miya with Z.H.M. Khairul Basar"

          fill

          className="object-contain"

        />


      </div>





      <div className="p-6">


        <h4 className="text-xl font-bold text-gray-900">
          Z.H.M. Khairul Basar
        </h4>



        <p
          className="
          mt-2
          text-sm
          font-medium
          text-purple-600
          "
        >
          Senior Product Executive, ShareViral
        </p>




        <p className="mt-4 text-gray-600 leading-relaxed">

          This professional interaction represents my interest in
          industry networking, leadership development, and building
          connections with experienced professionals beyond academic
          activities.

        </p>



      </div>


    </div>



  </div>


</div>

</section>


      </div>


    </main>

  );

}