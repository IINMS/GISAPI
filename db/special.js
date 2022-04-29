var connect = require('./connect.js');

const  Sequelize  = require('sequelize');


const sequelize = connect.sequelizeConn;
const Model = Sequelize.Model;

class Electric extends Model {}

Electric.init({
	
   elec_ID: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
    elec_currtype: {
    type: Sequelize.BOOLEAN,
	 
    allowNull: false
  },
    elec_volt: {
    type: Sequelize.SMALLINT,
	 
    allowNull: false
  },
	elec_amp: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
   	elec_telem_rel: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  	elec_telem_rel_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
 /*,
  electric_rel_ID: {
  type: Sequelize.INTEGER,
  allowNull: true,

  unique:true
}*/
},  
  {
  sequelize,
  modelName: 'spcl_elec',
   freezeTableName: true,
  timestamps:false
});

class Telemetry extends Model {}

Telemetry.init({
	
  telemetric_ID: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
    telem_ID: {
    type: Sequelize.INTEGER,
	 
    allowNull: false
  },
    telem_freq: {
    type: Sequelize.SMALLINT,
	 
    allowNull: false
  },
    telem_conndms: {
    type: Sequelize.BOOLEAN,
	 
    allowNull: false
  },
    telem_cread: {
    type: Sequelize.DECIMAL,
	 
    allowNull: false
  },
      telem_connected: {
    type: Sequelize.BOOLEAN,
	 
    allowNull: false
  },
     telem_functional: {
    type: Sequelize.BOOLEAN,
	 
    allowNull: false
  },
     telem_rel_GPS: {
    type: Sequelize.BOOLEAN,
	 
    allowNull: false
  },
     telem_rel_GPS_ID: {
    type: Sequelize.INTEGER,
	 
    allowNull: false
  },
  telem_rel_sensors_ID: {
 type: Sequelize.INTEGER,

 allowNull: false
},
telem_rel_sensors: {
type: Sequelize.BOOLEAN,

allowNull: false
}
  
  
}, {
  sequelize,
  modelName: 'spcl_telem',
   freezeTableName: true,
  timestamps:false
});
	
	class GPS extends Model {}

GPS.init({
	
  GPS_ID: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
    GPS_LAT_LOT: {
    type: Sequelize.GEOMETRY('POINT'),
	 
    allowNull: false
  
	},
	   GPS_ALT: {
    type: Sequelize.DECIMAL,
	 
    allowNull: false
  
	} ,
  GPS_rel_ID: {
 type: Sequelize.INTEGER,

 allowNull: false

} 
  
  },
	{
  sequelize,
  modelName: 'spcl_GPS',
   freezeTableName: true,
  timestamps:false
});
 
 	class Sensors extends Model {}

Sensors.init({
	
  sensors_ID: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
    sensors_P: {
    type: Sequelize.SMALLINT,
	 
    allowNull: false
  
	},
	   sensors_T: {
    type: Sequelize.SMALLINT,
	 
    allowNull: false
  
	} ,
	   sensors_FL: {
    type: Sequelize.SMALLINT,
	 
    allowNull: false
  
	},
   sensors_Lvl: {
    type: Sequelize.SMALLINT,
	 
    allowNull: false
  
	} 	,
  sensors_rel_ID: {
   type: Sequelize.SMALLINT,
  
   allowNull: false
 
 } 
  
  },
	{
  sequelize,
  modelName: 'spcl_sensors',
   freezeTableName: true,
  timestamps:false
});

 	class Alerting extends Model {}

Alerting.init({
	
  alert_ID: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
    alert_time: {
    type:  Sequelize.DATE,
	 
    allowNull: false
  
	},
	 alert_history: {
    type:  Sequelize.TEXT,
	 
    allowNull: false
  
	},
	   alert_cause: {
    type:  Sequelize.TEXT,
	 
    allowNull: false
  
	},
     alert_action: {
    type:  Sequelize.TEXT,
	 
    allowNull: false
  
	}	,
  alert_rel_ID: {
 type:  Sequelize.INET,

 allowNull: false

}	
  
  },
	{
  sequelize,
  modelName: 'spcl_alert',
   freezeTableName: true,
  timestamps:false
});


 	class Motor extends Model {}

Motor.init({
	
  motor_ID: {
    type: Sequelize.INTEGER,
	primaryKey:true,
    allowNull: false
  },
    motor_hp: {
    type:  Sequelize.DECIMAL,
	 
    allowNull: false
  
	},
	    motor_currtype: {
    type:  Sequelize.BOOLEAN,
	 
    allowNull: false
  
	},
	    motor_V: {
    type:  Sequelize.SMALLINT,
	 
    allowNull: false
  
	},
       motor_A: {

    type:  Sequelize.DECIMAL,
	
    allowNull: false
  
	},
  motor_rel_ID: {

type:  Sequelize.INTEGER,

allowNull: false

}
  
  },
	{
  sequelize,
  modelName: 'spcl_motor',
   freezeTableName: true,
  timestamps:false
});



  module.exports = { Electric, Telemetry, GPS, Sensors, Alerting,Motor };