const ContactHome = () => {
  return (
    <div className="py-24 md:px-24  text-white">
      <div className="md:h-[100vh] h-full w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            height: "100%",
            width: "100%",
          }}
        />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full md:px-24 px-6 bg-black bg-opacity-30">
          <div className="md:w-1/2 w-full space-y-5">
            <h1 className="text-4xl leading-relaxed font-semibold vigaRegular text-[#2C2A77]">
              Contact us
            </h1>
            <h1 className="text-xl font-normal font-exotwo text-white">
              Whether you are a large enterprise looking to augment your teams
              with expert resources or an SME looking to scale your business or
              a startup looking to build something. We are your digital growth
              partner.
            </h1>
            <div className="space-y-1">
              <h1 className="text-xl font-exotwo">
                <span className="font-bold">Tel:</span> +1 408 365 4638
              </h1>
              <h1 className="text-xl font-exotwo">
                <span className="font-bold">Support:</span> +1 (408) 512 1812
              </h1>
            </div>
          </div>
          <div className="md:w-1/2 w-full mt-8 md:mt-0">
            <div className="max-w-md mx-auto p-6 py-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-md text-black rounded-lg">
              <div className="space-y-4 px-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2 bg-transparent text-white"
                    name="name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2 bg-transparent text-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2 bg-transparent text-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Organization"
                    className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2 bg-transparent text-white"
                  />
                </div>
                <div className="relative">
                  <input
                    placeholder="Tell us about your project?"
                    className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2 bg-transparent text-white"
                  />
                </div>

                <div className="text-center max-w-sm">
                  <button className="bg-[#2a286e] w-full text-white px-4 py-2 rounded-full hover:bg-[#34327a] focus:outline-none">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
