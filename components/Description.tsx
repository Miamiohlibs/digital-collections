import Statements from "./Statements";

const Description = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Digital Collection
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              The digital collection includes material from several Freedom
              Summer collections in the United States, such as the Mark Levy
              Collection at the Queens College Special Collections and Archives,
              City University of New York and the Freedom Summer Archive at the
              Walter Havighurst Special Collections & University Archives at
              Miami University, originally part of the Western College Memorial
              Archives.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                The Freedom Summer Digital Archive was funded by the Ohio
                Humanities Council, Miami University Libraries, and through the
                generous support of Catherine Ross-Loveland, a 1952 graduate of
                the Western College for Women.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              <div className="flex flex-col-reverse gap-y-4">
                <Statements />
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Description;
