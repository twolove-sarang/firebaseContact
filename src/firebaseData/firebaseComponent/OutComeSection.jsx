import { useQuery } from "@tanstack/react-query";
import React from "react";
import { viewContact } from "../firebaseAuth/AuteFirebase";
import { useUserContext } from "../firebaseUserContext/userContext";
import ContactList from "./ContactList";

export default function OutComeSection() {
  const { data: contact } = useQuery(
    {
      queryKey: ["contact"],
      queryFn: viewContact,
    },
    { staleTime: 1000 * 5 * 10 }
  );

  const contactValues = () => {
    if (contact == null) {
      return {};
    } else {
      return Object.values(contact);
    }
  };

  const contactValue = contactValues();
  const { user } = useUserContext();

  return (
    <div className="bg-grey mx-8 mb-10 rounded-3xl h-80  lg:h-96 lg:w-96 lg:ml-0 lg:mt-10 overflow-scroll">
      <div className="font-extrabold text-xl text-center my-5">Contact</div>
      {user ? (
        contactValue.length === 0 ? (
          <div className="flex items-center justify-center">
            <p> 정보를 입력해 주세요</p>
          </div>
        ) : (
          contact &&
          contactValue.map((contact, id) => {
            return <ContactList contact={contact} key={id} />;
          })
        )
      ) : (
        <p className="ml-4 text-center">로그인이 필요합니다 🤩</p>
      )}
    </div>
  );
}
