
(function() {

    function printIt(array) {
        array.forEach(function(item) {
            document.querySelector('.format-container').insertAdjacentHTML('afterbegin', item + '<br>');
        })
    }

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
    
        printIt(formated.map(function(val) {
            if (typeof val === 'string' && val.length < maxLength) {
                let cleanValue = val.replace('$', '');
                return val.replace(new RegExp('('+cleanValue+')', 'gi'),  new Array(maxLength - val.length + 1).join(' ') + '$1');
            }
            return val;
        }).sort());
        
    }

    window.format = format;
    
})()



