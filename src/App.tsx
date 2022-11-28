import React from "react";
import "./App.css";
import widgets from "./mockData/widgets";
import people from "./mockData/people";
import genericSearch from "./utils/genericSearch";
import genericSort from "./utils/genericSort";
import { useState } from "react";
import SearchInput from "./components/SearchInput";
import IWidget from "./interfaces/IWidget";
import IProperty from "./interfaces/IProperty";
import IPerson from "./interfaces/IPerson";
import { Sorters } from "./components/Sorters";

function App() {
  const [query, setQuery] = useState("");
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    IProperty<IWidget>
  >({
    property: "title",
  });
  const [peopleSortProperty, setPeopleSortProperty] = useState<
    IProperty<IPerson>
  >({
    property: "firstName",
  });
  return (
    <div className="App">
      <SearchInput
        setSearchQuery={(query) => {
          console.log("im firing");
          setQuery(query);
        }}
      />
      <h2>Widgets</h2>
      <Sorters
        setProperty={(property) => {
          setWidgetSortProperty({ property });
        }}
        object={widgets[0]}
      />
      {widgets
        .filter((x) =>
          genericSearch(x, ["title", "description", "rating"], query)
        )
        .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
        .map((x, i) => (
          <h3 key={i}>{x.title}</h3>
        ))}

      <h3>People</h3>
      <Sorters
        setProperty={(property) => {
          setPeopleSortProperty({ property });
        }}
        object={people[0]}
      />
      {people
        .filter((x) =>
          genericSearch(x, ["eyeColor", "firstName", "lastName"], query)
        )
        .sort((a, b) => genericSort(a, b, peopleSortProperty.property))

        .map((x, i) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                border: "1px solid red",
                width: "200px",
              }}
            >
              <h3 key={i}>
                {x.firstName} {x.lastName}
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
