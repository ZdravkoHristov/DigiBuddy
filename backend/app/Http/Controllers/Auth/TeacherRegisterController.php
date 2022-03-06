<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RedirectsTeachers;
use Illuminate\Foundation\Auth\RegistersTeachers;
use Illuminate\Foundation\Auth\AuthenticatesTeachers;

class TeacherRegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    // use RegistersTeachers;
    // use AuthenticatesTeachers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

    /*
        -----------------------------------------------------
        ----------------------REGISTER-----------------------
        -----------------------------------------------------
    */

    protected function validator()
    {
        // $validate = Validator::make($request->all(),[
        //     'name' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
        //     'lname' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
        //     'email' => 'required|max:255|email|unique:teachers',
        //     'subject' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}\x{0430}-\x{044F}]*)*$/u',
        //     'school' => 'required|max:255|regex:/[\x{0410}-\x{042F}\x{0430}-\x{044F}0-9\s\S]*$/u',
        //     'town' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
        //     'comm' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
        //     'area' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
        //     'password' => 'required|max:255|confirmed|min:6|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/',
        // ]);

        // $errors = $validate->errors();

        // if(count($errors) !== 0)
        // {
        //     return response()->json([
        //         'status' => 400,
        //         'errors' => $errors,
        //     ]);
        // }
            // $data = [
            //     'name' => $request->input('name'),
            //     'lname' => $request->input('lname'),
            //     'email' => $request->input('email'),
            //     'subject' => $request->input('subject'),
            //     'school' => $request->input('school'),
            //     'town' => $request->input('town'),
            //     'comm' => $request->input('comm'),
            //     'area' => $request->input('area'),
            //     'password' => Hash::make($request->input('password')),
            // ];
            $data = [
                'name' => 'Деница',
                'lname' => 'Рашкова',
                'email' => 'piper.mclean037@gmail.com',
                'subject' => 'Предмет',
                'school' => 'СУ',
                'town' => 'Първомай',
                'comm' => 'Първомай',
                'area' => 'Пловдив',
                'password' => Hash::make('14*72Oo3'),
            ];
            // $data = [
            //     'name' => $request->input('name'),
            //     'lname' => $request->input('lname'),
            //     'email' => $request->input('email'),
            //     'subject' => $request->input('subject'),
            //     'school' => $request->input('school'),
            //     'town' => $request->input('town'),
            //     'comm' => $request->input('comm'),
            //     'area' => $request->input('area'),
            //     'password' => Hash::make($request->input('password')),
            // ];
            
            return $this->create($data);
    }

    protected function create(array $data)
    {
        Teacher::create($data);

        $teacher = Auth::guard('teacher');

        if ($teacher->attempt(['email' => $data['email'], 'password' => $data['password']])) {
            if($teacher->check()){
                    return response()->json([
                        'status' => 200,
                        'url' => "api/teacher/{$teacher->id()}/home/"
                    ]);
            }
        }
    }

    /*
        -----------------------------------------------------
        ----------------------LOGIN--------------------------
        -----------------------------------------------------
    */

    protected function login(Request $request)
    {
        $errors = Validator::make($request->all(),[
            'email' => 'required|max:255|email',
            'password' => 'required|max:255|min:6|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/',
        ])->errors();



        $teacher = Auth::guard('teacher');    

        if(count($errors) === 0){
            if ($teacher->attempt(['email' => $request->input(['email']), 'password' => $request->input(['password'])])) {
                if($teacher->check()){
                        return response()->json([
                            'status' => 200,
                            'url' => "api/teacher/{$teacher->id()}/home/"
                        ]);
                }
            }   
            $error = ['login' => 'Грешен имейл или парола.'];
            return response()->json([
                'status' => 400,
                'errors' => $error,
            ]);
        }
        $error = ['login' => 'Грешен имейл или парола.'];
        return response()->json([
            'status' => 400,
            'errors' => $error,
        ]);
        

    }


    // protected function home($id)
    // {
    //     $teacher = Teacher::findOrFail($id);
    //     $info = $teacher;
    //     // var_dump($teacher);
    //     return response()->json([
    //         'status' => 200,
    //         'info' => $info,
    //     ]);
    // }

    // protected function update($id, Request $request,){
    //     $teacher = Teacher::findOrFail($id);

    //     $errors = Validator::make($request->all(),[
    //         'name' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
    //         'lname' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
    //         // 'email' => 'required|max:255|email|unique:teachers',
    //         'subject' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}\x{0430}-\x{044F}]*)*$/u',
    //         'school' => 'required|max:255|regex:/[\x{0410}-\x{042F}\x{0430}-\x{044F}0-9\s\S]*$/u',
    //         'town' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
    //         'comm' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
    //         'area' => 'required|max:255|regex:/[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*(\s*[-]*[\x{0410}-\x{042F}][\x{0430}-\x{044F}]*)?$/u',
    //         'password' => 'required|max:255|min:6|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/',
    //     ])->errors();

        

    //     if(count($errors) === 0){
    //         if(Auth::guard('teacher')->attempt(['id' => $id, 'password' => $request->input(['password'])])){
    //             $teacher->update([
    //                 'name' => $request->input(['name']),
    //                 'lname' => $request->input(['lname']),
    //                 // 'email' => $request->input(['email']),
    //                 'subject' => $request->input(['subject']),
    //                 'school' => $request->input(['school']),
    //                 'town' => $request->input(['town']),
    //                 'comm' => $request->input(['comm']),
    //                 'area' => $request->input(['area']),
    //             ]);        
    //             return response()->json([
    //                 'status' => 200,
    //             ]);
    //         }
    //     }   
    //     return response()->json([
    //         'status' => 400,
    //         'errors' => $errors,
    //     ]);


    // }

    // protected function exit(){
    //     Session::flush();
    //     Auth::logout();
  
    //     return Redirect('/');
    // }
}
