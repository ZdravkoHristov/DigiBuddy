<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    protected function index(){
        return 1;
        return response()->json(['Hello World!'], 200);
    }
}
