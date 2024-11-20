<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = [
        'date',
        'address',
        'municipality',
        'service_type',
        'fire_clasification',
        'rescue_type',
        'emergency_type',
        'lat',
        'lng'
    ];
}
