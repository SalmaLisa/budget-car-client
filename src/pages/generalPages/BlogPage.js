import React from "react";


const BlogPage = () => {
  return (
    <div className="bg-gradient-to-tr from-yellow-100 via-zinc-100  to-yellow-100">
      <div className="relative md:flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x  divide-yellow-500 lg:ml-72 md:ml-24 pt-16 hidden">
        <div className="p-3 space-y-1 xl:ml-6">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* ============= question and answer part ===============*/}
      <div className="pt-10 md:pt-0">
      <h1 className="text-3xl text-center font-bold mb-8 py-5  md:w-2/5 md:mx-auto mx-5 border-l-4 border-r-4 border-yellow-500">You may want to know</h1>
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2">
          <div className="duration-300 transform bg-yellow-100 border-l-8 border-zinc-500 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 border-l-zinc-600 rounded-r shadow-sm">
              <h6 className="mb-4 text-xl font-semibold leading-5">
                What are the different ways to manage a state in a React
                application?
              </h6>
              <p className="text-sm text-gray-900">
                There are Four Kinds of React State to Manage <br />
                <br />
                <span className="font-bold"> Local (UI) state –</span> Local
                state is data we manage in one or another component. Local state
                is most often managed in React using the useState hook. For
                example, local state would be needed to show or hide a modal
                component or to track values for a form component, such as form
                submission, when the form is disabled and the values of a form’s
                inputs. <br />
                <br />
                <span className="font-bold"> Global (UI) state –</span> Global
                state is data we manage across multiple components. Global state
                is necessary when we want to get and update data anywhere in our
                app, or in multiple components at least. A common example of
                global state is authenticated user state. If a user is logged
                into our app, it is necessary to get and change their data
                throughout our application. <br />
                <br />
                <span className="font-bold"> Server state –</span> Data that
                comes from an external server that must be integrated with our
                UI state. Server state is a simple concept, but can be hard to
                manage alongside all of our local and global UI state. <br />
                <br />
                <span className="font-bold"> URL state –</span> Data that exists
                on our URLs, including the pathname and query parameters. URL
                state is often missing as a category of state, but it is an
                important one. In many cases, a lot of major parts of our
                application rely upon accessing URL state. Try to imagine
                building a blog without being able to fetch a post based off of
                its slug or id that is located in the URL!
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-yellow-100 border-l-8 border-zinc-500  hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0  rounded-r shadow-sm">
              <h6 className="mb-4 text-xl font-semibold leading-5">
                React vs. Angular vs. Vue?
              </h6>
              <p className="text-sm text-gray-900">
                <span className="font-bold">Angular</span> is the most mature of the frameworks, has good backing
                in terms of contributors and is a complete package. However, the
                learning curve is steep and concepts of development in Angular
                may put off new developers. Angular is a good choice for
                companies with large teams and developers who already use
                TypeScript.
                <br /> <br />
                <span className="font-bold">React</span> is just old enough to be mature and has a huge number of
                contributions from the community. It has gained widespread
                acceptance. The job market for React is really good, and the
                future for this framework looks bright. React looks like a good
                choice for someone getting started with front-end JavaScript
                frameworks, startups, and developers who like some flexibility.
                The ability to integrate with other frameworks seamlessly gives
                it a great advantage for those who would like some flexibility
                in their code.
                <br /> <br />
                <span className="font-bold">Vue</span> is newest to the arena, without the backing of a major
                company. However, it has done really well in the last few years
                to come out as a strong competitor for Angular and React, and
                especially so with the release of Vue 3.0. This is perhaps
                playing a role with a lot of Chinese giants like Alibaba and
                Baidu picking Vue as their primary front-end JavaScript
                framework. Vue should be your choice if you prefer simplicity,
                but also like flexibility.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-yellow-100 border-l-8 border-zinc-500 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0  rounded-r shadow-sm">
              <h6 className="mb-4 text-xl font-semibold leading-5">
                How does prototypical inheritance work?
              </h6>
              <p className="text-sm text-gray-900">
                Simply put, prototypical inheritance refers to the ability to
                access object properties from another object. We use a
                JavaScript prototype to add new properties and methods to an
                existing object constructor. We can then essentially tell our JS
                code to inherit properties from a prototype. Prototypical
                inheritance allows us to reuse the properties or methods from
                one JavaScript object to another through a reference pointer
                function. <br />
                <br />
                All JavaScript objects inherit properties and methods from a
                prototype: <br /> <br />
                Date objects inherit from Date.prototype. Array objects inherit
                from Array.prototype. Player objects inherit from
                Player.prototype.
                <br />
                The Object.prototype is on top of the prototype inheritance
                chain. ​ Date objects, Array objects, and Player objects all
                inherit from Object.prototype.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-yellow-100 border-l-8 border-zinc-500 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0  rounded-r shadow-sm">
              <h6 className="mb-4 text-xl font-semibold leading-5">
                What is a unit test? Why should we write unit tests?
              </h6>
              <p className="text-sm text-gray-900">
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important. In his book "Working Effectively with Legacy Code",
                author Michael Feathers states that such tests are not unit
                tests when they rely on external systems: “If it talks to the
                database, it talks across the network, it touches the file
                system, it requires system configuration, or it can't be run at
                the same time as any other test." <br /> <br />
                Unit testing ensures that all code meets quality standards
                before it's deployed. This ensures a reliable engineering
                environment where quality is paramount. Over the course of the
                product development life cycle, unit testing saves time and
                money, and helps developers write better code, more efficiently
              </p>
            </div>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogPage;
