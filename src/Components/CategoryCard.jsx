/* eslint-disable react/prop-types */
import { Fragment } from "react";
import WidgetCard from "./WidgetCard";

function CategoryCard({ id, name, widgetIds, widgets, openDrawer }) {
  const filteredWidgets = widgets.filter((widget) =>
    widgetIds.includes(widget.id)
  );
  return (
    <div className="mb-6 px-2 ">
      <h2 className="text-lg font-semibold mb-4">{name}</h2>
      <div className="grid grid-cols-3 gap-4 bg-gray-100 p-2">
        {filteredWidgets.map((widget) => (
          <Fragment key={id + "-" + widget.id}>
            <WidgetCard
              cat_id={id}
              w_id={widget.id}
              name={widget.name}
              desc={widget.content}
            />
          </Fragment>
        ))}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between items-center">
          <div></div>
          <button
            className="text-gray-500 border-dashed border border-gray-600 rounded-lg px-2"
            onClick={openDrawer}
          >
            + Add Widget
          </button>
          <span className="italic text-xs text-gray-400 font-semibold">
            {"//"} this add button will open side drawer where user can select
            the widgets for this category, inorder to create a new widget you
            must have to add it to widget list
          </span>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
