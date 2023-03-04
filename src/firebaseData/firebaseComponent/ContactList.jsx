import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteContact } from "../firebaseAuth/AuteFirebase";

export default function ContactList({
  contact: { first, last, number, memo, id },
}) {
  const queryClient = useQueryClient();
  const removeContact = useMutation({
    mutationFn: ({ id }) => deleteContact(id),
    onSuccess: () => queryClient.invalidateQueries(["contact"]),
  });
  const handleClick = () => {
    removeContact.mutate({ id });
  };

  return (
    <>
      <div className="mx-10 mt-4 items-center flex justify-between">
        <div>
          <div className="text-sm text-blue font-bold">
            {first}, {last}
          </div>
          <div className="text-lg">{number}</div>
          <p className="text-sm text-gray-400">{memo}</p>
        </div>
        <button
          onClick={handleClick}
          className="text-sm font-medium border p-2 h-10 rounded-lg shadow-sm bg-white 
                      hover:bg-blue hover:text-white hover:shadow-none"
        >
          지우기
        </button>
      </div>
    </>
  );
}
