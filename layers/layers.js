var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_alimentadoras_1 = new ol.format.GeoJSON();
var features_alimentadoras_1 = format_alimentadoras_1.readFeatures(json_alimentadoras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alimentadoras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alimentadoras_1.addFeatures(features_alimentadoras_1);
var lyr_alimentadoras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alimentadoras_1, 
                style: style_alimentadoras_1,
                interactive: true,
                title: '<img src="styles/legend/alimentadoras_1.png" /> alimentadoras'
            });
var format_expresa_2 = new ol.format.GeoJSON();
var features_expresa_2 = format_expresa_2.readFeatures(json_expresa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_expresa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_expresa_2.addFeatures(features_expresa_2);
var lyr_expresa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_expresa_2, 
                style: style_expresa_2,
                interactive: true,
                title: '<img src="styles/legend/expresa_2.png" /> expresa'
            });
var format_pretroncal_3 = new ol.format.GeoJSON();
var features_pretroncal_3 = format_pretroncal_3.readFeatures(json_pretroncal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pretroncal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pretroncal_3.addFeatures(features_pretroncal_3);
var lyr_pretroncal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pretroncal_3, 
                style: style_pretroncal_3,
                interactive: true,
                title: '<img src="styles/legend/pretroncal_3.png" /> pretroncal'
            });
var format_troncal_4 = new ol.format.GeoJSON();
var features_troncal_4 = format_troncal_4.readFeatures(json_troncal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_troncal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_troncal_4.addFeatures(features_troncal_4);
var lyr_troncal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_troncal_4, 
                style: style_troncal_4,
                interactive: true,
                title: '<img src="styles/legend/troncal_4.png" /> troncal'
            });
var format_estaciones_3115_5 = new ol.format.GeoJSON();
var features_estaciones_3115_5 = format_estaciones_3115_5.readFeatures(json_estaciones_3115_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estaciones_3115_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaciones_3115_5.addFeatures(features_estaciones_3115_5);
var lyr_estaciones_3115_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estaciones_3115_5, 
                style: style_estaciones_3115_5,
                interactive: true,
                title: '<img src="styles/legend/estaciones_3115_5.png" /> estaciones_3115'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_alimentadoras_1.setVisible(true);lyr_expresa_2.setVisible(true);lyr_pretroncal_3.setVisible(true);lyr_troncal_4.setVisible(true);lyr_estaciones_3115_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_alimentadoras_1,lyr_expresa_2,lyr_pretroncal_3,lyr_troncal_4,lyr_estaciones_3115_5];
lyr_alimentadoras_1.set('fieldAliases', {'gid': 'gid', 'ruta': 'ruta', 'nombre': 'nombre', 'servicio': 'servicio', 'fecha_plan': 'fecha_plan', });
lyr_expresa_2.set('fieldAliases', {'gid': 'gid', 'ruta': 'ruta', 'nombre': 'nombre', 'servicio': 'servicio', 'fecha_plan': 'fecha_plan', });
lyr_pretroncal_3.set('fieldAliases', {'gid': 'gid', 'ruta': 'ruta', 'nombre': 'nombre', 'servicio': 'servicio', 'fecha_plan': 'fecha_plan', });
lyr_troncal_4.set('fieldAliases', {'gid': 'gid', 'ruta': 'ruta', 'nombre': 'nombre', 'servicio': 'servicio', 'fecha_plan': 'fecha_plan', });
lyr_estaciones_3115_5.set('fieldAliases', {'gid': 'gid', 'estacion': 'estacion', 'direccion': 'direccion', 'clase': 'clase', });
lyr_alimentadoras_1.set('fieldImages', {'gid': '', 'ruta': '', 'nombre': '', 'servicio': '', 'fecha_plan': '', });
lyr_expresa_2.set('fieldImages', {'gid': '', 'ruta': '', 'nombre': '', 'servicio': '', 'fecha_plan': '', });
lyr_pretroncal_3.set('fieldImages', {'gid': 'TextEdit', 'ruta': 'TextEdit', 'nombre': 'TextEdit', 'servicio': 'TextEdit', 'fecha_plan': 'DateTime', });
lyr_troncal_4.set('fieldImages', {'gid': 'TextEdit', 'ruta': 'TextEdit', 'nombre': 'TextEdit', 'servicio': 'TextEdit', 'fecha_plan': 'DateTime', });
lyr_estaciones_3115_5.set('fieldImages', {'gid': 'TextEdit', 'estacion': 'TextEdit', 'direccion': 'TextEdit', 'clase': 'TextEdit', });
lyr_alimentadoras_1.set('fieldLabels', {'gid': 'no label', 'ruta': 'no label', 'nombre': 'no label', 'servicio': 'no label', 'fecha_plan': 'no label', });
lyr_expresa_2.set('fieldLabels', {'gid': 'no label', 'ruta': 'no label', 'nombre': 'no label', 'servicio': 'no label', 'fecha_plan': 'no label', });
lyr_pretroncal_3.set('fieldLabels', {'gid': 'no label', 'ruta': 'header label', 'nombre': 'no label', 'servicio': 'no label', 'fecha_plan': 'no label', });
lyr_troncal_4.set('fieldLabels', {'gid': 'no label', 'ruta': 'no label', 'nombre': 'no label', 'servicio': 'no label', 'fecha_plan': 'no label', });
lyr_estaciones_3115_5.set('fieldLabels', {'gid': 'header label', 'estacion': 'no label', 'direccion': 'no label', 'clase': 'no label', });
lyr_estaciones_3115_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});