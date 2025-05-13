import Logo from "../assets/footer_logo.png";
import PhoneIcon from "../assets/phone.png";
import EmailIcon from "../assets/mail.png";
import LocationIcon from "../assets/location.png";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white pt-16 pb-6 px-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 mb-12">
          {/* First Column: Logo, Text, Contact Info */}
          <div className="lg:col-span-4 lg:pr-64">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Whether you're ready to apply now, or just exploring your options,
              our team is here to help you navigate every step of the way.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <img
                  src={PhoneIcon}
                  alt="Phone"
                  className="h-5 w-5 mr-3 mt-0.5"
                />
                <span className="text-gray-400">(914) 722-6669</span>
              </li>
              <li className="flex items-start">
                <img
                  src={EmailIcon}
                  alt="Email"
                  className="h-5 w-5 mr-3 mt-0.5"
                />
                <span className="text-gray-400">hello@lendnav.com</span>
              </li>
              <li className="flex items-start">
                <img
                  src={LocationIcon}
                  alt="Location"
                  className="h-5 w-5 mr-3 mt-0.5"
                />
                <span className="text-gray-400">Long Island, NY</span>
              </li>
            </ul>
          </div>

          {/* Second Column: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-lendnow-300 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Products", "Process", "About", "Contact", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Third Column: Products */}
          <div>
            <h3 className="text-lg font-semibold text-lendnow-300 mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                "Nav Surge",
                "Nav Flex",
                "Nav Term",
                "Nav Equip",
                "Nav Swipe",
                "Nav Commercial",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth Column: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-lendnow-300 mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms & Conditions", "Cookies Settings"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Fifth Column: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-lendnow-300 mb-6">
              Follow Us
            </h3>
            <ul className="space-y-3">
              {["Facebook", "Instagram", "Twitter/X", "YouTube"].map(
                (platform) => (
                  <li key={platform}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {platform}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="pt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-100 text-md mb-4 pb-16 md:mb-0 mx-auto">
              Copyright &copy; {new Date().getFullYear()} Lend Nav. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
