<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChooseTask extends Model
{
    use HasFactory;

    protected $table = 'chtasks';

    protected $fillable = [
        'teacher_id',
        'name',
        'question',
        'n_answers',
    ];

    public function answers()
    {
        return $this->hasMany('App\Models\ChooseAnswer', 'chtask_id');
    }
}
