<?php

namespace App\Http\Controllers\Student;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class StudentRegisterController extends Controller
{
    protected function register(Request $request){
        $errors = Validator::make($request->all(),[
            'name' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'lname' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'email' => 'required|max:255|email|unique:teachers',
            'class' => 'required|max:255|regex:/[0-9]{1,2}?[\x{0410}-\x{042F}]*[\x{0430}-\x{044F}]*$/u',
            'school' => 'required|max:255|regex:/[\x{0410}-\x{042F}\x{0430}-\x{044F}0-9\s\S]*$/u',
            'town' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'comm' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'area' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
            'password' => 'required|max:255|confirmed|min:6|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/',
        ])->errors();

        if(count($errors) === 0){
            $data = [
                'name' => $request->input(['name']),
                'lname' => $request->input(['lname']),
                'email' => $request->input(['email']),
                'class' => $request->input(['class']),
                'school' => $request->input(['school']),
                'town' => $request->input(['town']),
                'comm' => $request->input(['comm']),
                'area' => $request->input(['area']),
                'password' => Hash::make($request->input(['password'])),
                // 'email' => 'deni.tinista@gmail.com',
                // 'name' => 'name',
                // 'lname' => 'lname',
                // 'class' => 'class',
                // 'school' => 'school',
                // 'town' => 'town',
                // 'comm' => 'comm',
                // 'area' => 'area',
                // 'password' => Hash::make('14*72Oo3'),
            ];
    
            Student::create($data);
            $student = Auth::guard('student');
            if($student->attempt(['email' => $request->input(['email']), 'password' => $request->input(['password'])])) {
                if($student->check()){
                    return response()->json([
                        'status' => 200,
                        'url' => "api/student/{$student->id()}/home/"
                    ]);
                }
            }
        }
        return response()->json([
            'status' => 400,
            'errors' => $errors,
        ]);

    }

    protected function login(Request $request)
    {
        $errors = Validator::make($request->all(),[
            'email' => 'required|max:255|email',
            'password' => 'required|max:255|min:6|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/',
        ])->errors();

        $student = Auth::guard('student');   

            $data = [
                'email' => $request->input(['email']),
                'password' => $request->input(['password']),
            ];

        if(count($errors) === 0){
            if ($student->attempt(['email' => $request->input(['email']), 'password' => $request->input(['password'])])) {
                if($student->check()){
                    // return Auth::guard('student')->check();
                    // return redirect("api/student/{$student->id()}/home/");
                        return response()->json([
                            'status' => 200,
                            'url' => "api/student/{$student->id()}/home/"
                        ]);
                }
            }   
            $error = ['login' => 'Грешен имейл или парола.'];
            return response()->json([
                'status' => 400,
                'errors' => $error,
            ]);
        }
        return response()->json([
            'status' => 400,
            'errors' => $errors,
        ]);
        

    }
}
