import { useReducer, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";


export default function NewProject({onAdd , onCancle}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave(){
      const enteredTitle = title.current.value;
      const enteredDescription = title.current.value;
      const enteredDueDate = title.current.value;

      if(enteredDescription.trim() ==='' ||
    enteredDueDate.trim()==='' ||
      enteredTitle.trim()===''){

        modal.current.open();
        return;
      }

      onAdd({
        title: enteredTitle,
        description:enteredDescription,
        dueDate:enteredDueDate
      });

    }

  return (

    <>
    <Modal ref={modal} buttonCaption="Close">
      <h2 className="font-bold text-stone-900 text-xl my-4">Invalid Input</h2>
      <p className="text-stone-900 mb-4">Please enter valid value.</p>
    </Modal>
    <div className="w-[35rem] mt-16 p-6 bg-stone-900 text-stone-50 rounded-xl">
      
 
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="px-4 py-2 text-stone-400 hover:text-stone-100"
        onClick={onCancle}
        >
          Cancel
        </button>
        <button
        onClick={handleSave}
          className="px-6 py-2 rounded-md bg-stone-700 text-stone-300 
          hover:bg-stone-500 hover:text-stone-100"
        >
          Save
        </button>
      </menu>


      <div className="flex flex-col gap-4">
        <Input ref={title}
        label="Title" 
        textarea
        className="w-full p-2 rounded-md bg-stone-800 text-stone-100" />
        
        <Input ref={description}
          label="Description"
          textarea
          className="w-full p-2 rounded-md bg-stone-800 text-stone-100"
        />

        <Input ref={dueDate}
          label="Due Date"
          type="date"
          className="w-full p-2 rounded-md bg-stone-800 text-stone-100"
        />
      </div>
    </div>
    </>
  );
}