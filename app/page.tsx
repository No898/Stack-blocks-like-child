import Image from "next/image";

import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";


export default async function Home() {
  const allCars = await fetchCars()
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x paddin-y max-width" id="discover">
        <div className="home__text-container"> 
          <h1 className="text-4x1 font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>
            {!isDataEmpty ? (
              <section>
                  <div className="home__cars-wrappers">
                  {allCars?.map((car) => (
                  <CarCard car={car}/>
                  ))}
                  </div>
              </section>
            ): (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">Opps, no results</h2>
                <p>{allCars?.message}</p>
                </div>
            )} 
      </div>
    </main>
  );
}
// 53:50 skoncene video  https://www.youtube.com/watch?v=pUNSHPyVryU&t=1559s&ab_channel=JavaScriptMastery