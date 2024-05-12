
const RecoCard = () => {
    return (
<div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800 mt-10 mx-24">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
			<div className="-space-y-1">
				<h2 className="text-sm font-semibold leading-none">leroy_jenkins72</h2>
				{/* <span className="inline-block text-xs leading-none dark:text-gray-600">Somewhere</span> */}
			</div>
		</div>
	</div>
	<img src="https://source.unsplash.com/301x301/?random" alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
	<div className="p-3">

		<div className="space-y-3">
			<p className="text-sm">
				<span className="text-base font-semibold">leroy_jenkins72</span>Nemo ea quasi debitis impedit!
			</p>
			<input type="text" placeholder="Add a comment..." className="w-full py-0.5 dark:bg- border-none rounded text-sm pl-0 dark:text-gray-800" />
		</div>
	</div>
</div>
    );
};

export default RecoCard;