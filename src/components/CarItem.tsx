import { CarWithDeps } from '@/types/prismaTypes';
import Link from 'next/link';
import Image from 'next/image';

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link href={`car/${car.id}`} className="cursor-pointer">
      <div className="flex w-full rounded-md border p-2 shadow-sm hover:bg-slate-100">
        <div>
          <Image
            src="/skoda.webp"
            alt={`${car.brand.name} ${car.model.name}`}
            className="size-12 flex-none rounded-full bg-gray-50"
            width={1000}
            height={1000}
          />
        </div>
        <div className="pl-5 text-base">
          <h1 className="text-xl">
            {car.brand.name} {car.model.name}
          </h1>
          <h2>{`${car.color} - ${car.location} - ${car.price} CZK - ${car.year}`}</h2>
          <p>{car.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
