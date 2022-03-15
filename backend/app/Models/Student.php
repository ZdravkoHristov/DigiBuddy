<?php

namespace App\Models;

use App\Models\Cl;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Student extends Authenticatable
{
    use HasFactory;

    protected $table = 'students';

    protected $fillable = [
        'email',
        'name',
        'lname',
        'class',
        'school',
        'town',
        'comm',
        'area',
        'password',
    ];
    
    protected $hidden = [
        'password',
        'updated_at',
        'created_at',
    ];

    public function classes()
    {
        return $this->morphMany(TeachStudClass::class, 'classable');
    }
}
