'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Globe, DollarSign, Laptop } from "lucide-react"

export function UniwebLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">UniWeb</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to UniWeb
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Helping You Find U.S. Universities – No Agency Needed
                </p>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                UniWeb is here to make it easy for non-American families to find universities in the U.S. We provide all
                the information you need for international admissions – at little to no cost. No more paying expensive
                agencies or waiting for quotes.
              </p>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Why UniWeb?</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Globe className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">International Focus</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Get the right admission info specifically for international students.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <DollarSign className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Affordable</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Access information for free or at a fraction of what agencies charge.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Laptop className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Fully Online</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Everything is online – no need to contact agencies or wait for a quote.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Browse Universities</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Find U.S. universities that fit your needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Get Admission Info</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  See key details like admission requirements, tuition, and scholarships.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Compare and Decide</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Choose the university that's right for you – without extra hassle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Now</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ready to find the right university? UniWeb makes it simple and affordable. Start exploring today!
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 UniWeb. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}