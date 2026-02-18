<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
    'name',
    'email',
    'phone',
    'subject',
    'message',
    'status',
    'is_spam',
    'ip_address',
    'user_agent',
    'country',
    'user_id',
    'admin_notes'
];

}
