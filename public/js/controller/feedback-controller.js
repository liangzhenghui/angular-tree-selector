var controller = angular.module('controller.feedback', []);

controller.controller('viewCtrl1', function($scope, $http) {
  
  $scope.userStructure = {};
  $scope.unstructuredUsers = {};

  $http.get('api/users').then(function(response){

    $scope.unstructuredUsers = response.data.data;
    updateUserStructure();
  });


  function updateUserStructure() {
    // Node lookup table
    var nodes = {};
    $scope.userStructure = {};
    // Fill lookup table and find root
    $scope.unstructuredUsers.forEach(function(node) {
        nodes[node.id] = node;
        // if there is no managerDTO add the node as "root"
        if(!("managerDTO" in node)) {
            $scope.userStructure = node;
        }
    });

    // Build tree
    for(var id in nodes) {
        var node = nodes[id];
        if("managerDTO" in node) {
            // Add to children of parent
            var parent = nodes[node.managerDTO.id];
            parent.hasAllChildrenAdded = false;
            node.hasBeenAdded = false;
            (parent.children = parent.children || []).push(node);
            delete node.managerDTO;
        }
    }
  }

});