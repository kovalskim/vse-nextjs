import { createCar } from '@/utils/actions';
import { Brand, CarModel } from '@prisma/client';
import BrandAndModelFormFields from './BrandAndModelFormFields';

const NewCarForm = ({
                      models,
                      brands
                    }: {
  models: CarModel[]
  brands: Brand[]
}) => {

  return (
    <div>
      <form action={createCar} className="flex flex-col">
        <BrandAndModelFormFields models={models} brands={brands} />
        <input type="text" name="description" required={true} className={'form-field'} placeholder="Description" />
        <input type="text" name="location" required={true} className={'form-field'} placeholder="Location" />
        <input type="text" name="price" required={true} className={'form-field'} placeholder="Price" />
        <input type="text" name="color" required={true} className={'form-field'} placeholder="Color" />
        <input type="text" name="year" required={true} className={'form-field'} placeholder="Year" />
        <button type="submit" className={'btn'}>Save Car</button>
      </form>
    </div>
  );
};

export default NewCarForm;
