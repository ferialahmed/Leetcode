/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let diffAddresses = new Set();
   
    for (let i = 0; i<emails.length; i++){
       let [local, domain] = emails[i].split('@');
        if(local.indexOf('+') !== -1){
            local = local.substring(0,local.indexOf('+'))
        }
        if(local.indexOf('.') !== -1){
            local = local.replace(/\./g, '');
        }
        diffAddresses.add(local + '@' + domain);
    }
    return diffAddresses.size;
};

  
