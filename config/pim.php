<?php
/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */

namespace Oxidio\Module;

use DI;
use fn;
use Oxidio\Pim;
use OxidEsales\Eshop\Application\Model;

return [
    Pim\App::class => DI\create(),
    Pim\Cli::class => DI\create(),

    EXTEND => [
        Model\Category::class => Pim\Model\PimCategory::class,
    ],

    CLI => DI\decorate(function(fn\Cli $cli) {
        $cli->command('oxidio:pim', Pim\Cli::class);
        $cli->setDefaultCommand('oxidio:pim');
        return $cli;
    }),

    MENU => [
        Menu\ADMIN => [
            Menu\ADMIN\PRODUCTS => [
                app('pim-app', Pim\App::class)
            ]
        ]
    ],
];
