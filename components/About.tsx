import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8">
      <div className="mx-auto max-w--xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Digital Collection
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="max-w-4xl lg:max-w-3xl">
            <p className="text-xl leading-8 text-gray-600">
              The digital collection includes material from several Freedom
              Summer collections in the United States, such as the Mark Levy
              Collection at the Queens College Special Collections and Archives,
              City University of New York and the Freedom Summer Archive at the
              Walter Havighurst Special Collections & University Archives at
              Miami University, originally part of the Western College Memorial
              Archives.
            </p>
            <p className="mt-10 pr-4 text-base leading-6 text-gray-700">
              The Freedom Summer Digital Archive was funded by the Ohio
              Humanities Council, Miami University Libraries, and through the
              generous support of Catherine Ross-Loveland, a 1952 graduate of
              the Western College for Women.
            </p>
          </div>

          <div className="max-w-3xl lg:max-w-lg divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Statements
            </h2>
            <dl className="mt-4 lg:mt-8 space-y-6 divide-y divide-gray-900/10">
              <Disclosure as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      Digitalization Satatement
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    Only a portion of Miami University’s Freedom Summer Archive
                    has been digitized. Researchers are encouraged to explore
                    the full collection housed at the Walter Havighurst Special
                    Collections & University Archives using the{" "}
                    <a
                      href="https://archivesspace.lib.miamioh.edu/repositories/2/archival_objects/21880"
                      className="underlineLink"
                    >
                      collection finding aid
                    </a>
                    .
                  </p>
                </DisclosurePanel>
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
