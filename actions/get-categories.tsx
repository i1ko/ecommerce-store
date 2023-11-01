import {Category} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[] | null> => {
 const res = await fetch(URL);

 const data = res.json();

 return data;
}

export default getCategories;
