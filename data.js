var APP_DATA = {
  "scenes": [
    {
      "id": "0-smv-plaza",
      "name": "SMV Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1524824308229196,
          "pitch": 0.3918965756110495,
          "rotation": 0,
          "target": "1-block-6"
        },
        {
          "yaw": -1.822958233279742,
          "pitch": 0.1963910871103458,
          "rotation": 0,
          "target": "2-orminter"
        },
        {
          "yaw": -3.0584208940408164,
          "pitch": 0.32457702239967645,
          "rotation": 0,
          "target": "3-block-6---vacant-lot"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7194188712001885,
          "pitch": 0.17563432066464202,
          "title": "Grocery ni Mama",
          "text": "Mura dito ang bigas. Char"
        }
      ]
    },
    {
      "id": "1-block-6",
      "name": "Block 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4602057682511624,
          "pitch": 0.03114691818864479,
          "rotation": 0,
          "target": "0-smv-plaza"
        },
        {
          "yaw": -0.08031505433575958,
          "pitch": 0.08715727968954035,
          "rotation": 0,
          "target": "3-block-6---vacant-lot"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.328294987904286,
          "pitch": 0.8327905030262599,
          "title": "Quinton Residence",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-orminter",
      "name": "Orminter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8033786109311407,
          "pitch": 0.31708114843554824,
          "rotation": 0,
          "target": "1-block-6"
        },
        {
          "yaw": -2.268557738559462,
          "pitch": 0.18451946008461384,
          "rotation": 0,
          "target": "3-block-6---vacant-lot"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-block-6---vacant-lot",
      "name": "Block 6 - Vacant Lot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05830682731867398,
          "pitch": 0.38866125064255463,
          "rotation": 0,
          "target": "1-block-6"
        },
        {
          "yaw": 1.1087094529586068,
          "pitch": 0.23866655783795743,
          "rotation": 0,
          "target": "0-smv-plaza"
        },
        {
          "yaw": -0.048716779170908,
          "pitch": 0.1648010024802069,
          "rotation": 0,
          "target": "2-orminter"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
