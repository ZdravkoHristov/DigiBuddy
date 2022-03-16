<?php

namespace App\Http\Controllers;

use App\Models\ChooseAnswer;
use App\Models\ChooseTask;
use App\Models\File;
use App\Models\FileContents;
use App\Models\Folder;
use App\Models\OpenTask;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{
    protected function showAllFolders($id){
        $folders = Folder::whereTeacherId($id)->get();
        return response()->json([
            'status' => 200,
            'folders' => $folders,
        ]);
    }

    protected function insertFolder($id, Request $request){
        $teacher = Teacher::findOrFail($id);

        $error = Validator::make($request->all(), [
            'name' => 'requeired|max:255|regex:/[\x{0410}-\x{042F}A-Z][\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u'
        ])->errors();
        
        $folder = new Folder([
            'name' => $request->input(['name']),
            'parent_id' => $request->input(['parent_id'])
        ]);
        
        $teacher->folders()->save($folder);
        
                return response()->json([
                    'status' => 200,
                    'id' => $folder->id,
                    'errors' => $error
                ]);
    }

    protected function showFolders($id){
        $folders = Folder::whereTeacherId($id)->get();
        return response()->json([
            'status' => 200,
            'folders' => $folders,
        ]);
    }

    protected function updateFolder($id, $folder_id, Request $request){
        $error = Validator::make($request->all(), [
            'name' => 'requeired|max:255|regex:/[\x{0410}-\x{042F}A-Z][\x{0430}-\x{044F}a-z]*(\s*\D*[0-9]*[\x{0410}-\x{042F}A-Z]*[\x{0430}-\x{044F}a-z]*)*$/u'
        ])->errors();

        $folder = Folder::whereId($folder_id)->whereTeacherId($id)->update([
            'name' => $request->input(['name']),
        ]);
        
        return response()->json([
            'status' => 200,
            'message' => 'Вие успешно променихте заглавието на колекцията',
            'folder' => $folder,
            'errrors' => $error
        ]);
    }

    protected function deleteFolder($id, $folder_id){
        Teacher::findOrFail($id);

        $folder = Folder::whereId($folder_id)->whereTeacherId($id);
        $folder->delete();
    }

    protected function insertFile($teacher_id, $folder_id, Request $request){
        $folder = Folder::findOrFail($folder_id);
        
        $file = new File([
            'teacher_id' => $teacher_id,
            'name' => $request->input(['name']),
            'n_contents' => $request->input((['n_contents']))
        ]);

        $folder->files()->save($file);

        //---EXAMPLE DATA

        $tasks = [
            41, 3
        ];
        //------

        for($i = 0; $i < $file->n_contents; $i++){
            // return response()->json([
            //     'status' => 200,
            //     'message' => 'Вие успешно създадохте работен лист',
            //     'info' => $request[$i]['type'],
            // ]);
            $file_contents = new FileContents([
                'type' => $request[$i]['type'],
                'task_id' => $tasks[$i],
            ]);

            $file->contents()->save($file_contents);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Вие успешно създадохте работен лист',
            'info' => $request->input(['type']),
        ]);
    }

    protected function showFile($teacher_id, $file_id){
        $files = FileContents::where('file_id', $file_id)->get();
        
        $tasks = [];
        foreach($files as $file){
            if($file->type == 'chtasks'){
                $tasks['chtask'] = [
                    'task' => ChooseTask::findOrFail($file->task_id),
                    'answer' => ChooseAnswer::whereChtaskId($file->task_id)->get()
                ];
            } 
            if($file->type == 'optasks'){
                $tasks['optasks'] = OpenTask::findOrFail($file->task_id);
            }
        }
        return response()->json([
            'status' => 200,
            'tasks' =>$tasks
        ]);
    }

    protected function updateFile($teacher_id, $folder_id, $file_id, Request $request){
        $file = File::whereFolderId($folder_id)->whereId($file_id);

        $file->update([
            'name' => $request->input(['name']),
        ]);
    }

    protected function deleteFile($teacher_id, $folder_id, $file_id){
        $file = File::whereFolderId($folder_id)->whereId($file_id);

        $file->delete();
    }
}
