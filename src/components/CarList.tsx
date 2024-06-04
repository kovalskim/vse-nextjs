import CarItem from './CarItem';
import { CarWithDeps } from '@/types/prismaTypes';

type Props = {
  cars: CarWithDeps[]|null
}

const CarList = ({ cars }: Props) => {
  return (
    <div className="mt-2 grid gap-2">
      {!cars?.length ? (
        <h2>No Results</h2>
      ) : (
        cars?.map((car) => (
          <CarItem key={car.id} car={car} />
        ))
      )}
    </div>
  );
};

export default CarList;
