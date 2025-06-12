import Image from "next/image";
import Link from "next/link";

export default function Agents() {
  // Sample agents data
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years in real estate, Sarah has helped hundreds of clients find their dream homes. Her expertise in luxury properties and market trends is unmatched.",
      phone: "(310) 555-1234",
      email: "sarah.johnson@homefindr.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      specialties: ["Luxury Homes", "Residential", "Investment Properties"],
      areas: ["Beverly Hills", "Bel Air", "Hollywood Hills"]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Senior Real Estate Agent",
      bio: "Michael specializes in residential properties and has been a top-performing agent for the past 10 years. His dedication to client satisfaction is his top priority.",
      phone: "(310) 555-5678",
      email: "michael.rodriguez@homefindr.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      specialties: ["Residential", "First-Time Buyers", "Urban Properties"],
      areas: ["Downtown", "West Side", "South Bay"]
    },
    {
      id: 3,
      name: "Jessica Chen",
      role: "Real Estate Agent",
      bio: "Jessica brings a fresh perspective to real estate with her background in interior design. She helps clients see the potential in every property.",
      phone: "(310) 555-9012",
      email: "jessica.chen@homefindr.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      specialties: ["Residential", "Condos", "Home Staging"],
      areas: ["Marina District", "Pacific Heights", "Nob Hill"]
    },
    {
      id: 4,
      name: "David Williams",
      role: "Commercial Property Specialist",
      bio: "David has extensive experience in commercial real estate, helping businesses find the perfect locations to thrive. His network in the industry is extensive.",
      phone: "(310) 555-3456",
      email: "david.williams@homefindr.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      specialties: ["Commercial", "Retail Spaces", "Office Buildings"],
      areas: ["Financial District", "SoMa", "Union Square"]
    },
    {
      id: 5,
      name: "Sophia Martinez",
      role: "Luxury Property Specialist",
      bio: "Sophia specializes in high-end properties and provides a white-glove service to her discerning clients. Her attention to detail is remarkable.",
      phone: "(310) 555-7890",
      email: "sophia.martinez@homefindr.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      specialties: ["Luxury Homes", "Waterfront Properties", "High-Rise Condos"],
      areas: ["Malibu", "Santa Monica", "Newport Beach"]
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Investment Property Specialist",
      bio: "Robert helps investors maximize their returns through strategic real estate acquisitions. His background in finance provides valuable insights.",
      phone: "(310) 555-2345",
      email: "robert.kim@homefindr.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      specialties: ["Investment Properties", "Multi-Family Units", "Fix and Flip"],
      areas: ["Silicon Valley", "East Bay", "South Bay"]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Agents</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our team of dedicated real estate professionals who are committed to helping you find your perfect property.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src={agent.image}
                  alt={agent.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{agent.name}</h2>
                <p className="text-blue-600 font-medium mb-4">{agent.role}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{agent.bio}</p>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.areas.map((area, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {agent.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {agent.email}
                  </div>
                  <Link href="#" className="block text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Contact Agent
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                Are you a passionate real estate professional looking to take your career to the next level? We're always looking for talented individuals to join our team at HomeFindr.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Competitive commission structure
                </li>
                <li className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing training and development
                </li>
                <li className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Marketing and administrative support
                </li>
                <li className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Collaborative and supportive work environment
                </li>
              </ul>
              <Link href="/contact" className="inline-block py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Real estate team meeting"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}