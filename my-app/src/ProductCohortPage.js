import React, {useState} from 'react';


const ProductCohortPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white font-['Nunito Sans']">
      {/* Navigation */}
      <nav className="py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="GDSC Logo" className="w-16 h-8" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#1E40AF] hover:text-blue-900">About</a>
            <a href="#" className="text-[#1E40AF] hover:text-blue-900">Projects</a>
            <a href="#" className="text-[#1E40AF] hover:text-blue-900">FAQ</a>
            <a href="#" className="text-[#1E40AF] hover:text-blue-900">Contact</a>
            <button className="bg-[#1E40AF] hover:bg-blue-800 text-white px-6 py-2 rounded-md">
              Apply
            </button>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg className="w-6 h-6 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#" className="block text-[#1E40AF] hover:text-blue-900">About</a>
            <a href="#" className="block text-[#1E40AF] hover:text-blue-900">Projects</a>
            <a href="#" className="block text-[#1E40AF] hover:text-blue-900">FAQ</a>
            <a href="#" className="block text-[#1E40AF] hover:text-blue-900">Contact</a>
            <button className="bg-[#1E40AF] hover:bg-blue-800 text-white w-full px-6 py-2 rounded-md">
              Apply
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-[#1E40AF] text-xl font-semibold">Build Real-World Products with the</p>
              <h1 className="text-5xl font-bold text-black">
                UC Davis
                <div>Product Cohort</div>
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-xl">
              This cohort focuses on collaborating with real-world startups to deliver a fully-functional product, simulating the experience of working in a professional environment.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#1E40AF] hover:bg-blue-800 text-white px-8 py-2 rounded-md">
                Join our cohort
              </button>
              <button className="border border-[#1E40AF] text-[#1E40AF] hover:bg-blue-50 px-8 py-2 rounded-md">
                Contact us
              </button>
            </div>
          </div>

          {/* Single Image */}
          <div className="h-full w-full">
            <img 
              src="images/cohort.png" 
              alt="UC Davis Product Cohort" 
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black">Why join the Product Cohort?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> {/* Added 'items-center' for vertical alignment */}
            <div className="space-y-6">
              <p className="text-[#1E40AF] text-xl font-semibold">
                Because we turn your skills into tangible results!
              </p>
              <div className="space-y-4 text-gray-600">
                <p>
                  Do you want to take your development/design skills to the next level? 
                  Are you ready to collaborate with a startup and create a product that makes an impact?
                </p>
                <p>
                  The UC Davis Google Developer Student Club's Product Cohort is the opportunity you've been waiting for.
                </p>
                <p>
                  In this hands-on cohort, you won't just learn—you'll do. You will join a small, 
                  dynamic team tasked with building a functional website for an innovative startup. 
                  Together, you'll experience the thrill and challenges of working in a fast-paced, 
                  real-world environment.
                </p>
              </div>
              <div className="flex space-x-4">
                {/* Replace Buttons with regular buttons */}
                <button className="bg-[#1E40AF] hover:bg-blue-800 text-white px-8 py-2 rounded-md">
                  View our projects
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full bg-white rounded-xl"> {/* Removed 'h-full' and adjusted container */}
                <img src="/images/network.png" alt="Network visualization" className="w-full object-cover rounded-xl" /> {/* Removed 'h-full' */}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Rest of the sections remain the same */}
      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-black">Benefits of the Product Cohort</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Benefits items */}
            <BenefitItem
              iconSrc="/images/yellowicon.png"
              title="Hands-on Experience"
              description="This cohort gives you the chance to work in a real-world scenario with real deadlines, clients, and deliverables. By the end of the project, you'll have a fully developed website to showcase in your portfolio."
            />
            <BenefitItem
              iconSrc="/images/blueicon.png"
              title="Mentorship That Matters"
              description="With guidance from experienced product managers who know the ins and outs of launching professional websites, you'll navigate through the complexities of client communication and team dynamics."
            />
            <BenefitItem
              iconSrc="/images/greenicon.png"
              title="A Professional Network"
              description="Working with a startup means you're not just gaining experience—you're building relationships. The connections you make in our cohort could open doors to internships or even startup ventures of your own."
            />
          </div>
        </div>

      </section>

      {/* Footer remains the same */}
      <footer className="py-12 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="GDSC Logo" className="w-12 h-6" />
              <div className="text-sm text-gray-600">
                Google Developer Student Clubs
                <div>University of California, Davis</div>
              </div>
            </div>
          </div>
          <FooterColumn
            title="Links"
            items={['About', 'Apply', 'Projects']}
          />
          <FooterColumn
            title="Students"
            items={['FAQ', 'Contact', 'Newsletter']}
          />
          <div className="space-y-4">
            <h4 className="font-semibold text-black">Follow Us</h4>
            <div className="flex space-x-4">
              <img src="/images/links.png" alt="Instagram" className="w-30 h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components remain the same
const BenefitItem = ({ iconSrc, title, description }) => (
  <div className="flex items-start space-x-4">
    <img src={iconSrc} alt={title} className="w-12 h-12" />
    <div>
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FooterColumn = ({ title, items }) => (
  <div className="space-y-4">
    <h4 className="font-semibold text-black">{title}</h4>
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item}>
          <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductCohortPage;