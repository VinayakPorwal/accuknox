/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWidgetToCategory,
  removeWidgetFromCategory,
} from "../features/categoryThunk";

const SideDrawer = ({ isOpen, closeDrawer }) => {
  const dispatch = useDispatch();

  // Redux state selectors
  const categories = useSelector((state) => state.category.data);
  const widgets = useSelector((state) => state.widgets.data);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [tempSelectedWidgets, setTempSelectedWidgets] = useState(new Set());

  // Sync selectedCategory and selectedWidgets with Redux state
  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    const currentWidgets = new Set(selectedCategory.widgetIds);
    setTempSelectedWidgets(currentWidgets);
  }, [selectedCategory]);

  // Filter widgets based on search term
  const filteredWidgets = widgets.filter((widget) =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle widget selection (temporary state)
  const handleSelect = (widgetId) => {
    const updatedSelection = new Set(tempSelectedWidgets);
    if (updatedSelection.has(widgetId)) {
      updatedSelection.delete(widgetId);
    } else {
      updatedSelection.add(widgetId);
    }
    setTempSelectedWidgets(updatedSelection);
  };

  // Confirm selection and dispatch Redux actions
  const handleConfirm = () => {
    const widgetIdsToAdd = [...tempSelectedWidgets].filter(
      (id) => !selectedCategory.widgetIds.includes(id)
    );
    const widgetIdsToRemove = selectedCategory.widgetIds.filter(
      (id) => !tempSelectedWidgets.has(id)
    );

    widgetIdsToAdd.forEach((id) =>
      dispatch(addWidgetToCategory(selectedCategory.id, id))
    );
    widgetIdsToRemove.forEach((id) =>
      dispatch(removeWidgetFromCategory(selectedCategory.id, id))
    );

    closeDrawer();
  };

  return (
    <div
      className={`fixed inset-y-0 z-50 right-0 w-full bg-gray-800 bg-opacity-50 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Add Widget</h2>

          {/* Tabs for Category Selection */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Categories</h3>
            <div className="flex border-b border-gray-300">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`py-2 px-4 ${
                    selectedCategory.id === category.id
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Widgets Section */}
          <input
            type="text"
            placeholder="Search widgets..."
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            <h3 className="text-sm font-medium mb-2">Widgets</h3>
            {filteredWidgets.map((widget) => (
              <label key={widget.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={tempSelectedWidgets.has(widget.id)}
                  onChange={() => handleSelect(widget.id)}
                />
                {widget.name}
              </label>
            ))}
          </div>
        </div>
        <div className="p-4 flex justify-end">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={closeDrawer}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
