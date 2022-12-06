import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo (2).png";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
	const [navbar, setNavbar] = useState(false);
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(err => console.error(err));
	}


	return (
		<header className=" dark:bg-gray-800 dark:text-gray-100">

			<div className="container pt-5 flex justify-around lg:h-16 h-auto mx-auto md:justify-center md:space-x-8">

				<Link to='' aria-label="Back to homepage" className="flex justify-start lg:hidden p-2">
					<img src={logo} fill="currentColor" viewBox="0 0 32 32" className="w-30 h-40 dark:text-violet-400" alt='' />
				</Link>
				<ul className={`items-stretch space-x-3 md:flex ${navbar ? "block" : "hidden"}`}>
					<li >
						<Link to='/' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
					</li>
					<li >
						<Link to='/foodmenu' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Food Menu</Link>
					</li>
					<li >
						{
							user?.email?<Link to='/addmenu' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Add Menu</Link>:
							<></>
						}
					</li>


				</ul>
				<Link to='' aria-label="Back to homepage" className="md:flex items-center hidden pb-6">
					<img src={logo} fill="currentColor" viewBox="0 0 32 32" className="w-30 h-40 dark:text-violet-400" alt='' />
				</Link>
				<ul className={`items-stretch space-x-3 md:flex ${navbar ? "block" : "hidden"}`}>
					<li >
						<Link to='/faq' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ</Link>
					</li>
					<li >
						<Link to='/blogs' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
					</li>


				</ul>
				<ul className={`items-stretch space-x-3 md:flex ${navbar ? "block" : "hidden"}`}>

					{
						user?.email ? <>
							<li >
								<Link to='/userreview' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">My Review</Link>
							</li>

							<li>
								<button onClick={handleLogOut} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Logout</button>
							</li>
							<div className=' text-white mb-2'>
								<h3>
									{user?.displayName}

								</h3>
							</div>
						</>
							: <>
								<li >
									<Link to='/login' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Sign in</Link>
								</li>
								<li >
									<Link to='/signup' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Register</Link>
								</li>
							</>
					}
				</ul>
				<div>
					<div className="flex items-center justify-between py-3 md:py-5 md:block">

						<div className="md:hidden">
							<button
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 text-white"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

			</div>

		</header>
	);
};

export default Header;