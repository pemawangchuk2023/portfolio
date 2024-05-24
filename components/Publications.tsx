"use client"
import Link from 'next/link';
import { Button } from './ui/button';

const publicationsData = [
  {
    title: "Optimizing React Performance with Memoization",
    journal: "Journal of Web Development",
    year: 2022,
    link: "#",
  },
  {
    title: "Serverless Architecture for Scalable Web Applications",
    journal: "Proceedings of the 2021 IEEE International Conference on Cloud Computing",
    year: 2021,
    link: "#",
  },
  {
    title: "Exploring the Impact of Microservices on Enterprise Software Development",
    journal: "IEEE Software",
    year: 2020,
    link: "#",
  },
  {
    title: "Applying Machine Learning to Improve Code Quality",
    journal: "Proceedings of the 2019 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software",
    year: 2019,
    link: "#",
  },
  {
    title: "Leveraging WebAssembly for High-Performance Web Applications",
    journal: "ACM Transactions on the Web",
    year: 2018,
    link: "#",
  },
  {
    title: "Improving Developer Productivity with Static Type Checking",
    journal: "Proceedings of the 2017 ACM SIGPLAN International Conference on Object-Oriented Programming, Systems, Languages, and Applications",
    year: 2017,
    link: "#",
  },
];

const Publications = () => {
  return (
    <section className="py-4 md:py-16 lg:py-0">
      <div className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white text-center justify-center">Academic Writings & Publications</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publicationsData.map((publication, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold">{publication.title}</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Published in {publication.journal}, {publication.year}
              </p>
              <Link href={publication.link}>
                <Button className="text-blue-500 hover:underline">Read More</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;