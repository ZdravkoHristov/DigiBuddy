<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherClass extends Model
{
    use HasFactory;

    protected $table = 't_classes';

    protected $fillable = [
        'teacher_id',
        'name',
        'code',
    ];

    //every class has one teacher but many students
}
