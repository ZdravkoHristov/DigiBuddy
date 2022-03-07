<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    use HasFactory;

    protected $fillable = [
        'teacher_id',
        'name'
    ];

    public function files(){
        return $this->hasOne('App\Models\File');
    }
}
