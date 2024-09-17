"use client";
import { SignInOrComposer } from "./SignInOrComposer";


export default function Home() {
  return (
      <div className="bg-gray-100 font-sans text-black">
        <br/>
        <br/>
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center shadow-md z-50">
        <div className="flex">
          <h1 className="text-xl font-bold my-auto mr-2">BrainWave</h1>
        </div>
        <SignInOrComposer />

       
      </div>

    <main>
        <section className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Learn Anything with AI-Generated Question</h1>
            
            <div className="max-w-md mx-auto">
                <br/>
                <br/>
          <a href={"/start-test"}
            // onClick={() => window.location.replace("/")} // Refresh page after test creation
            className="bg-purple-600 text-white mt-8 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-30"
          >
            Create Test
          </a>
        </div>
        </section>

        <section className="bg-gray py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">1</div>
                            <h3 className="text-xl font-semibold mb-2">Enter Your Topic</h3>
                            <p>Type in any subject you want to learn about or test your knowledge on.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">2</div>
                            <h3 className="text-xl font-semibold mb-2">AI Generates Questions</h3>
                            <p>Our advanced AI creates a tailored Question based on your chosen topic.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">3</div>
                            <h3 className="text-xl font-semibold mb-2">Take the Question</h3>
                            <p>Answer the Questions and test your knowledge on the subject.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose BrainWave?</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/4 px-4 mb-8">
                        {/* <img src="/api/placeholder/64/64" alt="AI Icon" className="mx-auto mb-4"/> */}
                        <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                        <p>Advanced algorithms ensure high-quality, relevant Questions.</p>
                    </div>
                    <div className="w-full md:w-1/4 px-4 mb-8">
                        {/* <img src="/api/placeholder/64/64" alt="Customization Icon" className="mx-auto mb-4"/> */}
                        <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                        <p>Tailor Question to your specific interests and learning goals.</p>
                    </div>
                    <div className="w-full md:w-1/4 px-4 mb-8">
                        {/* <img src="/api/placeholder/64/64" alt="Learning Icon" className="mx-auto mb-4"/> */}
                        <h3 className="text-xl font-semibold mb-2">Effective Learning</h3>
                        <p>Reinforce knowledge through interactive Question and feedback.</p>
                    </div>
                    <div className="w-full md:w-1/4 px-4 mb-8">
                        {/* <img src="/api/placeholder/64/64" alt="Topics Icon" className="mx-auto mb-4"/> */}
                        <h3 className="text-xl font-semibold mb-2">Endless Topics</h3>
                        <p>Explore any subject, from history to cutting-edge technology.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to Start Learning?</h2>
                <p className="text-xl mb-8">Join thousands of users who are already expanding their knowledge with BrainWave!</p>
                <button className="bg-blue-600 text-black px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold">Get Started for Free</button>
            </div>
        </section> */}
    </main>

    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 BrainWave. All rights reserved.</p>
        </div>
    </footer>
</div>
  );
}
