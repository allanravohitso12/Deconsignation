const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="border p-3 rounded-xl w-full mb-4"
    />
  );
};

export default SearchBar;
