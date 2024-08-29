import React from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Statements = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 gap-y-12 flex flex-col">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Statements
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure as="div" className="pt-6">
            <dt>
              <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                <span className="text-base font-semibold leading-7">
                  Digitalization Satatement
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <PlusSmallIcon
                    aria-hidden="true"
                    className="h-6 w-6 group-data-[open]:hidden"
                  />
                  <MinusSmallIcon
                    aria-hidden="true"
                    className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" className="mt-2 pr-12">
              <p className="text-base leading-7 text-gray-600">
                Only a portion of Miami University’s Freedom Summer Archive has
                been digitized. Researchers are encouraged to explore the full
                collection housed at the Walter Havighurst Special Collections &
                University Archives using the{" "}
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
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Search
        </h2>
        <form></form>
      </div>
    </div>
  );
};

export default Statements;
