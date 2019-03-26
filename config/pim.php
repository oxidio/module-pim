<?php
/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */

namespace Oxidio\Module;

use DI;
use Oxidio\Pim;

return [
    Pim\App::class => DI\create(),

    MENU => [
        Menu\ADMIN => [
            Menu\ADMIN\PRODUCTS => [
                app('pim-app', Pim\App::class)
            ]
        ]
    ],
];
