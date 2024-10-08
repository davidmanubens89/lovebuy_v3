"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { KeyFactors } from '@/components/KeyFactors';
import { FilterSection } from '@/components/FilterSection';
import { ProductList } from '@/components/ProductList';

const washingMachines = [
  { id: 1, name: 'EcoWash Pro', brand: 'GreenTech', price: 599, rating: 4.5, features: ['Energy efficient', 'Large capacity', 'Smart controls'], image: 'https://picsum.photos/seed/washing-machine-1/300/200' },
  { id: 2, name: 'SpeedMaster 3000', brand: 'QuickClean', price: 499, rating: 4.2, features: ['Quick wash cycles', 'Compact design', 'Multiple wash programs'], image: 'https://picsum.photos/seed/washing-machine-2/300/200' },
  { id: 3, name: 'SilentWash Elite', brand: 'WhisperAppliances', price: 699, rating: 4.7, features: ['Ultra-quiet operation', 'Steam cleaning', 'Anti-vibration technology'], image: 'https://picsum.photos/seed/washing-machine-3/300/200' },
];

const brands = ['GreenTech', 'QuickClean', 'WhisperAppliances'];
const capacities = ['Small (< 6kg)', 'Medium (6-8kg)', 'Large (> 8kg)'];
const energyRatings = ['A+++', 'A++', 'A+', 'A'];

const keyFactors = [
  { title: 'Capacity', description: 'Choose based on your laundry volume and family size.' },
  { title: 'Energy Efficiency', description: 'Look for high energy ratings to save on bills and reduce environmental impact.' },
  { title: 'Wash Programs', description: 'Consider machines with cycles that match your laundry needs.' },
  { title: 'Noise Level', description: 'Important if the machine will be near living areas.' },
];

export default function WashingMachines() {
  const [budget, setBudget] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [capacity, setCapacity] = useState('');
  const [energyRating, setEnergyRating] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Washing Machine Recommendations</h1>

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
                size={capacity}
                setSize={setCapacity}
                sizes={capacities}
                type={energyRating}
                setType={setEnergyRating}
                types={energyRatings}
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
            size={capacity}
            setSize={setCapacity}
            sizes={capacities}
            type={energyRating}
            setType={setEnergyRating}
            types={energyRatings}
          />
        </div>

        <ProductList products={washingMachines} totalModels={150} />
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Did You Know?</h2>
        <p>The world's largest washing machine can wash up to 100kg of laundry in a single cycle!</p>
      </div>
    </div>
  );
}