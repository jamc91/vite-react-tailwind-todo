const BottomLabels = ({ count, clearCompleted }) => {
  return (
    <section className="flex items-center justify-between rounded-b-md bg-white px-4 py-2">
      <span className="text-sm text-gray-400">{`${count} ${
        count > 1 ? "items" : "item"
      } left`}</span>
      <button
        className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-1 text-sm text-white"
        onClick={() => clearCompleted()}
      >
        Clear completed
      </button>
    </section>
  );
};

export default BottomLabels;
