import { Link } from "@inertiajs/react";
import { ChartPieIcon, MapIcon } from "lucide-react";
import React from "react";

const HomeLayout = ({ children }) => {
    return (
        <div className="h-screen">
            <div className="bg-slate-900 text-white p-4 w-full flex gap-8 items-center">
                <Link className="font-bold flex gap-1" href="/">
                    <img src="./logo.png" alt="logo" height={50} width={50} />
                </Link>
                <Link className="font-bold flex gap-1" href="/">
                    <MapIcon />
                    <span>Mapa</span>
                </Link>
                <Link className="font-bold flex gap-1" href="/reports">
                    <ChartPieIcon />
                    <span>Estadisticas</span>
                </Link>
            </div>
            {children}
        </div>
    );
};

export default HomeLayout;
