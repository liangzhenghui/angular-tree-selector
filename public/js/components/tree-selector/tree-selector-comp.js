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

        scope.addSingle = function(node, active) {
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

        scope.expandTree = function() {
          scope.collapsedAtInit = false;
        }

        scope.collapseTree = function () {
          scope.collapsedAtInit = true;
        }

        scope.removeNodeFromActiveNodes = function(node) {
          var index = scope.allActiveNodes.indexOf(node);
          scope.allActiveNodes.splice(index,1);
          node.hasBeenAdded = false;
        }

        /**
        * Return all childNodes of a given node (as Array of Nodes)
        */
        function getAllChildNodesFromNode(node, childNodes) {
          var childNodes = childNodes || [];

          if(!node.children) {
            return null;
          }

          for(var i = 0; i < node.children.length; i++) {
            childNodes.push(node.children[i]);
            // add the childNodes from the childNode if available
            node.children[i].children && getAllChildNodesFromNode(node.children[i],childNodes);
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

    }
    
  };
});