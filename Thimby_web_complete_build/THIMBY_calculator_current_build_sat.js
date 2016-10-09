//Javascript document
// GOOGLE CHARTS  
  // Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  //google.setOnLoadCallback();

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.

var data_vals = {
  "Potable":
  [
    {"name":"75 Gallon High-Density Polyethylene","carbon":24.51},
    {"name":"THIMBY 65 Gallon High-Density Polyethylene", "carbon":20.18},
    {"name":"40 Gallon High-Density Polyethylene","carbon":12.26},
    {"name":"20 Gallon High-Density Polyethylene","carbon":8.75},
    {"name":"10 Gallon High-Density Polyethylene","carbon":6.13},
    ],
  "HotWater":
  [
    {"name":"80 Gal","carbon":400},
    {"name":"THIMBY 43 Gal Sanden","carbon":79},
    ],
  "WaterHeaters":
  [
    {"name":"STS w/ Electric Backup + Tank 300l (~80gal)","carbon":1100},
    {"name":"Solar Heater + Collector + Tank 150l (~40 gal)","carbon":631.97},
    {"name":"Natural gas + Tank 40 gal","carbon":11916},
    {"name":"Tankless Natural Gas (40 gal-eq)","carbon":9792},
    {"name":"THIMBY Sanden CO2 pump","carbon":132},
    ],
  "Pipes":
  [
    {"name":"PVC-STD (1)","carbon":0.4887363403},
    {"name":"PVC-STD  (1 1/2)","carbon":0.8953144165},
    {"name":"PVC-STD (2)","carbon":1.095706849},
    {"name":"PVC-STD (2 1/2)","carbon":1.34586823},
    {"name":"PVC-STD (3)","carbon":2.139538128},
    {"name":"PVC STD (4)","carbon":2.797857552},
    {"name":"Copper (1/2)","carbon":0.7745100516},
    {"name":"THIMBY Copper (3/4)","carbon":1.117213614},
    {"name":"Copper (1)","carbon":1.459917177},
    {"name":"Copper (1 1/4)","carbon":1.80262074},
    {"name":"Copper (1 1/2)","carbon":2.145324302},
    {"name":"Copper (2)","carbon":2.830731427},
    {"name":"Copper (2 1/2)","carbon":3.516138553},
    {"name":"Copper (3)","carbon":4.201545678},
    {"name":"HDPE (3/4)","carbon":0.1529138952},
    {"name":"HDPE (1)","carbon":0.2102282886},
    {"name":"HDPE (1 1/4)","carbon":0.3378547563},
    {"name":"HDPE (1 1/2)","carbon":0.3851164769},
    {"name":"HDPE (2)","carbon":0.471314606},
    {"name":"HDPE (3)","carbon":0.9203151102},
    {"name":"THIMBY PEX (1/2)","carbon":0.2710785181},
    {"name":"PEX (3/4)","carbon":0.391024765},
    {"name":"PEX (1)","carbon":0.5109710119},
    {"name":"PEX (1 1/4)","carbon":0.6309172588},
    {"name":"PEX (1 1/2)","carbon":0.7508635058},
    {"name":"PEX (2)","carbon":0.9907559996},
    {"name":"PEX (2 1/2)","carbon":1.230648493},
    {"name":"PEX (3)","carbon":1.470540987},
    {"name":"Cast Iron","carbon":1.91}, 
    ],
  "Plants":
  [
    {"name":"THIMBY Plants","carbon":-0.160571568}
    ],
  "PeatMoss":
  [
    {"name":"Peat Moss","carbon":0.023}
    ],
  "PlanterBoxes":
  [
    {"name":"THIMBY Wood","carbon":0.72}
    ],
  "Gravel":
  [
    {"name":"Gravel","carbon":0.0052}
    ],
  "Soil":
  [
    {"name":"THIMBY Soil","carbon":0.023}
    ],
  "PVC":
  [
    {"name":"PVC","carbon":3.1}
    ],
  "GrayWater":
  [
    {"name":"75 Gallon High-Density Polyethylene","carbon":24.51},
    {"name":"40 Gallon High-Density Polyethylene","carbon":12.26},
    {"name":"THIMBY 20 Gallon High-Density Polyethylene","carbon":8.75},
    {"name":"10 Gallon High-Density Polyethylene","carbon":6.13},
    ],
  "FilteredWater":
  [
    {"name":"75 Gallon High-Density Polyethylene","carbon":24.51},
    {"name":"THIMBY 40 Gallon High-Density Polyethylene","carbon":12.26},
    {"name":"20 Gallon High-Density Polyethylene","carbon":8.75},
    {"name":"10 Gallon High-Density Polyethylene","carbon":6.13},
    ],
  "RoofCover":
  [
    {"name":"Galvanized Steel","carbon":4.512426836},
    {"name":"Asphalt Shingles","carbon":0.1451520188},
    {"name":"Clay Tile","carbon":0.2535771223},
    {"name":"Rubber","carbon":1.205163855},
    {"name":"PVC","carbon":0.8868827995},
    {"name":"Slate","carbon":0.01449821179},
    {"name":"Spray Foam (polyurethane)","carbon":0.02759190932},      
    ],
  "Underlayment":
  [
    {"name":"Asphalt Felt","carbon":0.5577037478},
    {"name":"Thermoplastic","carbon":0.5112284355},
    {"name":"EPDM","carbon":0.7900803093},
    ],
  "Sheathing":
  [
    {"name":"Plywood","carbon":0.6633004749},
    ],
  "Windows":
  [
    {"name":"Aluminum","carbon":25.93322427},
    {"name":"PVC","carbon":10.96817371},
    {"name":"Aluminum Clad Timber Frame","carbon":5.716463415},
    {"name":"Timber","carbon":1.719586556},
    ],
    "Framing":
  [
    {"name":"Lumber(pine)","carbon":9.394247581},
    {"name":"Vinyl","carbon":88.75651108},
    {"name":"Aluminum","carbon":21347.4712},
    {"name":"Fiberglass","carbon":1.091036295},
    {"name":"Engineered Plastic","carbon":0},
    ],
    "Door":
  [
    {"name":"Pella 750 Sliding Door","carbon":1191.99},
    ],
    "Steps":
  [
    {"name":"Concrete","carbon":0.0453592},
    {"name":"Lumber(pine) ","carbon":0.2948348},
    {"name":"Granite","carbon":0.29029888},
    {"name":"Limestone","carbon":0.039462504},
    {"name":"Marble","carbon":0.052616672},
    {"name":"Sandstone","carbon":0.026308336},
    {"name":"Shale","carbon":0.000907184},
    {"name":"Slate","carbon":0.014514944},
    ],
    "Paint":
  [
    {"name":"General","carbon":10.89},
    {"name":"THIMBY Waterborne","carbon":9.54},
    {"name":"Solventborne","carbon":14.085},
    {"name":"Wood stain/Varnish","carbon":24.075},
    ],
    "eWalls":
  [
    {"name":"Lumber","carbon":0.3914269825},
    {"name":"Glue laminated timber","carbon":0.4930917282},
    {"name":"Sawn Softwood","carbon":0.3552952611},
    {"name":"Steel","carbon":12.06516111},
    {"name":"General Concrete","carbon":0.09741395493},
    {"name":"Fiber-Cement Blocks*","carbon":0.2763013994},
    {"name":"Polystyrene","carbon":57.2794055},
    ],
    "PHeatExchange":
  [
    {"name":"Solid Stainless Steel","carbon":2.79412672},
    ],
    "PoLumber":
  [
    {"name":"Lumber","carbon":9.387034645},
    ],
    "PoClay":
  [
    {"name":"Clay","carbon":0.10432616},
    ],
    "PoSand":
  [
    {"name":"Sand","carbon":0.0048},
    ],
    "PoHay":
  [
    {"name":"Hay","carbon":0.096615096},
    ],
    "PoPlywood":
  [
    {"name":"Plywood","carbon":0.6633004749},
    ],
    "PoBricks":
  [
    {"name":"Bricks","carbon":0.10432616},
    ],
    "PoGlass":
  [
    {"name":"Glass (1/8)","carbon":0.6710502708},
    {"name":"Glass (3/16)","carbon":1.006575406},
    {"name":"Glass (1/4)","carbon":1.342100542},
    {"name":"Glass (3/8)","carbon":2.013150812},
    {"name":"Glass (1/2)","carbon":2.684201083},
    {"name":"Glass (3/4)","carbon":4.026301625},
    ],
    "Screws":
  [
    {"name":"THIMBY Screws and Bolts","carbon":0.92063},
    ],
    "FrameWalls":
  [
    {"name":"HSS Steel (3x1.5x0.25)","carbon":2.136538946},
    {"name":"THIMBY Lumber (Wood)","carbon":0.06931519482},
    {"name":"THIMBY Plyboard","carbon":0.1140407459},
    {"name":"Glue laminated timber","carbon":0.08731832687},
    {"name":"Laminated Veneer lumber ","carbon":0.06523783042},
    {"name":"Medium Density fiberboard","carbon":0.07427076079},
    {"name":"Particle Board","carbon":0.1348666687},
    {"name":"Sawn Hardwood","carbon":0.01185572111},
    {"name":"Sawn Softwood","carbon":0.06291686915},
    {"name":"Polystyrene","carbon":10.14322806},
    {"name":"Engineered Lumber","carbon":0.09074749488},
    ],
    "FrameEdge":
  [
    {"name":"HSS Steel (3x3x0.25)","carbon":2.890611516},
    {"name":"THIMBY Lumber (Wood)","carbon":0.09377938123},
    {"name":"THIMBY Plyboard","carbon":0.1542904209},
    {"name":"Glue laminated timber","carbon":0.1181365599},
    {"name":"Laminated Veneer lumber ","carbon":0.08826294704},
    {"name":"Medium Density fiberboard","carbon":0.1004839705},
    {"name":"Particle Board","carbon":0.1824666694},
    {"name":"Sawn Hardwood","carbon":0.01604009326},
    {"name":"Sawn Softwood","carbon":0.08512282296},
    {"name":"Polystyrene","carbon":13.7231909},
    {"name":"Engineered Lumber","carbon":0.1227760225},
    ],
    "FrameRoof":
  [
    {"name":"HSS Steel (4x1.5x0.25)","carbon":2.639253992},
    {"name":"THIMBY Lumber (Wood)","carbon":0.08562465243},
    {"name":"THIMBY Plyboard","carbon":0.1408738625},
    {"name":"Glue laminated timber","carbon":0.1078638155},
    {"name":"Laminated Veneer lumber ","carbon":0.08058790817},
    {"name":"Medium Density fiberboard","carbon":0.09174623391},
    {"name":"Particle Board","carbon":0.1666000025},
    {"name":"Sawn Hardwood","carbon":0.01464530254},
    {"name":"Sawn Softwood","carbon":0.07772083836},
    {"name":"Polystyrene","carbon":12.52986995},
    {"name":"Engineered Lumber","carbon":0.1120998466},
    ],
    "Insulation":
  [
    {"name":"THIMBY Polyisocyanurate","carbon":2.0412},
    {"name":"General Insulation","carbon":1.8561312},
    {"name":"Cellulose","carbon":0.12501216},
    {"name":"THIMBY Cork","carbon":0.624834},
    {"name":"Fiberglass","carbon":0.551124},
    {"name":"Flax","carbon":1.56570793},
    {"name":"Mineral Wool (Loose)","carbon":2.7216},
    {"name":"Paper Wool","carbon":0.5708758759},
    {"name":"Polystyrene","carbon":2.5814376},
    {"name":"THIMBY Cotton","carbon":10.32799872},
    {"name":"Cellular Glass","carbon":3.095425832},
    ],
    "ITires":
  [
    {"name":"THIMBY Individual Tires","carbon":22.8},
    ],
    "Frame":
  [
    {"name":"THIMBY Trailer Frame 24' x 8'","carbon":2751.11},
    {"name":"Trailer Frame 18' x 8'","carbon":1966.05},
    {"name":"Trailer Frame 20' x 8'","carbon":2102.58},
    {"name":"Trailer Frame 26' x 8'","carbon":2887.64},
    ],
    "ScrewsBolts":
  [
    {"name":"THIMBY Galvanized Steel","carbon":0.92063},
    ],
    "HouseWrap":
  [
    {"name":"HDPE","carbon":0.00089044},
    ],
    "Awning1":
  [
    {"name":"Aluminum Clad Pine Frame (48 in x 24 in)","carbon":31.7581301},
    {"name":"Aluminum Clad Pine Frame (24 in x 24 in)","carbon":15.879065},
    ],
    "Awning2":
  [
    {"name":"Aluminum Clad Pine Frame (48 in x 24 in)","carbon":31.7581301},
    {"name":"Aluminum Clad Pine Frame (24 in x 24 in)","carbon":15.879065},
    ],
    "Casement":
  [
    {"name":"Aluminum Clad Pine Frame (21 in x 42 in)","carbon":24.3148183},
    ],
    "ExtFinish":
  [
    {"name":"Aluminum","carbon":21347.4712},
    {"name":"Lumber(pine)","carbon":9.394247581},
    {"name":"Vinyl","carbon":88.75651108},
    {"name":"Fiberglass","carbon":1.091036295},
    {"name":"Engineered Plastic","carbon":87.17379998},
    ],
    "IntFinish":
  [
    {"name":"Lumber(pine)","carbon":1.368943877},
    {"name":"Steel","carbon":47.02724849},
    {"name":"Glass","carbon":2.983182675},
    {"name":"Fiberglass","carbon":0.1589874488},
    ],
    "ExtWalls":
  [
    {"name":"Lumber","carbon":0.3914269825},
    {"name":"Glue laminated timber","carbon":0.4930917282},
    {"name":"THIMBY Sawn Softwood (cedar)","carbon":0.3552952611},
    {"name":"Steel","carbon":12.06516111},
    {"name":"General Concrete","carbon":0.09741395493},
    {"name":"Fiber-Cement Blocks","carbon":0.2763013994},
    {"name":"Polystyrene","carbon":57.2794055},
    ],
    "PatFloor":
  [
    {"name":"Cork","carbon":0.07571721042},
    {"name":"Bamboo","carbon":0.0526920938},
    {"name":"Hardwood","carbon":1.096704016},
    {"name":"Carpet","carbon":0.9109161214},
    {"name":"Ceramics","carbon":1.987244681},
    {"name":"Concrete (General)","carbon":0.396740471},
    {"name":"Linoleum","carbon":2.57172841},
    {"name":"Vinyl","carbon":6.32761875},
    ],
  "Fan":[
    {"name":"THIMBY AE3-43”","carbon":37.8},
    {"name":"AE3-50”","carbon":45.2},
    {"name":"AE3-60”","carbon":59.9}
  ],
  "Bulbs":[
    {"name":"Fluorescent","carbon":5.8},
    {"name":"Incandescent","carbon":7.23},
    {"name":"THIMBY LED","carbon":3.7}

  ],
  "Battery":[
    {"name":"Lead-Acid","carbon":3201},
    {"name":"THIMBY Tesla Powerwall", "carbon":330},
    {"name":"Tesla Car", "carbon":412}
  ],
  "PV":[
    {"name":"THIMBY Monocrystalline","carbon":22.48253568},
    {"name":"Ribbon Silicon", "carbon":29.03},
    {"name":"Cadmium Telluride", "carbon":9.07185},
    {"name":"Polycrystalline", "carbon":19.32383232},
    {"name":"Thin Film", "carbon":6.22450368}
  ],
  "Inverter":[
    {"name":"THIMBY Inverter","carbon":72}
  ],
  "Wiring":[
    {"name":"THIMBY Wire (14 gauge)","carbon":0.02672236708},
    {"name":"THIMBY Wire (18 gauge)", "carbon":0.0200000000},
    {"name":"Wire (12 gauge)", "carbon":0.04519709},
    {"name":"Wire (10 gauge)", "carbon":0.06845544653},
    {"name":"Wire (8 gauge)", "carbon":0.1072193741},
    {"name":"Wire (6 gauge)", "carbon":0.1542309458},
  ],
  "Heat Exchanger":[
    {"name":"THIMBY Heat Exchanger","carbon":2.79412672}
  ],
  "Cooktop":[
    {"name":"THIMBY Cooktop","carbon":127.44}
  ],
  "Base Sink Unit":[
    {"name":"THIMBY Basic Sink Unit","carbon":22}
  ],
  "Tap":[
    {"name":"THIMBY Conventional","carbon":3.45},
    {"name":"Water-Saving","carbon":3.61}
  ],
  "Refrigerator":[
    {"name":"Direct Cooling, double door, 15.25 kg","carbon":417.5},
    {"name":"Magnetic Refrigerator, 57.5 L","carbon":202},
    {"name":"THIMBY Conventional Refrigerator (Vapor-Compression), 57.5 L","carbon":179.5}
  ],
  "Counter":[
    {"name":"Wood-Bamboo (1.5in)","carbon":.1053841876},
    {"name":"THIMBY Particle board with birch veneer","carbon":1.89},
    {"name":"Wood-Ash (1.5in)","carbon":1.243356297},
    {"name":"Wood-Oak (1.5in)","carbon":1.726883746},
    {"name":"Wood-Maple (1.5in)","carbon":1.554195372},
    {"name":"Wood-Walnut (1.5in)","carbon":1.554195372},
    {"name":"Wood-Cherry (1.5in)","carbon":1.450582347},
    {"name":"Stainless Steel (1.5in)","carbon":.1053841876}
  ],
  "Drawer":[
    {"name":"THIMBY 500mm drawer line unit","carbon":0.002357}
  ],
  "Cabinet":[
    {"name":"THIMBY 500mm kitchen wall unit","carbon":0.00316}
  ],
  "Storage":[
    {"name":"THIMBY 500mm storage unit","carbon":0.00325}
  ],
  "Cutlery":[
    {"name":"Cutlery","carbon":.277}
  ],
  "Toilet":[
    {"name":"Conventional Toilet","carbon":100.5},
    {"name":"THIMBY Ecovita privy toilet seat and lid", "carbon":0.762},
    {"name":"THIMBY Urine collection tank (RomoTech 60 Gal)","carbon":0.249},
    {"name":"THIMBY slow cooker (Hamilton Beack 7qt)","carbon":0.001},
    {"name":"THIMBY PVC-STD (2)","carbon":1.095706849}
  ],
  "Shower Head":[
    {"name":"THIMBY Shower Head","carbon":.7}
  ],
  "Tile Wall":[
    {"name":"Tile","carbon":0.34472992}
  ],
  "Linoleum Wall":[
    {"name":"Linoleum","carbon":0.54884632}
  ],
  "Glass Door":[
    {"name":"Glass Door","carbon":18.17}
  ],
  "Polyester Shower Curtain":[
    {"name":"THIMBY Polyester Shower Curtain","carbon":4.44}
  ],
  "Vinyl Shower Lining":[
    {"name":"Vinyl Shower Curtain Liner","carbon":3.19}
  ],
  "Floor":[
    {"name":"Cork","carbon":0.07571721042},
    {"name":"Bamboo","carbon":0.0526920938},
    {"name":"THIMBY Hardwood (white oak)","carbon":1.096704016},
    {"name":"Carpet","carbon":0.9109161214},
    {"name":"Ceramics","carbon":1.987244681},
    {"name":"Concrete (General)","carbon":0.396740471},
    {"name":"Linoleum","carbon":2.57172841},
    {"name":"Vinyl","carbon":6.32761875},
    {"name":"THIMBY Radiant flooring (Warmboard-R product)","carbon":29.70}
  ],
  "Ceiling":[
    {"name":"Mineral Fiber Tile","carbon":1.379611479},
    {"name":"Plasterboard","carbon":0.4259329797},
    {"name":"Gypsum","carbon":0.1585744944},
    {"name":"Concrete","carbon":2.477726475},
    {"name":"Hardwood","carbon":1.035461125},
    {"name":"THIMBY Softwood (reclaimed Douglas Fir)","carbon":0.4946534249}
  ],
  "Walls":[
    {"name":"Plasterboard","carbon":0.4259329797},
    {"name":"Gypsum","carbon":0.1585744944},
    {"name":"Concrete","carbon":3.539051831},
    {"name":"Hardwood","carbon":1.035461125},
    {"name":"THIMBY Softwood (reclaimed Douglas Fir)","carbon":0.4946534249}
  ],
  "Bed":[
    {"name":"Double Mattress","carbon":79},
    {"name":"THIMBY Single futon mattress","carbon":30}
    {"name":"Single Divan","carbon":33},
    {"name":"Double Divan","carbon":35},
  ],
  "Couch":[
    {"name":"THIMBY Couch","carbon":90}
  ],
  "Table":[
    {"name":"THIMBY Table/desk","carbon":228}
  ],
  "Chair":[
    {"name":"THIMBY Chair","carbon":36}
  ],
  "Bed Ladder":[
    {"name":"THIMBY Wood (American Red Oak)","carbon":57},
    {"name":"Aluminum","carbon":60},
  ],
  "Television":[
    {"name":"Television","carbon":326.15}
  ],
  };




var tag_ids = {
  "Fan":[
    'drop_fan',
    'table_fan'
    ],
  "Lighting":[
    'drop_lighting',
    'table_lighting'
    ],
  "Potable":[
    'drop_potablewater',
    'table_potablewater'
    ],
  "HotWater":[
    'drop_hotwater',
    'table_hotwater'
    ],
  "WaterHeaters":[
    'drop_waterheaters',
    'table_waterheaters'
    ],
  "Pipes":[
    'drop_pipes',
    'table_pipes'
    ],
  "Plants":[
    'drop_plants',
    'table_plants'
    ],
  "PeatMoss":[
    'drop_peatmoss',
    'table_peatmoss'
    ],
  "PlanterBoxes":[
    'drop_planterboxes',
    'table_planterboxes'
    ],
  "Gravel":[
    'drop_gravel',
    'table_gravel'
    ],
  "Soil":[
    'drop_soil',
    'table_soil'
    ],
  "PVC":[
    'drop_pvc',
    'table_pvc'
    ],
  "GrayWater":[
    'drop_graywater',
    'table_graywater'
    ],
  "FilteredWater":[
    'drop_filteredwater',
    'table_filteredwater'
    ],
  "RoofCover":[
    'drop_roofcover',
    'table_roofcover'
    ],
   "Underlayment":[
    'drop_underlayment',
    'table_underlayment'
    ],
  "Sheathing":[
    'drop_sheathing',
    'table_sheathing'
    ],
  "Windows":[
    'drop_windows',
    'table_windows'
    ],
  "Framing":[
    'drop_framing',
    'table_framing'
    ],
  "Door":[
    'drop_door',
    'table_door'
    ],
  "Steps":[
    'drop_steps',
    'table_steps'
    ],
  "Paint":[
    'drop_paint',
    'table_paint'
    ],
  "eWalls":[
    'drop_ewalls',
    'table_ewalls'
    ],
  "PHeatExchange":[
    'drop_pheatexchange',
    'table_pheatexchange'
    ],
  "PoLumber":[
    'drop_polumber',
    'table_polumber'
    ],
  "PoClay":[
    'drop_poclay',
    'table_poclay'
    ],
  "PoHay":[
    'drop_pohay',
    'table_pohay'
    ],
  "PoSand":[
    'drop_posand',
    'table_posand'
    ],
  "PoPlywood":[
    'drop_poplywood',
    'table_poplywood'
    ],
  "PoBricks":[
    'drop_pobricks',
    'table_pobricks'
    ],
  "PoGlass":[
    'drop_poglass',
    'table_poglass'
    ],
  "Screws":[
    'drop_screws',
    'table_screws'
    ],
  "FrameWalls":[
    'drop_framewalls',
    'table_framewalls'
    ],
  "FrameEdge":[
    'drop_frame_edge',
    'table_frame_edge'
    ],
  "FrameRoof":[
    'drop_frameroof',
    'table_frameroof'
    ],
  "Insulation":[
    'drop_insulation',
    'table_insulation'
    ],
  "ITires":[
    'drop_itires',
    'table_itires'
    ],
  "Frame":[
    'drop_frame',
    'table_frame'
    ],
  "ScrewsBolts":[
    'drop_screwsbolts',
    'table_screwsbolts'
    ],
  "HouseWrap":[
    'drop_housewrap',
    'table_housewrap'
    ],
  "Awning1":[
    'drop_awning1',
    'table_awning1'
    ],
  "Awning2":[
    'drop_awning2',
    'table_awning2'
    ],
  "Casement":[
    'drop_casement',
    'table_casement'
    ],
  "ExtFinish":[
    'drop_extfinish',
    'table_extfinish'
    ],
  "IntFinish":[
    'drop_intfinish',
    'table_intfinish'
    ],
  "ExtWalls":[
    'drop_extwalls',
    'table_extwalls'
    ],
  "PatFloor":[
    'drop_patfloor',
    'table_patfloor'
    ],
  "Fan":[
    'drop_fan',
    'table_fan'
  ],
  "Bulbs":[
    'drop_bulbs',
    'table_bulbs'
  ],
  "Battery":[
    'drop_battery',
    'table_battery'
  ],
  "PV":[
    'drop_PV',
    'table_PV'
  ],
  "Inverter":[
    'drop_inverter',
    'table_inverter'
  ],
  "Wiring":[
    'drop_wiring',
    'table_wiring'
  ],
  "Heat Exchanger":[
    'drop_heatexchanger',
    'table_heatexchanger'
  ],
  "ColdWater":[
    'drop_coldwater',
    'table_coldwater'
  ],
  "Cooktop":[
    'drop_cooktop',
    'table_cooktop'
  ],
  "Base Sink Unit":[
    'drop_basesinkunit',
    'table_basesinkunit'
  ],
  "Tap":[
    'drop_tap',
    'table_tap'
  ],
  "Refrigerator":[
    'drop_refrigerator',
    'table_refrigerator'
  ],
  "Counter":[
    'drop_counter',
    'table_counter'
  ],
  "Drawer":[
    'drop_drawer',
    'table_drawer'
  ],
  "Cabinet":[
    'drop_cabinet',
    'table_cabinet'
  ],
  "Storage":[
    'drop_storage',
    'table_storage'
  ],
  "Cutlery":[
    'drop_cutlery',
    'table_cutlery'
  ],
  "Conventional Toilet":[
    'drop_conventionaltoilet',
    'table_conventionaltoilet'
  ],
  "Shower Head":[
    'drop_showerhead',
    'table_showerhead'
  ],
  "Tile Wall":[
    'drop_tilewall',
    'table_tilewall'
  ],
  "Linoleum Wall":[
    'drop_linoleumwall',
    'table_linoleumwall'
  ],
  "Glass Door":[
    'drop_glassdoor',
    'table_glassdoor'
  ],
  "Polyester Shower Curtain":[
    'drop_polyshowercurtain',
    'table_polyshowercurtain'
  ],
  "Vinyl Shower Lining":[
    'drop_vinylshowerlining',
    'table_vinylshowerlining'
  ],
  "Floor":[
    'drop_floor',
    'table_floor'
  ],
  "Ceiling":[
    'drop_ceiling',
    'table_ceiling'
  ],
  "Walls":[
    'drop_walls',
    'table_walls'
  ],
  "Bed":[
    'drop_bed',
    'table_bed'
  ],
  "Couch":[
    'drop_couch',
    'table_couch'
  ],
  "Table":[
    'drop_table',
    'table_table'
  ],
  "Chair":[
    'drop_chair',
    'table_chair'
  ],
  "Bed Ladder":[
    'drop_bedladder',
    'table_bedladder'
  ],
  "Television":[
    'drop_television',
    'table_television'
  ],

};


function set_defaults(node){
  var results = get_results();
  
  document.getElementById("total").textContent = results[0];
  document.getElementById("tbt0").textContent = results[1];
  document.getElementById("time_units").innerHTML = results[2];

  var default_amt = get_input_amount(node);

  document.getElementById("number").defaultValue = default_amt; 

  populate_data_table(node);
  populate_select_menu(node);
  init_Chart(default_amt,node);

}

//Put Chart Here

function init_Chart(number,node_name){

  var num = number;
  var data_ls = [];
  var count = data_vals[node_name].length;

  var show_data = [['Option','Carbon Footprint',{role:'style'}]];
    
  for(var i=0;i<count;i++){
    data_ls[i] = number*data_vals[node_name][i].carbon;
    show_data[i+1] = [data_vals[node_name][i].name,data_ls[i],'#0077b3'];

  }
  
  var data = google.visualization.arrayToDataTable(show_data);

  var options = {
      'title':'Carbon Fooprint',
        'width':600,
        'height':400,
        legend: {position: 'none'},
        vAxis: {title: "kg CO\u2082eq"}
        //chartArea: {height:'100%'}
      };

  if(count>10){
  options.width = 1400;  
  }

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data,options);
}

function get_product_data(){
	//COORDINATE DATA FOR DATA TABLE & select menu values WITH DJANGO

    var data = {data1:50, data2:100, data3:75};
    return data; 
}

//ADJUST CHART
function adjust_chart(node_name){
  var number;
  number = document.getElementById('number').value;
  init_Chart(number,node_name)
}

// PLACES OUTPUTS RESULTS - NEED TO COORDINATE THIS PART WITH DJANGO-->

function results(node){
  /*1) get results if they exist. if not assign 0
  2) call get_inputs
  3) a. compute totals: loop through each node in resulting array and multiply quantities by footprints of choice
     b. divide by constant for tbt0, pair with appropriate units
  */

  var amnt = document.getElementById("number").value;

  node_name = tag_ids[node][0];
  
  var selection = document.getElementById(node_name);
  var selection_name = selection.options[selection.selectedIndex].text; 
  var selection_footprint = selection.value;

  var node_name=node;
  
  //this line doesnt work
  store_inputs(node_name, amnt, selection_name, selection_footprint);

  var results = compute_footprint();
  store_local_results(results);
  document.getElementById("total").textContent = results[0];
  document.getElementById("tbt0").textContent = results[1];
  document.getElementById("time_units").innerHTML = results[2];
  
}

function get_results(){
  var results = load_local_results();
  if (results === null){
    results = new_results();
    store_local_results(results);
  }
  return results;
}

function new_results(){
  return [0,0,"days"]
}


function load_local_results(){
  var results = localStorage.getItem("resultsData");
  if (results === null){
    return null;
  }
  else{
    return JSON.parse(results);
  }
}

function store_local_results(results){
  localStorage.setItem("resultsData",JSON.stringify(results));
}


function load_local_input_data(){
  var data = localStorage.getItem("inputData");
  if (data === null){
    return null;
  }
  else{
    return JSON.parse(data);
  }
}

function store_local_input_data(data){
  localStorage.setItem("inputData",JSON.stringify(data));
}

function get_input_data(){
  var input_data = load_local_input_data();
  //  CONDITIONAL NOT WORKING!!!
  if (input_data === null) { //initialize dictionary for every single node in category tree chart. for now, start with fan and lighting;
    input_data=new_input_data();
    store_local_input_data(input_data);
  }
  return input_data;
  //should get previous inputs, for a given category from local storage, or set them to 0 if there are no previous inputs
}

function new_input_data(){
    return {
    "Fan": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Lighting": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Potable": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "HotWater": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "WaterHeaters": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Pipes": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Plants": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PeatMoss": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PlanterBoxes": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Gravel": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Soil": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PVC": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "GrayWater": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "FilteredWater": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "RoofCover": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Underlayment": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Sheathing": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Windows": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Framing": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Door": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Steps": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Paint": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "eWalls": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PHeatExchange": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PoLumber": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PoClay": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PoHay": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PoSand": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PoPlywood": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PoBricks": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PoGlass": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Screws": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "FrameWalls": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "FrameEdge": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "FrameRoof": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Insulation": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "ITires": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Frame": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "ScrewsBolts": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "HouseWrap": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Awning1": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Awning2": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Casement": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "ExtFinish": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "IntFinish": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "ExtWalls": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PatFloor": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "ColdWater": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Battery": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "PV": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
     "Inverter": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Wiring": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Heat Exchanger": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Cooktop": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Base Sink Unit": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Tap": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Refrigerator": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Counter": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Drawer": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Cabinet": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Storage": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Cutlery": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Conventional Toilet": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Shower Head": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Tile Wall": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Linoleum Wall": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Glass Door": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Polyester Shower Curtain": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Vinyl Shower Lining": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Floor": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Ceiling": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Walls": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Bed": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Couch": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Tables": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Chair": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Table": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Chair": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Bed Ladder": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Television": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
    "Bulbs": {
      "amount": 0,
      "selection": {
        "name": "",
        "value": 0
      }
    },
  };
}

function store_inputs(node_name,amnt,selection_name, selection_footprint){
  var input_data=get_input_data();
  input_data[node_name].amount = amnt; //error thrown here
  input_data[node_name].selection.name = selection_name;
  input_data[node_name].selection.value = selection_footprint;
  console.log(input_data);
  store_local_input_data(input_data);
}

function get_node_input_data(node_name){
  var input_data = get_input_data();
  return input_data[node_name];
}

function get_input_amount(node_name){
  var node_data = get_node_input_data(node_name);
  return node_data.amount;
}

function get_input_selection(node_name){
  var node_data = get_node_input_data(node_name);
  return node_data.selection.name;
}

function compute_footprint(){
  var input_data=get_input_data();
  var tot=0;
  for (var node in input_data){
    tot = tot + input_data[node].selection.value*input_data[node].amount;
    tot = Math.floor(tot*100)/100;
  }

  var tbt0 = tot/16.956; // constant [=] kgCO2eq/day
  var time_units = "days";

  if (tbt0>31) {
      tbt0=tbt0/31;
      time_units = "months";
      if (tbt0>12) {
        tbt0=tbt0/12;
        time_units = "years";
      };
  };

  tbt0 = Math.floor(tbt0*100)/100;
  return [tot, tbt0, time_units];
}

function get_carbon_data(){
  return carbon_data = JSON.parse(carbon_data_json);
}

function get_node_carbon_data(node){
  var carbon_data = get_carbon_data();
  return carbon_data[node];
}



function populate_data_table(node_name){

  var table_id = tag_ids[node_name][1] 
  var table_all = document.getElementById(table_id);

  count = data_vals[node_name].length;
  
  for(var i=0;i<count;i++){
    row = document.createElement('tr');
    cell1 = document.createElement('td');
    cell2 = document.createElement('td');

    cell1.innerHTML = data_vals[node_name][i].name;

    var n = 1;

    while(data_vals[node_name][i].carbon.toFixed(n)==0){
      n++;
    }

    cell2.innerHTML = data_vals[node_name][i].carbon.toFixed(n+1);

    row.appendChild(cell1);
    row.appendChild(cell2);
    table_all.appendChild(row);

  }

}

function populate_select_menu(node_name){

  var default_name = get_input_selection(node_name);
  var drop_id = tag_ids[node_name][0];
  var drop_all = document.getElementById(drop_id);

  count = data_vals[node_name].length;

  for(var i=0;i<count;i++){
    option = document.createElement('option');
    option.text = data_vals[node_name][i].name
    option.value = data_vals[node_name][i].carbon;
    if(option.text==default_name){
      option.selected = true;
    }
    drop_all.appendChild(option);
  }
  
}
