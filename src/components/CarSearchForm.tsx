'use client';

import CarList from '@/components/CarList';
import BrandAndModelFormFields from '@/components/BrandAndModelFormFields';
import { useMemo, useState } from 'react';

function CarSearchForm({initCars, models, brands}:any) {

  const [cars, setCars] = useState(initCars);
  const [searchParams, setSearchParams] = useState({ location: '', brandId: '', modelId: ''});

  const handleSearch = async (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const location = formData.get('location')?.toString() as string;
    const brandId = formData.get('brandId')?.toString() as string;
    const modelId = formData.get('modelId')?.toString() as string;

    setSearchParams({location, brandId, modelId});
  };

  const filteredCars = useMemo(() => {
    return cars?.filter((car:any) => {

      let flag = true;

      if (searchParams?.location) {
        flag = flag && car.location === searchParams?.location;
      }
      if(searchParams?.brandId) {
        flag = flag && car.brandId === searchParams?.brandId;
      }
      if(searchParams?.modelId) {
        flag = flag && car.modelId === searchParams?.modelId;
      }
      return flag;

    });
  }, [cars, searchParams]);

  return (
    <>
      <form onSubmit={handleSearch} className="flex flex-col rounded-md bg-lime-300 px-10 py-5 shadow-sm shadow-gray-400">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          className="form-field"
        />
        <BrandAndModelFormFields models={models} brands={brands} />
        <button className="btn mt-4">Search</button>
      </form>
      <CarList cars={filteredCars} />
    </>
  );
}

export default CarSearchForm;
