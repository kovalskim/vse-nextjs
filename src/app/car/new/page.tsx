import NewCarForm from '@/components/NewCarForm';
import prisma from '@/utils/prisma';

const fetchBrands = async () => {
  return prisma.brand.findMany();
};

const fetchModels = async () => {
  return prisma.carModel.findMany();
};

const NewCarPage = async () => {
  const brands = await fetchBrands();
  const models = await fetchModels();

  return (
    <>
      <h3 className="text-base font-semibold leading-7 text-gray-900">New Car</h3>
      <NewCarForm brands={brands} models={models} />
    </>
  );
};

export default NewCarPage;
