interface IGetData {
  src: string;
  description: string;
}

export const getData = async (url: string): Promise<[IGetData]> => {
  const result = await fetch(url);

  
  return await result.json();
};
