import Image from "next/image";
import { Hero, CustomFilter, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import { CarCard } from "@/components";

export default async function Home() {
  const allCars = await fetchCars();

  // true when the array is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="max-width mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {/* when the data is not empty */}
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
