import { Button } from "@/components/ui/button";
import projectsData from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6 md:mb-8 lg:mb-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">My Projects</h2>
          <p className="text-white text-lg md:text-xl mt-2">
            Check out some of the projects I have worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
              <Link href={project.link}>
                <Image
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  height={400}
                  width={600}
                  src={project.imageUrl}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-end bg-[#C04ABC]">
                    <Button size="sm">View Project</Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
