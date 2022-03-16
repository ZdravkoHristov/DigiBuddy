<?php

use App\Models\Student;
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
use App\Http\Controllers\Student\StudentController;
use App\Http\Controllers\Student\StudentRegisterController;
use App\Http\Controllers\Auth\TeacherRegisterController;
use App\Http\Controllers\Classes;

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

Route::get('/test', [Classes::class, 'test']);
Route::get('/sttest', [Classes::class, 'sttest']);

//--------------------REGISTER-----------------
Route::post('/teacher/register', [TeacherRegisterController::class, 'validator'])->name('teacher.register');
Route::get('/teacher/register', [TeacherRegisterController::class, 'validator'])->name('teacher.register');
Route::post('/student/register', [StudentRegisterController::class, 'register'])->name('student.register');
Route::get('/student/register', [StudentRegisterController::class, 'register'])->name('student.register');
//--------------------LOGIN-----------------
Route::get('/teacher/login', [TeacherRegisterController::class, 'login'])->name('teacher.login');
Route::post('/teacher/login', [TeacherRegisterController::class, 'login'])->name('teacher.login');
Route::get('/student/login', [StudentRegisterController::class, 'login'])->name('student.login');
Route::post('/student/login', [StudentRegisterController::class, 'login'])->name('student.login');
//--------------------LOGGEDTEACHER/HOME-----------------
Route::get("/teacher/{id}/home", [TeacherController::class, 'home'])->name('teacher.home');
Route::get('/student/{id}/home', [StudentController::class, 'home'])->name('student.home');
//--------------------LOGGEDTEACHER/SETTINGS-----------------
Route::put("/teacher/{id}/profile/settings", [TeacherController::class, 'update'])->name('teacher.update');
Route::post("/teacher/{id}/exit", [TeacherController::class, 'logout'])->name('teacher.exit');
Route::put("/student/{id}/profile/settings", [StudentController::class, 'update'])->name('student.update');
Route::post("/student/{id}/exit", [StudentController::class, 'logout'])->name('student.exit');
//--------------------LOGGEDTEACHER/TASKS-----------------
Route::get("teacher/{id}/tasks/choose", [ChooseTasksController::class, 'showAllChooseTasks'])->name('teacher.all.choose.tasks');
Route::post("teacher/{id}/tasks/choose/insert", [ChooseTasksController::class, 'insertChooseTask'])->name('teacher.choose.tasks');
Route::get("teacher/{id}/task/{t_id}/choose/update", [ChooseTasksController::class, 'updateChooseTask'])->name('teacher.choose.tasks');
Route::put("teacher/{id}/task/{t_id}/choose/update", [ChooseTasksController::class, 'updateChooseTask'])->name('teacher.choose.tasks');
Route::delete("teacher/{id}/task/{t_id}/choose/delete", [ChooseTasksController::class, 'deleteChooseTask'])->name('teacher.choose.tasks');
Route::get("teacher/{id}/tasks/open", [OpenTasksController::class, 'showAllOpenTasks'])->name('teacher.all.open.tasks');
Route::get("teacher/{id}/tasks/open/insert", [OpenTasksController::class, 'insertOpenTask'])->name('teacher.open.tasks');
Route::post("teacher/{id}/tasks/open/insert", [OpenTasksController::class, 'insertOpenTask'])->name('teacher.open.tasks');
Route::get("teacher/{id}/task/{t_id}/open/update", [OpenTasksController::class, 'updateOpenTask'])->name('teacher.open.tasks');
Route::put("teacher/{id}/task/{t_id}/open/update", [OpenTasksController::class, 'updateOpenTask'])->name('teacher.open.tasks');
Route::get("teacher/{id}/task/{task_id}/open/delete", [OpenTasksController::class, 'deleteOpenTask'])->name('teacher.open.tasks');
Route::delete("teacher/{id}/task/{task_id}/open/delete", [OpenTasksController::class, 'deleteOpenTask'])->name('teacher.open.tasks');
//--------------------LOGGEDTEACHER/CLASSES-----------------
Route::get("teacher/{id}/classes", [Classes::class, 'codeGenerator'])->name('teacher.class');
Route::post("teacher/{id}/classes", [Classes::class, 'codeGenerator'])->name('teacher.class');
Route::get("student/{id}/classes", [Classes::class, 'codeGenerator'])->name('teacher.class');
Route::post("student/{id}/classes", [Classes::class, 'codeGenerator'])->name('teacher.class');
// Route::get("teacher/{id}/folders", [FoldersController::class, 'createFolder'])->name('teacher.folder');
// Route::post("teacher/{id}/folders", [FoldersController::class, 'createFolder'])->name('teacher.folder');
// Route::get("teacher/{id}/folders/{f_id}/child", [FoldersController::class, 'createFile'])->name('teacher.folder');
Route::get('teacher/{id}/folders', [FileController::class, 'showAllFolders']);
Route::post('teacher/{id}/folder/insert', [FileController::class, 'insertFolder']);
Route::get('teacher/{id}/folder/show', [FileController::class, 'showFolders']);
Route::put('teacher/{id}/folder/{folder_id}/update', [FileController::class, 'updateFolder']);
Route::delete('teacher/{id}/folder/{folder_id}/delete', [FileController::class, 'deleteFolder']);
Route::get('teacher/{id}/folder/{folder_id}/file/insert', [FileController::class, 'insertFile']);
Route::post('teacher/{id}/folder/{folder_id}/file/insert', [FileController::class, 'insertFile']);
Route::get('teacher/{id}/folder/{folder_id}/file/show', [FileController::class, 'showFile']);
Route::get('teacher/{id}/folder/{folder_id}/file/{file_id}/update', [FileController::class, 'updateFile']);
Route::put('teacher/{id}/folder/{folder_id}/file/{file_id}/update', [FileController::class, 'updateFile']);
Route::get('teacher/{id}/folder/{folder_id}/file/{file_id}/delete', [FileController::class, 'deleteFile']);
Route::delete('teacher/{id}/folder/{folder_id}/file/{file_id}/delete', [FileController::class, 'deleteFile']);
Route::get('teacher/{id}/file/{file_id}/show', [FileController::class, 'showTasksOnFile']);
// Route::post("teacher/{id}/tasks", [TasksController::class, 'insert'])->name('teacher.tasks');
// Route::get('/teacher/register', [RegisterTeacherController::class, 'show']);
// Route::post('/teacher/register', [RegisterTeacherController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});