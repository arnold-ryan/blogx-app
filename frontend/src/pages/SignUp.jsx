import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-700">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
        </div>
        <form novalidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm">
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="user@BlogX.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="user@BlogX.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <div className="mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <div className="mb-2">
                <label for="password" className="text-sm">
                  Confirm password
                </label>
              </div>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-purple-400 text-gray-900"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?
              <Link to="/SignIn">
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="hover:underline text-purple-400"
                >
                  Sign in
                </a>
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
