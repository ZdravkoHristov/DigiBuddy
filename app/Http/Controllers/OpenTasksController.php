<?php

/* -------------------------------------------------------
 *          CONTROLLER FOR ЗАДАЧИ С ОТВОРЕН ОТГОВОР
   ------------------------------------------------------- */


namespace App\Http\Controllers;

use App\Models\OpenTask;
use App\Models\Teacher;
use Illuminate\Http\Request;

class OpenTasksController extends Controller
{
    protected function __construct()
    {
        // $this->middleware('auth');
    }


    protected function insertOpenTask($id){
        $teacher = Teacher::findOrFail($id);
        
        $task = new OpenTask([
            'name' => 'name na neshto',
            'question' => 'vupros na neshto',
            'answer' => 'orgovor'
        ]);
        
        $teacher->optask()->save($task);
        return $teacher;
    }
    
    protected function showAllOpenTasks($id){
        $tasks = OpenTask::where('teacher_id', $id)->get();
        return response()->json([
            'status' => 200,
            'tasks' => $tasks,
        ]);
    }

    protected function deleteOpenTask($id, $task_id){
        $task = OpenTask::whereTeacherId($id)->whereId($task_id);
        $task->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Задачата беше изтрита успешно'
        ]);
    }
}
