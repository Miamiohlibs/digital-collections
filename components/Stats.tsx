const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Transactions every 24 hours", value: "44 million" },
  { id: 3, name: "Assets under holding", value: "$119 trillion" },
  { id: 4, name: "New users annually", value: "46,000" },
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
              <dt className="text-gray-800">{stat.name}</dt>
              <dd className="order-first text-4xl text-white sm:text-5xl stat-text">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
