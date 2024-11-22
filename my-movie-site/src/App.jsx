// 기존에 잘 동작하던 코드

// import React from "react";
// import { RouterProvider } from "react-router-dom";
// import router from "./router";

// import { Provider } from "react-redux";
// import store from "./store/store";

// export default function App() {
//   return (
//     <>
//       <Provider store={store}>
//         <RouterProvider router={router}></RouterProvider>
//       </Provider>
//     </>
//   );
// }

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      {/* PersistGate를 추가하여 상태 복원 */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  );
}
