var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_5.png" /> JALAN'
            });
var format_AREA_FUNGSIONAL_6 = new ol.format.GeoJSON();
var features_AREA_FUNGSIONAL_6 = format_AREA_FUNGSIONAL_6.readFeatures(json_AREA_FUNGSIONAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_FUNGSIONAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_FUNGSIONAL_6.addFeatures(features_AREA_FUNGSIONAL_6);
var lyr_AREA_FUNGSIONAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_FUNGSIONAL_6, 
                style: style_AREA_FUNGSIONAL_6,
                popuplayertitle: 'AREA_FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_FUNGSIONAL_6.png" /> AREA_FUNGSIONAL'
            });
var format_JALURPIPA_7 = new ol.format.GeoJSON();
var features_JALURPIPA_7 = format_JALURPIPA_7.readFeatures(json_JALURPIPA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALURPIPA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALURPIPA_7.addFeatures(features_JALURPIPA_7);
var lyr_JALURPIPA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALURPIPA_7, 
                style: style_JALURPIPA_7,
                popuplayertitle: 'JALUR PIPA',
                interactive: true,
                title: '<img src="styles/legend/JALURPIPA_7.png" /> JALUR PIPA'
            });
var format_KETERANGAN_KERUSAKAN_SALURAN_8 = new ol.format.GeoJSON();
var features_KETERANGAN_KERUSAKAN_SALURAN_8 = format_KETERANGAN_KERUSAKAN_SALURAN_8.readFeatures(json_KETERANGAN_KERUSAKAN_SALURAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGAN_KERUSAKAN_SALURAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGAN_KERUSAKAN_SALURAN_8.addFeatures(features_KETERANGAN_KERUSAKAN_SALURAN_8);
var lyr_KETERANGAN_KERUSAKAN_SALURAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGAN_KERUSAKAN_SALURAN_8, 
                style: style_KETERANGAN_KERUSAKAN_SALURAN_8,
                popuplayertitle: 'KETERANGAN_KERUSAKAN_SALURAN',
                interactive: true,
    title: 'KETERANGAN_KERUSAKAN_SALURAN<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_8_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_8_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_8_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_8_3.png" /> Rusak Berat<br />' });
var format_JENIS_SALURAN_9 = new ol.format.GeoJSON();
var features_JENIS_SALURAN_9 = format_JENIS_SALURAN_9.readFeatures(json_JENIS_SALURAN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENIS_SALURAN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENIS_SALURAN_9.addFeatures(features_JENIS_SALURAN_9);
var lyr_JENIS_SALURAN_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENIS_SALURAN_9, 
                style: style_JENIS_SALURAN_9,
                popuplayertitle: 'JENIS_SALURAN',
                interactive: true,
    title: 'JENIS_SALURAN<br />\
    <img src="styles/legend/JENIS_SALURAN_9_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/JENIS_SALURAN_9_1.png" /> Saluran Sekunder<br />' });
var format_AREA_BOGORKIDUL_10 = new ol.format.GeoJSON();
var features_AREA_BOGORKIDUL_10 = format_AREA_BOGORKIDUL_10.readFeatures(json_AREA_BOGORKIDUL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_BOGORKIDUL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_BOGORKIDUL_10.addFeatures(features_AREA_BOGORKIDUL_10);
var lyr_AREA_BOGORKIDUL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_BOGORKIDUL_10, 
                style: style_AREA_BOGORKIDUL_10,
                popuplayertitle: 'AREA_BOGORKIDUL',
                interactive: true,
                title: '<img src="styles/legend/AREA_BOGORKIDUL_10.png" /> AREA_BOGORKIDUL'
            });
var format_BANGUNAN_NOMENKLATUR_11 = new ol.format.GeoJSON();
var features_BANGUNAN_NOMENKLATUR_11 = format_BANGUNAN_NOMENKLATUR_11.readFeatures(json_BANGUNAN_NOMENKLATUR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_NOMENKLATUR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_NOMENKLATUR_11.addFeatures(features_BANGUNAN_NOMENKLATUR_11);
var lyr_BANGUNAN_NOMENKLATUR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_NOMENKLATUR_11, 
                style: style_BANGUNAN_NOMENKLATUR_11,
                popuplayertitle: 'BANGUNAN_NOMENKLATUR',
                interactive: false,
                title: '<img src="styles/legend/BANGUNAN_NOMENKLATUR_11.png" /> BANGUNAN_NOMENKLATUR'
            });
var format_Tikungan_12 = new ol.format.GeoJSON();
var features_Tikungan_12 = format_Tikungan_12.readFeatures(json_Tikungan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_12.addFeatures(features_Tikungan_12);
var lyr_Tikungan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_12, 
                style: style_Tikungan_12,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_12.png" /> Tikungan'
            });
var format_Gorong__Gorong_13 = new ol.format.GeoJSON();
var features_Gorong__Gorong_13 = format_Gorong__Gorong_13.readFeatures(json_Gorong__Gorong_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_13.addFeatures(features_Gorong__Gorong_13);
var lyr_Gorong__Gorong_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_13, 
                style: style_Gorong__Gorong_13,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_13.png" /> Gorong_-_Gorong'
            });
var format_Beda_Pasangan_14 = new ol.format.GeoJSON();
var features_Beda_Pasangan_14 = format_Beda_Pasangan_14.readFeatures(json_Beda_Pasangan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beda_Pasangan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beda_Pasangan_14.addFeatures(features_Beda_Pasangan_14);
var lyr_Beda_Pasangan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beda_Pasangan_14, 
                style: style_Beda_Pasangan_14,
                popuplayertitle: 'Beda_Pasangan',
                interactive: true,
                title: '<img src="styles/legend/Beda_Pasangan_14.png" /> Beda_Pasangan'
            });
var format_Titik_Per_50_m_15 = new ol.format.GeoJSON();
var features_Titik_Per_50_m_15 = format_Titik_Per_50_m_15.readFeatures(json_Titik_Per_50_m_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per_50_m_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per_50_m_15.addFeatures(features_Titik_Per_50_m_15);
var lyr_Titik_Per_50_m_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per_50_m_15, 
                style: style_Titik_Per_50_m_15,
                popuplayertitle: 'Titik_Per_50_m',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per_50_m_15.png" /> Titik_Per_50_m'
            });
var format_BoxGateValve_16 = new ol.format.GeoJSON();
var features_BoxGateValve_16 = format_BoxGateValve_16.readFeatures(json_BoxGateValve_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoxGateValve_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoxGateValve_16.addFeatures(features_BoxGateValve_16);
var lyr_BoxGateValve_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoxGateValve_16, 
                style: style_BoxGateValve_16,
                popuplayertitle: 'Box Gate Valve',
                interactive: true,
                title: '<img src="styles/legend/BoxGateValve_16.png" /> Box Gate Valve'
            });
var format_Box_Alva_Valve_17 = new ol.format.GeoJSON();
var features_Box_Alva_Valve_17 = format_Box_Alva_Valve_17.readFeatures(json_Box_Alva_Valve_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Alva_Valve_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Alva_Valve_17.addFeatures(features_Box_Alva_Valve_17);
var lyr_Box_Alva_Valve_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Alva_Valve_17, 
                style: style_Box_Alva_Valve_17,
                popuplayertitle: 'Box_Alva_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Alva_Valve_17.png" /> Box_Alva_Valve'
            });
var format_Bangunan_Air_18 = new ol.format.GeoJSON();
var features_Bangunan_Air_18 = format_Bangunan_Air_18.readFeatures(json_Bangunan_Air_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Air_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Air_18.addFeatures(features_Bangunan_Air_18);
var lyr_Bangunan_Air_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Air_18, 
                style: style_Bangunan_Air_18,
                popuplayertitle: 'Bangunan_Air',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Air_18.png" /> Bangunan_Air'
            });
var format_Bangunan_Bagi_19 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_19 = format_Bangunan_Bagi_19.readFeatures(json_Bangunan_Bagi_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_19.addFeatures(features_Bangunan_Bagi_19);
var lyr_Bangunan_Bagi_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_19, 
                style: style_Bangunan_Bagi_19,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_19.png" /> Bangunan_Bagi'
            });
var format_Bangunan_Sadap_20 = new ol.format.GeoJSON();
var features_Bangunan_Sadap_20 = format_Bangunan_Sadap_20.readFeatures(json_Bangunan_Sadap_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sadap_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sadap_20.addFeatures(features_Bangunan_Sadap_20);
var lyr_Bangunan_Sadap_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sadap_20, 
                style: style_Bangunan_Sadap_20,
                popuplayertitle: 'Bangunan_Sadap',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Sadap_20.png" /> Bangunan_Sadap'
            });
var format_Sumur_Pompa_21 = new ol.format.GeoJSON();
var features_Sumur_Pompa_21 = format_Sumur_Pompa_21.readFeatures(json_Sumur_Pompa_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumur_Pompa_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumur_Pompa_21.addFeatures(features_Sumur_Pompa_21);
var lyr_Sumur_Pompa_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sumur_Pompa_21, 
                style: style_Sumur_Pompa_21,
                popuplayertitle: 'Sumur_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Sumur_Pompa_21.png" /> Sumur_Pompa'
            });
var format_Rumah_Pompa_22 = new ol.format.GeoJSON();
var features_Rumah_Pompa_22 = format_Rumah_Pompa_22.readFeatures(json_Rumah_Pompa_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_22.addFeatures(features_Rumah_Pompa_22);
var lyr_Rumah_Pompa_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_22, 
                style: style_Rumah_Pompa_22,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_22.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESSORIS = new ol.layer.Group({
                                layers: [lyr_BoxGateValve_16,lyr_Box_Alva_Valve_17,lyr_Bangunan_Air_18,lyr_Bangunan_Bagi_19,lyr_Bangunan_Sadap_20,lyr_Sumur_Pompa_21,lyr_Rumah_Pompa_22,],
                                fold: 'open',
                                title: 'TITIK AKSESSORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_12,lyr_Gorong__Gorong_13,lyr_Beda_Pasangan_14,lyr_Titik_Per_50_m_15,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREA_BOGORKIDUL_10,lyr_BANGUNAN_NOMENKLATUR_11,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoads_2.setVisible(false);lyr_OpenTopoMap_3.setVisible(false);lyr_SUNGAI_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_AREA_FUNGSIONAL_6.setVisible(true);lyr_JALURPIPA_7.setVisible(true);lyr_KETERANGAN_KERUSAKAN_SALURAN_8.setVisible(true);lyr_JENIS_SALURAN_9.setVisible(true);lyr_AREA_BOGORKIDUL_10.setVisible(true);lyr_BANGUNAN_NOMENKLATUR_11.setVisible(true);lyr_Tikungan_12.setVisible(true);lyr_Gorong__Gorong_13.setVisible(true);lyr_Beda_Pasangan_14.setVisible(true);lyr_Titik_Per_50_m_15.setVisible(true);lyr_BoxGateValve_16.setVisible(true);lyr_Box_Alva_Valve_17.setVisible(true);lyr_Bangunan_Air_18.setVisible(true);lyr_Bangunan_Bagi_19.setVisible(true);lyr_Bangunan_Sadap_20.setVisible(true);lyr_Sumur_Pompa_21.setVisible(true);lyr_Rumah_Pompa_22.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleRoads_2,lyr_OpenTopoMap_3,lyr_SUNGAI_4,lyr_JALAN_5,lyr_AREA_FUNGSIONAL_6,lyr_JALURPIPA_7,lyr_KETERANGAN_KERUSAKAN_SALURAN_8,lyr_JENIS_SALURAN_9,group_SKEMANOMENKLATUR,group_TITIKKETERANGAN,group_TITIKAKSESSORIS];
lyr_SUNGAI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AREA_FUNGSIONAL_6.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', });
lyr_JALURPIPA_7.set('fieldAliases', {'Id': 'Id', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_8.set('fieldAliases', {'Id': 'Id', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENIS_SALURAN_9.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'PANJANG': 'PANJANG', });
lyr_AREA_BOGORKIDUL_10.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', 'PEMBAGIAN': 'PEMBAGIAN', 'AREA': 'AREA', });
lyr_BANGUNAN_NOMENKLATUR_11.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'URUTAN': 'URUTAN', 'PEMBAGIAN': 'PEMBAGIAN', });
lyr_Tikungan_12.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', 'alamat': 'alamat', });
lyr_Gorong__Gorong_13.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Beda_Pasangan_14.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Titik_Per_50_m_15.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', 'alamat': 'alamat', });
lyr_BoxGateValve_16.set('fieldAliases', {'Id': 'Id', 'NAMA': 'NAMA', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', });
lyr_Box_Alva_Valve_17.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Bangunan_Air_18.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Bangunan_Bagi_19.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Bangunan_Sadap_20.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Sumur_Pompa_21.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Rumah_Pompa_22.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Desckripsi': 'Desckripsi', 'Urutan': 'Urutan', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_SUNGAI_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AREA_FUNGSIONAL_6.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', });
lyr_JALURPIPA_7.set('fieldImages', {'Id': 'Range', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_8.set('fieldImages', {'Id': 'Range', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENIS_SALURAN_9.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_AREA_BOGORKIDUL_10.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'AREA': 'TextEdit', });
lyr_BANGUNAN_NOMENKLATUR_11.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', });
lyr_Tikungan_12.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', 'alamat': 'TextEdit', });
lyr_Gorong__Gorong_13.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Beda_Pasangan_14.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Titik_Per_50_m_15.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', 'alamat': 'TextEdit', });
lyr_BoxGateValve_16.set('fieldImages', {'Id': 'Range', 'NAMA': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', });
lyr_Box_Alva_Valve_17.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Bangunan_Air_18.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Bangunan_Bagi_19.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Bangunan_Sadap_20.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Sumur_Pompa_21.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Rumah_Pompa_22.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Desckripsi': 'TextEdit', 'Urutan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_SUNGAI_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AREA_FUNGSIONAL_6.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', });
lyr_JALURPIPA_7.set('fieldLabels', {'Id': 'hidden field', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_8.set('fieldLabels', {'Id': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENIS_SALURAN_9.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_AREA_BOGORKIDUL_10.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', 'PEMBAGIAN': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_BANGUNAN_NOMENKLATUR_11.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'X': 'no label', 'Y': 'no label', 'BUJUR': 'no label', 'LINTANG': 'no label', 'PANJANG': 'no label', 'URUTAN': 'no label', 'PEMBAGIAN': 'no label', });
lyr_Tikungan_12.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', 'alamat': 'hidden field', });
lyr_Gorong__Gorong_13.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Beda_Pasangan_14.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Titik_Per_50_m_15.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', 'alamat': 'hidden field', });
lyr_BoxGateValve_16.set('fieldLabels', {'Id': 'hidden field', 'NAMA': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', });
lyr_Box_Alva_Valve_17.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Bangunan_Air_18.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Bangunan_Bagi_19.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Bangunan_Sadap_20.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Sumur_Pompa_21.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Rumah_Pompa_22.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Desckripsi': 'hidden field', 'Urutan': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Rumah_Pompa_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});