import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { updateContact } from "../firebaseAuth/AuteFirebase";

export default function EnterSection() {
  const [contact, setContact] = useState({});

  const queryClient = useQueryClient();
  const addContact = useMutation({
    mutationFn: ({ contact }) => updateContact(contact),
    onSuccess: () => queryClient.invalidateQueries(["contact"]),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact.mutate({ contact });
    setContact({});
  };

  return (
    <>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <label className="flex justify-between">
            <span className="w-36 p-2 my-2 basis-3/12">Name</span>
            <div className="basis-9/12">
              <input
                type="text"
                name="first"
                value={contact.first ?? ""}
                placeholder="성 / First"
                className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="last"
                onChange={handleChange}
                value={contact.last ?? ""}
                placeholder="이름 / Last"
                className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg"
                required
              />
            </div>
          </label>
          <label className="flex">
            <span className="w-36 p-2 my-2 basis-3/12">Number</span>
            <input
              type="text"
              name="number"
              onChange={handleChange}
              value={contact.number ?? ""}
              placeholder="010-0000-0000"
              className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg basis-9/12"
            />
          </label>
          <label className="flex">
            <span className="w-36 p-2 my-2 basis-3/12">Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={contact.email ?? ""}
              placeholder="Email@naver.com"
              className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg basis-9/12"
              required
            />
          </label>
          <label className="flex">
            <span className="w-36 p-2 my-2 basis-3/12">Memo</span>
            <textarea
              name="memo"
              onChange={handleChange}
              value={contact.memo ?? ""}
              placeholder="별명이 있나요?"
              rows={5}
              className="p-2 mr-2 my-2 outline-none drop-shadow-md rounded-lg basis-9/12 h-full"
            />
          </label>
          <div className="flex justify-center mt-4">
            <button className="font-bold text-blue border px-2 py-1 m-2 rounded-lg hover:bg-blue hover:text-white w-32">
              저장
            </button>
            <button
              onClick={() => setContact({})}
              className="font-bold border px-2 py-1 m-2 rounded-lg hover:bg-red hover:text-white w-32"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
