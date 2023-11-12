import Image from "next/image";
import Hero from "./components/Home/Hero";
import RecentPosts from "./components/Home/RecentPosts";

export default function Home() {
  return <main className="max-w-7xl mx-auto">
    <Hero/>
    <RecentPosts/>
    </main>;
}
