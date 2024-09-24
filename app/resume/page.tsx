import React from 'react'

export default function Resume() {
    return (
        <div className="max-w-3xl mx-auto p-6  rounded-lg shadow-lg">
            <h1 className='mt-20 text-4xl mb-4 text-center font-extrabold font-serif title'>My Resume</h1>
            <h2 className="text-3xl font-bold font-serif">Brandon Funk</h2>
            <p className="italic">Hudsonville, MI 49426</p>
            <p><strong>Cell:</strong> (616) 432-8643</p>
            <p><strong>Email:</strong> <a href="mailto:therealbfunk@gmail.com" className="text-blue-500 underline">therealbfunk@gmail.com</a></p>

            <h2 className="text-3xl font-bold mt-6 title my-4">Objective</h2>
            <p>Aspiring web developer with a strong foundation in front-end and back-end technologies. Eager to transition into a professional role where I can leverage my skills in HTML, CSS, JavaScript, and modern frameworks like React and Next.js. Looking for opportunities in web development or help desk support to contribute to innovative projects and provide technical assistance.</p>

            <h2 className="text-3xl font-bold mt-6 title my-4">Skills</h2>
            <h3 className="font-bold  text-gray-700 dark:text-gray-400">Web Development:</h3>
            <ul className="list-disc list-inside">
                <li>HTML5, CSS3, JavaScript, ES6+</li>
                <li>React.js, Next.js</li>
                <li>Animation Libraries: ThreeJS, Framer-Motion, GSap</li>
                <li>MongoDB, Google Cloud</li>
                <li>RESTful APIs, JSON</li>
                <li>Responsive Web Design, Flexbox, Grid</li>
                <li>Version Control with Git/GitHub</li>
                <li>Web Accessibility (WCAG)</li>
            </ul>

            <h3 className="font-bold mt-4  text-gray-700 dark:text-gray-400">Technical Support:</h3>
            <ul className="list-disc list-inside">
                <li>Troubleshooting hardware/software issues</li>
                <li>Network setup and configuration</li>
                <li>Basic database management</li>
                <li>Customer service and technical support</li>
                <li>Familiarity with operating systems (Windows, macOS, Linux)</li>
            </ul>

            <h3 className="font-bold mt-4 text-gray-700 dark:text-gray-400">Soft Skills:</h3>
            <ul className="list-disc list-inside">
                <li>Strong problem-solving abilities</li>
                <li>Effective communication</li>
                <li>Attention to detail</li>
                <li>Ability to work independently and in teams</li>
                <li>Time management and organization</li>
                <li>Years of Photography, Photo Editing, and other Artistic experience</li>
            </ul>

            <h2 className="text-3xl font-bold mt-6 title my-4">Education</h2>
            <p className="font-bold text-gray-700 dark:text-gray-400">Self-Directed Web Development Study</p>
            <p>2022-Present</p>
            <ul className="list-disc list-inside">
                <li>Completed various online courses and projects in web development.</li>
                <li>Developed a solid understanding of modern web technologies and best practices.</li>
            </ul>

            <p className="font-bold mt-4  text-gray-700 dark:text-gray-400">High School Diploma</p>
            <p>Caledonia High School, Caledonia, MI</p>
            <p>Graduated 2007</p>

            <h2 className="text-3xl font-bold mt-6 title my-4">Relevant Experience</h2>
            <p>Although I do not have formal job experience in web development or help desk roles, I have dedicated significant time to studying and applying my knowledge in personal projects and freelance opportunities. My background in logistics and warehouse management has equipped me with strong problem-solving skills, attention to detail, and the ability to work under pressure—qualities that are essential in technical roles.</p>

            <h2 className="text-3xl font-bold mt-6 title my-4">Web Development Projects</h2>
            <p className='my-8'>Github - <a href="http://www.github.com/codenamebfnk" className="text-blue-500 underline">http://www.github.com/codenamebfnk</a></p>
            <h3 className="font-bold text-gray-700 dark:text-gray-400">Portfolio Website</h3>
            <ul className="list-disc list-inside">
                <li>Built with React.js, CSS, and Google Cloud</li>
                <li>Developed a personal portfolio showcasing my web development skills, projects, and technical expertise.</li>
                <li>Implemented responsive design to ensure the site works across various devices.</li>
                <li>Integrated Google Cloud for hosting and managed domain settings.</li>
            </ul>

            <h3 className="font-bold mt-4 text-gray-700 dark:text-gray-400">E-commerce Website (Demo Project)</h3>
            <ul className="list-disc list-inside">
                <li>Built with Next.js, MongoDB, and Stripe API</li>
                <li>Created a fully functional e-commerce website as a demonstration project.</li>
                <li>Integrated a MongoDB database for product management and Stripe API for payment processing.</li>
                <li>Focused on creating a user-friendly interface with React and Next.js.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-6 title my-4">Additional Experience</h2>
            <p className="font-bold text-gray-700 dark:text-gray-400">Picker/Packer</p>
            <p>Thoroughbred Fulfillment LLC, Zeeland, MI</p>
            <p>January 2019 to April 2022</p>
            <ul className="list-disc list-inside">
                <li>Managed order fulfillment with attention to detail and accuracy.</li>
                <li>Used barcode scanners and shipping applications to ensure efficient processing.</li>
            </ul>

            <p className="font-bold mt-4 text-gray-700 dark:text-gray-400">Cell Analyst/Shipping</p>
            <p>Receiving Warehouse, Grand Rapids, MI</p>
            <p>April 2018 to July 2019</p>
            <ul className="list-disc list-inside">
                <li>Staged and kitted devices, including receiving, configuring, and shipping products.</li>
                <li>Maintained inventory and ensured quality control.</li>
            </ul>

            <p className="font-bold mt-4 text-gray-700 dark:text-gray-400">Dispatch Manager</p>
            <p>Valley Truck Parts, Wyoming, MI</p>
            <p>May 2014 to January 2018</p>
            <ul className="list-disc list-inside">
                <li>Coordinated deliveries and pickups, managed fleet logistics, and ensured operational efficiency.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-6 title my-4">Certifications</h2>
            <p className=' text-gray-700 dark:text-gray-400'>Michigan Technical Education Center 2008</p>
            <p>Certification - Computer Support Technician</p>

            <h2 className="text-3xl font-bold mt-6 title my-4">References</h2>
            <p>Available upon request.</p>
        </div >

    )
}
