<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileContents extends Model
{
    use HasFactory;

    protected $table = 'file_contents';

    protected $fillable = [
        'file_id', 
        'type',
        'task_id', 
    ];
}
