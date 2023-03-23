import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "@/Components/layout";
import routes from "./routes";



function App() {

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes}/>
      </div>
      <Routes>
        {routes.map(({path, element}, key) => 
          element && <Route key={key}  path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />}/>
      </Routes>
    </>
  )
}

export default App
