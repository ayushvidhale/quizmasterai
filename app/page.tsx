"use client";
import { SignInOrComposer } from "./SignInOrComposer";

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans text-black">
      <br />
      <br />
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center z-50 shadow-md">
        <div className="flex mx-4">
          <img className="w-6 h-6 rounded-md mr-2 my-auto" src="./logo.png" />
          <h1 className="text-xl font-bold my-auto mr-2">Quiz Master AI</h1>
        </div>
        <SignInOrComposer />
      </div>

      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="relative w-full overflow-hidden border-8 border-black md:flex md:border-b lg:min-h-screen">
            <div className="relative flex flex-col px-8 py-24 lg:flex-1 md:justify-center lg:py-8 md:flex-none md:px-24">
              <svg
                className="absolute -top-32"
                width="243"
                height="248"
                viewBox="0 0 243 248"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M231.708 71.0647L161.206 8.36514C152.783 0.874488 141.108 -1.71436 130.409 2.13093L40.5895 31.3609C30.1672 34.8957 22.1395 43.9001 19.828 54.6481L0.822635 146.855C-1.45363 158.191 2.46983 169.474 10.8927 176.964L81.707 239.941C90.1298 247.432 101.804 250.021 112.503 246.175L202.011 216.668C212.433 213.133 220.461 204.129 222.773 193.381L241.743 100.586C244.054 89.8381 240.131 78.5553 231.708 71.0647Z"
                  fill=" #f7d056"
                ></path>
              </svg>

              <svg
                className="absolute z-40 -left-12 top-24"
                width="100"
                height="110"
                viewBox="0 0 100 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.5265 23.259L57.0816 2.60147C52.8471 0.133537 47.6493 0.0338291 43.4216 2.59198L7.6665 22.7676C3.52996 25.1697 0.885071 29.6966 0.82626 34.4752L0.672863 75.3997C0.679686 80.4258 3.32373 84.8963 7.55829 87.3643L43.16 108.113C47.3945 110.581 52.5923 110.681 56.82 108.123L92.4183 87.8557C96.5548 85.4536 99.1997 80.9267 99.2585 76.1481L99.3463 34.976C99.4051 30.1975 96.761 25.7269 92.5265 23.259Z"
                  fill="#00B1E2"
                ></path>
              </svg>

              <svg
                className="absolute -bottom-72 -right-32"
                width="459"
                height="458"
                viewBox="0 0 459 458"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.72"
                  d="M316.515 439.872L440.996 315.546C455.868 300.693 461.953 279.265 455.94 258.956L411.146 88.7917C405.682 69.0312 389.764 53.1328 369.979 47.6753L200.153 2.38729C179.268 -3.06836 157.814 3.00946 142.942 17.8626L17.9105 142.739C3.03884 157.592 -3.04655 179.02 2.96669 199.329L48.311 368.943C53.7753 388.704 69.6935 404.602 89.4787 410.059L260.404 455.346C280.189 460.803 301.643 454.725 316.515 439.872Z"
                  fill="#00B698"
                ></path>
              </svg>
              <svg
                className="absolute -right-12 bottom-12"
                width="172"
                height="159"
                viewBox="0 0 172 159"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M168.082 64.1968L132.975 10.5238C128.781 4.11152 121.58 0.338829 113.873 0.962179L49.7184 4.19253C42.2487 4.66126 35.3766 9.14507 31.9458 15.7886L3.05392 72.9294C-0.458508 79.965 0.107498 88.0669 4.30173 94.4792L39.5643 148.39C43.7585 154.802 50.9596 158.575 58.6663 157.951L122.665 154.483C130.135 154.015 137.007 149.531 140.438 142.887L169.412 85.3544C172.842 78.7109 172.276 70.6091 168.082 64.1968Z"
                  fill="#9095fb"
                ></path>
              </svg>

              <svg
                className="absolute -top-48 -left-32"
                width="388"
                height="349"
                viewBox="0 0 388 349"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M308.263 324.554L381.162 199.258C389.871 184.289 390.191 165.934 381.107 151.022L309.455 24.8932C300.926 10.3018 284.883 0.99126 267.967 0.814372L123.093 0.536351C105.301 0.592816 89.492 9.95828 80.7828 24.9273L7.56102 150.778C-1.14817 165.747 -1.46766 184.102 7.61545 199.014L79.59 324.588C88.1199 339.18 104.162 348.49 121.079 348.667L266.828 348.712C283.745 348.889 299.553 339.523 308.263 324.554Z"
                  fill="#E64F9C"
                ></path>
              </svg>

              <div className="max-w-xl text-left md:pl-12 relative">
                <div className="relative z-40">
                  <img
                    className="h-12 grayscale"
                    src="https://your-image-url-here"
                    alt=""
                  />
                  <p className="mt-8 text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl">
                    Empower Your Job Prep.
                    <span className="text-indigo-500 sm:block">
                      with AI-Powered Questions
                    </span>
                  </p>
                  <p className="max-w-sm mt-4 text-base text-gray-500">
                    Get personalized job prep quizzes, tailored to your skills
                    and the roles you're targeting!
                  </p>
                  <div className="flex flex-col justify-center gap-3 mt-10 md:justify-start sm:items-center sm:flex-row">
                    <a
                      className="flex items-center justify-center h-10 px-4 py-2 text-sm font-semibold text-white transition-all rounded-lg bg-gradient-to-b from-indigo-500 hover:to-indigo-700 to-indigo-600"
                      href="/start-test"
                    >
                      <span>Start Practicing Now!</span>
                    </a>
                    <a
                      className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm text-indigo-600 transition-all bg-white border border-gray-300 rounded-lg md:w-auto md:font-semibold hover:text-indigo-500"
                      href="#_"
                    >
                      Explore Features
                    </a>
                  </div>
                </div>
                {/* <div className="flex flex-col gap-4 mt-10">
                  <p className="text-xs text-gray-500 shrink-0">
                    Trusted by professionals at:
                  </p>
                  <div className="grid items-start grid-cols-4 mx-auto gap-x-8 gap-y-10 sm:grid-cols- sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                    <img
                      className="object-contain object-left w-full col-span-2 lg:col-span-1"
                      src="./images/logos/company1.svg"
                      alt="Company 1"
                      width="158"
                      height="48"
                    />
                    <img
                      className="object-contain object-left w-full col-span-2 lg:col-span-1"
                      src="./images/logos/company2.svg"
                      alt="Company 2"
                      width="158"
                      height="48"
                    />

                    <img
                      className="object-contain object-left w-full col-span-2 lg:col-span-1"
                      src="./images/logos/company3.svg"
                      alt="Company 3"
                      width="158"
                      height="48"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
