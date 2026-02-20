<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::post('/contact', [ContactController::class, 'store']);
Route::post('/hire', [ContactController::class, 'hire']);
