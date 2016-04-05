/**
 * Created by wpmac on 16/4/5.
 */
var filterFn=require('./solution_filter.js')
var dir=process.argv[2]
var filterStr=process.argv[3]

filterFn(dir,filterStr,function(err,list){
    if(err)
        return console.error("there was a error",err)

    list.forEach(function(file){
        console.log(file)
    })

});
