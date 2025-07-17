import Header from "@/components/header"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import Values from "@/components/values"
import Ebooks from "@/components/ebooks"
import Blog from "@/components/blog"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import Audiobooks from "@/components/audiobooks"
import Podcasts from "@/components/podcasts"
import { Podcast } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Values />
      <Ebooks />
      <Audiobooks />
      <Blog />
      <Podcasts />
      <Testimonials />
      <Footer />
    </div>
  )
}
