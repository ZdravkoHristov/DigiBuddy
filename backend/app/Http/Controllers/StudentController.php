<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    protected function home($id){
        $student = Student::findOrFail($id);
        return response()->json([
            'status' => 200,
            'info' => $student,
        ]);
    }

    
    protected function update($id, Request $request,){
        $student = Student::findOrFail($id);

        $errors = Validator::make($request->all(),[
            'name' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'lname' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'class' => 'required|max:255|regex:/[0-9]{1,2}?[\x{0410}-\x{042F}]*[\x{0430}-\x{044F}]*$/u',
            'school' => 'required|max:255|regex:/[\x{0410}-\x{042F}\x{0430}-\x{044F}0-9\s\S]*$/u',
            'town' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'comm' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'area' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'password' => 'required|max:255|min:6|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/',
        ])->errors();     

        if(count($errors) === 0){
            if(Auth::guard('student')->attempt(['id' => $id, 'password' => $request->input(['password'])])){
                $student->update([
                    'name' => $request->input(['name']),
                    'lname' => $request->input(['lname']),
                    'class' => $request->input(['class']),
                    'school' => $request->input(['school']),
                    'town' => $request->input(['town']),
                    'comm' => $request->input(['comm']),
                    'area' => $request->input(['area']),
                ]);        
                return response()->json([
                    'status' => 200,
                ]);
            }
        }   

        return response()->json([
            'status' => 400,
            'errors' => $errors,
        ]);


    }

    protected function logout(){
        Session::flush();
        Auth::logout();
  
        return response()->json([
            'message' => 'loggedout'
        ]);
    }
}
