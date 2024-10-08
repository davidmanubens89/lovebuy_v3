"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { KeyFactors } from '@/components/KeyFactors';
import { FilterSection } from '@/components/FilterSection';
import { ProductList } from '@/components/ProductList';

const luggageItems = [
  { id: 1, name: 'TravelPro Maxlite 5', brand: 'TravelPro', price: 159, rating: 4.5, features: ['Lightweight', 'Expandable', 'Spinner wheels'], image: 'https://picsum.photos/seed/luggage-1/300/200' },
  { id: 2, name: 'Samsonite Omni PC', brand: 'Samsonite', price: 129, rating: 4.3, features: ['Hardside', 'TSA lock', 'Scratch-resistant'], image: 'https://picsum.photos/seed/luggage-2/300/200' },
  { id: 3, name: 'Delsey Paris Helium Aero', brand: 'Delsey', price: 149, rating: 4.4, features: ['Double spinner wheels', 'Expandable', 'Glossy finish'], image: 'https://picsum.photos/seed/luggage-3/300/200' },
];

const brands = ['TravelPro', 'Samsonite', 'Delsey'];
const sizes = ['Carry-on', 'Medium', 'Large'];
const types = ['Softside', 'Hardside'];

const keyFactors = [
  { title: 'Size', description: 'Choose based on your travel needs and airline restrictions.' },
  { title: 'Durability', description: 'Look for sturdy materials and construction for long-lasting use.' },
  { title: 'Maneuverability', description: 'Consider spinner wheels for easy navigation through airports.' },
  { title: 'Security Features', description: 'TSA-approved locks can provide peace of mind during travel.' },
];

export default function Luggage() {
  const [budget, setBudget] = useState([0, 300]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [size, setSize] = useState('');
  const [type, setType] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Luggage Recommendations</h1>

      <KeyFactors factors={keyFactors} />

      <div className="flex flex-col md:flex-row gap-8">
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden mb-4">Refine Your Needs</Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetTitle>Filters</SheetTitle>
            <div className="py-4">
              <FilterSection
                budget={budget}
                setBudget={setBudget}
                selectedBrands={selectedBrands}
                handleBrandChange={handleBrandChange}
                brands={brands}
                size={size}
                setSize={setSize}
                sizes={sizes}
                type={type}
                setType={setType}
                types={types}
              />
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:block w-1/4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <FilterSection
            budget={budget}
            setBudget={setBudget}
            selectedBrands={selectedBrands}
            handleBrandChange={handleBrandChange}
            brands={brands}
            size={size}
            setSize={setSize}
            sizes={sizes}
            type={type}
            setType={setType}
            types={types}
          />
        </div>

        <ProductList products={luggageItems} totalModels={100} />
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Did You Know?</h2>
        <p>The world's largest piece of luggage is over 20 feet long and weighs more than 2,500 pounds!</p>
      </div>
    </div>
  );
}