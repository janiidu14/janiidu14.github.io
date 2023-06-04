import tech from "@content/techData";

export default function Technologies() {
  return (
    <>
      <section className="pageTop font-inter">

        <div className="flex flex-col gap-14">
          <TechSection technology={tech.languages} />
          <TechSection technology={tech.frameworks} />
          <TechSection technology={tech.system} />
        </div>
      </section>
    </>
  );
}

/* Each Utility Container */
function TechSection({ technology }) {
  return (
    <div>
      <h2 className="font-bold text-xl sm:text-2xl mb-4">
        {technology.title}
      </h2>

      <div className="container pt-5 grid gap-8 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-7 mt-5">
        {technology.data.map((item) => {
          return (
            <div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 my-auto">

              <div className="tile rounded-lg shadow bg-gray-900 relative flex flex-col gap-3 items-center justify-center p-10 ">
                <item.Icon className="utilities-svg fill-white text-xl sm:text-2xl md:text-4xl mb-2" />
                <p className="text-center text-white select-none text-xs font-bold">
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}