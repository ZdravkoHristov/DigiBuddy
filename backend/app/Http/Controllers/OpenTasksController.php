<?php

/* -------------------------------------------------------
 *          CONTROLLER FOR ЗАДАЧИ С ОТВОРЕН ОТГОВОР
   ------------------------------------------------------- */


namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\OpenTask;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OpenTasksController extends Controller
{
    protected function insertOpenTask($id, Request $request){
        $teacher = Teacher::findOrFail($id);
        
        $errors = Validator::make($request->only('name', 'question', 'answer'), [
            'name' => 'required|max:255|regex:/[\x{0410}-\x{042F}A-Z][\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u',
            'question' => 'required|max:255|regex:/[\x{0410}-\x{042F}A-Z][\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u',
            'answer' => 'required|max:255|regex:/[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u',
        ])->errors();

        if(count($errors) !== 0){
            return response()->json([
                'status' => 400,
                'errors' => $errors
            ]);
        }

        $task = new OpenTask([
            'name' => $request->input(['name']),
            'question' => $request->input(['name']),
            'answer' => $request->input(['name'])
        ]);
        
        $teacher->optask()->save($task);
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

    protected function updateOpenTask($id, $t_id, Request $request){
        $errors = Validator::make($request->only('name', 'question', 'answer'), [
            'name' => 'required|max:255|regex:/[\x{0410}-\x{042F}A-Z][\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u',
            'question' => 'required|max:255|regex:/[\x{0410}-\x{042F}A-Z][\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u',
            'answer' => 'required|max:255|regex:/[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u',
        ])->errors();

        if(count($errors) !== 0){
            return response()->json([
                'status' => 400,
                'errors' => $errors
            ]);
        }
        //check for teacher 
        if(OpenTask::whereTeacherId($id)){
            //update task
            $task = OpenTask::whereTeacherId($id)->whereId($t_id);
            $task->update([
                'name' => $request->input(['name']),
                'question' => $request->input(['question']),
                'answer' => $request->input(['answer'])
            ]);
        }
    }
}
