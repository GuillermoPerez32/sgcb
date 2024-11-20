import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const Index = ({ reports }) => {
    const municipalityCount = reports.reduce((acc, report) => {
        const municipality = report.municipality;
        if (!acc[municipality]) {
            acc[municipality] = 0;
        }
        acc[municipality]++;
        return acc;
    }, {});

    console.log(municipalityCount);

    return (
        <HomeLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">
                    Estadísticas de Incendios por Municipio
                </h1>

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Municipios con Más Incendios
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Municipio
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Número de Incendios
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Object.entries(municipalityCount)
                                        .sort((a, b) => b[1] - a[1])
                                        .map(([municipality, count]) => (
                                            <tr key={municipality}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {municipality}
                                                </td>
                                                <td className="px-6 py-4 text-right whitespace-nowrap">
                                                    {count}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Index;
