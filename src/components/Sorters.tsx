import React from "react";

export interface ISortersProps<T> {
  object: {};
  setProperty: (property: keyof T) => void;
}

export function Sorters<T>(props: ISortersProps<T>) {
  const { object, setProperty } = props;

  return (
    <div>
      <label htmlFor="sorters" className="mt-3">
        sort
      </label>
      <select
        id="sorters"
        className="custom-select"
        onChange={(e) => {
          setProperty(e.target.value as any);
        }}
      >
        {Object.keys(object).map((key) => {
          return (
            <option key={key} value={key}>
              Sort by '{key}'
            </option>
          );
        })}
      </select>
    </div>
  );
}
