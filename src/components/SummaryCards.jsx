import { formatNumber } from "../utils/formatNumber";

const SummaryCards = ({
  totalCgt,
  totalAr,
  facture,
  aPayer,
  avance,
  reste,
}) => {
  const cards = [
  {
    title: "TOTAL CGT",
    value: totalCgt,
    color: "bg-blue-500",
  },

  {
    title: "TOTAL AR",
    value: `${formatNumber(totalAr)} Ar`,
    color: "bg-green-500",
  },

  {
    title: "FACTURE",
    value: `${formatNumber(facture)} Ar`,
    color: "bg-purple-500",
  },

  {
    title: "A PAYER",
    value: `${formatNumber(aPayer)} Ar`,
    color: "bg-orange-500",
  },

  {
    title: "AVANCE",
    value: `${formatNumber(avance)} Ar`,
    color: "bg-cyan-500",
  },

  {
    title: "RESTE",
    value: `${formatNumber(reste)} Ar`,
    color: "bg-red-500",
  },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white rounded-xl shadow-md p-4 min-h-[110px]`}
        >
          <h2 className="text-gray-500 text-sm">
            {card.title}
          </h2>

          <p className="text-2xl font-bold mt-2">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
