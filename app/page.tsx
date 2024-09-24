import ContactForm from "@/components/ContactForm";
import Intro from "@/components/Intro";
import RecentPosts from "@/components/RecentPosts";
import RecentProjects from "@/components/RecentProjects";
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {

  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />

        <RecentPosts />
        <RecentProjects />
        <ContactForm />
      </div>
    </section>
  )
}
