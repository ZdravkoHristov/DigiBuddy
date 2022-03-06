<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Authenticatable
{
    use HasFactory;

    protected $table = 'teachers';

    protected $fillable = [
        'name',
        'lname',
        'email',
        'subject',
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

    // public function tasks()
    // {
    //     return $this->hasOne('App\Models\Task');
    // }

    public function chtask()//ONE TO MANY
    {
        return $this->hasOne('App\Models\ChooseTask');//looks teacher_id in the specific table
    }

    public function optask()//ONE TO MANY
    {
        return $this->hasOne('App\Models\OpenTask');//looks teacher_id in the specific table
    }

    public function classes()
    {
        return $this->hasMany('App\Models\TeacherClass');
    }
}
