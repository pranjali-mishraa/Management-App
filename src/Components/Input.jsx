export default function Input({ label, textarea, ...props }) {
    const classes = `w-full p-2 border-b-2 rounded-md bg-stone-800 text-stone-100 
    border border-stone-700 focus:outline-none 
    focus:ring-1 focus:ring-stone-400`;

    return (
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-semibold text-stone-300">
          {label}
        </label>
  
        {textarea ? (
          <textarea
            {...props}
            className= {classes}
          />
        ) : (
          <input
            {...props}
            className={classes}
          />
        )}
      </p>
    );
  }