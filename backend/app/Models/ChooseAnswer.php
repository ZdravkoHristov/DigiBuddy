<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChooseAnswer extends Model
{
    use HasFactory;

    protected $table = 'chanswers';

    protected $fillable = [
        'chtask_id',
        'answer',
        'is_answer',
    ];
}
