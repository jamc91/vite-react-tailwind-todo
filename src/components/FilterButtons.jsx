const FilterButtons = ({ filter, selection }) => {
  return (
    <section className="mt-8">
      <div className="flex justify-evenly rounded-md bg-white p-4 transition-all duration-500 dark:bg-gray-800 ">
        <button
          onClick={() => filter("all")}
          className={`${
            selection === "all" ? "text-blue-600" : "text-gray-500"
          } hover:text-blue-600`}
        >
          All
        </button>
        <button
          onClick={() => filter("incompleted")}
          className={`${
            selection === "incompleted" ? "text-blue-600" : "text-gray-500"
          } hover:text-blue-600`}
        >
          Active
        </button>
        <button
          onClick={() => filter("completed")}
          className={`${
            selection === "completed" ? "text-blue-600" : "text-gray-500"
          } hover:text-blue-600`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default FilterButtons;
