import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Firebase from './firebaseData/Firebase';
import { UserContextProvider } from './firebaseData/firebaseUserContext/userContext';
import TitleSection from './firebaseData/firebaseComponent/TitleSection';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider value>
        <div className="md:ml-20">
          <TitleSection />
          <Firebase />
        </div>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
