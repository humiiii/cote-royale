import { useParams } from "react-router-dom";

const Fragrance = () => {
  const { name } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Fragrance: {name}</h1>
      {/* You can use `name` to fetch data or filter local data */}
    </div>
  );
};

export default Fragrance;
