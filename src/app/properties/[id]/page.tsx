import Image from "next/image";
import Link from "next/link";

// This is a mock function that would typically fetch data from an API
function getPropertyData(id: string) {
  // Mock property data
  const properties = [
    {
      id: "1",
      title: "Modern Luxury Villa",
      description: "This stunning modern villa features open concept living spaces, high ceilings, and premium finishes throughout. The gourmet kitchen includes top-of-the-line appliances and a large center island. The primary suite offers a spa-like bathroom and walk-in closet. Outside, you'll find a beautifully landscaped yard with a swimming pool and outdoor kitchen, perfect for entertaining.",
      price: "$1,250,000",
      beds: 4,
      baths: 3,
      sqft: 2800,
      location: "Beverly Hills, CA",
      address: "123 Luxury Lane, Beverly Hills, CA 90210",
      type: "Single Family",
      status: "For Sale",
      features: [
        "Gourmet Kitchen", "Swimming Pool", "Home Office", "Walk-in Closets",
        "Smart Home Technology", "Hardwood Floors", "Fireplace", "Central Air",
        "Attached Garage", "Patio/Deck"
      ],
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b41df22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      agent: {
        name: "Sarah Johnson",
        phone: "(310) 555-1234",
        email: "sarah.johnson@homefindr.com",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      }
    }
  ];
  
  return properties.find(property => property.id === id) || null;
}

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const property = getPropertyData(params.id);
  
  if (!property) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the property you are looking for does not exist or has been removed.
          </p>
          <Link href="/properties" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Browse Other Properties
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <ol className="flex text-sm text-gray-500">
            <li className="flex items-center">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link href="/properties" className="hover:text-blue-600">Properties</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-blue-600">{property.title}</li>
          </ol>
        </nav>
        
        {/* Property Title and Status */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
            <p className="text-lg text-gray-600">{property.address}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className={`text-sm font-semibold px-3 py-1 rounded ${property.status === 'For Sale' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
              {property.status}
            </span>
            <p className="text-2xl font-bold text-blue-600 mt-2">{property.price}</p>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 relative h-96">
              <Image 
                src={property.images[0]}
                alt={property.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
            {property.images.slice(1, 4).map((image, index) => (
              <div key={index} className="relative h-56">
                <Image 
                  src={image}
                  alt={`${property.title} - Image ${index + 2}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-6">{property.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="block text-gray-500 text-sm">Bedrooms</span>
                  <span className="block text-gray-900 font-semibold text-lg">{property.beds}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="block text-gray-500 text-sm">Bathrooms</span>
                  <span className="block text-gray-900 font-semibold text-lg">{property.baths}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="block text-gray-500 text-sm">Area</span>
                  <span className="block text-gray-900 font-semibold text-lg">{property.sqft} sqft</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="block text-gray-500 text-sm">Type</span>
                  <span className="block text-gray-900 font-semibold text-lg">{property.type}</span>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Features & Amenities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Map (Placeholder) */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map would be displayed here</p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Agent Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Listing Agent</h2>
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 mr-4">
                  <Image 
                    src={property.agent.image}
                    alt={property.agent.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{property.agent.name}</h3>
                  <p className="text-sm text-gray-600">Licensed Real Estate Agent</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {property.agent.phone}
                </p>
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {property.agent.email}
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Request Information</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue={`I am interested in ${property.title} (${property.address}).`}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Similar Properties (Just placeholder) */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Properties</h2>
          <p className="text-gray-600">Similar properties would be displayed here</p>
        </div>
      </div>
    </div>
  );
}