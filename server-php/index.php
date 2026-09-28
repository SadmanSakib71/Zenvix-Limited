<?php
// Run with: php -S localhost:3001 index.php
// Every request goes through this file.

header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

if ($method === "GET" && $path === "/api/health") {
    echo json_encode(["ok" => true]);
    exit;
}

http_response_code(404);
echo json_encode(["error" => "Not found"]);
