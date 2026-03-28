import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16 p-6 bg-stone-900 text-stone-50 rounded-xl">
      
 
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="px-4 py-2 text-stone-400 hover:text-stone-100">
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-700 text-stone-300 
          hover:bg-stone-500 hover:text-stone-100"
        >
          Save
        </button>
      </menu>


      <div className="flex flex-col gap-4">
        <Input label="Title" className="w-full p-2 rounded-md bg-stone-800 text-stone-100" />
        
        <Input
          label="Description"
          textarea
          className="w-full p-2 rounded-md bg-stone-800 text-stone-100"
        />

        <Input
          label="Due Date"
          type="date"
          className="w-full p-2 rounded-md bg-stone-800 text-stone-100"
        />
      </div>
    </div>
  );
}