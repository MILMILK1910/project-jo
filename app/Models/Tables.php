<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tables extends Model
{
    use HasFactory;
    protected $table = 'tables';
    protected $fillable = ['id','name','available','reserved_by_user_id'];

    public function tableStatus()
    {
        return $this->belongsTo(Table_statuses::class, 'status_id');
    }
}
