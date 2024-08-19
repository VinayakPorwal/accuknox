/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

// export default WidgetCard;
import { useDispatch } from "react-redux";
import { removeWidgetFromCategory } from "../features/categoryThunk";

const WidgetCard = ({ cat_id, w_id, name, desc }) => {
  const dispatch = useDispatch();
  const handleRemoveWidget = () => {
    dispatch(removeWidgetFromCategory(cat_id, w_id));
  };

  return (
    <div key={w_id} className="p-4 bg-white shadow-lg rounded-lg relative">
      <button
        onClick={handleRemoveWidget}
        className="absolute mr-2 top-2 right-2 text-red-500"
      >
        x
      </button>
      <h3>{name}</h3>
      <p className="h-40 flex justify-center items-center px-3">{desc}</p>
    </div>
  );
};

export default WidgetCard;
