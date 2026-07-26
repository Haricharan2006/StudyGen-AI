function StatsCard({ title, value, color }) {
  return (
    <div
       className={`rounded-xl p-6 shadow-lg text-white ${color}
        hover:scale-105 transition-transform duration-300 cursor-pointer`}
         >
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;