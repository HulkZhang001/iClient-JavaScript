﻿import SuperMap from '../SuperMap';
import ThemeMemoryData from './ThemeMemoryData';

/**
 * @class SuperMap.Theme
 * @classdesc 专题图基类。
 * @param  type - {String} 专题图类型。
 * @param options - {Object} 可选参数。如：<br>
 *        memoryData - {SuperMap.ThemeMemoryData} 专题图内存数据。
 */
export default class Theme {

    /**
     * @member SuperMap.Theme.prototype.memoryData -{SuperMap.ThemeMemoryData}
     * @description 专题图内存数据。<br>
     *              用内存数据制作专题图的方式与表达式制作专题图的方式互斥，前者优先级较高。
     *              第一个参数代表专题值，即数据集中用来做专题图的字段或表达式的值；第二个参数代表外部值。在制作专题图时，会用外部值代替专题值来制作相应的专题图。
     */
    memoryData = null;

    /**
     * @member SuperMap.Theme.prototype.type -{String}
     * @description 专题图类型。
     */
    type = null;

    /**
     * @function SuperMap.Theme.prototype.constructor
     * @description 专题图基类构造函数。
     * @param type - {String} 专题图类型。
     * @param options - {Object} 可选参数。如：<br>
     *        memoryData - {SuperMap.ThemeMemoryData} 专题图内存数据。
     */
    constructor(type, options) {
        if (!type) {
            return this;
        }
        this.type = type;
        if (options) {
            SuperMap.Util.extend(this, options);
        }
    }

    /**
     * @function destroy
     * @description 释放资源，将引用资源的属性置空。
     */
    destroy() {
        var me = this;
        if (me.memoryData) {
            me.memoryData.destroy();
            me.memoryData = null;
        }
        me.type = null;
    }

    /**
     * @function SuperMap.Theme.prototype.toServerJSONObject
     * @description 转换成对应的 JSON 格式对象。
     */
    toServerJSONObject() {
        //return 子类实现
        return;
    }

    CLASS_NAME = "SuperMap.Theme"
}

SuperMap.Theme = Theme;