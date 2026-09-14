import Image from "next/image";
import StatsCounter from "./StatsCounter";
import AIBrainBackground from "./AIBrainBackground";
import NeuralNetwork from "./NeuralNetwork";


export default function HeroSection() {
  return (

    <section
      className="
      relative
      min-h-screen
      flex
      flex-col
      justify-center
      px-5
      sm:px-6
      pt-24
      pb-16
      overflow-hidden
      "
    >

      <AIBrainBackground />


      <div
        className="
        relative
        z-10
        max-w-7xl
        w-full
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-10
        lg:gap-12
        items-center
        " 
      >


        {/* Profile Image */}

        <div
          className="
          flex
          justify-center
          "
        >

          <div
            className="
            relative
            w-48
            h-48
            sm:w-56
            sm:h-56
            lg:w-72
            lg:h-72
            rounded-full
            overflow-hidden
            border-8
            border-white
            shadow-2xl
            bg-white
            "
          >

            <Image
              src="/images/Profile.png"
              alt="Md. Akash Miya"
              fill
              priority
              sizes="300px"
              className="
              object-cover
              object-top
              "
            />

          </div>


        </div>





        {/* Personal Information */}

        <div
          className="
          space-y-4
          text-center
          lg:text-left
          "
        >


          <h1
            className="
            text-4xl
            sm:text-5xl
            font-bold
            text-gray-900
            "
          >
            Md. Akash Miya
          </h1>




          <h2
            className="
            text-2xl
            sm:text-3xl
            font-semibold
            text-blue-600
            "
          >
            AI Researcher
          </h2>




          <p
            className="
            text-base
            sm:text-lg
            leading-relaxed
            text-gray-600
            "
          >

            Researching Artificial Intelligence, Deep Learning,
            Computer Vision, Biomedical Imaging, Signal Processing
            and Explainable AI for real-world applications.

          </p>





          <div
            className="
            mt-5
            space-y-2
            text-sm
            sm:text-base
            text-gray-700
            "
          >

            <p>
              🎓 B.Sc. Engineering in Information and Communication Engineering
            </p>


            <p>
              🏛 Pabna University of Science and Technology (PUST)
            </p>


            <p>
              ⭐ CGPA: 3.47 / 4.00
            </p>


            <p>
              🔬 AI, Deep Learning, Computer Vision, Biomedical Imaging
            </p>


            <p>
              📄 IEEE & Springer Research Publications
            </p>


            <p>
              👨‍🏫 ICT Instructor | Srizon Coaching Center
            </p>


          </div>







          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            pt-5
            justify-center
            lg:justify-start
            "
          >

            <button
              className="
              rounded-full
              bg-blue-600
              px-8
              py-3
              text-white
              font-medium
              shadow-lg
              hover:bg-blue-700
              transition
              "
            >

              Download CV

            </button>



            <button
              className="
              rounded-full
              border
              border-blue-600
              px-8
              py-3
              text-blue-600
              font-medium
              hover:bg-blue-50
              transition
              "
            >

              View Research

            </button>


          </div>


        </div>






        {/* Neural Network */}

        <div
          className="
          hidden
          lg:flex
          justify-center
          "
        >

          <NeuralNetwork />

        </div>



      </div>






      {/* Statistics */}

      <div
        className="
        relative
        z-10
        mt-12
        max-w-5xl
        w-full
        mx-auto
        "
      >

        <StatsCounter />

      </div>



    </section>

  );
}