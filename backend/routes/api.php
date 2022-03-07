<?php

use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;
use App\Http\Controllers\TeacherClasses;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\FoldersController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\OpenTasksController;
use App\Http\Controllers\CustomAuthController;
use App\Http\Controllers\ChooseTasksController;
use App\Http\Controllers\Test\RegisterController;
use App\Http\Controllers\Auth\StudentRegisterController;
use App\Http\Controllers\Auth\TeacherRegisterController;
use App\Models\ChooseTask;

// use App\Http\Controllers\Auth\HomeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::name('teacher.')->namespace('Teacher')->prefix('teacher')->group(function(){

//     Route::namespace('Auth')->middleware('guest:teacher')->group(function(){
//         //login route
//         Route::get('/teacher/login', [TeacherRegisterController::class, 'login'])->name('login');
//         Route::post('/teacher/login', [TeacherRegisterController::class, 'login']);
//     });

//     Route::namespace('Auth')->middleware('auth:teacher')->group(function(){

//         Route::post('/logout',function(){
//             Auth::guard('teacher')->logout();
//             return redirect()->action([
//                 TeacherRegisterController::class,
//                 'login'
//             ]);
//         })->name('logout');

//     });

// });

Route::get('/', function(){
    return Teacher::find(1);
});

//--------------------REGISTER-----------------
Route::post('/teacher/register', [TeacherRegisterController::class, 'validator'])->name('teacher.register');
Route::get('/teacher/register', [TeacherRegisterController::class, 'validator'])->name('teacher.register');
//--------------------LOGIN-----------------
Route::get('/teacher/login', [TeacherRegisterController::class, 'login'])->name('teacher.login');
Route::post('/teacher/login', [TeacherRegisterController::class, 'login'])->name('teacher.login');
//--------------------LOGGEDTEACHER/HOME-----------------

//--------------------LOGGEDTEACHER/SETTINGS-----------------
Route::get("/teacher/{id}/home", [TeacherController::class, 'home'])->name('home');
Route::get("/teacher/{id}/profile/settings", [TeacherController::class, 'update'])->name('teacher.update');
Route::put("/teacher/{id}/profile/settings", [TeacherController::class, 'update'])->name('teacher.update');
Route::post("/teacher/{id}/exit", [TeacherController::class, 'logout'])->name('teacher.exit');
Route::get("/teacher/{id}/exit", [TeacherController::class, 'logout'])->name('teacher.exit');
//--------------------LOGGEDTEACHER/TASKS-----------------

Route::get("teacher/{id}/tasks/open", [OpenTasksController::class, 'showAllOpenTasks'])->name('teacher.all.open.tasks');
Route::get("teacher/{id}/tasks/choose", [ChooseTasksController::class, 'showAllChooseTasks'])->name('teacher.all.choose.tasks');
Route::get("teacher/{id}/tasks/choose/insert", [ChooseTasksController::class, 'insertChooseTask'])->name('teacher.choose.tasks');
Route::post("teacher/{id}/tasks/choose/insert", [ChooseTasksController::class, 'insertChooseTask'])->name('teacher.choose.tasks');
Route::get("teacher/{id}/tasks/open/insert", [OpenTasksController::class, 'insertOpenTask'])->name('teacher.open.tasks');
Route::post("teacher/{id}/tasks/open/insert", [OpenTasksController::class, 'insertOpenTask'])->name('teacher.open.tasks');
Route::delete("teacher/{id}/task/{task_id}/choose/delete", [ChooseTasksController::class, 'deleteChooseTask'])->name('teacher.open.tasks');
Route::delete("teacher/{id}/task/{task_id}/open/delete", [OpenTasksController::class, 'deleteOpenTask'])->name('teacher.open.tasks');
Route::post("teacher/{id}/tasks/open", [OpenTasksController::class, 'insertOpenTask'])->name('teacher.open.tasks');
//--------------------LOGGEDTEACHER/CLASSES-----------------
Route::get("teacher/{id}/classes", [TeacherClasses::class, 'codeGenerator'])->name('teacher.class');
Route::post("teacher/{id}/classes", [TeacherClasses::class, 'codeGenerator'])->name('teacher.class');
Route::get('teacher/{id}/folder/insert', [FileController::class, 'insertFolder']);
Route::get('teacher/{id}/folder/show', [FileController::class, 'showFolders']);
Route::get('teacher/{id}/folder/{folder_id}/update', [FileController::class, 'updateFolder']);
Route::get('teacher/{id}/folder/{folder_id}/file/insert', [FileController::class, 'insertFile']);
Route::get('teacher/{id}/folder/{folder_id}/file/show', [FileController::class, 'showFile']);
Route::get('teacher/{id}/file/{file_id}/show', [FileController::class, 'showTasksOnFile']);
Route::post('/student/register', [StudentRegisterController::class, 'create']);
// Route::post('/teacher/register', [RegisterTeacherController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
