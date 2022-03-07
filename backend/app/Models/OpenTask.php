<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpenTask extends Model
{
    use HasFactory;

    //has n_questions and n_answers that need to be equal 
    //
    protected $table = 'optasks';

    protected $fillable = [
        'teacher_id',
        'name',
        'question',
        'answer'
    ];

    public function file_contents()
    {
        return $this->belongsTo('App\Models\FileContents', 'task_id');
    }
}
