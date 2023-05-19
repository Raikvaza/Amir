import React from 'react';
import Appbar from '../components/Appbar';
import Presentation from '../components/Presentation';
import News from '../components/News';
import Display from '../components/Display';
const LandingPage = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<Appbar />
			<Presentation />
			<News />
			<Display />
			{/* <main className="container mx-auto px-4 py-8">
				<div className="rounded-lg bg-white p-4 shadow-md">
					<h1 className="mb-4 text-3xl font-semibold">Welcome to our App</h1>
					<p className="text-gray-800">
						This is the main content of your landing page. You can add different
						sections, images, and text to provide information about your app or
						product.
					</p>
				</div>
			</main> */}
		</div>
	);
};

export default LandingPage;
