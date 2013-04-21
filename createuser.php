<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Alex
 * Date: 4/16/13
 * Time: 2:37 PM
 * To change this template use File | Settings | File Templates.
 */
ini_set('display_errors', 1);
//load Magento
$mageFilename = 'app/Mage.php';
if (!file_exists($mageFilename)) {
    echo $mageFilename." was not found";
    exit;
}
require_once $mageFilename;
Mage::app();

# Create New User
try {
    $user = Mage::getModel('admin/user')
        ->setData(array(
            'username'  => 'magento',
            'firstname' => 'Alex',
            'lastname'    => 'Moon',
            'email'     => 'alex@union-progress.com',
            'password'  => 'pass4ewc',
            'is_active' => 1
        ))->save();

} catch (Exception $e) {
    echo $e->getMessage();
    exit;
}

# Assign New Role
try {
    $user->setRoleIds(array(1))
        ->setRoleUserId($user->getUserId())
        ->saveRelations();

} catch (Exception $e) {
    echo $e->getMessage();
    exit;
}