import React from 'react';
import EnterSection from './firebaseComponent/EnterSection';
import OutComeSection from './firebaseComponent/OutComeSection';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useUserContext } from './firebaseUserContext/userContext';

export default function Firebase() {
  const { user, login, logout } = useUserContext();

  return (
    <div>
      {!user && (
        <>
          <div className="my-4 text-center md:flex">
            <div className="text-center md:flex md:items-center">
              <p className="font-bold">로그인이 필요합니다</p>
              <div className="w-4 mx-auto my-2 md:invisible">
                <AiOutlineArrowDown />
              </div>
            </div>

            <button
              onClick={() => login()}
              className="bg-blue p-2 rounded-lg text-white font-bold transition-all hover:scale-105 mb-10 md:mb-0"
            >
              구글 로그인
            </button>
          </div>
        </>
      )}
      {user && (
        <>
          <div className="my-4 text-center md:flex md:items-center">
            <div className="text-center md:flex md:gap-2 md:items-center">
              <p className="font-bold">
                안녕하세요 {user && user.displayName}님
              </p>
              <p>로그아웃은 여깁니다.</p>
              <div className="w-4 mx-auto my-2 md:invisible">
                <AiOutlineArrowDown />
              </div>
            </div>

            <button
              onClick={() => logout()}
              className="bg-blue p-2 rounded-lg text-white font-bold transition-all hover:scale-105 mb-10 md:mb-0"
            >
              로그아웃
            </button>
          </div>
        </>
      )}

      <section className="lg:flex lg:items-start">
        <div className="-mt-10 md:mt-2 lg:basis-1/2">
          <EnterSection />
        </div>
        <div className="lg:basis-1/2">
          <OutComeSection />
        </div>
      </section>
    </div>
  );
}
