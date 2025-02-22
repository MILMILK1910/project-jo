<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;



class CreateController extends Controller
{
    public function showCreateForm()
    {
        return Inertia::render('Shabu/Create');
    }
}
