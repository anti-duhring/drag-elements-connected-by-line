jQuery(document).ready(function() {
    
    jQuery('.drag').draggable({
        scroll: false,
        disabled: false,
        cursor: 'move',
        // Containt the drag movement at the pairent div 'dragcontainer'
        containment: 'parent',
        drag: function(){

            // Call the function to change the line position, pairams: element ID, element pair, matching line and the order
            changeLinePosition(jQuery(this).attr('id'), jQuery(this).attr('pair'), jQuery(this).attr('line'));
        
        }
    });
    var changeLinePosition = function(id, pair, line){
        const element = document.querySelector('#'+id);

        // The distance serve for centralizing the line on the element
        const distancex1 = Number(element.getAttribute('distance').split('_')[0].split('-')[0]);
        const distancey1 = Number(element.getAttribute('distance').split('_')[0].split('-')[1]);
        const distancex2 = Number(element.getAttribute('distance').split('_')[1].split('-')[0]);
        const distancey2 = Number(element.getAttribute('distance').split('_')[1].split('-')[1]);
        var positionx1, positiony1, positionx2, positiony2;

            // We have to add up the distance on the position of the element
             positionx1 = jQuery('#'+id).position().left + distancex1
             positiony1 = jQuery('#'+id).position().top + distancey1
             positionx2 = jQuery('#'+pair).position().left + distancex2
             positiony2 = jQuery('#'+pair).position().top + distancey2


        document.querySelector('#'+line).setAttribute('x1', positionx1);
        document.querySelector('#'+line).setAttribute('y1', positiony1);
        document.querySelector('#'+line).setAttribute('x2', positionx2);
        document.querySelector('#'+line).setAttribute('y2', positiony2);
    }
})