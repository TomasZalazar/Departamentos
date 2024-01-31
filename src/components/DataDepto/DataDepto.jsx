import CardDepto from "./CardDepto";
import Data from "./Data";

const DataDepto = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {Data.map((item) => (
        <CardDepto key={item.id} {...item} />
      ))}
    </div>
  );
};
export default DataDepto;
