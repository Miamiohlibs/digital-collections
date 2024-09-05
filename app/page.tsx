"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CAROUSEL, COLLECTIONS, RESOURCES } from "@/constant/StaticInfo";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Link from "next/link";
import History from "@/components/History";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="relative">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 ">
          <Carousel className="slider " infiniteLoop>
            {CAROUSEL.map((imageItem) => (
              <div className="h-[30rem] sm:h-[45rem] " key={imageItem.imageAlt}>
                <img
                  src={imageItem.imageSrc}
                  alt={imageItem.imageAlt}
                  className="h-full w-full object-cover object-center "
                />
                <p className="legend">
                  <span className="text-base">
                    Description: {imageItem.description}
                  </span>
                </p>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="relative max-w-3xl flex flex-col items-center justify-center gap-y-4 sm:gap-y-8 mx-auto text-center text-white h-[30rem] sm:h-[45rem] ">
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
            Finding Freedom
          </h1>
          <p className="text-lg sm:text-xl bg-stone-800 bg-opacity-65 leading-7 sm:leading-9 p-4 rounded-3xl">
            The Freedom Summer Digital Archive brings together over 1,100 sound
            recordings, newspaper articles, photographs, correspondence, and
            other primary sources relating to the Mississippi Summer Project,
            the 1964 African American voter registration drive later known as
            Freedom Summer.
          </p>
          <Link
            href="#"
            className="rounded-md px-8 py-3 bg-white text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Explore the Collection
          </Link>
        </div>
      </div>

      <main className="mt-12 sm:mt-0 grid gap-y-32">
        {/* Resources section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Related Resources
            </h2>
            <Link
              href="#"
              className="hidden text-sm font-semibold text-red-800 hover:text-red-700 sm:block"
            >
              Browse all related resoources
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-4 flow-root">
            <div className="relative box-content h-[20.5rem] overflow-x-auto py-2 xl:overflow-visible">
              <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {RESOURCES.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        alt=""
                        src={category.imageSrc}
                        className="h-full w-full object-cover object-center"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="#"
              className="text-sm pl-4 font-semibold text-red-800 hover:text-red-700 block sm:hidden"
            >
              Browse all related resoources
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </section>

        <section>
          <Stats />
        </section>

        <section className="pb-4">
          <About />
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                alt=""
                src="/Courage_04.jpg"
                className="mx-auto h-full aspect-[5/2] object-cover"
              />
            </div>
            <div className="relative bg-stone-800 bg-opacity-65 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  <span className="block sm:inline">Introduction</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  The Freedom Summer Digital Archive began in 2009 with a grant
                  from the Ohio Humanities Council, the Miami University
                  Libraries, and through the generous support of Catherine
                  Ross-Loveland, a 1952 graduate of the Western College for
                  Women.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Browse All Collections
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h2
            id="collection-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Related Collections
          </h2>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {COLLECTIONS.map((collection) => (
              <a
                key={collection.name}
                href={collection.href}
                className="group block"
              >
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <img
                    alt={collection.imageAlt}
                    src={collection.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {collection.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <History />

        {/* Featured section */}
        <section
          aria-labelledby="comfort-heading"
          className="w-full mb-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                alt=""
                src="/Contribute_01_New.jpg"
                className="mx-auto h-full aspect-[5/2] object-cover"
              />
            </div>
            <div className="relative bg-stone-800 bg-opacity-65 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center">
                <h2
                  id="comfort-heading"
                  className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl text-center"
                >
                  Need research help?
                </h2>

                <Link
                  href="#"
                  className="mt-8 rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
