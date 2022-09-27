const useFetchData = () => {
  const getStuff = async () => {
    return await fetch("http://localhost:4000/stuff")
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };

  const getCategories = async () => {
    return await fetch("http://localhost:4000/categories")
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };

  return { getStuff, getCategories };
};

export default useFetchData;
