import React from "react";
import { RecomPost } from "./RecomPost";

export const RecomBlog = () => {
  return (
    <section
      className="px-4 py-16 mx-auto border-b-2 border-purple-200 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="recommended"
    >
      <h2 className="text-xl mb-6 font-medium text-gray-900">
        Recommended Blogs
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <RecomPost
          month="Jul"
          day="19"
          tag="Development"
          title="Why I Love Laravel"
          text="Laravel is one of the most powerful web frameworks written in PHP. Pay no attention to the leaky toilet or the gaping pit in the bathroom, but instead these fun little succulents that I’ve placed"
          name="Duke Erlington"
        />
        <RecomPost
          month="Aug"
          day="15"
          tag="Humor"
          title="My Home May Be In Total Disrepair, But You’ve Got To Admit These Succulents Are Nice"
          text="Pay no attention to the leaky toilet or the gaping pit in the bathroom, but instead these fun little succulents that I’ve placed"
          name="Adam Dietz
"
        />
        <RecomPost
          month="Aug"
          day="16"
          tag="Life Lessons"
          title="i just want to read a book
"
          text="is this a new kind of privilege? Pay no attention to the leaky toilet or the gaping pit in the bathroom, but instead these fun little succulents that I’ve placed"
          name="Tony, the Curator"
        />
      </div>
    </section>
  );
};
