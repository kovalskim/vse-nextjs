'use server';

import { redirect } from 'next/navigation';
import prisma from './prisma';

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString();
  const brandId = formData.get('brandId')?.toString();
  const description = formData.get('description')?.toString();
  const location = formData.get('location')?.toString();
  const price = formData.get('price')?.toString();
  const color = formData.get('color')?.toString();
  const year = formData.get('year')?.toString();

  if (!modelId || !brandId || !description || !location || !price || !color || !year) {
    return;
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      description: description,
      location: location,
      price: parseInt(price),
      color: color,
      year: parseInt(year)
    }
  });

  redirect('/');
};

export const getCars = async () => {
  const cars = await prisma.car.findMany({
    include: {
      model: true,
      brand: true
    }
  });
  return cars;
};

export const getBrands = async () => {
  const brands = await prisma.brand.findMany();
  return brands;
}

export const getModels = async () => {
  const models = await prisma.carModel.findMany();
  return models;
}