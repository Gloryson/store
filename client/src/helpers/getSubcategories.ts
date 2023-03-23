



export const getSubcategories = (array: any): string[] => {
  let result: string[] = [''];
  for (let category of array) {
    if (!result.includes(category.subCategory)) {
      result.push(category.subCategory);
    }
  }
  return result;
}