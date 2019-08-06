# Main zshrc file.

# Source local dotfiles
HOSTNAME=$(hostname)
source "$HOME/.$HOSTNAME"

# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

# Source powershell config script
if [[ -r /usr/lib/python3.4/site-packages/powerline/bindings/zsh/powerline.zsh ]]; then
    source /usr/lib/python3.4/site-packages/powerline/bindings/zsh/powerline.zsh
fi

# Source fzf
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# Source dynamic-colors
source $HOME/.dynamic-colors/completions/dynamic-colors.zsh

# prompt paradox (powerline theme)
prompt minimal
export VISUAL=vim
export EDITOR="$vim"

# export personal scripts (lock, ptpbw, etc)
export PATH=$PATH:$HOME/.scripts

# export npm globals
export PATH=$PATH:$HOME/.npm/bin

# export dynamic colors, color scripts, etc
export PATH=$PATH:$HOME/.dynamic-colors/bin
export PATH=$PATH:$HOME/.color-scripts/color-scripts
export PATH=$PATH:.

# colored less output
export LESS=-R
export LESS_TERMCAP_me=$(printf '\e[0m')
export LESS_TERMCAP_se=$(printf '\e[0m')
export LESS_TERMCAP_ue=$(printf '\e[0m')
export LESS_TERMCAP_mb=$(printf '\e[1;32m')
export LESS_TERMCAP_md=$(printf '\e[1;34m')
export LESS_TERMCAP_us=$(printf '\e[1;32m')
export LESS_TERMCAP_so=$(printf '\e[1;44;1m')

# History file and size
HISTFILE=~/.zhistory
SAVEHIST=5000
HISTSIZE=5000

# Append history
setopt APPEND_HISTORY

# Write after each command
setopt INC_APPEND_HISTORY

# Share history between shells
setopt SHARE_HISTORY

# Ignore dupes and reduce blanks
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_REDUCE_BLANKS

# vim command line interface
bindkey -v
bindkey -M viins 'jj' vi-cmd-mode
bindkey '^R' history-incremental-search-backward

# aliases
alias vi='vim' # v(im)

alias syupdate='sudo pacman -Syu' # system upgrade
alias pacro='sudo pacman -Rns $(pacman -Qtdq)' # remove orphaned packages
alias pacopt='sudo pacman -Sc && sync' # delete cache and optimize pacman !make sure packages are stable first!
alias epitaph='journalctl -p 0..3 -xn' # shows critical system messages via journalctl
alias startx='startx -- -keeptty -nolisten tcp >| $HOME/.xorg.log 2>&1'

alias ez='vim ~/.zshrc' # change this file
alias rz='source ~/.zshrc' # shell reload after configuration changes
alias ex='vim ~/.Xresources' # edit x stuff
alias rx='xrdb -merge ~/.Xresources' # reload x stuff
alias ea='vim ~/.config/awesome/rc.lua' # edit awesome
alias et='vim ~/.config/awesome/themes/personal/theme.lua' # edit awesome theme
alias ev='vim ~/.vimrc' # edit vim

alias google-chrome='google-chrome-stable'
alias chrome='google-chrome'

# print out the arch sysinfo for fun
alias alsi='alsi -a'
alias neofetch='neofetch --size 214px --gtk2 off --gtk3 off --block_range 0 16 --colors 4 7 4 4 4 7 --ascii_colors 4 4 4 4 4 4'
alias seungyeon='neofetch --w3m /home/zhang/Dropbox/Linux/neofetch.png --size 214px'
neofetch
