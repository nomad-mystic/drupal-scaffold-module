<?php

namespace Drupal\MODULE_NAME\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Class CLASS_NAME
 * @package Drupal\MODULE_NAME\EventSubscriber
 */
class CLASS_NAME implements EventSubscriberInterface
{
  /**
   * @description
   *
   * @param $event
   *   The event to process.
   * @return
   */
  public function onRespond($event) {}

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents(): array
  {
    $events['THE_NAME_OF_YOUR_EVENT'][] = ['onRespond'];

    return $events;
  }
}
