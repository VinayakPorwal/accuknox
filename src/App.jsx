import { useSelector } from "react-redux";
import Header from "./Components/header";
import { Fragment, useState } from "react";
import CategoryCard from "./Components/CategoryCard";
import SideDrawer from "./Components/AddWidgetDrawer";

// const App = () => {
//   const { loading, error, data } = useSelector((state) => state.category);
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [categories, setCategories] = useState([
//     { name: "Cloud Accounts", text: "Connected (2)" },
//     { name: "Cloud Account Risk Assessment", text: "Failed (1589)" },
//   ]);

//   const addWidget = (newWidgets) => {
//     setCategories([...categories, ...newWidgets]);
//   };

//   const removeWidget = (widgetToRemove) => {
//     setCategories(categories.filter((widget) => widget !== widgetToRemove));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="bg-blue-50">
//       <div className="p-4 max-w-[1200px] mx-auto">
//         <Header openDrawer={() => setDrawerOpen(true)} />
//         <SideDrawer
//           isOpen={isDrawerOpen}
//           closeDrawer={() => setDrawerOpen(false)}
//           addWidget={addWidget}
//         />
//         {data?.map((category) => (
//           <Fragment key={category.id}>
//             <CategoryCard
//               id={category.id}
//               name={category.name}
//               widgets={category.widgets}
//             />
//           </Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const categories = useSelector((state) => state.category);
  const widgets = useSelector((state) => state.widgets);

  const w_loading = widgets.loading;
  const w_error = widgets.error;

  const c_loading = categories.loading;
  const c_error = categories.error;

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredWidgets = widgets.data.filter((widget) =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (c_loading) return <div>Loading...</div>;
  if (c_error) return <div>Error: {c_error}</div>;

  return (
    <div className="bg-blue-50">
      <div className="p-4 max-w-[1200px] mx-auto">
        <Header setSearchTerm={setSearchTerm} />
        <SideDrawer
          isOpen={isDrawerOpen}
          closeDrawer={() => setDrawerOpen(false)}
        />

        {/* Search Widgets Section */}
        <div className="mb-6">
          <div>
            {/* Categories and Widgets Display */}
            {categories.data?.map((category) => (
              <Fragment key={category.id}>
                {w_error && <div>Error: {w_error}</div>}
                {w_loading && <div>Error: loading...</div>}
                <CategoryCard
                  openDrawer={() => setDrawerOpen(true)}
                  id={category.id}
                  name={category.name}
                  widgets={filteredWidgets}
                  widgetIds={category.widgetIds}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
