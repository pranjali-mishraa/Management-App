import { forwardRef } from "react";

const Input =forwardRef( function Input({ label, textarea, ...props },ref) {
    const classes = `w-full p-2 border-b-2 rounded-md bg-stone-800 text-stone-100 
    border border-stone-700 focus:outline-none 
    focus:ring-1 focus:ring-stone-400`;

    return (
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-semibold text-stone-300">
          {label}
        </label>
  
        {textarea ? (
          <textarea ref={ref}
            {...props}
            className= {classes}
          />
        ) : (
          <input  ref={ref}
            {...props}
            className={classes}
          />
        )}
      </p>
    );
  });

  export default Input;