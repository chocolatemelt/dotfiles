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

# Customize to your needs...
# prompt paradox (powerline theme)
prompt paradox
export EDITOR="vim"

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
alias windows='sudo ntfs-3g /dev/sda5 /media/c' # mounts windows (requires ntfs-3g to be installed)
alias unwindows='sudo umount /media/c' # unmounts windows
alias syupdate='sudo pacman -Syu' # system upgrade
alias pacro='pacman -Rns $(pacman -Qtdq)' # remove orphaned packages
alias pacopt='pacman -Sc && pacman-optimize' # delete cache and optimize pacman !make sure packages are stable first!
alias rz='source ~/.zshrc' # shell reload after configuration changes
alias ez='vim ~/.zshrc' # change this file
alias 6it='cd /home/zhang/Documents/Git' # go to git directory

# stackoverflow.com/questions/171563/whats-in-your-zshrc
