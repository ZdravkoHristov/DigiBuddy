<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'folder_id',
        'teacher_id',
        'name',
        'n_contents'
    ];

    public function contents(){
        return $this->hasMany('App\Models\FileContents');
    }
}
