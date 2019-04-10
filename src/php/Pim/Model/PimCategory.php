<?php
/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */

namespace Oxidio\Pim\Model;

use fn;
use IteratorAggregate;
use OxidEsales\Eshop\Application\Model;
use Oxidio;

/**
 */
class PimCategory extends PimCategory_parent implements IteratorAggregate
{
    public const ROOT = 'oxrootid';

    protected static $children;

    public static function tree(string $parent = self::ROOT, bool $refresh = false): fn\Map
    {
        if (!static::$children || $refresh) {
            static::$children = fn\traverse(Oxidio\query(static function(self $cat, $parentId, $id) {
                return fn\mapGroup($parentId)->andKey($id)->andValue($cat);
            })->orderBy(Model\Category\SORT));

        }
        return fn\map(static::$children[$parent] ?? []);
    }

    /**
     * @inheritdoc
     */
    public function getIterator(): fn\Map
    {
        return static::tree($this->getId());
    }
}

0 && class_alias(Model\Category::class, PimCategory_parent::class);
