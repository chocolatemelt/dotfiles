
// stop loading that shit        
window.stop();

var path   = location.pathname,
    origin = location.origin.replace("giant.", "");

location.replace(origin + path.substr(0, path.lastIndexOf(".")));