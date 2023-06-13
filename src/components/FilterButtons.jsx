const FilterButtons = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-evenly rounded-md bg-white p-4">
        <button className="hover:text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
      </div>
    </section>
  );
};

export default FilterButtons;
