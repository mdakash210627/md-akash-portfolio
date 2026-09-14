import ProfileCard from "./ProfileCard";
import ResearchPhilosophy from "./ResearchPhilosophy";

export default function MainLayout() {
  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-blue-50
      via-white
      to-purple-50
      px-6
      py-10
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-[350px_1fr]
        gap-10
        "
      >

        {/* Left Sticky Profile */}

        <aside
          className="
          lg:sticky
          lg:top-10
          h-fit
          "
        >

          <ProfileCard />

        </aside>




        {/* Right Scroll Content */}

        <section>

          <ResearchPhilosophy />

        </section>


      </div>


    </main>
  );
}