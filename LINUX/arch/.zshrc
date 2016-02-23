#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#

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

# prompt paradox (powerline theme)
prompt paradox
export EDITOR="vim"

export PATH=$PATH:/usr/local/jdk1.7.0_79/bin
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
alias 6it='cd /home/zhang/Git'
alias rpi='cd /home/zhang/Documents/RPI'

alias windows='sudo ntfs-3g /dev/sda4 /media/c' # mounts window (requires ntfs-3g to be installed)
alias unwindows='sudo umount /media/c' # unmounts windows

alias cgate='sudo ntfs-3g /dev/sdb1 /media/d' # mounts 2tb seagate
alias uncgate='sudo umount /media/d' # unmounts d drive

alias syupdate='sudo pacman -Syu' # system upgrade
alias pacro='sudo pacman -Rns $(pacman -Qtdq)' # remove orphaned packages
alias pacopt='sudo pacman -Sc && sudo pacman-optimize && sync' # delete cache and optimize pacman !make sure packages are stable first!
alias epitaph='journalctl -p 0..3 -xn' # shows critical system messages via journalctl

alias ez='vim ~/.zshrc' # change this file
alias rz='source ~/.zshrc' # shell reload after configuration changes
alias ex='vim ~/.Xresources' # edit x stuff
alias rx='xrdb ~/.Xresources' # reload x stuff
alias ea='vim ~/.config/awesome/rc.lua' # edit awesome
alias ev='vim ~/.vimrc' # edit vim

alias google-chrome='google-chrome-stable'
alias chrome='google-chrome'

# ptpb.pw - paste and copy to clipboard buffer
pb () { curl -sF "c=@${1:--}" -w "%{redirect_url}" 'https://ptpb.pw/?r=1' -o /dev/stderr | xsel -l /dev/null -b }
# ptpb.pw - screenshot and copy to clipboard buffer
pbs () {
	\gm import -window ${1:-root} /tmp/$$.png
	pb /tmp/$$.png
}

# print out the arch sysinfo for fun
alias alsi='alsi -a'
alsi

# stackoverflow.com/questions/171563/whats-in-your-zshrc
