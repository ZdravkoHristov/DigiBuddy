<?php

namespace App\Http\Controllers\Student;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class StudentRegisterController extends Controller
{
    protected function register(Request $request){
        $data = [
            // 'email' => $request->input(['email']),
            // 'name' => $request->input(['name']),
            // 'lname' => $request->input(['lname']),
            // 'class' => $request->input(['class']),
            // 'school' => $request->input(['school']),
            // 'town' => $request->input(['town']),
            // 'comm' => $request->input(['comm']),
            // 'area' => $request->input(['area']),
            // 'password' => $request->input(['password']),
            'email' => 'deni.tinista@gmail.com',
            'name' => 'name',
            'lname' => 'lname',
            'class' => 'class',
            'school' => 'school',
            'town' => 'town',
            'comm' => 'comm',
            'area' => 'area',
            'password' => Hash::make('14*72Oo3'),
        ];

        Student::create($data);
        // $student = Auth::guard('student');
        // if($student->attempt(['email' => $request->input(['email']), 'password' => $request->input(['password'])])) {
        //     if($student->check()){
        //         return response()->json([
        //             'status' => 200,
        //             'url' => "api/student/{$student->id()}/home/"
        //         ]);
        //         return redirect('student.home');
        //     }
        // }
    }

    protected function login(Request $request)
    {
        // $errors = Validator::make($request->all(),[
        //     'email' => 'required|max:255|email',
        //     'password' => 'required|max:255|min:6|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/',
        // ])->errors();

        $student = Auth::guard('student');   

            $data = [
                'email' => 'deni.tinista@gmail.com',
                'password' => '14*72Oo3',
            ];

        // if(count($errors) === 0){
            if ($student->attempt(['email' => $data['email'], 'password' => $data['password']])) {
                if($student->check()){
                    // return Auth::guard('student')->check();
                    return redirect("api/student/{$student->id()}/home/", $student);
                        return response()->json([
                            'status' => 200,
                            'url' => "api/student/{$student->id()}/home/"
                        ]);
                }
            }   
            // $error = ['login' => 'Грешен имейл или парола.'];
            // return response()->json([
            //     'status' => 400,
            //     'errors' => $error,
            // ]);
        // }
        // return response()->json([
        //     'status' => 400,
        //     'errors' => $errors,
        // ]);
        

    }

    protected function home($id){
        $student = Student::findOrFail($id);
        return $student;
    }
}
