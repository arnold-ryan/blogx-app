export const Settings = () => {
  return (
    <section className="p-6 bg-white text-gray-900 ml-20">
      <form
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Information</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-300 border-gray-700 text-gray-900 capitalize"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-300 border-gray-700 text-gray-900 capitalize"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-300 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-300 border-gray-700 text-gray-900"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-300 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Website
              </label>
              <input
                id="website"
                type="text"
                placeholder="https://"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-300 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-300 border-gray-700 text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Photo
              </label>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/30x30/?random"
                  alt=""
                  className="w-10 h-10 rounded-full bg-gray-900"
                />
                <label
                  htmlFor="photo"
                  className="inline-flex items-center justify-center h-8 px-4 tracking-wide text-gray-100 transition duration-200 rounded-full shadow-md bg-gray-900 outline outline-offset-2 outline-2 hover:outline-purple-300 hover:text-purple-300 focus:shadow-outline focus:outline-none cursor-pointer"
                >
                  Change
                </label>
                <input
                  id="photo"
                  type="file"
                  placeholder="Title"
                  className=" hidden w-full mb-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-300 border-gray-700 text-gray-900"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div className="ml-6 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
          <button
            type="button"
            className="inline-flex items-center justify-center h-8 px-4 tracking-wide text-gray-100 transition duration-200 rounded-full shadow-md bg-gray-900 outline outline-offset-2 outline-2 hover:outline-purple-300 hover:text-purple-300 focus:shadow-outline focus:outline-none"
          >
            Update profile
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center h-8 px-4 sm:mr-4 tracking-wide text-gray-100 transition duration-200 rounded-full shadow-md bg-gray-900 outline outline-offset-2 outline-2 hover:outline-purple-300 hover:text-purple-300 focus:shadow-outline focus:outline-none"
          >
            Delete account
          </button>
        </div>
      </form>
    </section>
  );
};
