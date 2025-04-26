import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex  flex-col items-center justify-center">
        <header className="sticky top-0 left-0 w-full h-16 mb-10 p-4 bg-black opacity-10 z-10 border-b border-gray-200">Home</header>

        {/* <div className="sticky top-0 left-0 w-full h-full bg-black z-0 border-b border-gray-200" >
          <section>Home</section>
        </div> */}
        {/* Glow Blob */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#00f5d4] via-[#00bbf9] to-[#9b5de5] rounded-full blur-3xl opacity-40 animate-blob mix-blend-lighten pointer-events-none" />

        <div className="z-10 text-center px-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Hi, I'm Sujin 👋
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Full-stack developer specializing in building modern web
            applications.
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="border border-white px-6 py-2 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>
        </div>


      </main>
      <footer className="w-full border-t border-gray-200 bg-background-200 py-12">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                width={32}
                height={32}
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
