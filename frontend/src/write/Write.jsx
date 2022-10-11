import React from "react";

export const Write = () => {
  return (
    <section className="md:container p-6 ml-24 text-gray-900 md:w-[60vw]">
      <h2 className="text-gray-900 mb-4">Draft your story</h2>
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="w-[60vw] object-cover h-64 mx-auto bg-center rounded-lg md:w-full"
        alt=""
      />
      <form
        novalidate=""
        action=""
        className="flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <div className="col-span-full">
              <div className="w-full flex justify-between mb-4">
                <label htmlFor="title" className="text-sm cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-gray-900 hover:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </label>
                <input
                  id="title"
                  type="file"
                  placeholder="Title"
                  className=" hidden w-full mb-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-300 border-gray-700 text-gray-900"
                />
                <button className="inline-flex items-center justify-center h-8 px-4 tracking-wide text-gray-100 transition duration-200 rounded-full shadow-md bg-gray-900 outline outline-offset-2 outline-2 hover:outline-purple-300 hover:text-purple-300 focus:shadow-outline focus:outline-none">
                  Publish
                </button>
              </div>
              <input
                id="title"
                type="text"
                placeholder="Title"
                autoFocus={true}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-300 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Tell your story
              </label>
              <textarea
                id="bio"
                placeholder="Tell your story..."
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-300 border-gray-700 text-gray-900"
              ></textarea>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
