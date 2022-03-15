<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Models\TeachStudClass;

class Classes extends Controller
{

    protected function codeGenerator($id){
        $replace = [',','.','/','*'];
        $code = str_replace($replace, '', substr(password_hash(rand(), PASSWORD_BCRYPT), 15, 16));
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
    
    protected function findStudentClass($id, /*Request $request*/) {
        $student = Student::find($id);

        $classes = TeachStudClass::whereCode(/*$request->input(['code'])*/'QWO6KQXVOX523cE')->get();
        foreach($classes as $cl){
            $class = new TeachStudClass();
            $class->name = $cl->name;
            $class->code = 'QWO6KQXVOX523cE';
            $student->classes()->save($class);
            return $student->classes;
        }
        return response()->json([
            'status' => 400,
            'message' => 'Класът на е намерен. Моля проверете дали кодът е правилно изписан.'
        ]);

        
    }

    protected function getStudentsInfo(){
        //fetch students
        $students = TeachStudClass::whereCode('QWO6KQXVOX523cE')->whereClassableType('App\Models\Student')->get();
        foreach($students as $student){
            return Student::findOrFail($student->classable_id)->get();
        }
    }
    
    protected function test(){
        //fetch teacher
        $teacher = TeachStudClass::whereCode('QWO6KQXVOX523cE')->whereClassableType('App\Models\Teacher')->get();
        foreach($teacher as $teach){
            return Teacher::findOrFail($teach->classable_id)->get();
        }
    }

}
