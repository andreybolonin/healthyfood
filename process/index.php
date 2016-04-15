<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();


$app->get('/', function() use($app) {

    $public_key = 'i21026092163';
    $private_key = 'Lfj88TBWC2wCc9T8vCm2ZunA5qBKkR8SZAKcN0h0';
    $liqpay = new LiqPay($public_key, $private_key);

    $html = $liqpay->cnb_form(array(
        'version' => 3,
        'public_key' => 'i21026092163',
        'action' => 'subscribe',
        'amount' => '1',
        'currency' => 'UAH',
        'description' => 'test description',
        'order_id' => 'test order_id',
        'sandbox' => 1,
        'language' => 'ru'
    ));

    return $html;

    $json_string = [
        'version' => 3,
        'public_key' => 'i21026092163',
        'action' => 'subscribe',
        'amount' => '1',
        'currency' => 'UAH',
        'description' => 'test description',
        'order_id' => 'test order_id'
    ];

    $data = base64_encode($json_string);

    $signature = base64_encode(sha1($private_key.$data.$private_key, 1));

    var_dump($response);exit;
    return 'Hello '.$app->escape($res);
});

$app->run(); 