import React from 'react'

const Footer = () => {
    return (
        <div>


            
            <footer className="bg-black text-white py-10">
                <div className="container mx-auto flex flex-wrap justify-between">
                    {/* PRODUCT */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-3">PRODUCT</h3>
                        <ul className="list-none">
                            <li>Gen-1</li>
                            <li>Gen-2</li>
                            <li>AI Magic Tools</li>
                            <li>GET STARTED</li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-3">RESOURCES</h3>
                        <ul className="list-none">
                            <li>Runway Research</li>
                            <li>Runway Studios</li>
                            <li>Gen-2 Footage Packs</li>
                            <li>Research</li>
                            <li>Educators</li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
                        <ul className="list-none">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Media Kit</li>
                        </ul>
                    </div>

                    {/* CONNECT */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-3">CONNECT</h3>
                        <ul className="list-none">
                            <li>Press</li>
                            <li>Partnerships</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                            <li>Discord</li>
                        </ul>
                    </div>
                </div>
            </footer>



            <footer className="bg-purple-800 text-white py-4">
                <div className="max-w-screen-xl mx-auto px-4">
                    {/* Footer contents */}
                    This is a purple footer using Tailwind CSS in React.
                </div>
            </footer>
        </div>
    )
}

export default Footer
