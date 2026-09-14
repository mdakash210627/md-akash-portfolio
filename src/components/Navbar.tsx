import Link from "next/link";
import { FileText } from "lucide-react";


export default function Navbar() {


  const menuItems = [
    {name:"Home", href:"/"},
    {name:"About", href:"/about"},
    {name:"Research", href:"/research"},
    {name:"Publications", href:"/publications"},
    {name:"Certificates", href:"/certificates"},
    {name:"Projects", href:"/projects"},
    {name:"Blog", href:"/blog"},
    {name:"Contact", href:"/contact"},
  ];


  return (

    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      px-6
      "
    >

      <div
        className="
        mx-auto
        mt-4
        max-w-7xl
        rounded-2xl
        border
        border-white/50
        bg-white/80
        backdrop-blur-xl
        shadow-lg
        px-8
        py-4
        flex
        items-center
        justify-between
        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
          text-2xl
          font-bold
          text-gray-900
          tracking-tight
          "
        >

          Md. Akash
          <span className="text-blue-600">
            .
          </span>

        </Link>





        {/* Menu */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-7
          text-gray-700
          font-medium
          "
        >

          {
            menuItems.map((item)=>(

              <Link
                key={item.name}
                href={item.href}
                className="
                relative
                transition
                hover:text-blue-600
                group
                "
              >

                {item.name}


                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  w-0
                  bg-blue-600
                  transition-all
                  duration-300
                  group-hover:w-full
                  "
                />


              </Link>

            ))
          }


        </div>






        {/* CV Download Button */}

        <a
          href="/documents/Akash_CV.pdf"
          download="Md_Akash_CV.pdf"
          className="
          flex
          items-center
          gap-2
          rounded-full
          bg-blue-600
          px-6
          py-2.5
          text-white
          font-medium
          shadow-md
          hover:bg-blue-700
          hover:scale-105
          transition
          "
        >

          <FileText size={18}/>

          CV

        </a>



      </div>


    </nav>

  );

}