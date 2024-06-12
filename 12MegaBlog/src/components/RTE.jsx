import React from "react";
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

//we can use the editor given by the tinymcs and we can use this editor 
//to essentially for posing and solving .
//it takes two params initial Value and the init .
//this init is basically a object and description about the editor .
//what control essential do is pass on the control from this component to another who calls it .
//control completely pass the things from here to another component , state value data everything.
export default function RTE({name, control, label, defaultValue =""}) {
    return (
      <div className='w-full'> 
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
  
      <Controller
      name={name || "content"}
      control={control}
      render={({field: {onChange}}) => (
          <Editor
          apiKey='a1ixoboi1guqqz0rv4aqb25x5l3ivk92lywm1i0pu8wxmn3k'
          initialValue={defaultValue}
          init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
              ],
              toolbar:
              "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
          }}
          onEditorChange={onChange}
          />
      )}
      />
  
       </div>
    )
  }