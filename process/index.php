<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();


$app->get('/', function() use($app) {

    $public_key = 'i21026092163';
    $private_key = 'Lfj88TBWC2wCc9T8vCm2ZunA5qBKkR8SZAKcN0h0';

    $liqpay = new LiqPay($public_key, $private_key);
    $response = $liqpay->api("payment/pay", array(
        'version'        => '3',
        'phone'          => '380950000001',
        'amount'         => '1',
        'currency'       => 'USD',
        'description'    => 'description text',
        'order_id'       => 'order_id_1',
        'card'           => '4731195301524634',
        'card_exp_month' => '03',
        'card_exp_year'  => '22',
        'card_cvv'       => '111',
        'sandbox'        => true
    ));

    var_dump($response);exit;
    return 'Hello '.$app->escape($res);
});

$app->run(); 