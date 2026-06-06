import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

// * assets
import { dummyUserData } from "../assets/assets";

// * components
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";

function Layout() {
    const user = dummyUserData;

    // * states
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return user ? (
        <div className="w-full flex h-screen">

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            
            <div className="flex-1 bg-slate-50">
                <Outlet />
            </div>
            {sidebarOpen ? (
                <X
                    className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
                    onClick={() => setSidebarOpen(true)}
                />
            ) : (
                <Menu
                    className=" absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    ) : (
        <div>
            <Loading />
        </div>
    );
}

export default Layout;
