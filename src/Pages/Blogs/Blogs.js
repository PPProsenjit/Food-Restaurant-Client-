import React from 'react';
import blog1 from '../../assets/image/bogs/sqlvsnosql.jpg'
import blog2 from '../../assets/image/bogs/JWT.jpg'
import blog3 from '../../assets/image/bogs/Jano.jpg'
import blog4 from '../../assets/image/bogs/multiple request.png'

const Blogs = () => {
    return (
        <section className=" dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 ">
			<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44" src={blog1}alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold ">Difference Between SQL VS NoSQL</h3>
					<p>The programming language used to communicate with relational databases is called SQL. (Relational databases represent data as rows and tables of records connected by logical linkages.) NoSQL DBMs are a subset of non-relational DBMs that often do not employ SQL.Although it is dated and somewhat restrictive, SQL is also tried-and-true and is increasingly regarded as a universal interface for data processing. NoSQL databases are fresh and adaptable, yet they're still immature and need for user specialization. Both approaches are helpful in practice and are even developing together.</p>
				</div>
			</div>
			<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog2} alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold ">What is JWT, and how does it work?</h3>
					<p>JWT, or JSON Web Token, is an open standard that allows a client and a server to exchange security-related data. Every JWT has a set of encoded JSON objects, including claims. A cryptographic procedure is used to sign JWTs to ensure that the claims cannot be changed after the token is issued.</p>
                    <p>JWTs are unique among web tokens in that they include a list of claims. Information is sent between two parties through claims. The specific use case will determine what these assertions are. A claim could specify, for instance, who issued the token, how long it is valid, or what authorizations the client has received.</p>
				</div>
			</div>
			<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog3} alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold ">What is the difference between javascript and NodeJS?</h3>
					
					<p>Any browser that has the JavaScript Engine installed may be used to create basic programs using JavaScript. On the other side, Node.js functions as a JavaScript interpreter or execution environment..</p>
                    <p>
                    JAvaScript most commonly used on client-side servers.node.js mainly popular on the server-side.
                    TypedJS, RamdaJS, and other JavaScript frameworks are examples.
                    Nodejs modules include Lodash and Express. All of these modules must be imported from npm
                    </p>
				</div>
			</div>
			<div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog4} alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold ">How does NodeJS handle multiple requests at the same time?</h3>
					<p>Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an endless loop that accepts and handles requests.</p>
				</div>
			</div>
	
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div>
	</div>
</section>
    );
};

export default Blogs;