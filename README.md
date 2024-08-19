# 🚀 **React + Vite + Redux Toolkit Project**

## **Quick Start**

1. **Clone the Repository**
2. **Install Dependencies**
   ```bash
   npm i
   ```
3. **Customize Data**
   - Modify the `data.json` file as needed.

---

## **📚 Functions:**

- **Create New Widget Globally**: Easily create a new widget that can be used across all categories.
- **Category Widget Selection**: Select widgets for each category from the global list using checkboxes.
- **Add Widget Modal**: Click the **Add Widget** button in the header to open a modal for creating a new widget.
- **Side Drawer for Widget Selection**: Use the **Add Widget** button in a category to open a side drawer where you can select widgets for the selected category.
- **Remove Widget from Category**: Click the small **cross button** on the top-left of any widget card to remove it from the category (deselect from the category).
- **Global Search Bar**: Use the search bar in the header to search across the entire page by matching widget names.
- **Category-Specific Search**: Use the search bar in the side drawer to search for widgets within the selected category.

---

## **🔄 Data Flow**

### **1. Category Array** 🗂️

- **Primary Document**: Contains `id`, `name`, and `widgetIds[]` which reference widgets.

### **2. Widget Array** 🧩

- **Secondary Document**: Contains all widget information like `id`, `name`, and `content`.

---

## **🔧 Redux Store**

- **2 Data Slices**: Manage state with two slices in the Redux store, one for categories and one for widgets.
