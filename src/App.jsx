import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat">
        <header className="container mx-auto px-4">
          <div className="flex justify-between py-6">
            <h1 className="text-2xl font-semibold uppercase tracking-[0.4em] text-white">
              Todo
            </h1>
            <button className="">
              <MoonIcon />
            </button>
          </div>
          <form className="flex items-center gap-2 overflow-hidden rounded-md bg-white px-4 py-2">
            <span className="border-sm inline-block h-5 w-5 rounded-full border-2"></span>
            <input
              className="w-full text-gray-400 outline-none"
              type="text"
              placeholder="create a new todo"
            />
          </form>
        </header>
        <main className="container mx-auto mt-8 px-4 ">
          <div className="rounded-md bg-white">
            <article className="flex items-center gap-2 border-b border-b-gray-200 p-4">
              <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
              <p className="grow text-gray-600">
                Complete online javascript course in bluuweb
              </p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex items-center gap-2 border-b border-b-gray-200 p-4">
              <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
              <p className="grow text-gray-600">
                Complete online javascript course in bluuweb
              </p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex items-center gap-2 border-b border-b-gray-200 p-4">
              <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
              <p className="grow text-gray-600">
                Complete online javascript course in bluuweb
              </p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <section className="flex justify-between p-4">
              <span className="text-gray-400">5 items left</span>
              <button className="text-gray-400">clear completed</button>
            </section>
          </div>
        </main>

        <section className="container mx-auto mt-8 px-4">
          <div className="flex justify-evenly rounded-md bg-white p-4">
            <button className="hover:text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </div>
        </section>

        <section className="mt-8 text-center text-sm text-gray-400">
          Drag and drop reorder list
        </section>
      </div>
    </>
  );
};

export default App;
