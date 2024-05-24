import Image from 'next/image';

const Testimonials =() => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-8 bg-[#121212] dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">What People Are Saying</h2>
            <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from the people who have worked with me?
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] dark:bg-gray-950">
            <div className="flex items-center gap-4">
              <Image
                alt="Jared Palmer"
                src="/images/project7.png"
                className="w-16 h-16 rounded-full"
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-lg font-semibold">Jamyang Tashi</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Druk FBD</p>
              </div>
            </div>
            <blockquote className="mt-4 flex-1 text-lg font-semibold leading-snug">
              “Pema Wangchuk did for us was exceptional. He went above and beyond to deliver a high-quality product on time.”
            </blockquote>
          </div>
          <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] dark:bg-gray-950">
            <div className="flex items-center gap-4">
              <Image
                alt="Jamyang Tashi"
                src="/images/project8.png"
                className="w-16 h-16 rounded-full"
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-lg font-semibold">Tshering Lethro</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager, Intel Corporation Ltd</p>
              </div>
            </div>
            <blockquote className="mt-4 flex-1 text-lg font-semibold leading-snug">
              “Pema Wangchuk's team was a pleasure to work with. They were responsive, creative, and delivered a solution that exceeded our expectations.”
            </blockquote>
          </div>
          <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] dark:bg-gray-950">
            <div className="flex items-center gap-4">
              <Image
                alt="Tshering Lethro"
                src="/images/project9.png"
                className="w-16 h-16 rounded-full"
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-lg font-semibold">Nangsa Selden</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CTO, ABC Company</p>
              </div>
            </div>
            <blockquote className="mt-4 flex-1 text-lg font-semibold leading-snug">
              “Pema has been a game-changer for our organization. He has allowed us to focus on building great products instead of managing infrastructure.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;