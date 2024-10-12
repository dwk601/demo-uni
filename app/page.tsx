import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  DollarSign,
  Laptop,
} from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { Typewriter } from "@/components/ui/typewriter";

const texts = [
  "here to help you discover U.S. universities effortlessly.",
  "simplifying your search for U.S. universities.",
  "providing all the info you need without the hassle or cost of agencies.",
];

export default function Component() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <TextAnimate text="Welcome to UniWeb" type="rollIn" />
              </div>
              <div className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
                <Typewriter texts={texts} delay={1} baseText="UniWeb is " />
              </div>
              <div className="space-x-4">
                <Button>
                  Explore Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12">
              Why UniWeb?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <Globe className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">International Focus</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Get the right admission info specifically for international
                  students.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <DollarSign className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Affordable</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Access information for free or at a fraction of what agencies
                  charge.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <Laptop className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Fully Online</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Everything is online – no need to contact agencies or wait for
                  a quote.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <CheckCircle className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Browse Universities</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Find U.S. universities that fit your needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Get Admission Info</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  See key details like admission requirements, tuition, and
                  scholarships.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <CheckCircle className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Compare and Decide</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Choose the university that's right for you – without extra
                  hassle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Start Now
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
                  Ready to find the right university? UniWeb makes it simple and
                  affordable. Start exploring today!
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  Explore Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
