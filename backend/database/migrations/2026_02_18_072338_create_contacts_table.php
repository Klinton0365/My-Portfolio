<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();

            // Basic Information
            $table->string('name');
            $table->string('email')->index();
            $table->string('phone')->nullable();
            $table->string('subject')->nullable();
            $table->text('message');

            // Status Management (for admin panel later)
            $table->enum('status', ['new', 'read', 'replied', 'archived'])
                  ->default('new')
                  ->index();

            // Spam / Security Tracking
            $table->boolean('is_spam')->default(false);
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->string('country')->nullable();

            // Reference (for logged-in users in future)
            $table->foreignId('user_id')
                  ->nullable()
                  ->constrained()
                  ->nullOnDelete();

            // Internal Notes (admin only)
            $table->text('admin_notes')->nullable();

            // Soft Delete for recovery
            $table->softDeletes();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
