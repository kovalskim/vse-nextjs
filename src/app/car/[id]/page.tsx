import prisma from '@/utils/prisma';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id
    },
    include: {
      model: true,
      brand: true
    }
  });

  if(!car) {
    notFound();
  }
  return car;
};

type DetailParamProps = {
  label: string;
  value: any;
};

const DetailParam = (props: DetailParamProps) => {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">
        {props.label}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {props.value}
      </dd>
    </div>
  );
};

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id);

  return (
    <div className="px-4 sm:px-0">
      <h3 className="text-base font-semibold leading-7 text-gray-900">
        {car?.brand.name} {car?.model.name}
      </h3>
      <Image
        src="/skoda.webp"
        alt={`${car?.brand.name} ${car?.model.name}`}
        className="size-15 flex-none bg-gray-50"
        width={1000}
        height={1000}
      />
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <DetailParam label="Year" value={car?.year} />
          <DetailParam label="Price" value={car?.price + ' ' + 'CZK'} />
          <DetailParam label="Color" value={car?.color} />
          <DetailParam label="Location" value={car?.location} />
          <DetailParam label="Description" value={car?.description} />
        </dl>
      </div>
    </div>
  );
};

export default CarDetailPage;
