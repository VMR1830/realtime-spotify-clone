import { Routes, Route } from "react-router-dom";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

import HomePage from "./Pages/Home/HomePage";
import AuthcallbackPage from "./Pages/Authcallback/authcallback";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./Pages/chat/ChatPage";
import AlbumPage from "./Pages/album/AlbumPage";
import NotFoundPage from "./Pages/404/NotFoundPage";

function App() {
  return (
    <Routes>
      {/* For Clerk SSO callback */}
      <Route
        path="/sso-callback"
        element={
          <AuthenticateWithRedirectCallback signUpForceRedirectUrl="/auth-callback" />
        }
      />

      {/* Public route after Clerk sign-up/login */}
      <Route path="/auth-callback" element={<AuthcallbackPage />} />

      {/* Main layout for the app (wrap your pages inside it) */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
					<Route path='/chat' element={<ChatPage />} />
					<Route path='/albums/:albumId' element={<AlbumPage />} />
					{ <Route path='*' element={<NotFoundPage />} /> }
        
      </Route>
    </Routes>
  );
}

export default App;
