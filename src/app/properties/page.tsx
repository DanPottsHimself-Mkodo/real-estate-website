"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// DateRangePicker component
type DateRangePickerProps = {
  maxMonthsRange: number;
  onChange: (dates: { startDate: string; endDate: string }) => void;
};

function DateRangePicker({ maxMonthsRange = 6, onChange }: DateRangePickerProps) {
  // Initialize dates - today and X months from today
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setMonth(today.getMonth() + maxMonthsRange);
  
  const [startDate, setStartDate] = useState<string>(today.toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState<string>(futureDate.toISOString().split('T')[0]);
  
  // Handle start date change
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    
    // Calculate maximum end date (X months from start)
    const maxDate = new Date(newStartDate);
    maxDate.setMonth(maxDate.getMonth() + maxMonthsRange);
    const maxDateStr = maxDate.toISOString().split('T')[0];
    
    // If current end date is before new start date or after max date, adjust it
    const currentEndDate = new Date(endDate);
    const newStartDateObj = new Date(newStartDate);
    if (currentEndDate < newStartDateObj || currentEndDate > maxDate) {
      setEndDate(maxDateStr);
      onChange({ startDate: newStartDate, endDate: maxDateStr });
    } else {
      onChange({ startDate: newStartDate, endDate });
    }
  };
  
  // Handle end date change
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    onChange({ startDate, endDate: newEndDate });
  };
  
  // Calculate max date for end date picker
  const getMaxEndDate = () => {
    const maxDate = new Date(startDate);
    maxDate.setMonth(maxDate.getMonth() + maxMonthsRange);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="mb-6">
      <h3 className="text-md font-medium text-gray-900 mb-3">Available Dates</h3>
      <div className="rounded-md border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <div className="p-3">
            <label className="block text-xs font-medium text-gray-500 mb-1">From</label>
            <input 
              type="date" 
              className="w-full border-0 p-0 text-sm focus:outline-none focus:ring-0"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-medium text-gray-500 mb-1">To</label>
            <input 
              type="date" 
              className="w-full border-0 p-0 text-sm focus:outline-none focus:ring-0"
              value={endDate}
              min={startDate}
              max={getMaxEndDate()}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
        <div className="bg-gray-50 px-3 py-2 text-center border-t border-gray-200">
          <span className="text-xs text-gray-500">Maximum range: {maxMonthsRange} months</span>
        </div>
      </div>
    </div>
  );
}

export default function Properties() {
  // State for filter values
  const [dateRange, setDateRange] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: (() => {
      const date = new Date();
      date.setMonth(date.getMonth() + 6);
      return date.toISOString().split('T')[0];
    })()
  });
  
  // Handle date range change
  const handleDateRangeChange = (dates: { startDate: string; endDate: string }) => {
    setDateRange(dates);
    // Here you would typically update your filtered properties or filter state
  };
  
  // Sample properties data
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$1,250,000",
      beds: 4,
      baths: 3,
      sqft: 2800,
      location: "Beverly Hills, CA",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      type: "Single Family",
      status: "For Sale"
    },
    {
      id: 2,
      title: "Waterfront Penthouse",
      price: "$950,000",
      beds: 3,
      baths: 2,
      sqft: 1950,
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      type: "Condo",
      status: "For Sale"
    },
    {
      id: 3,
      title: "Cozy Suburban Home",
      price: "$450,000",
      beds: 3,
      baths: 2,
      sqft: 1750,
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      type: "Single Family",
      status: "For Sale"
    },
    {
      id: 4,
      title: "Downtown Loft",
      price: "$3,500/month",
      beds: 1,
      baths: 1,
      sqft: 950,
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      type: "Apartment",
      status: "For Rent"
    },
    {
      id: 5,
      title: "Lakefront Cottage",
      price: "$650,000",
      beds: 2,
      baths: 1,
      sqft: 1200,
      location: "Lake Tahoe, CA",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      type: "Cabin",
      status: "For Sale"
    },
    {
      id: 6,
      title: "Urban Townhouse",
      price: "$2,800/month",
      beds: 2,
      baths: 2.5,
      sqft: 1400,
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      type: "Townhouse",
      status: "For Rent"
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Properties</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our curated selection of properties available for sale and rent.
          </p>
        </div>

        {/* Filters and Properties Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
              
              {/* Date Range Picker Component */}
              <DateRangePicker 
                maxMonthsRange={6} 
                onChange={handleDateRangeChange} 
              />
              
              {/* Property Type Filter */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">Property Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">Single Family</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">Condo</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">Apartment</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">Townhouse</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">Cabin</span>
                  </label>
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Min"
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span>-</span>
                  <input 
                    type="text" 
                    placeholder="Max"
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {/* Bedrooms Filter */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">Bedrooms</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">Any</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">1+</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">2+</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">3+</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">4+</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">5+</button>
                </div>
              </div>
              
              {/* Bathrooms Filter */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">Bathrooms</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">Any</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">1+</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">2+</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">3+</button>
                  <button className="py-1 px-3 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">4+</button>
                </div>
              </div>
              
              {/* Status Filter */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">Status</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">For Sale</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">For Rent</span>
                  </label>
                </div>
              </div>
              
              {/* Apply Filter Button */}
              <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Properties Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-56">
                    <Image 
                      src={property.image}
                      alt={property.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${property.status === 'For Sale' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                        {property.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                      <span className="text-blue-600 font-bold">{property.price}</span>
                    </div>
                    <p className="text-gray-500 mb-3">{property.location}</p>
                    <div className="text-xs text-gray-500 mb-2">{property.type}</div>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                      <span>{property.sqft} sqft</span>
                    </div>
                    <Link href={`/properties/${property.id}`} className="block text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}