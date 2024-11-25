<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Reports/Index', [
            'reports' => Report::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Report::create([
            "date" => $request->date,
            "address" => $request->address,
            "municipality" => $request->municipality,
            "service_type" => $request->service_type,
            "fire_clasification" => $request->fire_clasification,
            "rescue_type" => $request->rescue_type,
            "emergency_type" => $request->emergency_type,
            "lat" => $request->lat,
            "lng" => $request->lng,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Report $report)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        $report->delete();
    }
}
