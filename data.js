var APP_DATA = {
  "scenes": [
    {
      "id": "0-exteriorgraffiti",
      "name": "ExteriorGraffiti",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3468,
      "initialViewParameters": {
        "yaw": 0.08323877971050209,
        "pitch": 0.005583094464922667,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.6782027995598554,
          "pitch": 0.0018610314882963053,
          "rotation": 0,
          "target": "1-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-exterior",
      "name": "Exterior",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3470,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21078207120240045,
          "pitch": -0.00930515744155258,
          "rotation": 0,
          "target": "2-entrada-loja"
        },
        {
          "yaw": -1.2700626710666914,
          "pitch": 0.033498566789557316,
          "rotation": 0,
          "target": "0-exteriorgraffiti"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada-loja",
      "name": "Entrada Loja",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3503.5,
      "initialViewParameters": {
        "yaw": -0.8243324313265532,
        "pitch": -0.007444125953238512,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.612996739502286,
          "pitch": -0.03744220447846658,
          "rotation": 0,
          "target": "3-sala-de-espera"
        },
        {
          "yaw": 0.19995070965382666,
          "pitch": 0.026103625856364943,
          "rotation": 0,
          "target": "4-corredor1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala-de-espera",
      "name": "Sala de Espera",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3490,
      "initialViewParameters": {
        "yaw": 2.9710874832853005,
        "pitch": 0.011166188929852439,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.827601833282797,
          "pitch": 0.09219165436687327,
          "rotation": 0,
          "target": "2-entrada-loja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corredor1",
      "name": "Corredor1",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3503,
      "initialViewParameters": {
        "yaw": -0.5920693847150336,
        "pitch": 0.0037230319975734005,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.4862149861213947,
          "pitch": 0.005583616332263119,
          "rotation": 0,
          "target": "2-entrada-loja"
        },
        {
          "yaw": 2.256471879734402,
          "pitch": -0.00744335708328947,
          "rotation": 0,
          "target": "5-corredor3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corredor3",
      "name": "Corredor3",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3518,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5627409610164733,
          "pitch": 0.016749283394794645,
          "rotation": 0,
          "target": "4-corredor1"
        },
        {
          "yaw": 1.5779334984751419,
          "pitch": -0.005583094464924443,
          "rotation": 0,
          "target": "6-corredor4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corredor4",
      "name": "Corredor4",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3534,
      "initialViewParameters": {
        "yaw": 3.1036981846036884,
        "pitch": -0.03163753530128943,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.3727336774308867,
          "pitch": 0.03090316270948179,
          "rotation": 0,
          "target": "5-corredor3"
        },
        {
          "yaw": 2.311587216390885,
          "pitch": -0.027915472324689716,
          "rotation": 0,
          "target": "7-corredor5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-corredor5",
      "name": "Corredor5",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3506.5,
      "initialViewParameters": {
        "yaw": 0.6946612902110516,
        "pitch": 0.024193409348018946,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.6626477445863959,
          "pitch": -0.020471346371440546,
          "rotation": 0,
          "target": "8-corredor6"
        },
        {
          "yaw": -1.6220883302987303,
          "pitch": 0.03531717844203186,
          "rotation": 0,
          "target": "6-corredor4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-corredor6",
      "name": "Corredor6",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3507.5,
      "initialViewParameters": {
        "yaw": -1.0216888928982204,
        "pitch": -0.009305157441541922,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.0849760750110393,
          "pitch": 0.01939813794329126,
          "rotation": 0,
          "target": "7-corredor5"
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
