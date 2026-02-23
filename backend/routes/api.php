<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::get('/health', function () {
    return response()->json([
        'status' => 'API is running',
        'version' => app()->version(),
    ]);
});

Route::post('/contact', [ContactController::class, 'store']);
Route::post('/hire', [ContactController::class, 'hire']);
