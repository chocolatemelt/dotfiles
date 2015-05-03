Sublime Text 3 Settings
=======================

These are packages and settings for my Sublime Text 3 using Package Control. They're symlinked so any edits made here will update Sublime.

To setup symlink on Windows:

    > cd (your_sublime_root_here)
    > mklink /D .\Packages "C:\Users\(your_user\github\dropbox\whatever)\Packages

Sublime root is probably located in ```%appdata%\Roaming\Sublime Text 3```.

To setup symlink on Linux/OSX:

    $ cd (your_sublime_root_here)
    $ ln -s (github/dropbox/whatever)/Packages ./Packages

You may want to add a folder called Sublime or something for clarification. Sublime root on Linux/OSX differs by flavor; probably somewhere like ```/usr/share/applications/sublime-text.desktop```.
