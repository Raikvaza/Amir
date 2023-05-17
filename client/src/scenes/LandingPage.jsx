import React from 'react';
import Appbar from '../components/Appbar';
import Presentation from '../components/Presentation';
import News from '../components/News';
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Appbar/>
      <Presentation/>
      <News/>
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h1 className="text-3xl font-semibold mb-4">Welcome to our App</h1>
          <p className="text-gray-800">
            This is the main content of your landing page. You can add
            different sections, images, and text to provide information
            about your app or product.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;