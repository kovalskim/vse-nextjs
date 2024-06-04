import CarSearchForm from '@/components/CarSearchForm';
import { getBrands, getCars, getModels } from '@/utils/actions';

const HomePage = async () => {
  const initCars = await getCars();

  const brands = await getBrands();
  const models = await getModels();

  return (
    <CarSearchForm initCars = {initCars} brands={brands} models={models} />
  );
};

export default HomePage;
