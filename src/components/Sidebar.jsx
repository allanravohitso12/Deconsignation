import {
  LayoutDashboard,
  FilePlus,
  History,
  BarChart3,
} from "lucide-react";

const Sidebar = ({ active, setActive }) => {
  const menus = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Nouvelle saisie",
      icon: <FilePlus size={20} />,
    },
    {
      name: "Historique",
      icon: <History size={20} />,
    },
    {
      name: "Statistiques",
      icon: <BarChart3 size={20} />,
    },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">
        Déconsignation
      </h1>

      <ul className="space-y-3">
        {menus.map((menu) => (
          <li
            key={menu.name}
            onClick={() => setActive(menu.name)}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
              active === menu.name
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            {menu.icon}
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;