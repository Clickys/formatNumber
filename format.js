
(function() {

    function format(list) {
        let currency = '$';
        let maxLength = 0;
            

        formated = list.map(function(listItem) {
            if(Array.isArray(listItem)) {
                format(listItem);
            } else {
                listItem = currency + listItem;
                if (listItem.length > maxLength) maxLength = listItem.length;
                return listItem;
            }
        })    
        


        let formatArray = formated.map(function(val) {
            
            let cleanValue = val.replace(/[^\d]/g, '');

            if (typeof val === 'string' && val.length < maxLength) {
                return val.replace(new RegExp('('+cleanValue+')', 'gi'),  new Array(maxLength - val.length + 1).join(' ') + '$1');
            } else {
                val = '$' + cleanValue;
            }
            return val;
        }).sort();
    
   
        return formatArray;
        
        
    }

    window.format = format;
    
})()



