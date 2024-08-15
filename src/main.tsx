import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./parkui.css";
import "@park-ui/tailwind-plugin/preset.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Loader } from "lucide-react";


export interface RouterCntextTypes{

}

const router = createRouter({
  routeTree,
  defaultNotFoundComponent() {
    return (
      <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-[5%] rounded-lg bg-bg-emphasized">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-2xl">Page Not Found</p>
        </div>
      </div>
    );
  },
  defaultPendingComponent: () => (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="rounded-full border-b-2 border-primary">
        <Loader className="animate-spin" />
      </div>
    </div>
  ),
  defaultErrorComponent: ({ error }: { error: Error }) => (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="bg-error text-error-content p-[2%] rounded-lg">
        <p className="">{error.name}</p>
        <p className="text-sm">{error.message}</p>
      </div>
    </div>
  ),
  context: {},
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {

  return (
    <>
      <RouterProvider router={router} defaultPreload="intent" />
    </>
  );
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
