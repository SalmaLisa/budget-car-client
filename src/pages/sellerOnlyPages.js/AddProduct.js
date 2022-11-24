import React from 'react';

const AddProduct = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-900 ">
	<form  className="container flex flex-col mx-auto  ">
		<fieldset className="p-6 rounded-md shadow-sm bg-gray-50">
		
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="productName" className="text-sm">Product Name</label>
					<input id="productName" type="text" placeholder="Product Name" className="w-full px-4 py-3 rounded-md  focus:outline-none border text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="" className="text-sm">Product Photo</label>
					<input type="file" className="file-input file-input-bordered w-full " />
				</div>
				
				<div className="col-span-full">
					<label htmlFor="location" className="text-sm">Location</label>
					<input id="location" type="text" placeholder="" className="w-full rounded-md  px-4 py-3 focus:outline-none border  text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="resalePrice" className="text-sm">Resale Price</label>
					<input id="resalePrice" type="text" placeholder="" className="w-full  px-4 py-3 rounded-md  focus:outline-none border text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="originalPrice" className="text-sm">Original Price</label>
					<input id="originalPrice" type="text" placeholder="" className="w-full  px-4 py-3 rounded-md  focus:outline-none border " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="useYear" className="text-sm">Year if Use</label>
					<input id="useYear" type="text" placeholder="" className="w-full  px-4 py-3 rounded-md  focus:outline-none border " />
				</div>
			</div>
		</fieldset>
		<fieldset className=" p-6 rounded-md border-t-2 my-10 shadow-sm bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
            
            <p className="text-2xl text-center mb-3 text-gray-700">Seller Information</p>
      
				
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full px-4 py-3 rounded-md  focus:outline-none border text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="text" placeholder="Email" className="w-full px-4 py-3 rounded-md  focus:outline-none border text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Phone Number</label>
					<input id="phone" type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md  focus:outline-none border text-gray-900" />
				</div>
				
			</div>
				<input type="submit" value="Add Product" className='bg-yellow-100 border-yellow-400 border my-6 px-5 py-3' />
		</fieldset>
	</form>
</section>
  );
};

export default AddProduct;