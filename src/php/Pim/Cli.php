<?php
/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */

namespace Oxidio\Pim;

use fn;
use Oxidio;

/**
 */
class Cli
{
    /**
     * @param fn\Cli\IO $io
     */
    public function __invoke(fn\Cli\IO $io)
    {
        fn\flatten(Model\PimCategory::tree(), function(Model\PimCategory $cat, $key) use($io) {
            $indent = str_repeat('  ', substr_count($key, '/'));
            $io->writeln(fn\str("$indent%s", html_entity_decode($cat->getTitle())));
        });
    }
}
