<?php

namespace App\Http\Controllers;

use App\Models\File;
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

    protected function test(){
        //fetch students
        $students = TeachStudClass::whereCode('QWO6KQXVOX523cE')->whereClassableType('App\Models\Student')->get();
        for($i = 0; $i < count($students); $i++){
            $info = Student::findOrFail($students[$i]->classable_id);
            return $this->getFilesInfo($students[$i]->code);
            return response()->json([
                'status' => 200,
                'fullName' => 'Г-н/Г-жа ' . $info->name . ' ' . $info->lname,
            ]);
        }
    }
    
    protected function getTeacherInfo(){
        //fetch teacher
        $teacher = TeachStudClass::whereCode('QWO6KQXVOX523cE')->whereClassableType('App\Models\Teacher')->get();
        for($i = 0; $i < count($teacher); $i++){
            $info = Teacher::findOrFail($teacher[$i]->classable_id);
            return response()->json([
                'status' => 200,
                'fullName' => 'Г-н/Г-жа ' . $info->name . ' ' . $info->lname,
            ]);
        }
    }
    
    protected function addFilesToClass(){
        //check if there is a teacher 
        Teacher::findOrFail(1);

        //check if file exist
        $file = File::findOrFail(1);

        $class = new TeachStudClass([
            'name' => '12b',
            'code' => 'QOlK1xq7g7xmpyUWsAJtphUs32kCZ1'
        ]);

        $file->classes()->save($class);

        return $file->classes;
    }
    
    protected function getFilesInfo($code){
        //fetch teacher
        $files = TeachStudClass::whereCode($code)->whereClassableType('App\Models\File')->get();
        foreach($files as $file){
            $find = File::FindOrFail($file->classable_id);
            return response()->json([
                'status' => 200,
                'file' => $find,
                'contents' => $find->contents,
            ]);
        }
    }

}
