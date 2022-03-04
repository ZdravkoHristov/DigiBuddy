<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\TeacherClass;
use Illuminate\Http\Request;

class TeacherClasses extends Controller
{
    protected function codeGenerator($id){
        $code = substr(password_hash(rand(), PASSWORD_BCRYPT), 10, 18);
        return $this->makeClass($id,$code);
    }

    protected function makeClass($id, $code){
        $teacher = Teacher::findOrFail($id);
        $class = new TeacherClass([
            'name' => '12b',
            'code' => $code,
        ]);
        $teacher->classes()->save($class);
        return $code;
    }
}
