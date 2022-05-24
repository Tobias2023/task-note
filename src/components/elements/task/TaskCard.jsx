import React, { useState, useRef } from "react";
import taskData from "../../../../public/data/mockData";
import Modal from "react-modal";
import { Editor } from "@tinymce/tinymce-react";

import { randomBG } from "../../../utils/colorChange";

// Static date
const d = new Date().toDateString();


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Task(props) {
  const task = props.data;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  let background = randomBG();

  return (
    <>
      <div
        style={{ backgroundColor: background }}
        className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-10 max-w-3xl"
      >
        <div className="p-4 w-full text-center bg-white">
          <div className="flex flex-col items-center pb-5">
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={task.listImage}
              alt="User image"
            />
          </div>

          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {task.taskTitle}
          </h5>
          <p className="text-red-500">{d}</p>
          <p className="mb-5 text-base text-black-500 sm:text-lg dark:text-gray-400">
            {task.taskDescription}
          </p>
          <button
            type="button"
            onClick={openModal}
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Edit Task
          </button>
          <button
            type="button"
            // onClick={openModal}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Delete Task
          </button>
          {/* Modal Show/Hide */}
        {/* TODO: PIN a task */} 
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={process.env.NODE_ENV !== 'test'}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <p className="font-sans text-2xl text-blue-600 text-center font-bold pb-10">
          Edit Task
        </p>
        <label className="relative block">
          <p className="font-bold pb-2">Task Name:</p>
          <input
            className="mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Update Task Title..."
            type="text"
            name="search"
          />
        </label>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />

        <button
          type="button"
          onClick={log}
          className="mt-20 focus:outline-none text-white bg-green-400 hover:bg-red-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Edit Task
        </button>
      </Modal>

      {/* {modalIsOpen ? (<Modal/>) : (null)} */}
    </>
  );
}

// https://www.tiny.cloud/docs/integrations/react/
// https://github.com/reactjs/react-modal
