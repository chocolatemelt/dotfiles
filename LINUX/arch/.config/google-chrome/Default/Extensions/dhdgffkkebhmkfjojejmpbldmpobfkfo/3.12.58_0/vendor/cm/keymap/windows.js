(function(){CodeMirror.keyMap.windows={"Ctrl-Q":"close",F3:"findNext",F4:"findPrev","Ctrl-R":"replace","Ctrl-J":"jump","Ctrl-Shift-K":"deleteLine","Ctrl-Shift-D":function(a){var b=a.getCursor().line;a.replaceRange(a.getLine(b)+"\n",{line:b,ch:0})},Esc:function(a,b){var c=a.execCommand("clearSearch");if(!0===c)return c;a.execCommand("close")},fallthrough:["default"]}})();
