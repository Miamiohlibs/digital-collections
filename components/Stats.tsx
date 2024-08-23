const stats = [
  { id: 1, name: "pages", value: "844" },
  { id: 2, name: "photographs", value: "212" },
  { id: 3, name: "videos", value: "59" },
  { id: 4, name: "sound recordings", value: "11" },
];

export default function Stats() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-0 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-gray-800 text-2xl">{stat.name}</dt>
              <dd className="order-first text-7xl text-white sm:text-8xl stat-text">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
