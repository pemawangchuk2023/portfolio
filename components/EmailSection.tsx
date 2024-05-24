import Link from "next/link";
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const EmailSection =() => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] dark:bg-gray-900">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white dark:text-white">Contact Me</h2>
          <p className="max-w-[600px] text-white md:text-xl lg:text-base xl:text-xl dark:text-gray-400 text-justify">
            I am always excited to connect with new people and discuss potential collaborations or just chat about the latest tech trends.
            Feel free to reach out to me via email or social media.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="mailto:youremail@example.com" passHref>
              <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300">
                Email Me
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" passHref>
              <Button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-gray-900 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:text-gray-50 dark:focus-visible:ring-gray-300">
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription className="text-xl">Fill out the form below and I will get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-4xl">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <Button type="submit" className="w-full text-xl py-6">Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}


export default EmailSection;