import React from "react";

interface SelectComponentProps {
  value?: string;
  onChange: (e: any) => void;
  items: Array<any>;
  label: string;
}

export const SelectComponent: React.FC<SelectComponentProps> = ({
  value,
  onChange,
  items,
  label,
}) => {
  return (
    <form className="select-form">
      <select
        onChange={onChange}
        value={value}
        className="select-wrapper"
        id={label}
      >
        {items?.map((e, i) => (
          <option key={i} value={e.value}>
            {e.name}
          </option>
        ))}
      </select>
      <div className="field-label">
        <span>{label}</span>
      </div>
    </form>
  );
};
