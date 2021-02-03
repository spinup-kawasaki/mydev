<?php 

require('vendor/autoload.php');

use PHPUnit\Framework\TestCase;
use Test\User;

class UserTest extends TestCase
{
  /**
   * @test
   */
  public function 名前が帰ってくるかのテスト() {
    $user = new User('Jiro');
    $this->assertEquals('Jiro', $user->get_user_name());
  }
}