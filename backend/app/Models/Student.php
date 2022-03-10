<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

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
}
