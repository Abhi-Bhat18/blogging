"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const MyComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (html: any) => {
    console.log(handleChange);

    setValue(html);
  };
  
  let Editor = {
    modules: {
      toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
    },
    formats: [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center">
      <div className="lg:w-[60%] bg-white rounded-md h-[80vh]">
        <ReactQuill
          className="w-full rounded-md border-none h-full bg-white text-black mx-auto"
          theme="snow"
          value={value}
          onChange={handleChange}
          formats={Editor.formats}
          modules={Editor.modules}
        />
        <div className="w-full flex justify-end px-10">
          <button className="bg-gray-900">Preview</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
