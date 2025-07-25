"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Video, Wand2, Zap, Clock, Share2 } from "lucide-react"
import { TermsModal } from "@/components/terms-modal"
import { PrivacyModal } from "@/components/privacy-modal"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-purple-800" />
            <span className="text-xl font-bold">blid.io</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
          </nav>
          <div>
            <Button asChild variant="ghost" className="mr-2">
              <Link href="#beta-signup">Join Beta</Link>
            </Button>
            <Button asChild>
              <Link href="#beta-signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-100 to-white py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-full bg-purple-200 px-3 py-1 text-sm text-purple-900">
                  Now in beta
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Transform Text into <span className="text-purple-800">Stunning Videos</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  blid.io uses advanced AI to turn your text prompts into high-quality videos in seconds. No editing
                  skills required.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#beta-signup">
                      Join the Beta <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#how-it-works">See How It Works</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg shadow-xl">
                  <img
                    src="/placeholder.svg?height=350&width=500"
                    alt="AI video generation interface"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Powerful Text-to-Video Features</h2>
              <p className="text-gray-500">
                blid.io combines cutting-edge AI with an intuitive interface to make video creation effortless.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-200">
                  <Wand2 className="h-6 w-6 text-purple-800" />
                </div>
                <h3 className="mb-2 text-xl font-bold">AI-Powered Creation</h3>
                <p className="text-gray-500">
                  Our advanced transformer model understands context and nuance to create videos that match your vision.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-200">
                  <Zap className="h-6 w-6 text-purple-800" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Lightning Fast</h3>
                <p className="text-gray-500">
                  Generate professional-quality videos in seconds, not hours. No more waiting for renders.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-200">
                  <Clock className="h-6 w-6 text-purple-800" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Save Time</h3>
                <p className="text-gray-500">
                  Focus on your message while blid.io handles the technical aspects of video creation.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-200">
                  <Share2 className="h-6 w-6 text-purple-800" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Easy Sharing</h3>
                <p className="text-gray-500">
                  Download your videos or share them directly to social media platforms with one click.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-200">
                  <svg
                    className="h-6 w-6 text-purple-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Customizable</h3>
                <p className="text-gray-500">
                  Fine-tune your videos with simple controls for style, pacing, and visual elements.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-200">
                  <svg
                    className="h-6 w-6 text-purple-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Commercial Rights</h3>
                <p className="text-gray-500">
                  All videos created with blid.io come with commercial usage rights for your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-gray-50 py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">How blid.io Works</h2>
              <p className="text-gray-500">
                Creating stunning videos has never been easier. Just follow these simple steps.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="absolute -left-3 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-purple-800 text-white">
                  1
                </div>
                <div className="rounded-lg border bg-white p-6 pl-8 shadow-sm">
                  <h3 className="mb-2 text-xl font-bold">Write Your Prompt</h3>
                  <p className="text-gray-500">
                    Describe the video you want to create. Be as detailed or simple as you like.
                  </p>
                  <div className="mt-4 rounded-md bg-gray-100 p-3">
                    <p className="text-sm text-gray-700">
                      "Create a cinematic sunset over mountains with birds flying"
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-3 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-purple-800 text-white">
                  2
                </div>
                <div className="rounded-lg border bg-white p-6 pl-8 shadow-sm">
                  <h3 className="mb-2 text-xl font-bold">AI Processing</h3>
                  <p className="text-gray-500">
                    Our AI analyzes your prompt and generates a video matching your description.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-3 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-purple-800 text-white">
                  3
                </div>
                <div className="rounded-lg border bg-white p-6 pl-8 shadow-sm">
                  <h3 className="mb-2 text-xl font-bold">Download & Share</h3>
                  <p className="text-gray-500">
                    Preview your video, make adjustments if needed, then download or share.
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <Button size="sm" variant="outline">
                      Preview
                    </Button>
                    <Button size="sm">Download</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="relative h-[300px] w-full max-w-[800px] overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/placeholder.svg?height=300&width=800"
                  alt="Text to video transformation process"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/80 p-4 backdrop-blur-sm">
                    <svg
                      className="h-12 w-12 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Simple, Transparent Pricing</h2>
              <p className="text-gray-500">Join our beta program for early access and special pricing.</p>
            </div>

            <div className="mx-auto grid max-w-[1000px] gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Free Beta</h3>
                  <div className="mt-2 text-3xl font-bold">$0</div>
                  <p className="text-sm text-gray-500">Limited time offer</p>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5 videos per month</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>720p resolution</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic customization</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Join Beta
                </Button>
              </div>

              <div className="relative rounded-lg border border-purple-400 bg-card p-6 shadow-md">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-800 px-3 py-1 text-xs font-medium text-white">
                  MOST POPULAR
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <div className="mt-2 text-3xl font-bold">$29</div>
                  <p className="text-sm text-gray-500">per month</p>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>50 videos per month</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1080p resolution</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced customization</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority processing</span>
                  </li>
                </ul>
                <Button className="w-full">Coming Soon</Button>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="mt-2 text-3xl font-bold">Custom</div>
                  <p className="text-sm text-gray-500">Contact for pricing</p>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited videos</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>4K resolution</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full customization</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>API access</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Beta Sign-up Section */}
        <section id="beta-signup" className="bg-gradient-to-br from-purple-950 to-purple-900 py-20 text-white">
          <div className="container">
            <div className="mx-auto max-w-[600px] text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join the Beta Program</h2>
              <p className="mb-8">
                Be among the first to experience blid.io and help shape the future of AI video creation.
              </p>

              <form className="mx-auto max-w-md space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-purple-600"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-purple-600"
                  />
                </div>
                <div>
                  <Button className="w-full bg-white text-purple-900 hover:bg-white/90">Request Beta Access</Button>
                </div>
                <p className="text-xs text-white/70">
                  By signing up, you agree to our{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('[data-trigger="terms"]')?.click()
                    }}
                    className="underline hover:text-white"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('[data-trigger="privacy"]')?.click()
                    }}
                    className="underline hover:text-white"
                  >
                    Privacy Policy
                  </button>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-purple-800" />
              <span className="text-lg font-bold">blid.io</span>
            </div>
            <div className="flex gap-4">
              <TermsModal />
              <PrivacyModal />
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
            <div className="text-sm text-gray-500">© 2025 blid.io. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
