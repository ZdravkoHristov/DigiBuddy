<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\TeacherClass;
use App\Models\TeachStudClass;
use Illuminate\Http\Request;

class TeacherClasses extends Controller
{
    protected function codeGenerator($id){
        $code = substr(password_hash(rand(), PASSWORD_BCRYPT), 27, 35);
        return $this->makeClass($id,$code);
    }

    protected function makeClass($id, $code){
        $teacher = Teacher::findOrFail($id);
        $class = new TeachStudClass([
            'name' => '12b',
            'code' => $code,
        ]);
        $teacher->classes()->save($class);
        return $code;
    }
}
