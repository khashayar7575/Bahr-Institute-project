import React from "react";
import { ErrorMessage, useField } from "formik";

const Textarea = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <div className="relative border border-gray-400 rounded-lg focus-within:ring-1 focus-within:ring-teal-300 focus-within:border-teal-300">
        <label
          htmlFor={props.id || props.name}
          className="absolute -top-[11px] right-2 -mt-px inline-block px-1 bg-white text-sm font-semibold text-teal-700"
        >
          {label}
        </label>
        <textarea
          className="block w-full h-full border-0 p-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
          {...field}
          {...props}
        />
      </div>
      <ErrorMessage
        component="span"
        className="block text-xs font-bold mt-3 text-red-500"
        name={props.name}
      ></ErrorMessage>
    </>
  );
};

export default Textarea;
