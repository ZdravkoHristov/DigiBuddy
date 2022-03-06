<?php
namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
class CustomAuthController extends Controller
{
    // public function index()
    // {
    //     return view('auth.login');
    // }  
      
    // public function customLogin(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required',
    //         'password' => 'required',
    //     ]);
   
    //     $credentials = $request->only('email', 'password');
    //     if (Auth::attempt($credentials)) {
    //         return redirect()->intended('dashboard')
    //                     ->withSuccess('Signed in');
    //     }
  
    //     return redirect("login")->withSuccess('Login details are not valid');
    // }

    // public function registration()
    // {
    //     return view('auth.registration');
    // }
      
    public function customRegistration()
    {  
        $request = new Request;
        $request->name = 'ime';
        $request->lname = 'ime';
        $request->email = 'ime';
        $request->subject = 'ime';
        $request->school = 'ime';
        $request->town = 'ime';
        $request->comm = 'ime';
        $request->area = 'ime';
        $request->pass = 'passpass';
        $request->validate([
            'name' => 'required',
            'lname' => 'required',
            'subject' => 'required',
            'school' => 'required',
            'town' => 'required',
            'comm' => 'required',
            'area' => 'required',
            'email' => 'required|email|unique:teachers',
            'pass' => 'required|min:6',
        ]);
           
        $data = $request->all();
        $this->create($data);
         
        // return redirect("dashboard")->withSuccess('You have signed-in');
    }

    public function create(array $data)
    {
      return Teacher::create([
        'name' => $data['name'],
        'lname' => $data['lname'],
        'subject' => $data['subject'],
        'school' => $data['school'],
        'town' => $data['town'],
        'comm' => $data['comm'],
        'area' => $data['area'],
        'email' => $data['email'],
        'pass' => $data['password'],
      ]);
    }    
    
    // public function dashboard()
    // {
    //     if(Auth::check()){
    //         return view('dashboard');
    //     }
  
    //     return redirect("login")->withSuccess('You are not allowed to access');
    // }
    
    // public function signOut() {
    //     Session::flush();
    //     Auth::logout();
  
    //     return Redirect('login');
    // }
}