/**
 * Created by wpmac on 16/4/4.
 */
var fs=require('fs')
var path=process.argv[2]
fs.readFile(path,function(error,contents){
    var length=contents.toString().split('\n').length-1
    console.log(length)
})
