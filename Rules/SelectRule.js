const ReadFile = require('../ReadFile');
const fs = require('fs');

TableRules = function (name) {



      var CommRulesPath = "Rules/Comm_Rules";
      var typeRulesPath = "Rules/Type_Rules";
      var adminRulesPath = "Rules/Admin_Rules";
      switch (name) {




            case "comm_":

                  return ReadFile.ReadJsonFile(CommRulesPath + "/" + name + ".json");



            case "type_duct":
                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");




            case "type_vane":

                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");



            case "type_evac":

                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");



            case "type_tank":
                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");


            case "type_drill":
                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");

            case "type_elec_equip":
                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");

            case "type_metal_body":
                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");

            case "type_wmeter":
            case "type_analog_wmeter":
                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");

            case "type_evane":
                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");

            case "personnel":
            case "working_team":
                  return ReadFile.ReadJsonFile(adminRulesPath + "/" + name + ".json");

            case "Tasks":
                  return ReadFile.ReadJsonFile(adminRulesPath + "/" + name + ".json");

            case "collecteur":
                  return ReadFile.ReadJsonFile(typeRulesPath + "/" + name + ".json");

      };



}



module.exports = {
      TableRules
};
