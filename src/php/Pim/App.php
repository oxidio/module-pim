<?php
/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */

namespace Oxidio\Pim;

use OxidEsales\Eshop\Application\Model\Category;
use OxidEsales\Eshop\Core\ViewConfig;
use Oxidio\Module\Module;
use fn;
use Oxidio;

class App
{
    public function __invoke(ViewConfig $vc, Module $module)
    {
        $categories = fn\traverse(Oxidio\query(function(Category $category) {
            return [
                'id'  => $category->getId(),
                'url' => $category->getLink(),
            ];
        }));

        $categories = json_encode($categories);

        return <<<EOT
<!doctype html>
<html lang="{$vc->getActLanguageAbbr()}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <div id="app" data-categories='$categories'></div>
        <script src="{$vc->getConfig()->getResourceUrl($module->id . '.js', true)}"></script>
    </body>
</html>

EOT;
    }
}
