import Image from "next/image";
import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="max-width mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
      </div>

      <div className="home__filters"></div>
    </main>
  );
}
