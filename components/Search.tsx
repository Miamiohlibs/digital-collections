import Link from "next/link";
import { redirect } from "next/navigation";

export default function Search() {
  const searchURL =
    "https://digital.lib.miamioh.edu/digital/search/searchterm/";
  return (
    <div className="max-w-7xl gap-10 lg:grid-cols-12 lg:gap-8">
      <form className="w-full lg:pt-2" action={searchURL} method="post">
        <div className="flex gap-x-4">
          <label htmlFor="search-terms" className="sr-only">
            Search
          </label>
          <input
            id="search-terms"
            name="search"
            type="text"
            required
            placeholder="Search in all collections"
            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            Search
          </button>
        </div>

        <div className="mt-2">
          <Link
            href="https://digital.lib.miamioh.edu/digital/search/advanced"
            className="block text-sm font-semibold text-red-800 hover:text-red-700"
          >
            Advanced Search in Digital Collections
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
