<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeachStudClass extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'classable_id',
        'classable_type',
    ];

    protected $table = 'classes';

    public function classabletable()
    {
        return $this->morphTo();
    }
}
