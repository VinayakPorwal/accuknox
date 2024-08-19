import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addWidget } from "../features/widgetThunk";
import { useId } from "react";
/* eslint-disable react/prop-types */
function Header({ setSearchTerm }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [newWidget, setNewWidget] = useState({
    id: "w" + new Date(),
    name: "",
    content: "",
  });

  const handleSave = () => {
    // Add new widget to the store
    dispatch(addWidget(newWidget));

    setNewWidget({
      id: "w" + new Date(),
      name: "",
      content: "",
    });
    // Close the modal
    closeModal();
  };
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-semibold">CNAPP Dashboard</h1>
      <input
        type="text"
        placeholder="Search Widgets..."
        className="w-64 p-2 border border-gray-300 rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex items-center space-x-2">
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
          onClick={openModal}
        >
          Add Widget
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
          Last 2 days
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="bg-white p-4 shadow rounded mb-6">
          <h2 className="text-xl font-semibold mb-4">Add Widget</h2>
          <input
            type="text"
            placeholder="Widget Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={newWidget.name}
            onChange={(e) =>
              setNewWidget({ ...newWidget, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Widget Text"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={newWidget.content}
            onChange={(e) =>
              setNewWidget({ ...newWidget, content: e.target.value })
            }
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Add Widget
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
