
const BestSecsion = () => {
    return (
<section className="p-6 dark:bg-gray-100 dark:text-gray-800 bg-[#f2cafd]">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<img src="https://i.ibb.co/GnSZx9D/5362376.jpg" alt="" className="object-cover h-[600px] w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
			<h1 className="text-5xl font-extrabold dark:text-gray-900">Join Us</h1>
			<p className="my-8">
				<span className="font-medium dark:text-gray-900">We are always looking</span> for talented individuals to join our team and contribute to our mission of briefly describe your mission or purpose.
			</p>
			<form noValidate="" action="" className="self-stretch space-y-3">
				<div>
					<label htmlFor="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md p-6 focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div>
					<label htmlFor="lastname" className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full p-6 rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			</form>
				<button className="w-full py-2 font-semibold rounded bg-[#f59f4f] mt-7">Join Rimberio</button>
		</div>
	</div>
</section>
    );
};

export default BestSecsion;