var component = angular.module('components.treeSelector', []);

component.directive('treeSelector', function(){
  return {
    restrict: "E",
    scope: {
      users: "=",
      collapsedAtInit: '@'
    },
    templateUrl: "js/components/tree-selector/tree-selector-tpl.html",
    link: function(scope, element, attr) {
        scope.allActiveNodes = [];

        scope.addNode = function(node, active) {
          node.hasBeenAdded = active;
          addOrRemoveToActiveNodes(node, active);
        }

        scope.addAndIncludeChildNodes = function(node, active) {
          node.hasBeenAdded = active;
          addOrRemoveToActiveNodes(node, active);

          // get all childNodes and set the "hasBeenAdded"-flag 
          getAllChildNodesFromNode(node).forEach(function(childNode){
            childNode.hasBeenAdded = active;
            addOrRemoveToActiveNodes(childNode, active);
          });
        }

        scope.toggleChildNodesVisibility = function(clickedElement) {
          var clickedElement = $(clickedElement.target);

          clickedElement.toggleClass("icon-expand-alt");
          clickedElement.toggleClass("icon-collapse-alt");
          clickedElement.siblings("ul").toggle();
        }

        scope.removeNodeFromActiveNodes = function(node) {
          var index = scope.allActiveNodes.indexOf(node);
          scope.allActiveNodes.splice(index,1);
          node.hasBeenAdded = false;
        }

        scope.$watch('filterkeyword', function() {
          if(scope.filterkeyword != undefined) {
              filterTree();
             scope.collapsedAtInit = false;
          }          
        });

        /**
        * Return all childNodes of a given node (as Array of Nodes)
        */
        function getAllChildNodesFromNode(node, childNodes) {
          var childNodes = childNodes || [];

          if(!node.childNodes) {
            return null;
          }

          for(var i = 0; i < node.childNodes.length; i++) {
            childNodes.push(node.childNodes[i]);
            // add the childNodes from the childNode if available
            node.childNodes[i].childNodes && getAllChildNodesFromNode(node.childNodes[i],childNodes);
          }

          return childNodes;
        }

        function addOrRemoveToActiveNodes(node, active) {
            if(!isNodeInActiveNodesList(node) && active) {
              scope.allActiveNodes.push(node);  
            }
            else if(isNodeInActiveNodesList(node) && !active) {
              var index = scope.allActiveNodes.indexOf(node);
              scope.allActiveNodes.splice(index,1);

            }
        }

        function isNodeInActiveNodesList(node) {
          for(var i = 0; i<scope.allActiveNodes.length; i++) {
            if(scope.allActiveNodes[i].id === node.id) {
              return true;
              break;
            }
          }
          return false;
        }

        function filterTree(){
          var allUsersAsList = getAllChildNodesFromNode(scope.users);
          allUsersAsList.push(scope.users); //add the root user to the list 

          allUsersAsList.forEach(function(user){
            if(user.firstName.toLowerCase().indexOf(scope.filterkeyword.toLowerCase() || '') != -1) {
              user.hasBeenFiltered = false
            }
            else {
              user.hasBeenFiltered = true;
            }
          });
        }
    }
    
  };
});