﻿/* Copyright© 2000 - 2018 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/

import { SuperMap } from '../../SuperMap';

/**
 * Namespace: SuperMap.Lang["zh-CN"]
 * Dictionary for Simplified Chinese.  Keys for entries are used in calls to
 *     <SuperMap.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <SuperMap.String.format> calls.
 */
let zh = {
    'title_dataFlowService': '数据流服务',
    'title_distributedAnalysis': '分布式分析',
    'title_clientComputing': '客户端计算',
    'title_dataServiceQuery': '数据服务查询',
    'title_searchCity':'搜索城市',
    'title_searchLayer':'搜索图层',

    'text_input_value_inputDataFlowUrl': '请输入数据流服务地址如:ws://{serviceRoot}/{dataFlowName}/dataflow/subscribe',
    'text_displayFeaturesInfo': '显示要素信息',
    'text_subscribe': '订阅',
    'text_cancelSubscribe': '取消订阅',
    
    'text_densityAnalysis': '密度分析',
    'text_CalculateTheValuePerUnitArea': '计算点指定邻域形状内的每单位面积量值',
    'text_option_selectDataset':'请选择数据集',
    'text_label_dataset': '数据集',
    'text_option_simplePointDensityAnalysis': '简单点密度分析',
    'text_option_nuclearDensityAnalysis': '核密度分析',
    'text_label_analyticalMethod': '分析方法',
    'text_option_quadrilateral': '四边形',
    'text_option_hexagon': '六边形',
    'text_label_meshType': '网格面类型',
    'text_option_notSet': '未设置',
    'text_label_weightField': '权重字段',
    'text_label_gridSizeInMeters': '网格大小',
    'text_label_searchRadius': '搜索半径',
    'text_label_queryRange': '分析范围',
    'text_label_areaUnit': '面积单位',
    'text_option_equidistantSegmentation': '等距离分段',
    'text_option_logarithm': '对数',
    'text_option_equalCountingSegment': '等计数分段',
    'text_option_squareRootSegmentation': '平方根分段',
    'text_label_thematicMapSegmentationMode': '专题图分段模式',
    'text_label_thematicMapSegmentationParameters': '专题图分段参数',
    'text_option_greenOrangePurpleGradient': '绿橙紫渐变',
    'text_option_greenOrangeRedGradient': '绿橙红渐变',
    'text_option_rainbowGradient': '彩虹渐变',
    'text_option_spectralGradient': '光谱渐变',
    'text_option_terrainGradient': '地形渐变',
    'text_label_thematicMapColorGradientMode': '专题图颜色渐变模式',
    'text_label_resultLayerName': '结果图层名称',
    'text_chooseFile': '选择文件',
    'text_isoline': '等值线',
    'text_extractDiscreteValue': '提取离散值生成曲线',
    'text_buffer': '缓冲区',
    'text_specifyTheDistance': '指定距离创建周边区域',
    'text_label_analysisLayer': '分析图层',
    'text_label_extractField': '提取字段',
    'text_label_extractedValue': '提取值',
    'text_label_distanceAttenuation': '距离衰减',
    'text_label_gridSize': '栅格大小',
    'text_label_bufferRadius': '缓冲半径',
    'text_label_defaultkilometers': '默认10千米',
    'text_option_kilometer': '千米',
    'text_label_unit': '单位',
    'text_retainOriginal': '保留原对象字段属性',
    'text_mergeBuffer': '合并缓冲区',
    'text_label_color': '颜色',
    'text_label_buffer': '[缓冲区]',
    'text_label_isolines': '[等值线]',
    'text_label_queryRangeTips': '默认为输入数据的全幅范围。范例：-74.050,40.650,-73.850,40.850',
    'text_label_IDArrayOfFeatures': '要素 ID 数组',
    'text_label_maxFeatures': '最多可返回的要素数量',
    'text_label_bufferDistance': '缓冲区距离',
    'text_label_queryRange1': '查询范围',
    'text_label_spatialQueryMode': '空间查询模式',
    'text_label_featureFilter': '要素过滤器',
    'text_label_geometricObject': '几何对象',
    'text_label_queryMode': '查询模式',
    'text_label_searchTips': '搜索城市地点或图层要素',
    'text_label_chooseSearchLayers': '选择查询图层',
    'text_loadSearchCriteria': '加载搜索条件',
    'text_saveSearchCriteria': '保存搜索条件',


    "btn_analyze": "分析",
    "btn_analyzing": "分析中",
    "btn_emptyTheAnalysisLayer": "清空分析图层",
    "btn_cancelAnalysis": "取消",
    "btn_query": "查询",
    "btn_querying": "查询中",
    "btn_emptyTheRresultLayer": "清除所有结果图层",
    

    'msg_dataFlowServiceHasBeenSubscribed': '已订阅该数据流服务。',
    'msg_inputDataFlowUrlFirst': '请先输入数据流服务地址。',
    'msg_datasetOrMethodUnsupport': '该数据集不支持本分析类型，请重新选择数据集',
    'msg_selectDataset': '请选择数据集！',
    'msg_setTheWeightField': '请设置权重字段！',
    'msg_theFieldNotSupportAnalysis': '您当前选择的字段不支持分析！',
    'msg_resultIsEmpty': '分析的结果为空！',
    'msg_dataReturnedIsEmpty': '请求成功，查询返回的数据为空。',
    'msg_openFileFail': '打开文件失败！',
    'msg_fileTypeUnsupported': '不支持该文件格式！',
    'msg_fileSizeExceeded': '文件大小超限！文件大小不得超过 10M！',
    'msg_dataInWrongGeoJSONFormat': '数据格式错误！非标准的 GEOJSON 格式数据！',
    'msg_dataInWrongFormat': '数据格式错误！非标准的 EXCEL, CSV 或 GEOJSON 格式数据！',
    'msg_searchKeywords': "搜索关键字不能为空，请输入搜索条件。",
    'msg_searchGeocodeField':"未匹配到地址匹配服务数据！",
    'msg_cityGeocodeField':"未配置当前城市的地址匹配服务。",
    'msg_getFeatureField':"未查找到相关矢量要素！",
    'msg_dataflowservicesubscribed':'已订阅该数据流服务。',
    'msg_subscribesucceeded':'数据流服务订阅成功。',
    'msg_crsunsupport':'不支持当前地图的坐标系',
    'msg_tilematrixsetunsupport':'不支持传入的TileMatrixSet'
};
export { zh };
SuperMap.Lang["zh-CN"] = zh;

