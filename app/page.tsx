"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CAROUSEL, COLLECTIONS, RESOURCES } from "@/constant/StaticInfo";
import Description from "@/components/Description";
import Stats from "@/components/Stats";
import Text from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="relative mb-12">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0">
          <Carousel className="slider" infiniteLoop>
            {CAROUSEL.map((imageItem) => (
              <div className="h-[30rem] sm:h-[45rem]" key={imageItem.imageAlt}>
                <img
                  src={imageItem.imageSrc}
                  alt={imageItem.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            Finding Freedom
          </h1>
          <p className="mt-4 text-xl text-white">
            The Freedom Summer Digital Archive brings together over 1,100 sound
            recordings, newspaper articles, photographs, correspondence, and
            other primary sources relating to the Mississippi Summer Project,
            the 1964 African American voter registration drive later known as
            Freedom Summer.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Explore the Collection
          </a>
        </div>
      </div>

      <main>
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
            <a
              href="#"
              className="hidden text-sm font-semibold text-red-800 hover:text-red-700 sm:block"
            >
              Browse all related resoources
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {RESOURCES.map((category) => (
                    <a
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
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-red-800 hover:text-red-700"
            >
              Browse All Categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        <section>
          <Stats />
        </section>

        <section>
          <Description />
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                alt=""
                src="/Courage_04.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
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
          className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
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

        <Text />

        {/* Featured section */}
        <section
          aria-labelledby="comfort-heading"
          className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:pb-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                alt=""
                src="/Contribute_01_New.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center">
                <h2
                  id="comfort-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"
                >
                  History
                </h2>
                <p className="mt-3 text-xl text-white">
                  Mississippi Summer Project took place on Oxford, Ohio’s,
                  Western College campus in June 1964. Its participants, about
                  800 northern college students, learned about history and
                  politics in the South while preparing to register African
                  Americans to vote and to encourage a new political party. At
                  the time, Black Mississippians were barred from Democratic
                  party primaries and caucuses, and the movement sought to
                  challenge the party’s all-white delegation at the Democratic
                  National Convention that August. Three of those trainees,
                  Michael Schwerner, James Chaney and Andrew Goodman would be
                  murdered by the Ku Klux Klan after beginning their work in
                  Mississippi. These murders focused national and international
                  attention on the efforts of Freedom Summer, serving as a
                  turning point for the civil rights movement.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Browse All
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
