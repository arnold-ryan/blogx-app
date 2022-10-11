import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonSignIn, ButtonSignUp, MenuButton, MobileButton } from "./Button";
import {
  NavLink,
  MobileSignUp,
  MobileSignIn,
  SearchLink,
  // AvatarLink,
  LogoLink,
  MobileLogo,
} from "./Link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOpen = () => setIsMenuOpen(true);
  const menuClose = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-900 border-b-2 border-purple-300 sticky top-0 z-10">
      <div className="px-4 py-5 mx-auto max-w-full lg:max-w-screen-xl md:px-16 lg:px-8">
        <nav className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <LogoLink />
            </Link>
            <ul className="hidden items-center space-x-8 lg:flex">
              {/* <li>
                <NavLink name="Read" link="#latest" label="read" title="read" />
              </li> */}
              <li>
                <Link to="/signin">
                  <NavLink name="Write" link="#" label="write" title="write" />
                </Link>
              </li>
              {/* <li>
                <Link to="Membership">
                  <NavLink
                    name="Membership"
                    link="#"
                    label="membership"
                    title="membership"
                  />
                </Link>
              </li> */}
              {/* <li>
                <Link to="AboutUs">
                  <NavLink
                    name="About Us"
                    link="#"
                    label="about us"
                    title="about us"
                  />
                </Link>
              </li> */}
            </ul>
          </div>
          <SearchLink />
          <ul className="hidden items-center space-x-2 lg:flex">
            <li>
              <Link to="/signin">
                <ButtonSignIn
                  name="Sign in"
                  link="#"
                  label="sign in"
                  title="sign in"
                />
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <ButtonSignUp
                  name="Sign up"
                  link="#"
                  label="sign up"
                  title="sign up"
                />
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <MenuButton handleClick={menuOpen} />
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-gray-900 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {/* <AvatarLink /> */}
                      <MobileLogo />
                    </div>
                    <div>
                      <MobileButton handleClick={menuClose} />
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          name="Read"
                          link="#"
                          label="read"
                          title="read"
                        />
                      </li>
                      <li>
                        <NavLink
                          name="Write"
                          link="#"
                          label="write"
                          title="write"
                        />
                      </li>
                      <li>
                        <NavLink
                          name="Membership"
                          link="#"
                          label="membership"
                          title="membership"
                        />
                      </li>
                      <li>
                        <NavLink
                          name="About Us"
                          link="#"
                          label="about us"
                          title="about us"
                        />
                      </li>
                      <li>
                        <MobileSignIn />
                      </li>
                      <li>
                        <MobileSignUp />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
