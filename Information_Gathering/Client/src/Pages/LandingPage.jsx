function LandingPage() {
    return (
        <>
            {/* <Nav /> */}

            {/* main section start from here  */}
            <main className="main homepage w-full h-screen flex justify-center items-center ">
                <div className="home p-10 font-mono ">
                  <h1 className="text-5xl text-black mb-5 text-center -mt-16">Landing Page</h1>
                    <div className="head mb-20">
                        <h1 className="text-3xl text-black">
                            Student
                            management system website. The website has a simple
                            design with a blue-grey background and a turquoise
                            navigation bar. The website features the following:
                        </h1>
                    </div>

                    <div className="unorderList">
                        <ul className="list-disc list-inside leading-10 ml-20">
                            <li className="">
                                Navigation bar: The navigation bar is at the top
                                and includes links for Home About Services
                                Contact and Logout There is also a profile
                                picture for the logged-in user.
                            </li>
                            <li>
                                Search bar: There is a search bar at the top of
                                the page with the text Find student. The user
                                can type in a students name and search for them.
                            </li>
                            <li>
                                Student information: The main body of the page
                                displays student information, including their
                                name, email, mobile number, course, and
                                enrollment number.
                            </li>
                            <li>
                                Student profile: The profile information for one
                                student is displayed in a separate area. This
                                profile includes a photo, a message box, and a
                                submit button.
                            </li>
                        </ul>
                    </div>
                    <div className="foot mt-20">
                        <h1 className="text-3xl text-black">
                            The image highlights the core functionality of a
                            student management system, allowing users to search
                            for students and view their details. Its likely that
                            the website offers additional features, such as
                            editing student information, creating new student
                            profiles, managing courses, and more.
                        </h1>
                    </div>
                </div>
            </main>

            {/* <Footer /> */}
        </>
    );
}

export default LandingPage;
