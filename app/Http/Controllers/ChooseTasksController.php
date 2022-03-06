<?php

//-----------------------------------------
//-------ЗАДАЧИ С ИЗБИРАЕМ ОТГОВОР---------
//-----------------------------------------

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\ChooseTask;
use App\Models\ChooseAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ChooseTasksController extends Controller
{
    protected function insertChooseTask($id, Request $request){
        $teacher = Teacher::findOrFail($id);

        //-----------------VALIDATION-------------------------
        $errors = Validator::make($request->only('name', 'question', 'n_answers'), [
            'name' => 'required|max:255|regex:/[\x{0410}-\x{042F}A-Z][\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u',
            'question' => 'required|max:255|regex:/[\x{0410}-\x{042F}A-Z][\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u',
            'n_answers' => 'required|max:255|regex:/[0-9]*$/',
        ])->errors();
        
        if(count($errors) !== 0){
            return response()->json([
                'status' => 400,
                'errors' => $errors,
            ]);
        }

        $task = new ChooseTask([
            'name' => $request->input(['name']),
            'question' => $request->input(['question']),
            'n_answers' => $request->input(['n_answers'])
        ]);
        
        $teacher->chtask()->save($task);

        return $this->insertChooseAnswer($task->id, $request);
        
    }
    
    protected function insertChooseAnswer($t_id, Request $request){
        $task  = ChooseTask::findOrFail($t_id);
        
        
        for($i = 0; $i < $task->n_answers; $i++){
            $errors = Validator::make($request[$i], [
                'value' => 'required|max:255|regex:/(\s*\D*[0-9]*[A-Za-z]*[\x{0410}-\x{042F}]*[\x{0430}-\x{044F}]*)*$/u',
            ])->errors();
            if(count($errors) !== 0){
                return response()->json([
                    'status' => 400,
                    'errors' => $errors,
                ]);
            }
            $answer = new ChooseAnswer([
                'answer' => $request[$i]['value'],
                'is_answer' => $request[$i]['is_answer'], 
            ]);
                
            $task->answers()->save($answer);
        }
    }

    protected function showAllChooseTasks($id)
    {
        $tasks = ChooseTask::where('teacher_id', $id)->get();
        foreach($tasks as $task){
            $answers = ChooseAnswer::where('chtask_id', $task->id)->get();
            $task['answers'] = $answers;
        }
        return response()->json([
            'status' => 200,
            'tasks' => $tasks,
        ]);
    }
}
